"use strict"

function bigNum(list) {


    if (typeof list !== `object`) {
        return `error, netinka`
    }
    if (list.length === 0) {
        return `negali buti tuscias`
    }
    let biggestNumber = list[0];

    for(let i=0; i<list.length; i++){
    const currentListNumber = list[i];

    if (currentListNumber > biggestNumber) {
        biggestNumber = currentListNumber }
    }
    return biggestNumber
}


console.log(bigNum([-5, 78, 14, 0, 18]));
console.log(bigNum([ -1, -2, -3, -4, -5, -6, -7, -8 ]));
console.log(bigNum( [] ) );
console.log(bigNum(`pomidoras`));

// console.log( bigNum( [ 1 ] ) );
// rezultatas: 1
// console.log( bigNum( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( bigNum( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( bigNum( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( bigNum( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( bigNum( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

