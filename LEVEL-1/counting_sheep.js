// SOl 1
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.filter(Boolean).length;
}


// SOl 2
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var count = arrayOfSheep.filter(function (sheep) {
        return sheep == true;
    });
    return count.length;
}