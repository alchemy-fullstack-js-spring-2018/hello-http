const { assert } = require('chai');
const facts = require('../lib/facts');

describe('get facts', () => {

    it('gets specific fact', () => {
        assert.deepEqual(facts('fact1'), {
            content: 'the http protocol is used to communicate between web browsers and web servers.'
        });
    });
});