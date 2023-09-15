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

(text => console.log(text))("Lefutottam");
let sum = ((a, b) => a + b)(5, 4);

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

let f = typeof 25 + ' ';


for (let value of arr) {
    console.log(value);
}

function nagyobbMintSzáz(szám) {
    return szám > 100;
}

let nagyobbMintSzázFatArrow = (szám) => szám > 100;

let nagyobbMintSzázNévtelen = function (szám) { return szám > 100; }

let nagyobbMintSzázAzonnal = (function (szám) { return szám > 100; })(99);

((szám) => szám > 100)(99);

// 44. gyakorlat: Írj egy függvényt, amely két szám maximumát adja vissza:
function maxOfTwoNumbers(a, b) {
    return a >= b ? a : b;
}
let maxOfTwoNumberFatArrow = (a, b) => a >= b ? a : b;

/* 45. gyakorlat: Hozz létre egy véletlen számot 1 és 50 között a következő
kifejezéssel: Math.trunc( Math.random() * 50 ) + 1. Írj egy függvényt, amely a
felhasználótol bekér egy számot 1 és 50 között, majd a következő üzenetek
egyikét jeleníti meg függően a bekért szám és a véletlen szám viszonyától:*/

function találdKi() {
    let randomNumber = Math.trunc(Math.random() * 50) + 1;
    let userNumber = parseInt(prompt("Írj be egy számot 1 és 50 között!: "), 10);
    kiértékelő(userNumber, randomNumber);
}

function kiértékelő(a, b) {
    console.log(a, b)
    if (Number.isNaN(Number(a))) {
        console.log("Hibás formátum.");
    } else if (a < 1 || a > 50) {
        console.log("Csak 1 és 50 közötti egész számokat fogadunk el.");
    } else if (a === b) {
        console.log(`Helyes a megfejtés: ${a}.`);
    } else if (a > b) {
        console.log("A megoldás kisebb, mint az általad beírt szám.");
    } else {
        console.log("A megoldás nagyobb, mint az általad beírt szám.");
    }
}

// 46. gyakorlat: Írd át az alábbi programrészletet if helyett switch-et használva:

// switch (state) {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case c:
//         console.log('Three');
//         break;
// }

//47. gyakorlat: Írd át az alábbi programrészletet if helyett switch-et használva:
// switch (state) {
//     case a > 0:
//         console.log('Positive');
//         break;
//     case a < 0:
//         console.log('Negative');
//         break;
//     default:
//         console.log('Zero');
//         break;
// }

/* 48. gyakorlat: Alakítsd át az alábbi kódot egyenértékű kóddá úgy, hogy a switch kifejezés helyett, csak if-else utasításokat, ternáris operátort, vagy
függvényhívásokat használhatsz: */
let state = 2;

function logOneTwoOrThree(state) {
    if (state == 1) {
        console.log('One');
    } else if (state == 2 || state == 3) {
        console.log('Two or Three' + '\n' + 'True');
    } else {
        console.log('Default');
    }
    console.log('Done');
}

function logOneTwoOrThreeTernary(state) {
    return state == 1 ? 'One' :
        state == (2 || 3) ? 'Two or Three' + '\n' + 'True' :
            'Default';
}

// let számok = [19, 65, 9, 17];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function sumRecursive(array) {
    return array.length === 0 ? 0 :
        array[0] + sumRecursive(array.slice(1));
}

/*49. gyakorlat: Adott egy egész számokat tartalmazó tömb. Írd ki console.log segítségével egymás alá külön sorba a tömb elemeit. Használj
rekurziót.*/

function arrayLog(array) {
    if (array.length === 0) return;
    console.log(array[0]);
    arrayLog(array.slice(1));
}

console.log([1, 2, 3, 4, 6].join('\n'));

/* 50. gyakorlat: Írj egy függvényt, amely kiszámol egy sorozatot. Ennek
a sorozatnak az első két eleme 1 és 1. A harmadik elemtől a sorozat
következő eleme az előző két elem összege. Hívjuk ezt a sorozatot fibonacci
sorozatnak:*/

function makeFibonacci(x) {
    let array = [1, 1];
    for (let i = 0; i < x - 2; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array;
}

function makeFibonacciRecursive(x, array = [1, 1], i = 0) {
    array.length === 0 ? array : array.push(array[i] + array[i + 1]);
    return makeFibonacci(x, array, i + 1);
}

// while
let számok = [19, 65, 9, 17];

function sumArrayWhile(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i++;
    }
    console.log("A loop " + i + ' alkalommal futott le.')
    console.log(`A loop ${i} alkalommal futott le.`)
    return sum;
}

// 51. gyakorlat: Idézzük fel a korábbi map struktúra építésének megoldását:
let arr2 = [1, 5, 3, 1];
let map2 = {};
map2[arr2[0]] = true;
map2[arr2[1]] = true;
map2[arr2[2]] = true;
map2[arr2[3]] = true;
console.table(map2);
/*Írj egy függvényt, amely egy tetszőleges hosszú tömbből épít egy hasonló
map struktúrát.*/
function makeArrayWhile(array) {
    let map3 = {};
    let i = 0;
    while (i < array.length) {
        map3[arr2[i]] = true;
        i++;
    }
    console.table(map3);
}
// 52. gyakorlat: Idézzük fel a számrendszer konvertáló függvényünket:
let numberSystems = [2, 5, 8, 36, 7, 12, 16]
function convertAll(hexaNumber, array) {
    let baseTenValue = Number.parseInt(hexaNumber, 16);
    i = 0;
    console.log(hexaNumber + ' in base 10: ' + baseTenValue)
    while (i < array.length) {
        console.log(hexaNumber + ' in base ' + array[i] + ': ' + baseTenValue.toString(array[i]));
        i++;
    }
}

convertAll('ACE', numberSystems);

// do while
let numbers2 = [19, 65, 9, 17, 4, 1, 2, 6, 1, 9, 9, 2, 1];

function sumArray(values) {
    if (values.length == 0) return 0;
    let sum = 0;
    let i = 0;
    do {
        sum += values[i];
        i += 1;
    } while (i < values.length);
    console.log('The loop was executed ' + i + ' times');
    return sum;
}

sumArray(numbers2);

/*
53. Gyakorlat: Hozz létre egy véletlen számot az alábbi programkódot
felhasználva:
Math.trunc( Math.random() * 50 ) + 1
A fenti utasítás létrehoz egy véletlen számot 1 és 50 között.
Készíts egy függvényt amely bekér a felhasználótol egy 1 és 50 közötti
számot és ismételd a kérést addig amíg a helyes értéket nem kapod. (a)
használj do-while loop-ot, (b) használj rekurziót.
*/


function számKitalálós() {
    let randomNumber = Math.trunc(Math.random() * 50) + 1;
    let userSzám;
    do {
        userSzám = parseInt(prompt("Gondoltam egy egész számra 1 és 50 között. Találd Ki!: "));
    } while (userSzám != randomNumber);
    console.log("Gratulálok, kitaláltad!" + randomNumber)
}

function számKitalálósRecursive() {
    let randomNumber = Math.trunc(Math.random() * 50) + 1;
    userSzám = parseInt(prompt("Gondoltam egy egész számra 1 és 50 között. Találd Ki!: "));
    if (randomNumber != userSzám) számKitalálósRecursive();
}

// for
//54. és 55. gyakorlat: Idézd fel a while ciklus két gyakorlatának megol-
//dását. Írd át a megoldásokat úgy, hogy while helyett for ciklust használsz.

function makeArrayFor(array) {
    let map3 = {};
    for (let i = 0; i < array.length; i++) {
        map3[arr2[i]] = true;
    }
    console.table(map3);
}

function convertAllFor(hexaNumber, array) {
    let baseTenValue = Number.parseInt(hexaNumber, 16);
    console.log(hexaNumber + ' in base 10: ' + baseTenValue)
    for (let i = 0; i < array.length; i++) {
        console.log(hexaNumber + ' in base ' + array[i] + ': ' + baseTenValue.toString(array[i]));
    }
}

convertAllFor('ACE', numberSystems);

// for..in, for..of

//56. gyakorlat: Készíts egy függvényt amely egy tömböt fogad bemenő
// paraméterként és a tömb legnagyobb értékét adja vissza.
let datas = [19, 65, 9, 17, -99];

function max(array) {
    let maxNumber = -Infinity;
    if (array.length === 0) {
        return null;
    } else {
        for (let i of array) {
            if (i > maxNumber) maxNumber = i;
        }
    }
    return maxNumber;
}

function max2(array) {
    if (array.length === 0) {
        return null;
    } else {
        return Math.max(...array);
    }
}

max(datas);
max2(datas);

// Spread Operátor, Destrukturálás, Rest Paraméter

const Basket1 = ['Apple', 'Pear', 'Strawberry'];
const Basket2 = ['Banana', 'Peach'];
// const MergedBasket = [];

// for (let fruit of Basket1) {
//     MergedBasket.push(fruit);
// }
// for (let fruit of Basket2) {
//     MergedBasket.push(fruit);
// }
const MergedBasket = [...Basket1, ...Basket2];
/* 57 Gyakorlat: Egészítsd ki a kódot úgy, hogy a kód futásának ered-
ményeként a konzolra az 1 7 3 számokat írja ki a program. A kód
kiegészítésében nem használhatsz számjegyeket.*/

let A = [1, 2, 3];
let B = [...A];
B[0] += 1;
console.log(
    A[0],
    B[0] + B[1] + B[2],
    B.length
);