const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {
    it('says custom greeting on /greeting/<name>', () => {
        return chai.request(app)
            .get('/greeting/george?salutation=hey')
            .then(response => {
                assert.equal(response.text, 'hey george');
            });
    });
    it('says stranger if no name given', () => {
        return chai.request(app)
            .get('/greeting/?salutation=sup')
            .then(response => {
                assert.equal(response.text, 'sup stranger');
            });
    });
    it('greets with hello if no salutation', () => {
        return chai.request(app)
            .get('/greeting/frodo')
            .then(response => {
                assert.equal(response.text, 'hello frodo');
            });
    });
    it('returns a random fact when visiting /fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(response => {
                assert.equal(response.text.includes('http'), true);
            });
    });
    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(response => {
                assert.equal(response.status, 404);
            }); 
    });
});