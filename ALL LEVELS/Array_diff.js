function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) < 0 })
}


/*
difference([1,2],[1]) == [2]
difference([1,2,2,2,3],[2]) == [1,3]
*/


/*

TEST

Test.describe("ArrayDiff", function() {
  Test.it("Tests", function() {
    Test.assertEquals(array_diff([1,2],[1]), [2] )
    Test.assertEquals(array_diff([1,2,2,2,3],[2]), [1,3] )
  });
});

*/