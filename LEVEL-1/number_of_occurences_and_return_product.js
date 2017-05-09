// Sol 1

function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}

// Sol 2

function product(s) {
    //coding and coding....
    var ex = 0;
    var q = 0;

    for (var i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case '?':
              q++;
              break;
            case '!':
              ex++;
              break;
            default:
              break;
        }
    }
    return q * ex;
}

// Sol 3

function product(s){
  return (s.match(/!/g) == null || s.match(/\?/g) == null) ? 0 : s.match(/!/g).length * s.match(/\?/g).length;
}


// SOl 4

let product = (s) => s.replace(/[^!]/g, '').length * s.replace(/[^?]/g, '').length;

// Sol 5 

function product(s){
  //coding and coding....
  var ques = 0;
  var excla = 0;
 
    s.split('').forEach(function(item){
      if (item === "!"){
        excla += 1;
      }
      if(item === "?"){
        ques += 1;
      }
      if(item === ""){
        return 0;
      }
    });
  
  return excla * ques;
}

/**
 Count the number of exclamation marks and question marks, return the product.

 Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
 */