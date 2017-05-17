/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Resistor from '../Resistor';

function ResistorValue(props) {

  const { formatOptions, model, ...other } = props;

  return (
    <p {...other}>Resistance: {model.toString(formatOptions)}</p>
  );

}

ResistorValue.propTypes = {
  model: PropTypes.instanceOf(Resistor).isRequired,
  formatOptions: PropTypes.shape({
    short: PropTypes.bool,
  }),
};

ResistorValue.defaultProps = {
  formatOptions: {},
};

export default ResistorValue;
