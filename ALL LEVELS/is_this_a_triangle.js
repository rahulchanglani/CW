// sol 1

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}



// sol 2



function isTriangle(a,b,c)
{
   if (a+b<=c || a+c<=b || b+c<=a) {
    return false;
  } else {
    return true;
  }
}

/*

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Test.describe("PublicTest", function() {
    Test.assertEquals(isTriangle(1,2,2), true);
    Test.assertEquals(isTriangle(7,2,2), false);
});

LEVEL 7 kyu
*/