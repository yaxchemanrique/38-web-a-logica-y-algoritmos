const http = require('node:http');
const PORT = 3000;

/* const server = http.createServer((peticion, respuesta) => {
  console.log('la peticion ha sido recibida');
  respuesta.end('Hola desde el servidor');
}) */

  // request response
const server = http.createServer((req, res) => {
  console.log('Hola, la peticion ha sido recibida');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <h1>Este es un H1 en el servidor</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam et pariatur porro, nisi modi minus distinctio unde odit iste!</p>
    <ul>
      <li>hola 1</li>
    </ul>
    `)
  // res.end('Hola desde el servidor');
})

// Siempre tiene que estar
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})


/* 
  * Rutas con http
  * Express -> modulo de npm
  * React
*/