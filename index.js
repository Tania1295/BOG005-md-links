const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles
} = require('./functions.js');

const pathWay = 'package.json';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      console.log(chalk.inverse.blue('The path exist:', pathWay));
      const absoPath = absolutePath(pathWay);
      console.log(chalk.inverse.blue('The absolute path is:', absoPath));
      if (absoPath.isDirectory()) {
        console.log(chalk.inverse.blue('Is a directory:', isDirectory));
      } else {
        console.log(chalk.inverse.purple('Is a file:', isDirectory));
      }
      resolve(console.log('The path exist:', existsPath))
    } else {
      reject(new Error('Is a invalid path:', existsPath));
    }
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
