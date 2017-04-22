/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Resistor from '../Resistor';

class ResistorValue extends React.Component {

  render() {

    let { formatOptions, model, ...other } = this.props;

    return (
      <p {...other}>Resistance: {model.toString(formatOptions)}</p>
    );
  }
}

ResistorValue.propTypes = {
  model: React.PropTypes.instanceOf(Resistor).isRequired,
  formatOptions: React.PropTypes.object,
  other: React.PropTypes.object,
};

export default ResistorValue;
