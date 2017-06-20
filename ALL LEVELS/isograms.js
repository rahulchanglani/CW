// sol 1

function isIsogram(str){
  //if empty return true.
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters. 
  var array = str.split('');
  var sortedArr = array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  //else return true
  return true;
}


// sol 2

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

/*
// TASK:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

//testing
isIsogram('moOse'); //should return false
isIsogram('to be or not to be'); //should return false
isIsogram('wasdfgerty'); //should return true
isIsogram(); //should return true
*/