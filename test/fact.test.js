const { expect } = require('chai');
const fact = require('../lib/fact');

describe('get fact', ()  => {

    const facts = [
        {
            fact: 'fact 1'
        },
        {
            fact: 'fact 2'
        },
        {
            fact: 'fact 3'
        }
    ];
    
    it.only('gets random fact', () => {
        expect(facts).to.deep.include(fact());
    });

});