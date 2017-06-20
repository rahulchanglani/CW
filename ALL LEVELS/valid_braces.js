// sol 1 - clever

function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}


// sol 2

function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}


// sol 3 - using stack

function validBraces(braces){
  var stack = [];
  return braces.split('').map(b=> {
    if ('({['.indexOf(b)>=0) {
      stack.push(b);
      return true;
    } else {
      var e = stack.pop();
      return '({['.indexOf(e) == ')}]'.indexOf(b);
    }
  }).every(b=>b) && stack.length == 0;
}

// sol 4

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}


/*
Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples: 
validBraces( "(){}[]" ) => returns true 
validBraces( "(}" ) => returns false 
validBraces( "[(])" ) => returns false 
validBraces( "([{}])" ) => returns true 


Level 4 kyu

*/