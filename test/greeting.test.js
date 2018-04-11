const defaultGreeting = require('../lib/basic-greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says hello world', () => {
        assert.equal(defaultGreeting(), 'hello stranger');
    });
    
    it('says custom saluation', () => {
        assert.equal(defaultGreeting('yo'), 'yo stranger');
    });

    it('says custom name', () => {
        assert.equal(defaultGreeting('yo', 'joe'), 'yo joe');
    });
});