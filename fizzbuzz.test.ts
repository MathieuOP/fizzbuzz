import { fizzbuzz } from './fizzbuzz';

describe('Fizzbuzz', () => {
  test('Should return a number when the number is not a multiple of 3, 5 or 15', () => {
    const number = 1;
    const result = fizzbuzz(number);
    const resultExpected = 1;
    expect(result).toEqual(resultExpected);
  });

  test('Should return the word "fizz" when the number is a multiple of 3', () => {
    const number = 3;
    const result = fizzbuzz(number);
    const resultExpected = "fizz";
    expect(result).toEqual(resultExpected);
  });

  test('Should return the word "buzz" when the number is a multiple of 5', () => {
    const number = 5;
    const result = fizzbuzz(number);
    const resultExpected = "buzz";
    expect(result).toEqual(resultExpected);
  });

  test('Should return the word "fizzbuzz" when the number is a multiple of 15', () => {
    const number = 15;
    const result = fizzbuzz(number);
    const resultExpected = "fizzbuzz";
    expect(result).toEqual(resultExpected);
  });

  test('Should return "Please enter a number between 1 and 100" when the number more less than 1', () => {
    const number = 0;
    const result = fizzbuzz(number);
    const resultExpected = "Please enter a number between 1 and 100";
    expect(result).toEqual(resultExpected);
  });
});