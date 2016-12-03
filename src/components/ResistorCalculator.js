/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

import Resistor from '../Resistor';
import ResistorForm from './ResistorForm';
import ResistorValue from './ResistorValue';
import ResistorSvg from './ResistorSvg';

import '../styles/resistor-calc.scss';

class ResistorCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resistor: new Resistor({
        bands: 4,
        digit1: 1,
        digit2: 0,
        multiplier: 0,
      }),
    };
  }

  handleChange(prop, value) {
    let resistor = this.state.resistor;
    resistor.set(prop, value);
    this.setState({ resistor });
  }

  render() {
    return (
      <div className="resistor-calc">
        <h2>Resistor Calculator</h2>
        <h4>Calculates values from color codes</h4>
        <ResistorForm model={this.state.resistor} onChange={this.handleChange.bind(this)} />
        <ResistorValue className="resistor-value" model={this.state.resistor} formatOptions={{ short: true }} />
        <ResistorSvg model={this.state.resistor} />
      </div>
    );
  }
}

export default ResistorCalculator;
