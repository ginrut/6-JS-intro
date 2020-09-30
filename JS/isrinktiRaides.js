console.clear()

function isrinktiRaides(tekstas, kelintaRaide){

    if (typeof tekstas === `number`) {
        return `Pirmasis kintamasis yra netinkamo tipo.`
    };

    if (tekstas === ` `) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    };

    if (tekstas.length >= 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    };
    if (typeof kelintaRaide !== 'object'){
        return `Antrasis kintamasis yra netinkamo tipo`
    };
    if (kelintaRaide === 0) {
        return `Antrasis kintamasis turi būti didesnis už nulį.`
    };
    if (kelintaRaide <= tekstas.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    };
    
    let atsakymas = ' ';
    for (let i = kelintaRaide; i <= tekstas.length; i += kelintaRaide);
    console.log(isrinktiRaides);
    let isvada = atsakymas + tekstas[i];
    console.log(isvada);
}


console.log(isrinktiRaides(['abcdefg'], [2]));
// rezultatas: “bdf”
console.log(isrinktiRaides(['abcdefghijkl'], [3]));
// rezultatas: “cfil”
console.log(isrinktiRaides(['abc'], [0]));
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides(['abc'], [4]));
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides([1561], [2]));
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
