/* 
* Encotrar todos los subconjuntos de un arreglo
* input = [1, 2, 3]
* output = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/

function subconjuntos(arreglo) {
  const resultado = [];
  const solActual = [];
  // debugger

  function backtrack(inicio) {
    // const copia = Array.from(solActual)
    const copia = [...solActual];
    // console.log(copia)
    resultado.push(copia);


    for(let i = inicio; i < arreglo.length; i++) {
      solActual.push(arreglo[i]);

      backtrack(i + 1);
      
      solActual.pop();
    }
  }
  
  backtrack(0);
  return resultado;
}

// console.log(subconjuntos([1, 2, 3]))

/* const arr = [1, 2, 3]
...arr -> 1 2 3
arrCopia = [1, 2, 3] */

/* const arr = [1, 2, 3]
let arr2 = [4, 5, 6];
arr.push(arr2)
console.log(arr)
arr2 = [7, 8, 9];
console.log(arr) */

function subconjuntos2(arreglo) {
  let resultado = [[]];

  arreglo.forEach(num => {
    // console.log(num)
    const nuevosSubconjuntos = resultado.map(subconjunto => {
      return [...subconjunto, num]
    })
    // console.log(nuevosSubconjuntos)
    resultado = [...resultado, ...nuevosSubconjuntos];
  });
  return resultado;
}

console.log(subconjuntos2([1, 2, 3]))

// Complejidad de tiempo O(2^n)
// Complejidad de Espacio O(n)