// sol 1

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// sol 2

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}



// sol 3

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

// sol 4 - my sol imperative

function countPositivesSumNegatives(arr) {
    var count_pos = 0;
    var sum_neg = 0;

    if (arr !== null && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                count_pos += 1;
            }
            else {
                sum_neg += arr[i];
            }
        }
        var ans = [];
        ans.push(count_pos);
        ans.push(sum_neg);
        return ans;
    }
    else {
        return [];
    }
}





/*


Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!

The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].





describe("Example tests", function(){
    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var actual = countPositivesSumNegatives(testData);
    var expected = [10, -65];

    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    
    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
});


Level 8 kyu
*/