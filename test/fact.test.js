const assert = require('assert');
const fact = require('../lib/fact');

describe('fact function', () => {
    it('returns an object with a random http fact as a property', () => {
        const response = fact();
        assert.ok(/http/i.test(response.fact));
    });
});