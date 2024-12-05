const nums = [1,1,1,0,0,0,1,1,1,1,0];
const k = 2;

function unosConsecutivos(arr, k) {
  debugger
  let longitudMaxima = 0;
  let ceros = 0;
  let izq = 0;
  for (let der = 0; der < arr.length; der++) {
    if(arr[der] === 0) {
      ceros = ceros + 1;
    }
    while(ceros > k) {
      if(arr[izq] === 0) {
        ceros = ceros - 1;
      }
      izq = izq + 1;
    }
    const longitudActual = der - izq + 1;
    longitudMaxima = Math.max(longitudMaxima, longitudActual);
  }
  return longitudMaxima;
}

console.log(unosConsecutivos(nums, k))