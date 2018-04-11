const greeting = require('../lib/greeting');
const { assert } = require('chai');

describe('greeting', () => {
    it('returns hello stranger in no name given', () => {
        assert.equal(greeting('/greeting'), 'Hello stranger');
    });

    it('return hello name to given name', () => {
        assert.equal(greeting('/greeting/Charlie'), 'Hello Charlie');
    });

    it('returns hello to name with given salutation', () => {
        assert.equal(greeting('/greeting/Charlie', { salutation: 'Yo' }), 'Yo Charlie');
    });
});