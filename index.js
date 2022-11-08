const fs = require('fs');
const gradient = require('gradient-string');
const console = require('console');
// const chalk = require('chalk');

const {
  existsPath,
  absolutePath,
  getFiles,
  readAllFilesMds,
  linksStatus
} = require('./functions.js');

const pathWay = 'proof';

const mdLinks = (pathWay, option = { validate: true }) => {
  return new Promise((resolve, reject) => {
    const absoPath = absolutePath(pathWay);
    const mdFiles = getFiles(absoPath);

    if (existsPath(pathWay)) {
      if (fs.statSync(absoPath)) {
        console.log(gradient('cyan', 'pink', 'red', 'green', 'blue')('The path exist.'));
      }
    }
    readAllFilesMds(mdFiles).then((mdFilesRead) => {
      if (option.validate === true) {
        resolve(linksStatus(mdFilesRead))
      } else {
        resolve((mdFilesRead))
      }

    })
  });
};

mdLinks(pathWay).then((data) => {
  console.log(data);
}),

  module.exports = { mdLinks };
