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
import ResistorValue from '../ResistorValue';

describe('ResistorValue', function () {

  it('should render a 3-band resistor', function () {

    const resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    let component = renderer.create(<ResistorValue model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />);

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

    let component = renderer.create(<ResistorValue model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />);

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

    let component = renderer.create(<ResistorValue model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />);

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

    let component = renderer.create(<ResistorValue model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should use the className supplied', function () {

    const resistor = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
      tolerance: 5,
    });

    const component = renderer.create(
      <ResistorValue className="my-resistor-class" model={resistor} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
