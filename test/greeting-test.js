const basicGreeting = require('../lib/greeting');
const { assert } = require('chai');

it('greeting returns hello stranger', () => {

    assert.equal(basicGreeting(), 'Hello Stranger');
});