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
            .get('/http-facts/0')
            .then(response => {
                assert.deepEqual(response.body, { 
                    fact: 'cool http fact' 
                });
            });
    });

    it('returns random fact object on GET /http-facts', () => {
        return chai.request(app)
            .get('/http-facts')
            .then(response => {
                assert.ok(/http/.test(response.text));
            });
    });

    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(
                response => {
                    assert.equal(response.status, 404);
                }
            ); 
    });

});