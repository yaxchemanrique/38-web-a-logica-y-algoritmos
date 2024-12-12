function busquedaLineal(arr, t) {
  for(let indice = 0; indice < arr.length; indice++) { // indice = 2
    if(arr[indice] === t) {
      return indice;
    }
  }
  return -1
}

let arr = [1, 4, 7, 48, 54, 32, 64];
let t = 7;
console.log(busquedaLineal(arr, t))