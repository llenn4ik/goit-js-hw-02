"use strickt";

const checkForSpam = function (message) {
    const words = message.toUpperCase()
    const wordsArray = words.split(' ');
    const firstWord = 'sale';
    const secondWord = 'spam';
    let rezult;
    for (let i = 1; i < wordsArray.length; i += 1) {
        if (wordsArray[i] != firstWord && wordsArray[i] != secondWord) {
            rezult = 'true';
   break;
        }
        rezult = 'false';

    };
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true