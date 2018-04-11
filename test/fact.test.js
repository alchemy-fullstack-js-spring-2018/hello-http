const chai = require('chai');
const { assert } = chai;
const fetchFact = require('../lib/fact');

describe('fact function', () => {
    it('returns an object with a random http fact as a property', () => {
        const { fact } = fetchFact();
        assert.include(fact.toLowerCase(), 'http');
    });
});