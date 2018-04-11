const yayFact = require('../lib/yay-fact');
const { assert } = require('chai');

describe('random facts', () => {
    
    it('facts contain http', () => {
        const { fact } = yayFact();
        assert.include(fact,  'http');
    });
});