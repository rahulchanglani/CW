// sol 1

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// sol 2

function XO(str) {
    //code here
    var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      sum++;
    } else if (str[i].toLowerCase() === "x") {
      sum--;
    }
  }
  return sum === 0;
}

/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/