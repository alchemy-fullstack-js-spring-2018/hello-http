const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
var expect = chai.expect;
const app = require('../lib/app');

describe('app tests', () => {
    it('responds hello to name when make GET to route /greeting/name', () => {
        return chai.request(app)
            .get('/greeting/Charlie')
            .then(response => {
                assert.equal(response.text, 'Hello Charlie');
            });  
    });

    it('responds with custom salutation to name', () => {
        return chai.request(app)
            .get('/greeting/Charlie')
            .query('salutation=Hola')
            .then(({ text }) => {
                assert.equal(text, 'Hola Charlie');
            });
    });

    it('responds with a random HTTP fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(response => {
                expect(response.body).to.have.property('fact');
            });
    });
});