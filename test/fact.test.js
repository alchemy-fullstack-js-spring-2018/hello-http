const { assert } = require('chai');
const fact = require('../lib/fact');

describe('get fact', ()  => {
    
    it.only('gets fact 1', () => {
        assert.deepEqual(fact(), {
            fact: 'fact 1'
        });
    });

});