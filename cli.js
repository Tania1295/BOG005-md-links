const { statsLinks, statsValidate } = require('./functions.js');
const { mdLinks } = require('./index.js');
const gradient = require('gradient-string');
const figlet = require('figlet');

const pathFile = process.argv[2]
const options = process.argv;

function cli(pathFile, options) {

    console.log(gradient.pastel(figlet.textSync('Md-links Librarie')));

    console.log(gradient.cristal('Welcome to tinfantebonilla-md-links \nto figure out about the status of your links'));

    if (pathFile && options === undefined) {
        console.log(gradient('cyan', 'pink', 'red', 'green', 'blue')(' ⚠⚠ The path is invalid!'))
    } else if (options.includes('--stats') && options.includes('--validate')) {
        (mdLinks(pathFile, { validate: true }).then((answer) => {
            console.log(statsValidate(answer))
        })).catch(error => {
            console.log('It´s not a valid path')
        })
    } else if (options.includes('--validate')) {
        (mdLinks(pathFile, { validate: true }).then((answer) => {
            console.log(answer)
        })).catch(error => {
            console.log("⚠⚠ The path or directory doesn´t exits")
        })
    } else if (options.length <= 3) {
        (mdLinks(pathFile, { validate: false }).then((answer) => {
            console.log(answer)
        })).catch(error => {
            console.log('🛠🛠 Invalid option write --validate to know the links or \nwrite --stats to know the stats of the links or both');
        })
    } else if (options.includes('--stats')) {
        (mdLinks(pathFile, { validate: true }).then((answer) => {
            console.log(statsLinks(answer))
        })).catch(error => {
            console.log("⚠⚠ The directory or file doesn´t exits");
        })
    } else if (options !== '--stats' && options !== '--validate' && options !== undefined) {
        console.log('🛠🛠 Invalid option write: --validate to know the links or \nwrite --stats to know the stats of the links or --stats --validate')
    }
}

cli(pathFile, options)
