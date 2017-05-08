// Sol 1

function arithmetic(a, b, operator){
  //your code here!
  switch(operator) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
    default:
      return "Invalid Operation";
      break;
  }
}

// SOl 2

function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}

// SOl 3

function arithmetic(a, b, operator){
  //your code here!
  var mathFun = {
    'add': function (a, b) {
        return a+b;
    },
    'subtract': function (a, b) {
        return a-b;
    },
    'multiply': function (a, b) {
        return a*b;
    }, 
    'divide': function (a, b) {
        return a/b;
    }
  }

  return mathFun[operator](a,b);
}