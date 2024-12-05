const palabra = 'hola, Como Estas?'
const split = palabra.toLowerCase().split('');
console.log(split)

// const letra = '-';
// console.log(!/[\s,;.\-:?']+/.test(letra))

const arrayAct =
  split.filter((letra) => !/[\s,;.\-:?']+/.test(letra));

console.log(arrayAct);

const str = arrayAct.join('');
console.log(str)