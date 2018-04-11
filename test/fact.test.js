const { expect } = require('chai');
const fact = require('../lib/fact');

describe('get fact', ()  => {

    const facts = [
        {
            fact: 'HTTP stands for HyperText Transfer Protocol.'
        },
        {
            fact: 'HTTP was first used in 1991.'
        },
        {
            fact: 'HTTP is a stateless protocol'
        }
    ];
    
    it('gets random fact', () => {
        expect(facts).to.deep.include(fact());
    });

});