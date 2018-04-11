const chai = require('chai');
const factGrab = require('../lib/fact-grab');
const expect = chai.expect;

describe('Fact Grab', () => {

    it('gets a random fact about http', () => {
        const random = factGrab();
        expect(random).to.have.property('fact');
    });
});