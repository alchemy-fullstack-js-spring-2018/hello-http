const chai = require('chai');
const grabFact = require('../lib/random');
const expect = chai.expect;

describe('Fact Grab', () => {

    it('gets one random fact about http', () => {
        const random = grabFact();
        expect(random).to.have.property('fact');
    });
});