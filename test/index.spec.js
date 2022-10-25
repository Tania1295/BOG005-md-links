const { mdLinks, absoPath } = require('../index.js');

describe('mdLinks', () => {
    it('Mdlinks should be a function', () => {
        expect(typeof mdLinks).toBe('function')
    });
});

describe('Absopath', () => {
    it('Absolute path should be a function', () => {
        expect(typeof absoPath).toBe('function')
    });
});