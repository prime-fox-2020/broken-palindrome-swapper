function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    newStr = ''
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += [j+1]
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    /if (isPalindrome(newStr)) return true;
  }
  // console.log(newStr)
  // return false;
  return newStr
}

console.log(palindromeSwapper('arcecar'))
