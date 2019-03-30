function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list
  let str = sentence.split(" ")  ;
  let pal = [];
  for (let i = 0; i < str.length; i++){
    if (isPalindrome(str[i])) {
      pal.push(str[i]);
    }
    else {
      pal = pal;
    }
  }

  let lenTest = pal[0].length;
  let longPal = pal[0];
    if (pal.length === 0) {
      return 'The sentence contained no palindromes.';
    }
    else {
      for (let i = 0; i < pal.length; i++) {
        if (pal[i].length > lenTest) {
          lenTest = pal[i].length;
          longPal = pal[i];
        }
        else {
          lenTest = lenTest;
          longPal = longPal;
        }
      }
      return longPal;
    }
  }
  
  function reverseString(string) {
    let reverse = [];
    
    for (let i = string.length - 1; i >= 0; i--) {
      reverse.push(string[i]);
    }
    return reverse;
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    let reverse = reverseString(word);
    let count = 0;
    for (i = 0; i < word.length; i++) {
      if (word[i] === reverse[i]) {
        count++;
      }
      else {
        count = count;
      }
    }
    if (count === word.length) {
      return true;
    }
    else {
      return false;
    }
  }

let test = findLongestPalindrome('Hello there my little wow illi mim racecar racecar viviviviviv');
console.log(test);