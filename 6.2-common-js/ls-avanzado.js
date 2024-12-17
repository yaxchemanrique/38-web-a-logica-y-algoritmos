/* 
node  ls-avanzado.js  Users/yaxche
! a nombre del archivo  150 bytes 6:28
! d nombre del archivo  150 bytes 8:51
*/

const fs = require('node:fs');
const path = require('node:path')
const directorio = process.argv[2] ?? '.';
// console.log(directorio)

fs.readdir(directorio, (err, archivos) => {
  if(err) {
    console.log(`no se pudo leer el directorio ${directorio}`);
    process.exit(1);
  }

  archivos.forEach(archivo => {

    const filePath = path.join(directorio, archivo); //Users/yaxche/archivo3
      
    fs.stat(filePath, (err, stats) => {
      if(err) {
        console.log(`Hubo un problema con el archivo ${archivo}`);
        process.exit(1);
      }
      const isDirectory = stats.isDirectory();
      const fileType = isDirectory ? 'd' : 'a';
      const fileSize = `${stats.size}bytes`;
      const modifiedDate = stats.mtime.toLocaleString();

      const data = `${fileType} ${archivo.padEnd(30, ' ')} ${fileSize.padEnd(10, ' ')} ${modifiedDate}`;
      console.log(data)
    })
    }
   )
})
