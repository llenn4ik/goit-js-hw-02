

let typeNumber;
let total = 0;

while (input !== null) {

    typeNumber = prompt('Введите число, ');
    typeNumberCifer = Number(typeNumber);
    if (Number.isNaN(typeNumber)) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    }
    if (typeNumber === null) {
        alert(`Общая сумма чисел равна ${total}!`);
        break;
    }
    total += typeNumberCifer
};
//==============
while (input !== null) {
    input = prompt('Введите число: ');
    if (input !== null) {
        if (+input) {
            total += +input;
        } else {
            alert('Было введено не число, попробуйте еще раз');
        }
    } else {
        console.log(`Общая сумма чисел равна ${total}`);
    }
}