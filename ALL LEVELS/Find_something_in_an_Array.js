var find = function(string, array) {
  return array.indexOf(string) >= 0 ? true : false;
};

/*

Create a find function that takes a string and an array as arguments. If the string is in the array, return true.

For example:

find("hello", ["bye bye","hello"]) // return true
find("anything", ["bye bye","hello"]) // return false
Note: "Hello" !== "hello" // case-sensitive comparison




Test.assertEquals(find("hello", ["bye bye","hello"]), true);
Test.assertEquals(find("anything", ["bye bye","hello"]), false);



beta level 8

*/