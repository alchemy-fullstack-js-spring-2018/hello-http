const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('app tests', () => {
    it('responds hello to name when make GET to route /greeting/name', () => {
        return chai.request(app)
            .get('/greeting/Charlie')
            .then(response => {
                assert.equal(response.text, 'Hello Charlie');
            });  
    });
});