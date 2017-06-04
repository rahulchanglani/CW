
function findLongestWord(str) {
  str = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word.length;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//returns 6