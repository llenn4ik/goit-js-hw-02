"use strickt";
//---строку превращаю в массив\longitudeStringArray
//---обьявляю переменную shotString, в нее копирую string
//       с 0 по 40 ел-т;
//--цикл: если длина массива до 40, выводить строку string;
//         или копию из 40 эл +"..."
const formatString = function (string) {
    const longitudeStringArray = string.split('')
    const shotString = string.slice(0, 41)
    if (longitudeStringArray.length <= 40) {

        console.log(string);
    } else {

        // rezult = `${shotString}  +'...' `
        console.log(`${shotString} ... `);

    }
}


console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);