const process = require('process');
const { statsLinks } = require('./functions.js');
const { mdLinks } = require('./index.js');
const gradient = require('gradient-string');
const console = require('console');

const pathFile = process.argv.filter(pathWay => !(['--stats', '--validate'].includes(pathWay)))[2];
const validate = process.argv.includes('--validate');
const stats = process.argv.includes('--stats');
const help = process.argv.includes('--help');

mdLinks(pathFile, { option: validate, option: stats, option: help })
    .then((links) => {
        console.log(gradient('cyan', 'pink', 'red', 'green', 'blue')('Welcome to md-Link librarie to figure out about your links'))
        if (validate) {
            links.forEach((obj) => {

                console.table([`href: ${obj.href}`, `text: ${obj.text}`, `file: ${obj.file}`, `status: ${obj.linksStatus}`, `message: ${obj.message}`])
            })

        } if (stats) {

            const optionStats = statsLinks(links)

            console.table([`Total: ${optionStats.total}`, `Unique:${optionStats.unique}`]);

        } if (validate && stats) {

            const optionStats = statsLinks(links)

            console.table([` Broken:${optionStats.broken}`])

        } if (help) {
            console.log('Write  --validate  to know the links or \nWrite  --stats to know the stats of the links'.green)
        }

    })
    .catch((error) => console.log(error))
