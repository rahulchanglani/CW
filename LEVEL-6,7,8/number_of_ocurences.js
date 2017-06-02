// sol 1

Array.prototype.numberOfOccurrences = function(search) {
  return this.filter( function(num){ return search === num } ).length;
}

// sol 2

Array.prototype.numberOfOccurrences = function(number) {
  return this.reduce(function (previous, current) {
    return (current === number) ? ++previous : previous;
  }, 0);
};