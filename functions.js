const fs = require('fs'); // File system
const path = require('path');
const marked = require('marked');
const chalk = require('chalk');
const fetch = require('node-fetch');

// const pathWay = 'proof';
// const pathWay = 'package.json';
// const pathWay = '.\\proof\\proof1.md';
// const pathFiles = 'proof';
// const pathWay = '.\\proof.md';

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

// Obtener archivos .md y leer dentro de un directorio si hay archivos .md (recursividad)
const getFiles = (pathWay) => {
  const realPath = absolutePath(pathWay);
  let arrayPaths = [];
  // Confirmar si es un archivo .md
  if (fs.statSync(realPath).isFile() === true && path.extname(realPath) === '.md') {
    arrayPaths.push(realPath);
  } else if (fs.statSync(realPath).isFile() && path.extname(realPath) !== '.md') {
    console.log(chalk.inverse.red("❌❌ It´s not a .md file", realPath));
  }
  else { // Confirmar si hay un directorio y buscar archivos .md nuevamente
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
// console.log(getFiles(pathWay), "Ingreso")

// Función getFiles ejecutandose y trayendo el array de links
// const arrayMdFiles = getFiles(pathWay);
// console.log("Get the array of files .md", arrayMdFiles);

// Leyendo un archivo .md para obtener los links indepencdiente con la información necesaria
const readFileMd = (fileMd) => {
  let arrLinks = []
  return new Promise((resolve, reject) => {
    fs.readFile(fileMd, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        let renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          let refLinks = {
            'href': href,
            'title': text,
            'file': fileMd,
          }
          if (refLinks.href.includes('http')) {
            arrLinks.push(refLinks)
          }
        }
        marked.marked(data, { renderer });

      }
      resolve(arrLinks)
    })
  })
}

// Resolver la promesa para todos los links
const readAllFilesMds = (arrayMdFiles) => {
  // console.log('Get arrayMds', arrayMdFiles);
  let arrLinks = arrayMdFiles.map((fileMd) => {
    return readFileMd(fileMd)
  })
  return Promise.all(arrLinks).then(res => res.flat())
}
// console.log("Should get the links of the files", readFileMd(arrayMdFiles));
// readFileMd(arrayMdFiles).then((data) => { console.log('Get the array of .md', data) });
// const objeLinks = readFileMd(arrayMdFiles).then((data) => { return data });

/* const objeLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    title: 'Markdown',
    file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md'
  },
  {
    href: 'https://deve.lopers.google.com/v8/',
    title: 'JavaScript V8 Chrome',
    file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md'
  }
]; */

// Validar el estado de los links con la petición http
const linksStatus = (objeLinks) => {
  const readLinks = objeLinks.map((data) => {
    return fetch(data.href)
      .then((promiseFetch) => {
        data.status = promiseFetch.status;
        data.message = promiseFetch.status <= 399 ? 'Ok' : 'Fail';
        return data;
      })
      .catch(() => {
        data.status = 'Server not responding';
        data.message = 'Fail';
        return data;
      })
  })
  return Promise.all(readLinks);
}
// linksStatus(objeLinks).then((link) => console.log(link)).catch((err) => console.log(err));

// Función para tener las estadisticas de los links
const statsLinks = (objeLinks) => {
  return {
    Total: objeLinks.length,
    Unique: new Set(objeLinks.map((linkObj) => linkObj.href)).size,
  };
};

const statsValidate = (filePath) => {
  const broken = filePath.filter((file) => file.message === 'Fail').length;
  return {
    Total: filePath.length,
    Unique: new Set(filePath.map((linkObj) => linkObj.href)).size,
    Broken: broken,
  };
};

module.exports = {
  absolutePath,
  getFiles,
  readFileMd,
  readAllFilesMds,
  linksStatus,
  statsLinks,
  statsValidate
};
