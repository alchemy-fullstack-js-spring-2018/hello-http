const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {
    it('says hello stranger at /', () => {
        return chai.request(app)
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });
});