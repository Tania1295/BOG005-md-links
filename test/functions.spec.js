const { existsPath, absolutePath } = require("../functions.js")

const testRoute = './proof/proof1.md';
const testRouteFalse = './proof1.md';

describe('Exists Path', () => {
  it('Exists path should be a function', () => {
    expect(typeof existsPath).toBe('function');
  });

  it('Should confirm if the path exits with the test route', () => {
    expect(existsPath(testRoute)).toEqual(true);
  })

  it('Should confirm if the path not exits with the test route false', () => {
    expect(existsPath(testRouteFalse)).toEqual(false);
  })
});

describe('Absolute Path', () => {
  it('Should be a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
});
