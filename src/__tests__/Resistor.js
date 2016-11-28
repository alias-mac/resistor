
import Resistor from '../Resistor';

describe('Resistor', function () {

  it('should return list of significant digits', function () {

    const significantDigits = [
      { value: 0, color: 'black' },
      { value: 1, color: 'brown' },
      { value: 2, color: 'red' },
      { value: 3, color: 'orange' },
      { value: 4, color: 'yellow' },
      { value: 5, color: 'green' },
      { value: 6, color: 'blue' },
      { value: 7, color: 'violet' },
      { value: 8, color: 'gray' },
      { value: 9, color: 'white' },
    ];

    expect(Resistor.significantDigits).toEqual(significantDigits);
  });

  it('should return list of multipliers', function () {

    const multipliers = [
      { value: 0, color: 'black' },
      { value: 1, color: 'brown' },
      { value: 2, color: 'red' },
      { value: 3, color: 'orange' },
      { value: 4, color: 'yellow' },
      { value: 5, color: 'green' },
      { value: 6, color: 'blue' },
      { value: 7, color: 'violet' },
      { value: 8, color: 'gray' },
      { value: 9, color: 'white' },
      { value: -1, color: 'gold' },
      { value: -2, color: 'silver' },
    ];

    expect(Resistor.multipliers).toEqual(multipliers);
  });

  it('should return list of tolerances', function () {

    const tolerances = [
      { value: 1, color: 'brown' },
      { value: 2, color: 'red' },
      { value: 0.5, color: 'green' },
      { value: 0.25, color: 'blue' },
      { value: 0.1, color: 'violet' },
      { value: 5, color: 'gold' },
      { value: 10, color: 'silver' },
    ];

    expect(Resistor.tolerances).toEqual(tolerances);
  });

  it('should return list of temperature coefficients', function () {

    const tempCoefs = [
      { value: 250, color: 'black' },
      { value: 100, color: 'brown' },
      { value: 50, color: 'red' },
      { value: 15, color: 'orange' },
      { value: 25, color: 'yellow' },
      { value: 20, color: 'green' },
      { value: 10, color: 'blue' },
      { value: 5, color: 'violet' },
      { value: 1, color: 'gray' },
    ];

    expect(Resistor.tempCoefs).toEqual(tempCoefs);
  });
});
