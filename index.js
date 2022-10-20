const { existsFile } = require('./functions.js');

const pathWay = 'proof.md';

const mdLinks = (pathWay) => {
  return new Promise((resolve, reject) => {
    if (existsFile(pathWay)) {
      resolve(console.log('The path exist'))
    } else {
      reject(new Error('Is a invalid path'));
    }
  })
};

mdLinks(pathWay);

module.export = { mdLinks };
