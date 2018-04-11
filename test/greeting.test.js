const greeting = require('../lib/greeting');
const { assert } = require('chai');

describe('greetings function', () => {

    it.only('defalut says hello stranger', () => {
        assert.equal(greeting(), 'hello stranger');
    });
});