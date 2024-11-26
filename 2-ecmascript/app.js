//! SCOPE 
/* console.log(foo)

const foo = 'bar'

console.log(foo) */

/* function sayHello() {
  var firstName = 'Yaxche'
}
// name = '5'
console.log(firstName); */

// if(5 < 10) {
//   let firstName = 'Yaxche';
// }

// console.log(firstName)
/* 
if(5 > 4) {
  let firstName = 'Yaxche';
  if( 10 < 20) {
    let firstName = 'David';
    if (30 < 40) {
      let firstName = 'Samuel';
      console.log(firstName)
    }
  }
}

switch (key) {
  case value:
    {

    }
    break;

  default:
    break;
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

 */

//! Literal templates

function sayHello(firstName = 'user') {
  const saludo = `Hola, ${firstName}!`;
  console.log(saludo)
  // console.log(firstName)
  /* const html = `
  <div>
    <h1>${firstName}</h1>
  </div>
  `; */
}

sayHello('Yaxche')
// undefined, NaN y [Object object]

/* 
let age = 26;
const isOfLegalAge = (age >= 18) ? true : false;
console.log(isOfLegalAge)
                        //mayor || menor
console.log(`Eres ${isOfLegalAge ? 'mayor' : 'menor'} de edad`)
// falsy y truthy
 */

let user = {
  lastName: 'Manrique',
  birthYear: 1993,
  gmail: 'yaxchemanrique@gmail.com',
  firstName: 'Yaxche',
}

let {firstName, lastName, gmail: gmailAccount} = user

// let {firstName} = user
// let firstName = user.firstName

/* console.log(`Hola, ${firstName} ${lastName}. Tu cuenta de google es ${gmailAccount}`);
console.log(`Hola, ${user.firstName} ${user.lastName}. Tu cuenta de google es ${user.gmail}`) */

let fruit = ['fresa', 'cereza', 'manzana', 'uva', 'pera'];

const [favoriteFruit, top1, , top3, top4] = fruit;
console.log(favoriteFruit)
/* console.log(top1)
console.log(top2)
console.log(top3)
console.log(top4) */
/* 
// Declaracón
function sayHello(firstName = 'user') {
  const saludo = `Hola, ${firstName}!`;
  console.log(saludo)
}

// Expresion
const sayHello = function (firstName) {
  console.log('hola!')
} */

const sayHelloArrow = (firstName = 'usuario') => {
  console.log(`Hola ${firstName}`)
}; 

sayHelloArrow('Yaxche');

const arr = [1, 4, 9, 16];

const modified = arr.map((number) => {
  const sqr = number**2;
  const sum = sqr + 10;
  return sum
})

const modified2 = arr.map((number, index) => (
  index * number
))

const modified4 = arr.map(( _, index) => (
  index
))

const modified3 = arr.map(number => number + 2)

console.log(modified) 
console.log(modified2) 
console.log(modified3) 
console.log(modified4) 

const cuentas = [50, 30, 100, 80];
const propinas = cuentas.map(x => x*1.15)
console.log(propinas)

/* const arr = [<p>hola</p>, <h1>titulos</h1>]
[hola, titulos] */
/* 
let recetas = [
  {
    indegredidientes: [jsdbb],
    id: 213,
    procedimeinto:'jkasbjb'
  },
  {
    indegredidientes: [jsdbb],
    id: 213,
    procedimeinto:'jkasbjb'
  },
  {
    indegredidientes: [jsdbb],
    id: 213,
    procedimeinto:'jkasbjb'
  },
  '500kg', 
]

`<h2>${titulo de la receta}</h2>
<p>${descripcion}</p>`
 */

