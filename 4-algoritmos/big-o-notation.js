function constantTime(n) {
  console.log(n)
}

/* 
* Big O notation: O(1)
* Tiempo Constante
*/

function linearTime(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/* 
* 1: Cuántas operaciones vamos a ver? (5) -> 5 op (15) -> 15 op
* Big O notation: O(n) 
* Timepo Lineal
*/

function quadraticTime(n) {
  for (let i = 1; i <= n; i++) { // i = 1               // i = 2
    for (let j = 1; j <= n; j++) { // 1, 2, 3, 4, 5     // 1, 2, 3, 4, 5
      console.log(i, j);
    }
  }
}

/* 
* 1: Cuántas operaciones vamos a ver? (5) -> 25 op (7) -> 49 op
* Big O notation: O(n^2) 
* Tiempo Cuadrático 
*/

function linearTime2(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('hola!');
}

/* 
* 1: Cuántas operaciones vamos a ver? (5bill) -> 5bill + 1 op (7) -> 8 op
* Big O notation: O(n + 1) -> O(n)  
* Big O notation: O(n + 10) -> O(n)  
* Big O notation: O(n + 200) -> O(n)  
* Drop constants
* Tiempo Lineal 
*/

function linearTime3(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/* 
* 1: Cuántas operaciones vamos a ver?
* (5) -> 10 -> 2 * 5 
* (10) -> 20 -> 2 * 10 
---
* Big O notation: O(n + n) -> O(2n)
* Drop constants O(2n) -> O(n)
* Drop constants O(20n) -> O(n)
* Drop constants O(50n) -> O(n)
* tiempo lineal
*/

function quadraticTime2(n) {
  // O(n)
  for (let i = 0; i < n; i++) { // 5✅ 
    console.log(i);
  }

  // O(n^2)
  for (let i = 0; i < n; i++) { // 25✅
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

/* 
* 1: Cuántas operaciones vamos a ver?
* (5) -> 30 = 5 + 25 -> 5 + 5^2
* (10) -> 10 + 10^2 
---
* O(n + n^2) -> O(n^2)
* Drop non dominants / Eliminar los no dominantes

* O(n^3 + n^2 + 2n + 100) -> O(n^3)
* O(2*n^2 + 5) -> O(n^2)
*/

function logger(m, n) {
  for (let i = 0; i < m; i++) { // m veces
    for (let j = 0; j < n; j++) { // n veces
      console.log(i, j);
    }
  }
}

// logger(3, 2) // 3 * 2 = 6
// logger(5, 3) // 3 * 5 = 15

/* 
* O(m * n)
* different terms / términos diferentes
*/
