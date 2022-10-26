const fs = require('fs');
const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  getFiles
} = require('./functions.js');

const pathWay = 'proof';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
if (existsPath(pathWay)){
  console.log(chalk.inverse.blue('The path exist'));
  const absoPath = absolutePath(pathWay);
  console.log(chalk.inverse.blue('The absolute path is:', absoPath));
  if (fs.statSync(absoPath).isDirectory()){
    console.log(chalk.inverse.blue('The directory is:', absoPath));
    const arrMd = getFiles(absoPath);
    console.log(chalk.inverse.blue('The array from the directory is:', arrMd));
  }
}
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
