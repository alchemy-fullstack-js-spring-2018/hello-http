const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('tests', () => {
    it('responds with go blazers', () => {
        return chai.request(app)
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'Go blazers');
            });  
    });
});