const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {

    it('gets greeting on GET /', () => {
        return chai.request(app)
            .get('/greeting/')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });

    it('returns fact object on GET /http-facts/fact1', () => {
        return chai.request(app)
            .get('/http-facts/fact1')
            .then(response => {
                assert.deepEqual(response.body, { 
                    name: 'fact1',
                    type: 'cool http fact' 
                });
            });
    });

});