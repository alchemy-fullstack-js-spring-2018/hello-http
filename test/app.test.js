const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('tests', () => {
    it('responds with greeting', () => {
        return chai.request(app)
            .get('/greeting/Jack')
            .then(response => {
                assert.equal(response.text, 'Hello Jack');
            });  
    });

    it('responds with custom greeting and salutation', () => {
        return chai.request(app)
            .get('/greeting/jack')
            .query('salutation=hey')
            .then(({ text }) => {
                assert.equal(text, 'hey jack');
            });
    });
});