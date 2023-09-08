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


let a = "Próba";
let b = "szöveg";
let c = a.concat(" ", b, "!");
console.log(c); // Próba szöveg!