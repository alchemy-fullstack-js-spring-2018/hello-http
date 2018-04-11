const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('hello http app', () => {
    it('says "hello, stranger" on GET /greeting', () => {
        return chai.request(app)
            .get('/greeting')
            .then(response => {
                assert.strictEqual(response.text, 'hello, stranger');
            });
    });
});