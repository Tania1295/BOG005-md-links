const fs = require('fs');
const gradient = require('gradient-string');
const console = require('console');
// const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  getFiles,
  readFileMd,
  linksStatus,
} = require('./functions.js');

// const pathWay = 'proof';

const mdLinks = (pathWay, option = { validate: false }) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      console.log(gradient('cyan', 'pink', 'red', 'green', 'blue')('The path exist.'));
      const absoPath = absolutePath(pathWay);
      console.log('The absolute path is:', absoPath);

      if (fs.statSync(absoPath).isDirectory()) {
        console.log('The directory is:', absoPath);
        const mdFiles = getFiles(absoPath);
        console.log('The array from the directory is:', mdFiles);

        readFileMd(mdFiles).then((links) => {
          if (option.validate === false) {
            resolve(links);
            return;
          }
          linksStatus(links).then((res) => {
            resolve(res)
          })
        })
      }
    }
  })
};

module.exports = { mdLinks };
