// sol 1

function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}


// sol 2

function order(words) {
	var arr = words.split(' ');
	arr.sort(function(a, b) {
		if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0]))
			return -1;
		else if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0]))
			return 1
		else
			return 0
	});
	return arr.join(' ');
}

/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

level 6
*/