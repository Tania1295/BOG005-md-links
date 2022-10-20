const fs = require('fs'); // File system
const path = require('path');

const pathWay = 'proof1.md';

// Confirmar si la ruta existe
const existsPath = (pathWay) => fs.existsSync(pathWay);
console.log(typeof existsDocument);

// Confirmar si la ruta es absoluta si no es así convertirla en absoluta
function absolutePath(pathWay) {
  const absoPath = path.isAbsolute(pathWay);
  if (absoPath === false) {
    const convertPath = path.resolve(pathWay)
    console.log(convertPath)
    return convertPath
  }
  return pathWay
};

absolutePath(pathWay);

module.exports = {
  existsPath,
  absolutePath
};
