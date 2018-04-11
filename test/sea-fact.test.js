const chai = require('chai');
const seaFactGrab = require('../lib/sea-fact');
const expect = chai.expect;

describe('Sea Fact Grab', () => {

    it('gets a random fact about sea creatures', () => {
        const random = seaFactGrab();
        expect(random).to.have.property('seaFact');
    });
});