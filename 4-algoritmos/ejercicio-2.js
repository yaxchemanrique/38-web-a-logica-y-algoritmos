let arr = [-4, -1, 0, 3, 10];

function sortedSquares(arr) {
  let izq = 0;
  let der = arr.length - 1;
  let resultado = new Array(arr.length);
  
  while(izq <= der) {
    const izqSqrt = arr[izq] ** 2
    const derSqrt = arr[der] ** 2
    console.log(izqSqrt, derSqrt);
    if (izqSqrt < derSqrt) {
      resultado[der] = derSqrt;
      der--;
    } else {
      resultado[der] = izqSqrt;
      izq++;
    }
  }
  return resultado;
}


const resultado = sortedSquares(arr);
console.log(resultado)