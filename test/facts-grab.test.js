const chai = require('chai');
const factsGrab = require('../lib/facts-grab');
const { assert } = chai;

describe('Facts Grab', () => {

    it('gets a random fact about http', () => {
        factsGrab()
            .then(response => {
                assert.ok(/http/.test(response));
            });
    });
});