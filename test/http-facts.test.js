const { assert } = require('chai');
const facts = require('../lib/http-facts');

describe('get http facts', () => {

    it('gets single http fact', () => {
        assert.deepEqual(facts('fact2'), {
            name: 'fact2',
            type: 'super cool http fact'
        });
    });

});