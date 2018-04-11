const { assert } = require('chai');
const fact = require('../lib/fact');

describe('get fact', ()  => {
    
    it.only('gets all facts', () => {
        const stuff = fact();
        assert.deepEqual(stuff, {
            fact1: {
                fact: 'fact 1'
            },
            fact2: {
                fact: 'fact 2'
            },
            fact3: {
                fact: 'fact 3'
            }
        });
    });

});