const fs = require('fs');
const gradient = require('gradient-string');
const console = require('console');
// const chalk = require('chalk');

const {
  absolutePath,
  getFiles,
  readAllFilesMds,
  linksStatus
} = require('./functions.js');

// const pathWay = 'proof';

const mdLinks = (pathWay, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absoPath = absolutePath(pathWay);
    const mdFiles = getFiles(absoPath);
    if (options.validate === false) {
      if (mdFiles.length === 0) {
        resolve("It´s not a markdown file")
      }
      resolve(readAllFilesMds(mdFiles));
    } else {
      if (mdFiles.length === 0) {
        resolve("It´s not a markdown file")
      }
      readAllFilesMds(mdFiles).then((mdFilesRead) => {
        if (options.validate === true) {
          resolve(linksStatus(mdFilesRead))
        } else {
          resolve((mdFilesRead))
        }
      })
    }
  });
};

/* mdLinks(pathWay).then((data) => {
  console.log(data);
}), */

module.exports = { mdLinks };
