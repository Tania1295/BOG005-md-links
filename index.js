const { existsPath } = require('./functions.js');

const pathWay = 'proof.md';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
    if (existsPath(pathWay)) {
      resolve(console.log('The path exist:', existsPath))
    } else {
      reject(new Error('Is a invalid path:', eexistsPath));
    }
  })
};

mdLinks(pathWay);

module.exports = { mdLinks };
