const {
  absolutePath,
  getFiles,
  readFileMd,
  readAllFilesMds,
  statsLinks,
  statsValidate
} = require("../functions.js");

const { dataMock } = require("./mockdata.js");

const fetch = require('node-fetch');

jest.mock('node-fetch');

const testRoute = '.\\proof\\proof1.md';
const testRouteFalse = '.\\proof1.md';
const testRouteAbsolute = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md';
const testDirectory = '.\\proof';
const testDirectoryFalse = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\test\\functions.spec.js';

describe('Absolute Path', () => {
  it('Absolute Path should be a function', () => {
    expect(typeof absolutePath).toBe('function');
  });

  it('Absolute Path should confirm if the path is Absolute, else convert to absolute', () => {
    expect(absolutePath(testRoute)).toBe(testRouteAbsolute);
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
});

describe('Read all files MD', () => {
  it('Read files should be a function', () => {
    expect(typeof readAllFilesMds).toBe('function');
  });
});

describe('Stats for the links', () => {
  it('StatsLinks should be a function', () => {
    expect(typeof statsLinks).toBe('function');
  });

  it('StatsLinks should return the stats for the links found', () => {
    expect(statsLinks(dataMock.validateTrue)).toEqual(dataMock.stats);
  });
});

describe('Stats and Validate for the links', () => {
  it('StatsValidate should be a function', () => {
    expect(typeof statsValidate).toBe('function');
  });

  it('StatsValidate should return total, unique and broken', () => {
    expect(statsValidate(dataMock.validateTrue)).toEqual(dataMock.statsAndValidate);
  });
});
