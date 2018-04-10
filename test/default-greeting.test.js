const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says hello http', () => {
        assert.equal(defaultGreeting(), 'hello http');
    });
    
    // it('says custom saluation', () => {
    //     assert.equal(defaultGreeting('yo'), 'yo world');
    // });
});