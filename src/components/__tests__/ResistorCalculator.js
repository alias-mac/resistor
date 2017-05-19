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

describe('ResistorCalculator', function () {

  it('should render with default state', function () {

    const component = shallow(<ResistorCalculator />);

    expect(component).toMatchSnapshot();
  });

  it('should update to 3-band resistor', function () {

    const component = shallow(<ResistorCalculator />);

    expect(component).toMatchSnapshot();

    component.find(ResistorForm).props().onChange('bands', '3');

    expect(component).toMatchSnapshot();
  });
});
