function busquedaBinaria(arr, t) {
  
  if(arr.length === 0) {
    return -1;
  }

  let izq = 0;
  let der = arr.length - 1;
  debugger
  while(izq <= der) {
    // let mitad = Math.trunc((izq + der) / 2);
    let mitad = Math.floor((izq + der) / 2);
    
    if(arr[mitad] === t) {
      return mitad;
    }

    if(arr[mitad] < t) {
      izq = mitad + 1;
    }


    if(arr[mitad] > t) {
      der = mitad - 1;
    }
  }

  return -1;
}

let arr = [1, 3, 6, 8, 9, 23, 54, 56]
let t = 9;

console.log(busquedaBinaria(arr, t))