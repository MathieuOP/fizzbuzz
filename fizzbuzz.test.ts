import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  test('fizzbuzz function should return a number', () => {
    const number = 1;
    const result = fizzbuzz(number);
    const resultExpected = 1;
    expect(result).toEqual(resultExpected);
  });
});