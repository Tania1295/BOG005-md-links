const functions = require("../functions.js")

const testRoute = './proof/proof1.md';
console.log(testRoute);
const testRouteFalse = './proof1.md';

describe('Exists path', () => {
  it('Should be a function', () => {
    expect(typeof functions.existsFile).toBe('function');
    console.log(functions.existsFile(testRouteFalse))
  });

  it('Should confirm if the path exits', () => {
    expect(existsFile(testRoute).toEqual(true));
  })
});

describe('Absolute Path', () => {
  it('Should be a function', () => {
    expect(typeof functions.absolutePath).toBe('function');
  });
});
