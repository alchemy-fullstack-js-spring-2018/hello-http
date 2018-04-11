const { assert } = require('chai');
const greeting = require('../lib/greeting');

describe('greeting', () => {
    it('defaults to "hello, stranger"', () => {
        assert.strictEqual(greeting(), 'hello, stranger');
    });
});