// sol 1

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}



// sol 2

function maskify(cc) {
  if (cc.length >= 4) {
  var maskedString = Array(cc.length - 3).join("#");
  } else {
  var maskedString = "";
  }

  maskedString += cc.slice(-4);
  return maskedString;
}


/*
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"




describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});


level 7
*/