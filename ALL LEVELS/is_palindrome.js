
function palindrome(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();
  if (str == str.split('').reverse().join('')) {
    return true;
    }
  return false;
}



palindrome("eye");
