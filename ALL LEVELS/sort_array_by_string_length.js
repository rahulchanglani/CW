function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length;
    });
};