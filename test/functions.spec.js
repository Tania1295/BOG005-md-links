const {
  existsPath,
  absolutePath,
  extensionName,
  isDirectory,
  getFiles
} = require("../functions.js")

const testRoute = '.\\proof\\proof1.md';
const testRouteFalse = '.\\proof1.md';
const testRouteAbsolute = 'C:\\Users\\pc 1\\Documents\\Proyectos Lab\\BOG005-md-links\\BOG005-md-links-tania\\proof\\proof1.md';

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
    expect(extensionName(testRoute)).toEqual('.md');
  });
});
