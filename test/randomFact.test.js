const randomFact = require('../lib/randomFact');
const chai = require('chai');
var expect = chai.expect;

it('returns a random fact', () => {
    const newFact = randomFact();
    expect(newFact).to.have.property('fact');
});