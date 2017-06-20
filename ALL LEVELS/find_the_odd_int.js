
// sol 1

var findOdd = (A) => A.reduce((a, b) => a ^ b);


// sol 2

function findOdd(A) {
  var res = 0;
     
    //Traverse the array
    for (var i = 0; i < A.length; i++) {
        //XOR with the result
        res = res ^ A[i];
    }
 
    return res;
}


/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times

*/