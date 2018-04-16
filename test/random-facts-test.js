
const chai = require('chai');
const randomFacts = require('../lib/facts');
const expect = chai.expect;

describe('Random facts are gotten', () => {
        
    it('getting random facts for http', () => {
        const random = randomFacts();
        expect(random).to.have.property('fact');
    });
}); 