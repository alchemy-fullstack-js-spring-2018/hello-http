const yayFact = require('../lib/yay-fact');
const { assert, expect } = require('chai');

describe('random facts', () => {

    let facts;
    beforeEach(() => {
        facts = [
            'http started the rivalry between england and france',
            'if http was your dad, your mom would be happier',
            'the first woman who climbed everest only brought http',
            'the only thing at the bottom of the marianas trench is http'
        ];
    });
    
    it('facts return random fact', () => {
        const { fact } = yayFact();
        expect(facts).to.include(fact);
    });

    it('facts return objects', () => {
        assert.isObject(yayFact());
    });

    it('facts contain http', () => {
        const { fact } = yayFact();
        assert.include(fact,  'http');
    });
});