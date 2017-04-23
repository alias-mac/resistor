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

function BandSelector(props) {

  const { options, label, value, ...other } = props;

  // color is the mapping value or the first one of the list of options
  const color = value ? _find(options, { value }).className : options[0].className;

  return (
    <div className="form-group">
      <label>{label}
        <select {...other} value={value} className={`form-control ${color}`}>
          {options.map(option => (
            <option key={option.value} {...option}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

BandSelector.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    value: React.PropTypes.number,
  })).isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
};

function dropDownMapper(def) {
  return {
    value: def.value,
    className: def.color,
    label: def.color,
  };
}

class ResistorForm extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const selector = event.target;
    this.props.onChange(selector.name, selector.value);
  }

  render() {
    const { model, onChange, ...other } = this.props;

    const digitOptions = Resistor.significantDigits.map(dropDownMapper);
    const multiplierOptions = Resistor.multipliers.map(dropDownMapper);
    const toleranceOptions = Resistor.tolerances.map(dropDownMapper);
    const tempCoefsOptions = Resistor.tempCoefs.map(dropDownMapper);

    // normally the first digit isn't 0 (aka black) only if we have 0 ohms...
    const [, ...firstDigitOptions] = digitOptions;

    const bands = [];

    // only 5 and 6 has 3rd digit
    if (_includes([5, 6], model.get('bands'))) {
      bands.push(
        <BandSelector
          key="digit3" name="digit3" label="3rd Digit"
          value={model.get('digit3')}
          options={digitOptions}
          onChange={this.onChange}
        />,
      );
    }

    // all have at least 2 first digits
    bands.unshift(
      <BandSelector
        key="digit1" name="digit1" label="1st Digit"
        value={model.get('digit1')}
        options={firstDigitOptions}
        onChange={this.onChange}
      />,
      <BandSelector
        key="digit2" name="digit2" label="2nd Digit"
        value={model.get('digit2')}
        options={digitOptions}
        onChange={this.onChange}
      />,
    );

    // all have multiplier
    bands.push(
      <BandSelector
        key="multiplier" name="multiplier" label="Multiplier"
        value={model.get('multiplier')}
        options={multiplierOptions}
        onChange={this.onChange}
      />,
    );

    if (model.get('bands') !== 3) {
      bands.push(
        <BandSelector
          key="tolerance" name="tolerance" label="Tolerance"
          value={model.get('tolerance')}
          options={toleranceOptions}
          onChange={this.onChange}
        />,
      );
    }
    if (model.get('bands') === 6) {
      bands.push(
        <BandSelector
          key="tempCoef" name="tempCoef" label="Temp. Coef."
          value={model.get('tempCoef')}
          options={tempCoefsOptions}
          onChange={this.onChange}
        />,
      );
    }

    return (
      <form className="resistor-form" {...other}>
        <div className="row">
          <div className="form-group col-sm-6 offset-sm-3 col-md-2 offset-md-5">
            <label>Strips
              <select
                name="bands" className="form-control"
                value={model.get('bands')}
                onChange={this.onChange}
              >
                {[3, 4, 5, 6].map(i => (
                  <option key={i} value={i}>{i}-strip</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="row">
          {bands.map((b, i) => {
            const offset = i ? '' : ` offset-sm-${6 - model.get('bands')}`;
            return (<div key={b.key} className={`col-xs-6 col-sm-2${offset}`}>{b}</div>);
          })}
        </div>
      </form>
    );
  }
}

ResistorForm.propTypes = {
  model: React.PropTypes.instanceOf(Resistor).isRequired,
  onChange: React.PropTypes.func,
};

ResistorForm.defaultProps = {
  onChange: () => { },
};

export default ResistorForm;
