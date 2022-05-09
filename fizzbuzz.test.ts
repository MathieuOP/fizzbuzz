import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  test('Should return a number when the number is not a multiple of 3, 5 or 15', () => {
    const number = 1;
    const result = fizzbuzz(number);
    const resultExpected = 1;
    expect(result).toEqual(resultExpected);
  });
});