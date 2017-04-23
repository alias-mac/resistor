/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Resistor from '../../Resistor';
import ResistorForm from '../ResistorForm';

function find(arr, func) {
  let found = arr.find(func);

  if (!found) {
    for (const c of arr) { // eslint-disable-line no-restricted-syntax
      found = find(c.children, func);
      if (found) {
        return found;
      }
    }
  }

  return found;
}

describe('ResistorForm', function () {

  it('should render a 3-band resistor', function () {

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = renderer.create(<ResistorForm model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render a 4-band resistor', function () {

    const resistor = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
      tolerance: 5,
    });

    const component = renderer.create(<ResistorForm model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();
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
    const component = renderer.create(<ResistorForm model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();
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
    const component = renderer.create(<ResistorForm model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call callback onChange', function () {

    const onChange = jest.fn();

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = renderer.create(<ResistorForm model={resistor} onChange={onChange} />);

    const bands = find(component.toJSON().children, c => c.props && c.props.name === 'bands');
    bands.props.onChange({ target: { name: 'bands', value: '5' } });

    expect(onChange).toHaveBeenCalledWith('bands', '5');
  });

  it('should not break if callback onChange is not defined', function () {

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const component = renderer.create(<ResistorForm model={resistor} />);

    const bands = find(component.toJSON().children, c => c.props && c.props.name === 'bands');
    bands.props.onChange({ target: { name: 'bands', value: '5' } });
  });
});
