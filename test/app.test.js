const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {
    it('says custom greeting on /greeting/<name>', () => {
        return chai.request(app)
            .get('/greeting/')
            .then(response => {
                assert.equal(response.text, 'hello world');
            });
    });
});