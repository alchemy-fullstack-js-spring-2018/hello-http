const greeting = require('../lib/greeting');
const { assert } = require('chai');

describe('greeting', () => {

    it('says hola', () => {
        assert.strictEqual(greeting(), 'hola, mundo');
    });

    it('custom greeting', () => {
        const custom = greeting('Hola', 'John');
        assert.strictEqual(custom, 'Hola, John');
    });

    // it('says custom salutation', () => {
    //     assert.equal(greeting('Hola'), 'Hola');
    // });

});