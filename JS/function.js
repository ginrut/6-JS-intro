function  tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.clear('----');


function daugyba(pirmas, antras) {
    console.log(pirmas);
    console.log(antras);

    return pirmas*antras;
}
console.log('daugyba: ', daugyba(4, 5));
console.log('daugyba: ', daugyba(3, 5));
console.log('daugyba: ', daugyba(8, 9));

console.log('--------');



function sayHi (name) {
    return name;
}
const name1 = 'Saulius';
const name2 = 'Adele';

console.log(`Mano vardas ${sayHi(name1)}, ka tu?` )
console.log(`O mano vardas ${sayHi(name2)}, nori kavos?`)


console.log('-----');


function sum (a, b, c){
    return `Susumavus ${a} + ${b} + ${c},  gausime ${a+b+c}.`;
}

// 1+2+3=6
// 11+22+33=66

console.log(sum(1, 2, 3));
sum(11+22+33);

console.log('-----');

function city(miestas, gatve) {
    return `As gyvenu ${miestas}, ${gatve}`;
}

console.log(city(`Vilniuje`, `J.Franko gatveje`));

console.log('----3------');

// function kiekisSkaiciuje( 5 ) {
//     return `kiekis.length` : `Pateikta netinkamo tipo reikšmė.`;

// }
// console.log(``);


console.log('------');

function mokesciai(money, tax) {
    return money * tax / 100;
}

console.log(mokesciai(1000, 21));
console.log(mokesciai(500, 15));


console.log('________----_____________');


function skaitKiekis(number){
    return `Skaitmenu kieki yra ${number.length}.` ;
  }
  
  console.log(skaitKiekis(`3424324324`))


  console.log('----------------------');


function skaitmenuKiekis(skaitmuo){
    if (skaitmuo <= 0 ||skaitmuo === 0 || skaitmuo > 0) {
      return `Skaitmenu kiekis yra  ${skaitmuo.length}`;
    }
    else {
      console.log(`Pateikta netinkamo tipo reikšmė`)
    }
  }
  console.log(skaitmenuKiekis(`NaN`))

  console.log('-----------DIDIAUSIAS SKAICIUS SARASE-----------------');



  function didziausiasSkaiciusSarase(skaiciukas) {
      if (skaiciukas > 0 || skaiciukas < 0 || skaiciukas === 0) {
      console.log(`Didziausias skaicius sarase: ` + Math.max(skaiciukas))
    }
//   } else  if ( skaiciukas = " ")
//   {
//       return `Pateiktas sąrašas negali būti tuščias`;
//     }
    else {
        console.log("Pateikta netinkamo tipo reikšmė.")
    }
}

console.log('----------');

function skaic(skaiciai) {
    return `Didziausias skaicius yra ${Math.max.apply(skaiciai)}`;
}

console.log(skaic(7, 8, 3, 33))

console.log('------------------')

function autoAsys(ratai){
 return ratai / 2;
}

console.log(`Ratu skaicius: ` + autoAsys(8))
console.log(`Ratu skaicius: ` + autoAsys(4))
console.log(`Ratu skaicius: ` + autoAsys(16))

console.log('------------------')


function autoAsys(ratai){
    if (ratai <= 4) {
      return  ratai / 2;
    } else  { if (ratai > 4) {
        return 1 + ((ratai - 2) / 4) }
    }
   }
   
   console.log(`Asiu skaicius: ` + autoAsys(4))
   console.log(`Asiu skaicius: ` + autoAsys(10))
   console.log(`Asiu skaicius: ` + autoAsys(14))

console.clear()

const appSize = [4, 8, 7, 6, 1, 1, 9, 45, 7, 2];
const phoneMemorySize = 70;

function kiekTilpsApss(memory, list) {
    // for (let appSize[i]=0, i <= appSize.length; i++)
    // appSize = appSize[i] + i;
    // if (appSize <= phoneMemorySize){
    //     return ;
    //    }


let usedSpace = 0;
const appCount = list.length;

for (let i = 0; i < appCount; i++) {
const appSize = list[i];
installedAppCount++
usedSpace += appSize 
    if (appSize <= phoneMemorySize) {
        console.log( appSize, usedSpace)
    }
}

}

const phoneAppCount= kiekTilpsAppsu(phoneMemorySize, appSize))

console.log(phoneAppCount)