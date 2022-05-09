export const fizzbuzz = (number: number): string | number => {
  if (number < 1 || number > 100) return "Please enter a number between 1 and 100";
  if (number % 15 === 0) return "fizzbuzz";
  if (number % 5 === 0) return "buzz";
  if (number % 3 === 0) return "fizz";
  return number;
};