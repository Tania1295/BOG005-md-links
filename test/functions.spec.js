const {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles
} = require("../functions.js")

const testRoute = '.\\proof\\proof1.md';
const testRouteFalse = '.\\proof1.md';
const testRouteAbsolute = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\proof\\proof1.md';
const testDirectory = '.\\proof';

describe('Exists Path', () => {
  it('Exists path should be a function', () => {
    expect(typeof existsPath).toBe('function');
  });

  it('Should confirm if the path exits with the test route', () => {
    expect(existsPath(testRoute)).toEqual(true);
  });

  it('Should confirm if the path not exits with the test route false', () => {
    expect(existsPath(testRouteFalse)).toEqual(false);
  });
});

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

describe('Extension name', () => {
  it('Extension name should be a function', () => {
    expect(typeof extensionName).toBe('function');
  });

  it('Extension name confirm it´s a .md file', () => {
    expect(extensionName(testRoute)).toEqual(true);
  });
});

describe('Is a directory', () => {
  it('Is a directory should be a function', () => {
    expect(typeof isDirectory).toBe('function');
  });

  it('Is a directory should read the directory', () => {
    const arrays = isDirectory(testDirectory);
    expect(!arrays).toEqual(false);
  });
});

describe('Get files', () => {
  it('Get files should be a function', () => {
    expect(typeof getFiles).toBe('function');
  });

  it('Get file should read a directory', () => {
    const arrayDirectory =
    [
      'proof\\subproof\\proof3.md',
      'proof\\proof1.md',
      'proof\\proof2.md'
    ]
    const arrays = isDirectory(testDirectory);

    expect(arrays).toEqual(arrayDirectory);
  });
});
