// sol 1

function  calculateAge(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}

// sol 2

function  calculateAge( a, b ) {
  
if(b - a > 1) {
return "You are " + ( b - a ) + " years old."; 
}
else if(b - a == 1) {
return "You are 1 year old."; 
}
else if(a - b > 1) {
return "You will be born in " + ( a - b ) + " years.";
}
else if(a - b == 1) {
return "You will be born in 1 year.";
}
else {
return "You were born this very year!"
}
}


/*
calculateAge(2004, 2002) 
calculateAge(2004, 2004) 
calculateAge(2004, 2006)

*/ 


