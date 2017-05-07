// Sol 1

function positiveSum(arr) {
  return arr.reduce(function (a,b) { return a + (b > 0 ? b : 0)},0);
}



// Sol 2

function positiveSum(arr) {
  var sum = 0;
  if(arr.length == 0) {
    sum = 0;
  }
  else {
    for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  }

  }
  return sum;
}