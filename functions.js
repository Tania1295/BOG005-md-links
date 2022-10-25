const chalk = require('chalk');
const fs = require('fs'); // File system
const path = require('path');

const pathWay = 'proof';
const pathWayTwo = 'package.json';

// Confirmar si la ruta existe
const existsPath = (pathWay) => fs.existsSync(pathWay);
// console.log(typeof existsPath);

// Confirmar si la ruta es absoluta si no es así convertirla en absoluta
const absolutePath = (pathWay) => {
  const absoPath = path.isAbsolute(pathWay);
  if (absoPath === false) {
    const convertPath = path.resolve(pathWay)
    // console.log(convertPath)
    return convertPath
  }
  return pathWay
};

// Confirmar la extensión del archivo
const extensionName = (pathWay) => path.extname(pathWay) === '.md';
console.log(extensionName(pathWay));

// Confirmar si es un directorio
const isDirectory = (pathWay) => fs.statSync(pathWay).isDirectory();
// console.log(isDirectory(pathWay));

// Obtener archivos .md y leer dentro de un directorio si hay archivos .md
function getFiles(pathWay) {
  const realPath = absolutePath(pathWay);
  let arrayPaths = [];
  // Confirmar si hay archivo .md
  if (fs.statSync(realPath).isFile() === true && path.extname(realPath) === '.md') {
    arrayPaths.push(realPath);
  } else if (fs.statSync(realPath).isFile() && path.extname(realPath) !== '.md') {
    console.log(chalk.inverse.red("It´s not a .md file", extensionName));
  }
  else { // Confirmar si es un directorio
    fs.readdirSync(realPath).forEach(file => {
      let pathDirectory = path.join(realPath, file);
      if (fs.statSync(realPath).isDirectory() === true) {
        arrayPaths = arrayPaths.concat(getFiles(pathDirectory));
      } else {

      }
  })
  return arrayPaths;
}
}
console.log(getFiles(pathWay));

module.exports = {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles
};
