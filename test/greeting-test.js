const basicGreeting = require('../lib/greeting');
const { assert } = require('chai');
// const chai = require('chai');
// const app = require('../lib/app');

describe('greeting test', () =>{

    it('greeting returns hello stranger', () => {
        assert.equal(basicGreeting(), 'Hello Stranger');
    });

    it('test for a custom greeting', () =>{
        assert.equal(basicGreeting('Hello', 'Friend'), 'Hello Friend');
    });

});