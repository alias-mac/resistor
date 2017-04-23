/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Resistor from '../Resistor';

function ResistorValue(props) {

  const { formatOptions, model, ...other } = props;

  return (
    <p {...other}>Resistance: {model.toString(formatOptions)}</p>
  );

}

ResistorValue.propTypes = {
  model: React.PropTypes.instanceOf(Resistor).isRequired,
  formatOptions: React.PropTypes.shape({
    short: React.PropTypes.bool,
  }),
};

ResistorValue.defaultProps = {
  formatOptions: {},
};

export default ResistorValue;
