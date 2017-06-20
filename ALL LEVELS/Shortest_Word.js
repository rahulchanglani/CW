function findShort(s){
    const lens = [];
  s.split(' ').map( x => { lens.push(x.length) });
  return Math.min.apply(null,lens)
}


/*

x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data type.


*/