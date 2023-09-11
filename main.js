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

function makeArray(length) {
    let array = [];
    for (i = 0; i < length; i++) {
        array.push(i + 1);
    }
    return array;
}

let newArray = makeArray(5);

let xx = newArray.pop();
let xy = newArray.shift();
console.log("newArray= " + newArray, xx, xy);


let numbers = makeArray(10);
console.log("numbers= " + numbers);
console.log(numbers.slice(1));
console.log(numbers.slice(9));
console.log(numbers.slice(0));
console.log(numbers.slice(3, 6));
console.log(numbers.slice(3, 4));

// shallow copy
let original = [newArray, numbers];
let copy = original.slice(0);

console.log(original, copy);

newArray[0] = 55;
numbers[10] = 155;

console.log(original, copy);

let autó = {
    gyártó: "Honda",
    típus: "Civic",
    év: 2014,
    üzemanyag: "benzin"
}

console.table(autó);

const győztes = 1;
autó[győztes] = [2021, 2022, 2023];
console.log(autó);

delete autó[1];
console.log(autó);

autó.tulajdonos = {
    név: "Kis Tamás",
    lakcím: "Sopron"
};
console.table(autó);

// 27. gyakorlat
let lottó = {
    időpont: "2020-11-25 18:20",
    főnyeremény: "20.000.000€",
    nyerőszámok: [1, 2, 3, 4, 5]
}
console.table(lottó);

// 28. feladat 
let ticket = {
    from: {
        airport: 'HAN',
        date: '2020-11-05',
        time: '09:40'
    },
    to: {
        airport: 'AAA',
        date: '2020-11-05',
        time: '11:25'
    },
    name: 'Java Script',
    passport: '123456XY'
}

console.log(
    ticket.from.date,
    ticket.from.time,
    ticket.to.date,
    ticket.to.time,
    ticket.name,
    ticket.passport,
    ticket.to.airport

);

// 30.gyakorlat
let safe = { "123456": "$10.000" };

console.log(safe["123456"]);

// 31. feladat
let arr = [1, 5, 3, 1];

let map = {};

map[arr[0]] = 0;
map[arr[1]] = 1;
map[arr[2]] = 2;
map[arr[3]] = 3;
console.table(map);

// 29. feladat
let tree = { leaf: "fruit" };

tree.tree = tree;

console.log(tree.leaf);
console.log(tree.tree.leaf);
console.log(tree.tree.tree.leaf);

// névtelen füöggvény
let kamatosKamatNévtelen = function (tőke, kamat, évek) {
    return tőke * (1 + kamat / 100) ** évek;
}

// fat arrow 
let kamatosKamatFatArrow = (tőke, kamat, évek) => tőke * (1 + kamat / 100) ** évek;
let square2 = a => a * a;

// Azonnal meghívott függvénykifejezés IIFE
(function (tőke, kamat, évek) { return tőke * (1 + kamat / 100) ** évek; })(200000, 4, 10);
((tőke, kamat, évek) => tőke * (1 + kamat / 100) ** évek)(200000, 4, 10);

//34., 35. gyakorlat
/**
* Hexadecimális számot konvertál tizes, aztán kettes 
* számrendszerbe.
* @param string Hexadecimális szám helyes formátumban
* @return undefined
*/
function convertToTenAndTwo(hexadecimalValue) {
    let baseTenValue = Number.parseInt(hexadecimalValue, 16);
    console.log(
        hexadecimalValue + ' in base 10:',
        baseTenValue,
        '\n' + hexadecimalValue + ' in base 2:',
        baseTenValue.toString(2)
    );
}

