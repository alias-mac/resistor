/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import Resistor from '../Resistor';

function ResistorSvg(props) {

  const { model, ...other } = props;

  return (
    <svg {...other} width="100%" viewBox="0 0 400 100" preserveAspectRatio="xMinYMin meet">
      <defs>
        <rect id="edge" rx="10" ry="10" width="80" height="100" fill="#d6d6d6" />
        <rect id="stripe-wide" width="20" height="100%" />
        <rect id="stripe" y="10" width="20" height={100 - 20} />
      </defs>

      <rect x="0" y={50 - 12} width="100%" height="24" fill="#e8e8e8" />

      <rect x="60" y="10" width={400 - 120} height={100 - 20} fill="#d6d6d6" />

      <use xlinkHref="#edge" x="40" y="0" />
      <use xlinkHref="#edge" x={400 - 120} y="0" />

      <use
        id="stripe-1" xlinkHref="#stripe-wide" x="90"
        fill={Resistor.significantDigit({ value: model.get('digit1') }).color}
      />
      <use
        id="stripe-2" xlinkHref="#stripe" x="130"
        fill={Resistor.significantDigit({ value: model.get('digit2') }).color}
      />
      {(model.get('bands') === 5 || model.get('bands') === 6) &&
        <use
          id="stripe-3" xlinkHref="#stripe" x="160"
          fill={Resistor.significantDigit({ value: model.get('digit3') }).color}
        />
      }

      <use
        id="multiplier" xlinkHref="#stripe" x="190"
        fill={Resistor.multiplier({ value: model.get('multiplier') }).color}
      />

      {model.get('bands') !== 6 && model.get('bands') !== 3 &&
        <use
          id="tolerance" xlinkHref="#stripe-wide" x="290"
          fill={Resistor.tolerance({ value: model.get('tolerance') }).color}
        />
      }
      {model.get('bands') === 6 &&
        <use
          id="tolerance" xlinkHref="#stripe" x="250"
          fill={Resistor.tolerance({ value: model.get('tolerance') }).color}
        />
      }
      {model.get('bands') === 6 &&
        <use
          id="temperature" xlinkHref="#stripe-wide" x="290"
          fill={Resistor.tempCoef({ value: model.get('tempCoef') }).color}
        />
      }
    </svg>
  );
}

ResistorSvg.propTypes = {
  model: React.PropTypes.instanceOf(Resistor).isRequired,
};

export default ResistorSvg;
