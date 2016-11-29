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
  it('should render correctly', function () {
    const tree = renderer.create(
      <ResistorCalculator />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
