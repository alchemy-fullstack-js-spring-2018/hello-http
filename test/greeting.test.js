const greeting = require('../lib/greeting');
const { assert } = require('chai');

describe('greetings function', () => {

    it('defalut says hello stranger', () => {
        assert.equal(greeting(), 'hello stranger');
    });

    it('custom greeting', () => {
        assert.equal(greeting('what up', 'steve'), 'what up steve');
    });
});