"use strict";
'use strict'
const checkForSpam = (str) => {
    const words = str.toLowerCase();
    return words.includes('spam') || words.includes('sale');
  };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true