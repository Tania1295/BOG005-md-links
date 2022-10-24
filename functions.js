const fs = require('fs'); // File system
const path = require('path');

const pathWay = 'proof\\proof1.md';
const pathWayTwo = 'package.json';

// Confirmar si la ruta existe
const existsPath = (pathWay) => fs.existsSync(pathWay);
console.log(typeof existsPath);

// Confirmar si la ruta es absoluta si no es así convertirla en absoluta
const absolutePath = (pathWay) => {
  const absoPath = path.isAbsolute(pathWay);
  if (absoPath === false) {
    const convertPath = path.resolve(pathWay)
    console.log(convertPath)
    return convertPath
  }
  return pathWay
};

// Conocer la extensión del archivo
const extensionName = (pathWay) => path.extname(pathWay) === '.md';
console.log(extensionName(pathWay));

// Conocer si es un directorio
const isDirectory = (pathWay) => fs.statSync(pathWay).isDirectory();
console.log(isDirectory(pathWay));



module.exports = {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory
};
