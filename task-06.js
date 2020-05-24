"use strict";
let input;

const numbers = [];

let total = 0;

while (input !== null) {
  input = prompt('Введите число: ');
  if (input !== null) {

    if (+input) {
      total += input;
    } else {
      alert('Было введено не число, попробуйте еще раз');
    }
  } else {
    console.log(`Общая сумма чисел равна ${total}`);
  }
}