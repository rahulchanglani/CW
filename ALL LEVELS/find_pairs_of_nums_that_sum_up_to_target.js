function findMe(arr, target) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[i] + arr[k] == target) {
                output.push("Array[" + i + "] + Array[" + k + "] = " + target);
            }
        }
    }
    return output;
}
console.log(findMe([10, 20, 10, 40, 50, 60, 70], 50));
//output: ["Array[0] + Array[3] = 50", "Array[2] + Array[3] = 50"]

