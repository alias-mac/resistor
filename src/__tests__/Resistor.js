
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

  describe('Constructor', function () {

    it('should create a simple 3-band resistor', function () {
      let resistor = new Resistor({
        bands: 3,
        digit1: 1,
        digit2: 0,
        multiplier: 0,
      });

      expect(resistor.get()).toEqual({
        bands: 3,
        digit1: 1,
        digit2: 0,
        multiplier: 0,
      });
    });

    it('should create a simple 4-band resistor', function () {
      let resistor = new Resistor({
        bands: 4,
        digit1: 0,
        digit2: 0,
        multiplier: 0,
        tolerance: 5,
      });

      expect(resistor.get()).toEqual({
        bands: 4,
        digit1: 0,
        digit2: 0,
        multiplier: 0,
        tolerance: 5,
      });
    });

    it('should create a simple 5-band resistor', function () {
      let resistor = new Resistor({
        bands: 5,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
      });

      expect(resistor.get()).toEqual({
        bands: 5,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
      });
    });

    it('should create a simple 6-band resistor', function () {
      let resistor = new Resistor({
        bands: 6,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
        tempCoef: 250,
      });

      expect(resistor.get()).toEqual({
        bands: 6,
        digit1: 0,
        digit2: 0,
        digit3: 0,
        multiplier: 0,
        tolerance: 5,
        tempCoef: 250,
      });
    });
  });

  describe('toOhms', function () {
    it('should calculate Ohms for a 3-band resistor', function () {
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

    it('should calculate Ohms for a 4-band resistor', function () {
      let resistor = new Resistor({
        bands: 4,
        digit1: 2,
        digit2: 3,
        multiplier: 0,
      });

      expect(resistor.toOhms()).toBe(23);

      resistor = new Resistor({
        bands: 4,
        digit1: 3,
        digit2: 6,
        multiplier: 1,
      });

      expect(resistor.toOhms()).toBe(360);

      resistor = new Resistor({
        bands: 4,
        digit1: 4,
        digit2: 8,
        multiplier: 3,
      });

      expect(resistor.toOhms()).toBe(48000);

      resistor = new Resistor({
        bands: 4,
        digit1: 4,
        digit2: 8,
        multiplier: -2,
      });

      expect(resistor.toOhms()).toBe(0.48);
    });

    it('should calculate Ohms for a 5-band resistor', function () {
      let resistor = new Resistor({
        bands: 5,
        digit1: 1,
        digit2: 2,
        digit3: 3,
        multiplier: 0,
      });

      expect(resistor.toOhms()).toBe(123);

      resistor = new Resistor({
        bands: 5,
        digit1: 3,
        digit2: 4,
        digit3: 5,
        multiplier: 6,
      });

      expect(resistor.toOhms()).toBe(345000000);

      resistor = new Resistor({
        bands: 5,
        digit1: 7,
        digit2: 8,
        digit3: 9,
        multiplier: 9,
      });

      expect(resistor.toOhms()).toBe(789000000000);

      resistor = new Resistor({
        bands: 5,
        digit1: 7,
        digit2: 8,
        digit3: 9,
        multiplier: -1,
      });

      expect(resistor.toOhms()).toBe(78.9);
    });

    it('should calculate Ohms for a 6-band resistor', function () {
      let resistor = new Resistor({
        bands: 6,
        digit1: 2,
        digit2: 3,
        digit3: 0,
        multiplier: 0,
      });

      expect(resistor.toOhms()).toBe(230);

      resistor = new Resistor({
        bands: 6,
        digit1: 3,
        digit2: 6,
        digit3: 9,
        multiplier: 1,
      });

      expect(resistor.toOhms()).toBe(3690);

      resistor = new Resistor({
        bands: 6,
        digit1: 4,
        digit2: 8,
        digit3: 2,
        multiplier: 3,
      });

      expect(resistor.toOhms()).toBe(482000);

      resistor = new Resistor({
        bands: 6,
        digit1: 4,
        digit2: 8,
        digit3: 2,
        multiplier: -2,
      });

      expect(resistor.toOhms()).toBe(4.82);
    });
  });
});
