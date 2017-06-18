function GetSum( a,b )
{
    var max = Math.max(a, b),
      current = Math.min(a, b),
      summ = 0;
  while (current <= max) {
    summ += current++;
  }
  return a === b ? a : summ;
}

/*
GetSum(1,3) ==> 6
GetSum(-1,1) ==> 0
GetSum(2,2) ==> 2

*/