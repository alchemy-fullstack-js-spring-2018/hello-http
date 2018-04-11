const greeting = require('../lib/greeting');
const { assert } = require('chai');

describe('greeting', () => {

    it('says hola', () => {
        assert.strictEqual(greeting(), 'hola mundo');
    });

    // it('says custom salutation', () => {
    //     assert.equal(greeting('Hola'), 'Hola');
    // });

});