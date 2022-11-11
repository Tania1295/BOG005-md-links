const dataMock = {
    pathWay: '.\\proof.md',
    absolutePath: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md',
    arrayFiles: [
        'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md'
    ],
    validateFalse: [
        {
            href: 'https://www.githubstatus.com/',
            title: 'Github Status',
            file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md'
        },
        {
            href: 'https://es.stackoverflow.com/',
            title: 'Stack Overflow',
            file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md'
        }
    ],
    validateTrue: [
        {
            href: 'https://www.githubstatus.com/',
            title: 'Github Status',
            file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md',
            status: 200,
            message: 'Ok'
        },
        {
            href: 'https://es.stackoverflow.com/',
            title: 'Stack Overflow',
            file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof.md',
            status: 200,
            message: 'Ok'
        }
    ],
    stats: { Total: 2, Unique: 2 },
    statsAndValidate: { Total: 2, Unique: 2, Broken: 0 },
}

module.exports = { dataMock };