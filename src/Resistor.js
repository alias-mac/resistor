
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

class Resistor {

  constructor(attributes) {
    this.attributes = {};
    this.set(attributes);
  }

  get() {
    return this.attributes;
  }

  set(key, value) {
    let attrs;
    if (typeof key === 'object') {
      attrs = key;
    } else {
      (attrs = {})[key] = value;
    }

    for (let attr in attrs) {
      value = attrs[attr];
      this.attributes[attr] = value;
    }

    return this;
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
}

export default Resistor;
