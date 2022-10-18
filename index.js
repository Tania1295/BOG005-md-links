const fs = require('fs');

const pathWay = "prueba.md";
console.log(pathWay)

function existsFile(pathWay) {
  return fs.existsSync(pathWay);
}

console.log(existsFile(pathWay))

const mdLinks = (pathWay, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(pathWay) === true) {
      resolve(console.log("The path exist"))
    } else {
      reject(new Error('Is a invalid path'));
    }
  })

}

/* function existsFile(pathWay) {
  return new Promise((resolve, reject) => {
    fs.stat(pathWay, (err, stats) => {
      if (pathWay === 'null') {
        reject(err);
      }
      // resolvemos la promesa
      resolve(stats.isFile());
    });
  })
};

existsFile(pathWay)
  .then(exists => {
    if (exists) {
      console.log("Existe")
    } else {
      //lanza error
    }
  })
  .catch(err => {
    console.log("error")
  }); */

mdLinks(pathWay)

module.export = { existsFile };
