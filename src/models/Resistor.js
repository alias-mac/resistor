/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import _find from 'lodash/find';

const significantDigits = [
  { value: 0, color: 'black' },
  { value: 1, color: 'brown' },
  { value: 2, color: 'red' },
  { value: 3, color: 'orange' },
  { value: 4, color: 'yellow' },
  { value: 5, color: 'green' },
  { value: 6, color: 'blue' },
  { value: 7, color: 'violet' },
  { value: 8, color: 'gray' },
  { value: 9, color: 'white' },
];

const multipliers = [
  { value: 0, color: 'black' },
  { value: 1, color: 'brown' },
  { value: 2, color: 'red' },
  { value: 3, color: 'orange' },
  { value: 4, color: 'yellow' },
  { value: 5, color: 'green' },
  { value: 6, color: 'blue' },
  { value: 7, color: 'violet' },
  { value: 8, color: 'gray' },
  { value: 9, color: 'white' },
  { value: -1, color: 'gold' },
  { value: -2, color: 'silver' },
];

const tolerances = [
  { value: 1, color: 'brown' },
  { value: 2, color: 'red' },
  { value: 0.5, color: 'green' },
  { value: 0.25, color: 'blue' },
  { value: 0.1, color: 'violet' },
  { value: 5, color: 'gold' },
  { value: 10, color: 'silver' },
  // {value: 20, color: 'none'},
];

const tempCoefs = [
  { value: 250, color: 'black' },
  { value: 100, color: 'brown' },
  { value: 50, color: 'red' },
  { value: 15, color: 'orange' },
  { value: 25, color: 'yellow' },
  { value: 20, color: 'green' },
  { value: 10, color: 'blue' },
  { value: 5, color: 'violet' },
  { value: 1, color: 'gray' },
];

function sanitize(resistor) {
  const attrs = resistor.attributes;

  [
    'bands',
    'digit1',
    'digit2',
    'digit3',
    'multiplier',
  ].forEach((key) => {
    attrs[key] = parseInt(attrs[key], 10) || 0;
  });

  attrs.tolerance = parseFloat(attrs.tolerance) || 10;
  attrs.tempCoef = parseInt(attrs.tempCoef, 10) || 250;
}

class Resistor {

  constructor(attributes) {
    this.attributes = {};
    this.set(attributes);
  }

  get(key) {
    return key ? this.attributes[key] : this.attributes;
  }

  set(key, value) {
    let attrs;
    if (typeof key === 'object') {
      attrs = key;
    } else {
      (attrs = {})[key] = value;
    }

    Object.keys(attrs).forEach((attr) => {
      this.attributes[attr] = attrs[attr];
    });

    sanitize(this);

    return this;
  }

  toOhms() {

    let [d1, d2, d3, m] = [ // eslint-disable-line prefer-const
      this.get('digit1'),
      this.get('digit2'),
      this.get('digit3'),
      this.get('multiplier'),
    ].map(int => parseInt(int, 10) || 0);

    switch (this.get('bands')) { // eslint-disable-line default-case
      case 3:
      case 4:
        d1 *= 10;
        break;
      case 5:
      case 6:
        d1 *= 100;
        d2 *= 10;
        break;
    }

    const ohmage = d1 + d2 + d3;

    return ohmage * (10 ** m); // Ω * 10^m
  }

  toString(options = {}) {

    const short = options.short !== undefined ? options.short : true;

    let result = this.toOhms();

    const unit = short ? 'Ω' : (result === 1 ? 'ohm' : 'ohms'); // eslint-disable-line no-nested-ternary

    let pow = '';
    if (result >= 1e9) {
      result /= 1e9;
      pow = short ? 'G' : 'giga';
    } else if (result >= 1e6) {
      result /= 1e6;
      pow = short ? 'M' : 'mega';
    } else if (result >= 1e3) {
      result /= 1e3;
      pow = short ? 'K' : 'kilo';
    }

    let tolerance = this.get('tolerance');
    if (this.get('bands') === 3) {
      tolerance = 20;
    }

    let string = `${result} ${pow}${unit} ± ${tolerance}%`;
    if (this.get('bands') === 6) {
      string += ` ${this.get('tempCoef')} ppm/K`;
    }
    return string;
  }

  static get significantDigits() {
    return significantDigits;
  }

  static get multipliers() {
    return multipliers;
  }

  static get tolerances() {
    return tolerances;
  }

  static get tempCoefs() {
    return tempCoefs;
  }

  static significantDigit(props) {
    return _find(significantDigits, props);
  }

  static multiplier(props) {
    return _find(multipliers, props);
  }

  static tolerance(props) {
    return _find(tolerances, props);
  }

  static tempCoef(props) {
    return _find(tempCoefs, props);
  }
}

export default Resistor;
