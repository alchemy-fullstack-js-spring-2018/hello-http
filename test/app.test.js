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
                assert.strictEqual(text, 'hello, stranger');
            });
    });

    it('can use a specified greeting', () => {
        return chai.request(app)
            .get('/greeting')
            .query('salutation=greetings')
            .then(({ text }) => {
                assert.strictEqual(text, 'greetings, stranger');
            });
    });

    it('can greet a requested person', () => {
        return chai.request(app)
            .get('/greeting/keli?salutation=hola')
            .then(response => {
                assert.strictEqual(response.text, 'hello, keli');
            });
    });
});