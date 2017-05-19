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

import ResistorCalculator from 'components/ResistorCalculator';
import App from '../App';

describe('App', function () {

  it('should render with default state', function () {

    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it('should update resistor state', function () {

    const component = shallow(<App />);
    const resistorCalc = component.find(ResistorCalculator);

    // initial state (4 bands)
    expect(component).toMatchSnapshot();


    resistorCalc.props().onChange('bands', '3');
    // updated to 3 bands
    expect(component).toMatchSnapshot();

    resistorCalc.props().onChange('bands', '5');
    resistorCalc.props().onChange('digit1', '3');
    resistorCalc.props().onChange('digit2', '5');
    resistorCalc.props().onChange('multiplier', '2');
    // updated to 5 bands with different values and multiplier
    expect(component).toMatchSnapshot();

    resistorCalc.props().onChange('bands', '6');
    resistorCalc.props().onChange('digit3', '7');
    resistorCalc.props().onChange('tolerance', '0.5');
    resistorCalc.props().onChange('tempCoef', '100');
    // updated to 6 bands
    expect(component).toMatchSnapshot();
  });
});
