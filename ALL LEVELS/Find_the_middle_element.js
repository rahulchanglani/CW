// sol 1

var gimme = function (inputArray) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
};

// sol 2 - my sol

var gimme = function (inputArray) {
  //deep copy input array into another array var
  var arr = JSON.parse(JSON.stringify(inputArray));
  //sorts the array and saves the output to a variable
  var sortedArr = arr.sort((a, b) => a-b);
  //return the index of the middle number in the input_array
  return inputArray.indexOf(sortedArr[1]);  
};


/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



////
Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')

*/