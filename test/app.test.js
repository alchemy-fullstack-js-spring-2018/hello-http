const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');
var expect = chai.expect;

describe('tests', () => {
    it('greeting', () => {
        return chai.request(app)
            .get('/greeting/Jack')
            .then(response => {
                assert.equal(response.text, 'Hello Jack');
            });  
    });

    it('custom greeting and salutation', () => {
        return chai.request(app)
            .get('/greeting/jack')
            .query('salutation=hey')
            .then(({ text }) => {
                assert.equal(text, 'hey jack');
            });
    });

    it('random http fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(response => {
                expect(response.body).to.have.property('fact');
            });
    });
});