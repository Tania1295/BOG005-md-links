const fs = require('fs'); // File system
const path = require('path');
const marked = require('marked');
const chalk = require('chalk');
const fetch = require('node-fetch');

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
console.log(getFiles(pathWay))

// Función getFiles ejecutandose y trayendo el array de links
const arrayMdFiles = getFiles(pathWay);
console.log("Get the array from files .md", arrayMdFiles);

// Leyendo archivos para obtener los links con la información necesaria
const readFileMd = (pathArray) => {
  return new Promise((resolve, reject) => {
    let arrLinks = [];
    pathArray.forEach(file => {
      fs.readFile(pathWay, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          let renderer = new marked.Renderer();
          renderer.link = (href, title, text) => {
            let refLinks = {
              'href': href,
              'title': text,
              'file': file,
            }
            if (refLinks.href.includes('http')) {
              arrLinks.push(refLinks)
            }
          }
          marked.marked(data, { renderer });
          resolve(arrLinks)
        }
      })
    })
  })
}
console.log(readFileMd(arrayMdFiles), "Se extraen links")

readFileMd(arrayMdFiles).then((data) => { console.log('Read the files: ', data) })

module.exports = {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles,
  readFileMd
};
