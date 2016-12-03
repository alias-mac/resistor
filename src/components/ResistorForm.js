/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import _includes from 'lodash/includes';
import _find from 'lodash/find';

import React from 'react';
import Resistor from '../Resistor';

import '../styles/resistor-form.scss';

class BandSelector extends React.Component {

  render() {

    let { options, label, value, ...other } = this.props;

    // color is the mapping value or the first one of the list of options
    let color = value ? _find(options, { value }).className : options[0].className;

    return (
      <div className="form-group">
        <label>{label}</label>
        <select {...other} value={value} className={`form-control ${color}`}>
          {options.map((option, i) => (
            <option key={option.value} {...option}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }

}

function dropDownMapper(def) {
  return {
    value: def.value,
    className: def.color,
    label: def.color,
  };
}

class ResistorForm extends React.Component {

  _handleChange(event) {
    let selector = event.target;
    this.props.onChange(selector.name, selector.value);
  }

  render() {
    let { model, ...other } = this.props;

    let digitOptions = Resistor.significantDigits.map(dropDownMapper);
    let multiplierOptions = Resistor.multipliers.map(dropDownMapper);
    let toleranceOptions = Resistor.tolerances.map(dropDownMapper);
    let tempCoefsOptions = Resistor.tempCoefs.map(dropDownMapper);

    // normally the first digit isn't 0 (aka black) only if we have 0 ohms...
    let [, ...firstDigitOptions] = digitOptions;

    let bands = [];

    // only 5 and 6 has 3rd digit
    if (_includes([5, 6], model.get('bands'))) {
      bands.push(
        <BandSelector key="digit3" name="digit3" label="3rd Digit"
          value={model.get('digit3')}
          options={digitOptions}
          onChange={this._handleChange.bind(this)}
        />
      );
    }

    // all have at least 2 first digits
    bands.unshift(
      <BandSelector key="digit1" name="digit1" label="1st Digit"
        value={model.get('digit1')}
        options={firstDigitOptions}
        onChange={this._handleChange.bind(this)}
      />,
      <BandSelector key="digit2" name="digit2" label="2nd Digit"
        value={model.get('digit2')}
        options={digitOptions}
        onChange={this._handleChange.bind(this)}
      />
    );

    // all have multiplier
    bands.push(
      <BandSelector key="multiplier" name="multiplier" label="Multiplier"
        value={model.get('multiplier')}
        options={multiplierOptions}
        onChange={this._handleChange.bind(this)}
      />,
    );

    if (model.get('bands') !== 3) {
      bands.push(
        <BandSelector key="tolerance" name="tolerance" label="Tolerance"
          value={model.get('tolerance')}
          options={toleranceOptions}
          onChange={this._handleChange.bind(this)}
        />
      );
    }
    if (model.get('bands') === 6) {
      bands.push(
        <BandSelector key="tempCoef" name="tempCoef" label="Temp. Coef."
          value={model.get('tempCoef')}
          options={tempCoefsOptions}
          onChange={this._handleChange.bind(this)}
        />
      );
    }

    return (
      <form className="resistor-form" {...other}>
        <div className="row">
          <div className="form-group col-sm-6 offset-sm-3 col-md-2 offset-md-5">
            <label>Strips</label>
            <select name="bands" className="form-control"
              value={model.get('bands')}
              onChange={this._handleChange.bind(this)}>
              {[3, 4, 5, 6].map((i) => (
                <option key={i} value={i}>{i}-strip</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          {bands.map((b, i) => {
            let offset = i ? '' : ` offset-sm-${6 - model.get('bands')}`;
            return (<div key={i} className={`col-xs-6 col-sm-2${offset}`}>{b}</div>);
          })}
        </div>
      </form>
    );
  }
}

export default ResistorForm;