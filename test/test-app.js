const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('HTTP APP', () => {

    it('GET Says Hello with name (no salutation)', () => {
        return chai.request(app)
            .get('/greeting/Ryan')
            .then(response => {
                assert.equal(response.text, 'hello Ryan');
            });
    });

    it('GET Says Hello with name & salutation', () => {
        return chai.request(app)
            .get('/greeting/Ryan')
            .query('salutation=yo')
            .then(response => {
                assert.equal(response.text, 'yo Ryan');
            });
    });

});