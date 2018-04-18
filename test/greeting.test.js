const chai = require('chai');
const greeting = require('../lib/greeting');
const { assert } = chai;

describe('greeting tests', () => {

    it('greeting with hello stranger if no name is given', () => {
        const helloStranger = greeting('/greeting');
        assert.equal(helloStranger, 'Hello stranger');
    });

    it('greeting with the provided name', () => {
        const nameProvided = greeting('/greeting/Jack');
        assert.equal(nameProvided, 'Hello Jack');
    });

    it('greeting with both name and salutation if provided', () => {
        const nameSalutation = greeting('/greeting/Jack', { salutation: 'Yo' });
        assert.equal(nameSalutation, 'Yo Jack');
    });
});