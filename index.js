const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  isDirectory
} = require('./functions.js');

const pathWay = 'proof.md';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      console.log(chalk.inverse.blue('The path exist:', pathWay));
      absolutePath(pathWay)
      if (isDirectory(absolutePath())) {

      } else {

      }
      resolve(console.log('The path exist:', existsPath))
    } else {
      reject(new Error('Is a invalid path:', existsPath));
    }
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
