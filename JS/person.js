
// Name: Vardenis
// birthyear: 2002

function birth(name, birthYear){
    let currentDate = 2020;
    let metai = currentDate -= birthYear;
    return `${name} dabar yra ${metai} metu.`;
}

console.log(birth(`Vardenis`, 2002))

console.log('------');

// function birth(name, birthYear, birthMonth, birthDay){
//     let currentYear = 2020;
//     let currentMonth = 09;
//     let currentDay = 29;
//     let metai = currentYear -= birthYear;
//     let dienos = ((birthYear * 365) += ((birthMonth -= 1) * 30) += birthDay) -= ((currentYear * 365) += ((currentMonth -= 1) * 30) += currentDay);
//     return `${name} dabar yra ${metai} metu ir ${dienos} dienu`;
// }

// console.log(birth(`Vardenis`, 2002, 03, 06))
