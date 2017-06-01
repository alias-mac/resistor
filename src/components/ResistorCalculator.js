/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import PropTypes from 'prop-types';
import React from 'react';

import Resistor from 'models/Resistor';
import ResistorForm from './ResistorForm';
import ResistorValue from './ResistorValue';
import ResistorSvg from './ResistorSvg';

if (process.env.WEBPACK) {
  require('../styles/resistor-calc.scss'); // eslint-disable-line global-require
}

function ResistorCalculator({ model, onChange }) {
  return (
    <div className="resistor-calc">
      <h2>Resistor Calculator</h2>
      <h4>Calculates values from color codes</h4>
      <ResistorForm model={model} onChange={onChange} />
      <ResistorValue
        className="resistor-value"
        formatOptions={{ short: true }}
        model={model}
      />
      <ResistorSvg model={model} />
    </div>
  );
}

ResistorCalculator.propTypes = {
  model: PropTypes.instanceOf(Resistor).isRequired,
  onChange: PropTypes.func,
};

ResistorCalculator.defaultProps = {
  onChange: () => { },
};

export default ResistorCalculator;
