const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says hello stranger', () => {
        assert.equal(defaultGreeting(), 'hello stranger');
    });
    
    it('says custom salutation', () => {
        const name = 'steele';
        assert.equal(defaultGreeting(name), 'hello steele');
    });
});