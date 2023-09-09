console.log("Hello World!");
console.info("Hello World!");
console.warn("Hello World!");
console.error("Hello World!");

console.log(5 + 2);

document.body.innerText = 'Hello World!';

// ez egy komment

/* ez is egy komment
ez is egy komment
ez is egy komment
ez is egy komment*/

// console.log(1 + 2 + 3 + 4);
2 + 4;
console.log('End');

function kamatosKamat(tőke, kamat, évek) {
    return tőke * (1 + kamat / 100) ** évek;
}

const numbersIn16 = [0, "F", "ff", "FFFFFF", 99, 10]

function convertNumberSystem(numbers, numberSystem) {
    let convertedNumbers = [];
    let convertedNumbers2 = [];
    for (let i = 0; i < numbers.length; i++) {
        convertedNumbers.push(parseInt(numbers[i], numberSystem));
        convertedNumbers2.push(convertedNumbers[i].toString(2));
    }
    let returnElements = [convertedNumbers, convertedNumbers2]

    return returnElements;
}

x = 2 ** 24 - parseInt("FFFFFF", 16);
console.log(x);


console.log(
    'FF in base 10:',
    Number.parseInt('FF', 16),
    '\nFF in base 2: ',
    Number.parseInt('FF', 16).toString(2)
);


let baseTen = Number.parseInt('FF', 16);
let hexaNumber = "FF";

console.log(
    hexaNumber + ' in base 10:',
    baseTen,
    '\n' + hexaNumber + ' in base 2: ',
    baseTen.toString(2)
);