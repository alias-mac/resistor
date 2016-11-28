
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
