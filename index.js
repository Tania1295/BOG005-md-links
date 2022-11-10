const {
  absolutePath,
  getFiles,
  readAllFilesMds,
  linksStatus
} = require('./functions.js');

// const pathWay = 'proof';

const mdLinks = (pathWay, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    // throw Error('MD LINKS');
    // reject('Md Links!')
    const absoPath = absolutePath(pathWay);
    const mdFiles = getFiles(absoPath);
    const getInfoLinks = readAllFilesMds(mdFiles);

    if (options.validate === false) {
      if (mdFiles.length === 0) {
        resolve("❌❌ It´s not a markdown file")
      }
      resolve(getInfoLinks);
    } else {
      if (mdFiles.length === 0) {
        resolve("❌❌ It´s not a markdown file")
      }
      readAllFilesMds(mdFiles).then((mdFilesRead) => {
        linksStatus(mdFilesRead).then(filesRead => resolve(filesRead))
      })
    }
  });
};

/* mdLinks(pathWay).then((data) => {
  console.log(data);
}), */

module.exports = { mdLinks };
