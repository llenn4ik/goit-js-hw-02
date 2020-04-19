"use strickt";

const calculateEngravingPrice = function (message, pricePerWord) {
    const messageArray = message.split(' ')
    return (messageArray.length * pricePerWord)
}
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
);
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
);