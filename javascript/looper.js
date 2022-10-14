function fizzbuzz(n) {
  let fizzbuzzArray = [];

  const fizzBuzzChecker = (x) => {
    if (x % 3 === 0 && x % 5 === 0) {
      return "FizzBuzz";
    } else if (x % 3 === 0 && x % 5 != 0) {
      return "Fizz";
    } else if (x % 3 != 0 && x % 5 === 0) {
      return "Buzz";
    } else if (x % 3 != 0 && x % 5 != 0) {
      return x;
    }
  };

  for (let i = 1; i <= n; i++) {
    fizzbuzzArray.push(fizzBuzzChecker(i));
  }
  return fizzbuzzArray;
}

console.log(fizzbuzz(16));

// Leave this line for testing:
module.exports = fizzbuzz;
