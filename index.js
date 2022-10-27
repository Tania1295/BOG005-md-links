const fs = require('fs');
// const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  getFiles,
  getLinks
} = require('./functions.js');

const pathWay = 'proof';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      console.log('The path exist');
      const absoPath = absolutePath(pathWay);
      console.log('The absolute path is:', absoPath);
      if (fs.statSync(absoPath).isDirectory()) {
        console.log('The directory is:', absoPath);
        const arrMd = getFiles(absoPath);
        console.log('The array from the directory is:', arrMd);
      }
    }
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
