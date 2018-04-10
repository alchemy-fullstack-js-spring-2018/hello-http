const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says hello stranger', () => {
        assert.equal(defaultGreeting(), 'hello stranger');
    });
    
    // it('says custom saluation', () => {
    //     assert.equal(defaultGreeting('yo'), 'yo world');
    // });
});