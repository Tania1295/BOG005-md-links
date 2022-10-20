const fs = require('fs'); // File system
const path = require('path');

const pathWay = 'proof1.md';

// Confirmar si la ruta existe
const existsFile = (pathWay) => fs.existsSync(pathWay);
console.log(typeof existsFile);

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

module.export = {
  existsFile: existsFile,
  absolutePath: absolutePath
};
