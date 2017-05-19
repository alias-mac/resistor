/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Resistor from '../Resistor';
import ResistorCalculator from '../components/ResistorCalculator';

class App extends React.Component {

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

    this.onChange = this.onChange.bind(this);
  }

  onChange(prop, value) {
    const resistor = this.state.resistor;
    resistor.set(prop, value);
    this.setState({ resistor });
  }

  render() {
    return (
      <div>
        <ResistorCalculator model={this.state.resistor} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
