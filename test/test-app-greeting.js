const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('GET - Greeting', () => {

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

    it('GET Says Hello without name & salutation', () => {
        return chai.request(app)
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });

    it('GET Says salutation without name', () => {
        return chai.request(app)
            .get('/greeting')
            .query('salutation=yo')
            .then(response => {
                assert.equal(response.text, 'yo stranger');
            });
    });

});