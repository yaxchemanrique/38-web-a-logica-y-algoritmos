// ES06 Modules
// import { math } from 'path.mjs' -> export
// import math from 'path.mjs' -> export default

/* 
  * Common Js
*/
// console.log('este es el index.js')
/* const math = require('./math.js'); // import
console.log(math)

console.log(math.suma(2,5))
console.log(math.resta(2,5))
console.log(math.total) */

/*
const { suma, resta, total } = require('./math.js');
console.log(suma(2,5))
console.log(resta(2,5))
console.log(total)
*/
/*
! File System
const { statSync } = require('node:fs');

const path = '/Users/yaxche'
const stats = statSync(path);
console.log(path)
// console.log(stats)
 console.log(`es un archivo? ${stats.isFile()}
es un directorio? ${stats.isDirectory()}
Pesa ${stats.size} bytes`)
*/

const path = require('node:path');
console.log(path.sep)

const arr = ['user', 'yaxche', 'misArchivos', 'carpeta']
// const filePath = path.join('Usesr', 'folder1', 'folder2', 'miArchivo.txt')
const filePath = path.join(...arr)
console.log(filePath)

const base = path.basename('/Users/misArchivos/contrasenas/miContrasena.txt')
console.log(base)

const extension = path.extname('/Users/misArchivos/contrasenas/miContrasena.txt')
console.log(extension)

