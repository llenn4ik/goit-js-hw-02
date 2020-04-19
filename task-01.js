"use strickt";

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const functArr = array[i];
    const key = i + 1;

    console.log(`${key} - ${functArr}`);
  }
};

const list = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const points = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(list)