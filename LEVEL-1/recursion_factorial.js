// sol 1

const factorial = n => {
  if(n == 0) {
    return 1
  } else {
    return n * factorial(n - 1);
  }
};

// sol 2

const factorial = n => n > 1 ? n*factorial(n-1) : 1;