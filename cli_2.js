const { statsLinks } = require('./functions.js');
const { mdLinks } = require('./index.js');
const gradient = require('gradient-string');
const console = require('console');
const table = require('table');

const pathFile = process.argv[2]
const option = process.argv;

function cli(pathFile, option) {
    const optionStats = statsLinks();
    if (option.validate === true) {
        console.table([`href: ${obj.href}`, `text: ${obj.text}`, `file: ${obj.file}`, `status: ${obj.linksStatus}`, `message: ${obj.message}`]);
    }
    if (option.validate === false) {
        console.log(error);
    }

    if (option.validate === stats) {
        console.table([`Total: ${optionStats.total}`, `Unique:${optionStats.unique}`]);
    }

    if (option.validate && stats) {
        console.table([`href: ${obj.href}`, `text: ${obj.text}`, `file: ${obj.file}`, `status: ${obj.linksStatus}`, `message: ${obj.message}, Broken:${optionStats.broken}`])
    } else {
        console.log(error);
    }

}

cli(pathFile, option);
