const chai = require('chai');
const greeting = require('../lib/greeting');
const { assert } = chai;

describe('Greeting Test', () => {

    it('greets with hello stranger if no name', () => {
        const hiya = greeting('/greeting');
        assert.equal(hiya, 'Hello stranger!');
    });
    
    it('greets with name if provided', () => {
        const ohItsYou = greeting('/greeting/Norman');
        assert.equal(ohItsYou, 'Hello Norman!');
    });
    
    it('greets with name and salutation if provided', () => {
        const yoItsYou = greeting('/greeting/Norman', { salutation: 'Yo' });
        assert.equal(yoItsYou, 'Yo Norman!');
    });
});