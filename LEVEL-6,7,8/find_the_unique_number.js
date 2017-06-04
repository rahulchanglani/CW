// sol 1
function findUniq(arr) {
  // do magic
  return arr.filter(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })[0];
}

// sol 2
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

/*
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains 3 or more numbers.

*/

