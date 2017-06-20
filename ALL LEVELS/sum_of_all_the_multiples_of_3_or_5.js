// sol 1 by me

function findSum(n) {
  var sum = 0;
  while(n > 1) {
    var num = ((n % 3 == 0 || n % 5 == 0) ? n : 0)
    sum += num;
    n--;
  }
  return sum;
}

// sol 2 recursive

function findSum(n) {
 if (n < 3) return 0;
 return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1);
}


/**
 Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
 */