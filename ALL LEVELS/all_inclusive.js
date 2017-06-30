function containAllRots (str, arr) {
  const len = str.length

  for (let i of str) {  // iterates for using of keyboard
    str = str[len - 1] + str.substr(0, len - 1)
    if (!~arr.indexOf(str)) return false  // arr.indexOf(str) == -1
  }
  return true
}



/*



Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0)
#Examples:

contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:

Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true



function testing(actual, expected) {
    Test.assertEquals(actual, expected);
}

Test.describe("Basic tests",function() {
Test.it("containAllRots",function() {
    testing(containAllRots("", []), true)
    testing(containAllRots("", ["bsjq", "qbsj"]), true)
    testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
    testing(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
})})


LEVEL 7 kyu
*/