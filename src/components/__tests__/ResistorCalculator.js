/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import ResistorCalculator from '../ResistorCalculator';
import renderer from 'react-test-renderer';

describe('ResistorCalculator', function () {

  it('should render with default state', function () {
    const component = renderer.create(
      <ResistorCalculator />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should update to 3-band resistor', function () {
    const component = renderer.create(
      <ResistorCalculator />
    );

    let form = component.toJSON().children.find((c) => c.type === 'form');
    form.props.onChange('bands', '3');

    expect(component.toJSON()).toMatchSnapshot();
  });
});
