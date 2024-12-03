let array = [2, 4, 6, 8, 10, 15, 24, 27]; // 4 -> arr.length = 5
let target = 23;

function twoSum(arr, target) {
  // debugger
  let izq = 0;
  let der = arr.length - 1;
  
  while (izq < der) {
    let suma = arr[izq] + arr[der];

    if(suma === target) {
      return [izq, der];
    } else if(suma < target) {
      /* izq = izq + 1;
      izq += 1; */
      izq ++;
    } else {
      der --;
    }
  }  
  return [];
}

const indicesResultado = twoSum(array, target);
console.log(indicesResultado)

/* 
* tricotomía
  * a === b
  * a < b
  * b < a
*/