/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable react/prop-types */

import React from 'react';
import { shallow } from 'enzyme';

import ResistorCalculator from '../ResistorCalculator';
import ResistorForm from '../ResistorForm';
import Resistor from '../../Resistor';

describe('ResistorCalculator', function () {

  it('should render', function () {
    const model = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = shallow(<ResistorCalculator model={model} />);

    expect(component).toMatchSnapshot();
  });

  it('should call parent update on child form update', function () {

    const onChange = jest.fn();

    const model = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = shallow(<ResistorCalculator model={model} onChange={onChange} />);

    component.find(ResistorForm).props().onChange('bands', '5');

    expect(onChange).toHaveBeenCalledWith('bands', '5');
  });
});
