export const fizzbuzz = (number: number): string | number => {
  const MINIMUM_NUMBER_ALLOWED = 1;
  const MAXIMUM_NUMBER_ALLOWED = 100;
  const FIZZ_MULTIPLIER = 3;
  const BUZZ_MULTIPLIER = 5;
  const FIZZBUZZ_MULTIPLIER = 15;
   
  if (number < MINIMUM_NUMBER_ALLOWED || number > MAXIMUM_NUMBER_ALLOWED) {
    return "Please enter a number between 1 and 100";
  }
  if (number % FIZZBUZZ_MULTIPLIER === 0) return "fizzbuzz";
  if (number % BUZZ_MULTIPLIER === 0) return "buzz";
  if (number % FIZZ_MULTIPLIER === 0) return "fizz";
  
  return number;
};