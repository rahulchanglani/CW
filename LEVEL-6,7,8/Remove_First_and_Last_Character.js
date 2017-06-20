// sol 1

function removeChar(str){
 return str.substring(1,str.length-1);
};

// sol 2

function removeChar(str) {
  return str.slice(1, -1);
}

/*
It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter.


level 8
*/