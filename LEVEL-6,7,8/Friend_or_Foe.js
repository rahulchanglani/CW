function friend(friends){
  //your code here
  return friends.filter(function(name) {
    return name.length == 4;
  });
}


/**
 Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 */