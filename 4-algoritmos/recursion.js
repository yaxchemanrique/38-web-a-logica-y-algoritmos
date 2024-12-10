/* 
* Calcular el valor en la posicion N usando la
* secuencia de Fibonacci
   indices:    0  1  2  3  4  5  6
  * Secuencia: 1, 1, 2, 3, 5, 8, 13, 21, ...
  * f(0) = 1
  * f(1) = 1
  * f(6) = f(5) + f(4)
  * f(x) = f(x - 1) + f(x - 2)
*/

function fibonacci(x) {
  if(x === 0 || x === 1) return 1;
  
  return (fibonacci(x - 1) + fibonacci(x - 2))
}

console.log(fibonacci(6))
console.log(fibonacci(7))

/* 
* O(2^n) -> Exponencial!
*/

function fibonacci2(x) {
  const diccionario = {};

  function helper(x) {
    if(x === 0 || x === 1) {
      return 1;
    }

    // if(diccionario[x]) return diccionario[x];
    if(diccionario[x] !== undefined) {
      return diccionario[x];
    }

    // 3: f(2)[-> 2] + f(1)[-> 1]
    diccionario[x] = fibonacci2(x - 1) + fibonacci2(x - 2);
    return diccionario[x];
  }

  return helper(x);
}

const diccionario = { 
  2: 2,
  3: 3, // diccionario[4] -> undefined
}

console.log(fibonacci2(6))
console.log(fibonacci2(7))

/* 
* O(n + 1) = O(n)
*/

/*
let obj = {
  firstName : 'Yaxche',
  lastName: 'Manrique'
}

console.log(obj['job'])
console.log(Boolean(undefined))

obj.age = 30;
console.log(obj.firstName)

const nuevaPropiedad = 'twitter'
// variables, operadores ternarios, etc..
obj[nuevaPropiedad] = '@yaxchemanrique'

console.log(obj)
*/

// Solucion Alterna:
let fibonacci3 = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0, cur = 1;
  for (let i = 2; i <= n; i++) {
      let next = prev + cur;
      prev = cur;
      cur = next;
  }

  return cur;
};

/* 
* Complejidad de tiempo: O(n)
* Complejidad de espacio: O(1)
*/