
// sol 1

function accum(s) {
  return s.split('').map(function(x,index) {
       return x.toUpperCase() + Array(index+1).join(x.toLowerCase());
  }).join('-');
}

// sol 2

function accum(s) {
	var res = '';
	for (var i = 0; i < s.length; i++) {
    	for (var j = 0; j <= i; j++)
	    	j === 0 ? res += s[i].toUpperCase() : res += s[i].toLowerCase();
  		if (i !== s.length - 1) res += '-';
	  }
	return res;
}




/**
 This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

