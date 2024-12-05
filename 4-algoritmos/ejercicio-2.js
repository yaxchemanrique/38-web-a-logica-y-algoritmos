let arr = [-4, -1, 0, 3, 10];
let arr2 = [-7,-3,2,3,11];

function sortedSquares(arr) {
  let izq = 0;
  let der = arr.length - 1;
  let resultado = new Array(arr.length);
  let pos = arr.length - 1;
  
  while(izq <= der) { // O(n)
    const izqSqrt = arr[izq] ** 2
    const derSqrt = arr[der] ** 2

    if (izqSqrt < derSqrt) {
      resultado[pos] = derSqrt;
      der--;
    } else {
      resultado[pos] = izqSqrt;
      izq++;
    }
    pos--;
  }
  return resultado;
}

console.log(arr2)
const resultado = sortedSquares(arr2);
console.log(resultado)

/* 
* Big O notation -> O(n)
*/