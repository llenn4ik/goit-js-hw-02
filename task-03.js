"use strict";


const findLongestWord = function (string) {
  const stringArray = string.split(' ');
  let longestWord = stringArray[0];
  for (let i = 1; i < stringArray.length; i += 1) {
    console.log('i: ', i);
    console.log('stringArray[i]', stringArray[i]);
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i]
    }
    console.log(stringArray);
    console.log(longestWord);




  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'