/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Resistor from '../Resistor';

describe('Resistor', function () {

  it('should return list of significant digits', function () {
    expect(Resistor.significantDigits).toMatchSnapshot();
  });

  it('should return list of multipliers', function () {
    expect(Resistor.multipliers).toMatchSnapshot();
  });

  it('should return list of tolerances', function () {
    expect(Resistor.tolerances).toMatchSnapshot();
  });

  it('should return list of temperature coefficients', function () {
    expect(Resistor.tempCoefs).toMatchSnapshot();
  });

  it('should allow edit and reuse of the same instance', function () {

    let resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    expect(resistor.get()).toMatchSnapshot();

    resistor.set('digit2', 3);

    expect(resistor.get()).toMatchSnapshot();
  });

  it('should allow edit and keep old values', function () {

    let resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    expect(resistor.get()).toMatchSnapshot();

    resistor.set({ bands: 6, digit3: 3, tolerance: 5, tempCoef: 25 });

    expect(resistor.get()).toMatchSnapshot();

    resistor.set({ bands: 3 });

    expect(resistor.get()).toMatchSnapshot();

    resistor.set({ bands: 6 });

    expect(resistor.get()).toMatchSnapshot();
  });

  it('should sanitize properties to expected type', function () {

    let resistor = new Resistor({
      bands: "3",
      digit1: "1",
      digit2: "0",
      multiplier: "0",
    });

    expect(resistor.get()).toMatchSnapshot();

    resistor.set({ bands: "5", digit3: "3", tolerance: "5" });

    expect(resistor.get()).toMatchSnapshot();
  });

  it('should set correct default tolerance when updating bands', function () {

    let resistor = new Resistor({
      bands: 3,
      digit1: 1,
      digit2: 0,
      multiplier: 0,
    });

    // tolerance is ignored for 3-stripe resistors
    expect(resistor.get('tolerance')).toBe(10);
    expect(resistor.get('tempCoef')).toBe(250);

    resistor.set('bands', 4);

    expect(resistor.get('tolerance')).toBe(10);
    expect(resistor.get('tempCoef')).toBe(250);

    resistor.set('bands', 6);

    expect(resistor.get('tolerance')).toBe(10);
    expect(resistor.get('tempCoef')).toBe(250);
  });

  describe('3-band resistor', function () {

    it('should create', function () {
      let resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 0,
        multiplier: 0,
      });

      expect(resistor.get()).toMatchSnapshot();
    });

    it('should calculate Ohms', function () {
      let resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 0,
        multiplier: 0,
      });

      expect(resistor.toOhms()).toBe(10);

      resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 2,
        multiplier: 0,
      });

      expect(resistor.toOhms()).toBe(12);

      resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 3,
        multiplier: 1,
      });

      expect(resistor.toOhms()).toBe(130);

      resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 3,
        multiplier: -1,
      });

      expect(resistor.toOhms()).toBe(1.3);
    });
  });

  describe('4-band resistor', function () {

    it('should create', function () {
      let resistor = new Resistor({
        bands: 4,
        digit1: 0,
        digit2: 0,
        multiplier: 0,
        tolerance: 5,
      });

      expect(resistor.get()).toMatchSnapshot();
    });

    it('should calculate Ohms', function () {
      let resistor = new Resistor({
        bands: 4,
        digit1: 2,
        digit2: 3,
        multiplier: 0,
        tolerance: 5,
      });

      expect(resistor.toOhms()).toBe(23);

      resistor = new Resistor({
        bands: 4,
        digit1: 3,
        digit2: 6,
        multiplier: 1,
        tolerance: 5,
      });

      expect(resistor.toOhms()).toBe(360);

      resistor = new Resistor({
        bands: 4,
        digit1: 4,
        digit2: 8,
        multiplier: 3,
        tolerance: 5,
      });

      expect(resistor.toOhms()).toBe(48000);

      resistor = new Resistor({
        bands: 4,
        digit1: 4,
        digit2: 8,
        multiplier: -2,
        tolerance: 5,
      });

      expect(resistor.toOhms()).toBe(0.48);
    });
  });

  describe('5-band resistor', function () {

    it('should create', function () {
      let resistor = new Resistor({
        bands: 5,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 10,
      });

      expect(resistor.get()).toMatchSnapshot();
    });

    it('should calculate Ohms', function () {
      let resistor = new Resistor({
        bands: 5,
        digit1: 1,
        digit2: 2,
        digit3: 3,
        multiplier: 0,
        tolerance: 10,
      });

      expect(resistor.toOhms()).toBe(123);

      resistor = new Resistor({
        bands: 5,
        digit1: 3,
        digit2: 4,
        digit3: 5,
        multiplier: 6,
        tolerance: 10,
      });

      expect(resistor.toOhms()).toBe(345000000);

      resistor = new Resistor({
        bands: 5,
        digit1: 7,
        digit2: 8,
        digit3: 9,
        multiplier: 9,
        tolerance: 10,
      });

      expect(resistor.toOhms()).toBe(789000000000);

      resistor = new Resistor({
        bands: 5,
        digit1: 7,
        digit2: 8,
        digit3: 9,
        multiplier: -1,
        tolerance: 10,
      });

      expect(resistor.toOhms()).toBe(78.9);
    });
  });

  describe('6-band resistor', function () {

    it('should create', function () {
      let resistor = new Resistor({
        bands: 6,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
        tempCoef: 15,
      });

      expect(resistor.get()).toMatchSnapshot();
    });

    it('should calculate Ohms', function () {
      let resistor = new Resistor({
        bands: 6,
        digit1: 2,
        digit2: 3,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
        tempCoef: 250,
      });

      expect(resistor.toOhms()).toBe(230);

      resistor = new Resistor({
        bands: 6,
        digit1: 3,
        digit2: 6,
        digit3: 9,
        multiplier: 1,
        tolerance: 5,
        tempCoef: 250,
      });

      expect(resistor.toOhms()).toBe(3690);

      resistor = new Resistor({
        bands: 6,
        digit1: 4,
        digit2: 8,
        digit3: 2,
        multiplier: 3,
        tolerance: 5,
        tempCoef: 250,
      });

      expect(resistor.toOhms()).toBe(482000);

      resistor = new Resistor({
        bands: 6,
        digit1: 4,
        digit2: 8,
        digit3: 2,
        multiplier: -2,
        tolerance: 5,
        tempCoef: 250,
      });

      expect(resistor.toOhms()).toBe(4.82);
    });
  });
});
