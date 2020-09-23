//  if, swich, ternary

const num1 = 4;
const num2 = 8;

if (num1 > num2) {
    console.log(num1, 'didesnis uz', num2);
} else {
    console.log(num1, 'mazesnis uz', num2);
}

// switch
console.log('------');

const diena = 'ses';

switch (diena) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Dirbam.');
        break;

    case 'ses':
    case 'sek':
        console.log('ilsimes 😉');
        break;

    default:
        console.log('Diena ne is musu kalendoriaus');
        break;
}
// 2 dublis

console.log('-------');

const diena2 = 'pirm';

switch (diena2) {
    case 'pirm':
        console.log('Dirbam1');
        break;
    case 'ant':
        console.log('Dirbam2');
        break;
    
}

//  IF
// Nauditini: >, <, ===, >=, <=, !==
 //nenaudotini, ==, !=