const fizzbuzz = num => {
  switch (true) {
    case num % 3 === 0 && num % 5 === 0: {
      return "fizzbuzz"
    }
    case num % 3 === 0: {
      return "fizz"
    }
    case num % 5 === 0: {
      return "buzz";
    }
    default: {
      return num;
    }
  }
}

console.log(fizzbuzz(30));