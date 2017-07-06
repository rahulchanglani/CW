// sol 1 best

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};


// sol 2

const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for(var i = begin; i <= end; i+=step) {
      sum += i;
  }
  return  sum;
};


/*

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, function should returns 0

Examples

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
This is the first kata in the series:

1) Sum of a sequence (this kata)
2) Sum of a Sequence [Hard-Core Version]

Test.assertSimilar(sequenceSum(2, 6, 2), 12)
Test.assertSimilar(sequenceSum(1, 5, 1), 15)
Test.assertSimilar(sequenceSum(1, 5, 3), 5)


level 7 kyu

*/