const fs = require('fs'); // File system
const path = require('path');
const marked = require('marked');
const chalk = require('chalk');

// const pathWay = 'proof';
// const pathWay = 'package.json';
const pathWay = '.\\proof\\proof1.md';
// const pathFiles = 'proof';

// Confirmar si la ruta existe
const existsPath = (pathWay) => fs.existsSync(pathWay);
// console.log(typeof existsPath);

// Confirmar si la ruta es absoluta si no es así convertirla en absoluta
const absolutePath = (pathWay) => {
  const absoPath = path.isAbsolute(pathWay);
  if (absoPath === false) {
    const convertPath = path.resolve(pathWay)
    // console.log(convertPath)
    // console.log(pathWay)
    return convertPath
  }
  return pathWay
};

// Confirmar la extensión del archivo
const extensionName = (pathWay) => path.extname(pathWay) === '.md';
// console.log(extensionName(pathWay));

// Confirmar si es un directorio
const isDirectory = (pathWay) => fs.statSync(pathWay).isDirectory();
// console.log(isDirectory(pathWay));

// Obtener archivos .md y leer dentro de un directorio si hay archivos .md
const getFiles = (pathWay) => {
  const realPath = absolutePath(pathWay);
  let arrayPaths = [];
  // Confirmar si es un archivo .md
  if (fs.statSync(realPath).isFile() === true && path.extname(realPath) === '.md') {
    arrayPaths.push(realPath);
  } else if (fs.statSync(realPath).isFile() && path.extname(realPath) !== '.md') {
    console.log(chalk.inverse.red("It´s not a .md file", realPath));
  }
  else { // Confirmar si es un directorio
    fs.readdirSync(realPath).forEach(file => {
      let pathDirectory = path.join(realPath, file);
      if (fs.statSync(realPath).isDirectory() === true) {
        arrayPaths = arrayPaths.concat(getFiles(pathDirectory));
      } else {
        if (path.extname(pathDirectory) === '.md') {
          arrayPaths.push(pathDirectory)
        }
      }
    })
  }
  return arrayPaths;
}

// Leer un archivo
const readfileContent = (pathWay) => fs.readFile(pathWay, "utf-8");
console.log(readfileContent(pathWay))

// Obtener arreglo con los archivos .md
const arrayFilesMd = getFiles(pathWay);

// Leer archivo .md para extraer los links
function findLinks(filePathMD) {
  return new Promise((resolve, reject) => {
    const linksArray = [];
    fs.readFile(filePathMD, 'utf-8', (err, data) => {
      if (err) resolve(err);
      marked.marked(data, {
        walkTokens: (token) => {
          if (token.type === 'link' && token.href.includes('http')) {
            linksArray.push({
              href: token.href,
              text: token.text,
              file: filePathMD
            })
          }
        }
      })
      resolve(linksArray)
    })
  })
}
console.log(findLinks(filePathMD))

/* // Leer archivo .md para extraer links
const findLinks = (param1, param2) => {
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  let arrayLinks = [...param1.matchAll(regExp)];
  let arrayObjects = [];
  for (var i = 0; i < arrayLinks.length; i++) {
    arrayObjects.push({
      href: arrayLinks[i][2],
      text: arrayLinks[i][1],
      file: param2,
    });
  }
  return arrayObjects;
};
console.log(findLinks(pathWay)) */

module.exports = {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles,
  readfileContent,
  findLinks
};
