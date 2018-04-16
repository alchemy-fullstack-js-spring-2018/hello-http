const basicGreeting = require('../lib/greeting');
const { assert } = require('chai');

it('greeting returns hello world', () => {

    assert.equal(basicGreeting(), 'Hello World');
});