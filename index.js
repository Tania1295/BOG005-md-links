const fs = require('fs');
// const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  getFiles,
  readFileMd
} = require('./functions.js');

const pathWay = 'proof';

const mdLinks = (pathWay, option = { validate: false, stats: false }) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      console.log('The path exist.');
      const absoPath = absolutePath(pathWay);
      console.log('The absolute path is:', absoPath);
      if (fs.statSync(absoPath).isDirectory()) {
        console.log('The directory is:', absoPath);
        const arrMd = getFiles(absoPath);
        console.log('The array from the directory is:', arrMd);
        const objLinks = readFileMd(arrMd).then(res => { console.log('The information of the links is:', res) });
      }
    }
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
