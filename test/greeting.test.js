const { assert } = require('chai');
const greeting = require('../lib/greeting');

describe('greeting function', () => {
    it('defaults to "hello, stranger"', () => {
        assert.strictEqual(greeting(), 'hello, stranger');
    });

    it('provides a custom greeting if given arguments', () => {
        const customized = greeting('howdy', 'keli');
        assert.strictEqual(customized, 'howdy, keli');        
    });
});