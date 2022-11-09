const {
  absolutePath,
  getFiles,
  readFileMd,
  readAllFilesMds
} = require("../functions.js")

const testRoute = '.\\proof\\proof1.md';
const testRouteFalse = '.\\proof1.md';
const testRouteAbsolute = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md';
const testDirectory = '.\\proof';
const testDirectoryFalse = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\test\\functions.spec.js';

const testArrayLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    title: 'Markdown',
    file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md'
  },
  {
    href: 'https://deve.lopers.google.com/v8/',
    title: 'JavaScript V8 Chrome',
    file: 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md'
  }
];

describe('Absolute Path', () => {
  it('Absolute Path should be a function', () => {
    expect(typeof absolutePath).toBe('function');
  });

  it('Absolute Path should confirm if the path is Absolute, else convert to absolute', () => {
    expect(absolutePath(testRoute)).toEqual(testRouteAbsolute);
  });

  it('Absolute Path should confirm an absolute path because receive an absolute path', () => {
    expect(absolutePath(testRouteAbsolute)).toEqual(testRouteAbsolute);
  });
});

describe('Get files', () => {
  it('Get files should be a function', () => {
    expect(typeof getFiles).toBe('function');
  });

  it('Get file should read a directory', () => {
    const arrayDirectory =
      [
        'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md',
        'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof2.md',
        'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\subproof\\proof3.md'
      ]
    const arrays = getFiles(testDirectory);

    expect(arrays).toEqual(arrayDirectory);
  });

  it("Get file should return an empty array when it´s not a .md file", () => {
    expect(getFiles(testDirectoryFalse)).toEqual([]);
  });

});

describe('Read files MD', () => {
  it('Read files should be a function', () => {
    expect(typeof readFileMd).toBe('function');
  });

  it('Read files should return an array', () => {
    expect(readFileMd(testRoute)).toEqual(testArrayLinks);
  });
});

describe('Read all files MD', () => {
  it('Read files should be a function', () => {
    expect(typeof readAllFilesMds).toBe('function');
  });
});