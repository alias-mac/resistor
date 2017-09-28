/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Resistor from 'models/Resistor';
import ResistorForm from '../ResistorForm';

configure({ adapter: new Adapter() });

describe('ResistorForm', function () {

  it('should render a 3-band resistor', function () {

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = shallow(<ResistorForm model={resistor} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a 4-band resistor', function () {

    const resistor = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
      tolerance: 5,
    });

    const component = shallow(<ResistorForm model={resistor} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a 5-band resistor', function () {

    const resistor = new Resistor({
      bands: 5,
      digit1: 1,
      digit2: 0,
      digit3: 0,
      multiplier: 0,
      tolerance: 10,
    });
    const component = shallow(<ResistorForm model={resistor} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a 6-band resistor', function () {

    const resistor = new Resistor({
      bands: 6,
      digit1: 1,
      digit2: 0,
      digit3: 0,
      multiplier: 0,
      tolerance: 5,
      tempCoef: 15,
    });
    const component = shallow(<ResistorForm model={resistor} />);

    expect(component).toMatchSnapshot();
  });

  it('should call callback onChange', function () {

    const onChange = jest.fn();

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = shallow(<ResistorForm model={resistor} onChange={onChange} />);

    component.find('select[name="bands"]').simulate('change', { target: { name: 'bands', value: '5' } });

    expect(onChange).toHaveBeenCalledWith('bands', '5');
  });

  it('should not break if callback onChange is not defined', function () {

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = shallow(<ResistorForm model={resistor} />);
    component.find('select[name="bands"]').simulate('change', { target: { name: 'bands', value: '5' } });
  });

  it('should render full form', function () {
    const resistor = new Resistor({
      bands: 6,
      digit1: 1,
      digit2: 0,
      digit3: 0,
      multiplier: 0,
      tolerance: 5,
      tempCoef: 15,
    });
    const component = render(<ResistorForm model={resistor} />);

    expect(component).toMatchSnapshot();
  });
});
