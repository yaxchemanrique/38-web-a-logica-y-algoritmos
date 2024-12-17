const fs = require('node:fs');
const path = '.'

fs.readdir(path, (err, files) => {
  if(err) {
    console.log(`No se pudo leer el directorio ${path}`);
    return
  }

  /* for(let i = 0; i < files.length; i++) {
    console.log(files[i]);
  } */

  files.forEach(file => console.log(file));
})