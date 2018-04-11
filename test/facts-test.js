const { assert } = require('chai');
const facts = require('../lib/facts');

describe('get facts', () => {

    it('facts returns an object', () => {
        assert.isObject(facts(), 'is an object');
    });
});