
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
});
