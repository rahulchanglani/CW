
// sol 1

function evil(n) {
  return ((n.toString(2).match(/1/g).length)%2 == 0) ? "It's Evil!" :"It's Odious!";
}

/*
explanation  - step 1

function evil(n) {
    var str = (n >>> 0).toString(2);  // conversion decimal to bimary in string
    var countOfOnes = str.match(/1/g).length  // use string match fn to count ones in it
    return countOfOnes % 2 === 0 ? 'It\'s Evil!' : 'It\'s Odious!';
}

*/



// sol 2 ES6

evil = n => ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length-1) & 1];

// sol 3 ES6

const evil = n => `It's ${n.toString(2).replace(/0/g, "").length % 2 ? "Odious" : "Evil"}!`;

/*

The number n is Evil if it has an even number of 1's in its binary expansion.
First ten: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary expansion.
First ten: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

*/