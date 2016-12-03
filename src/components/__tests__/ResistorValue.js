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

    let resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    const tree = renderer.create(
      <ResistorValue model={resistor} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    const longTree = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />
    ).toJSON();

    expect(longTree).toMatchSnapshot();
  });

  it('should render a 4-band resistor', function () {

    let resistor = new Resistor({
      bands: 4,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
      tolerance: 5,
    });

    const tree = renderer.create(
      <ResistorValue model={resistor} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    const longTree = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />
    ).toJSON();

    expect(longTree).toMatchSnapshot();
  });

  it('should render a 5-band resistor', function () {

    let resistor = new Resistor({
      bands: 5,
      digit1: 1,
      digit2: 0,
      digit3: 0,
      multiplier: 0,
      tolerance: 10,
    });

    const tree = renderer.create(
      <ResistorValue model={resistor} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    const longTree = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />
    ).toJSON();

    expect(longTree).toMatchSnapshot();
  });

  it('should render a 6-band resistor', function () {

    let resistor = new Resistor({
      bands: 6,
      digit1: 1,
      digit2: 0,
      digit3: 0,
      multiplier: 0,
      tolerance: 5,
      tempCoef: 15,
    });

    const tree = renderer.create(
      <ResistorValue model={resistor} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    const longTree = renderer.create(
      <ResistorValue model={resistor} formatOptions={{ short: false }} />
    ).toJSON();

    expect(longTree).toMatchSnapshot();
  });

});
