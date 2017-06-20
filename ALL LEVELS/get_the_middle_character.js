// sol 1

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// sol 2

function getMiddle(s)
{
  //Code goes here!
  if(s.length % 2 == 1 && s.length != 1) {
  return s[Math.floor(s.length / 2)];
  }
  else if(s.length == 1) {
      return s;
  }
  else {
    return s[(s.length / 2) - 1] + s[s.length / 2];
  }
}

/*
#Input

A word (string) of length 0 < str < 1000

#Output

The middle character(s) of the word represented as a string.


Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/


/*

Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});

*/