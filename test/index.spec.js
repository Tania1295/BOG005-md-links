const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
    it('Mdlinks should be a function', () => {
        expect(typeof mdLinks).toBe('function')
    });
});