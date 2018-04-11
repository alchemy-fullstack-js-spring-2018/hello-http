const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('hello http app', () => {
    it('says "hello, stranger" on GET /greeting', () => {
        return chai.request(app)
            .get('/greeting')
            .then(({ text }) => {
                assert.equal(text, 'hello, stranger');
            });
    });

    it('can use a specified greeting', () => {
        return chai.request(app)
            .get('/greeting')
            .query('salutation=greetings')
            .then(({ text }) => {
                assert.equal(text, 'greetings, stranger');
            });
    });

    it('can greet a requested person', () => {
        return chai.request(app)
            .get('/greeting/keli')
            .then(({ text }) => {
                assert.equal(text, 'hello, keli');
            });
    });

    it('provides a fact on GET /fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(({ body }) => {
                assert.include(body.fact.toLowerCase(), 'http');
            });
    });

    it('returns a 404 if path is not recognized', () => {
        return chai.request(app)
            .get('/bad')
            .then(
                ({ status }) => {
                    assert.equal(status, 404);
                });
    });
});