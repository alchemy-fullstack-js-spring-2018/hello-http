const greeting = require('..lib/greeting');
const { assert } = require('chai');

describe('greeting', () => {

    it('says hello', () => {
        assert.equal(greeting(), 'hello');
    });

    it('says custom salutation', () => {
        assert.equal(greeting('Hola'), 'Hola');
    });

});