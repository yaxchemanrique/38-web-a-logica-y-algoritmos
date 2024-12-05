const array = [-4,-1,0,3,10];
const k = 3;

function maxSum(arr, k) {
  //debugger
  let ventanaInicial = arr.slice(0, k); // primer cuadrito azul
  
  let sumaInicial = ventanaInicial.reduce((acc, value) => acc + value)
  // -4 + -1 + 0 = -5
  let sumaMayor = sumaInicial;

  for ( let i = k; i < arr.length; i++) {
    sumaInicial = sumaInicial + arr[i] - arr[i - k];
    sumaMayor = Math.max(sumaMayor, sumaInicial); // 2
  }

  return sumaMayor;
}

console.log(maxSum(array, k))