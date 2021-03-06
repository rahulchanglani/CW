// Sol 1

var number = function(busStops){
  return busStops.reduce(function(rem, [i, o]) {
    return rem + i - o;
  }, 0);
}

// Sol 2

var number = function(busStops){ 
  var people = 0;
  busStops.forEach(function (stop) {
    people += stop[0];
    people -= stop[1];
  });
  
  return people;
}


/*
Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer arrays. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
*/