// function array(number){
//     let sum = 0;

//     for (let i = 0; i < number.length; i++) {
//       if (number[i] >= 0) {
//       sum = sum + number[i];
//     } else {
//         sum = sum + (number[i] * 0);
//     }
// }
//   return sum;
//   }
  
  
console.log(arrayMadness([2,3,4],[1,2,3]));
console.log(arrayMadness([1,2,3],[0,1,2]));
console.log(arrayMadness([5,3,2,4,1],[15]));
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]));
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]));
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]));
console.log(arrayMadness([2,4,6,8,10,12,14],[lalala, 5,7,9,11,13]));


  console.log('----------------------');

  function arrayMadness(a, b) {
 
//     if (typeof a !== 'object') {
      a[i] = 0;
  };
if (typeof b !== 'object'){
   b[j] = 0;
};

  if (a.length === 0) {
      a[i] = 0;
  };

  if (a.length === 0) {
      b[j] = 0;
  };

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < a.length; i++) {
  sum1 = sum1 + (a[i] * a[i]);
  console.log(`Suma yra: ` + sum1)
};

for (let j = 0; j < b.length; j++){
  sum2 = sum2 + (b[j] * b[j]);
  console.log(`Suma yra: ` + sum2)
};

if (sum1 > sum2) {
 return `true`;
} 
return `false`;
}
console.log(arrayMadness([2,3,4],[1,2,3]));
console.log(arrayMadness([1,2,3],[0,1,2]));
console.log(arrayMadness([5,3,2,4,1],[15]));
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]));
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]));
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]));
console.log(arrayMadness([2,4,6,8,10,12,14],[lalala, 5,7,9,11,13]));