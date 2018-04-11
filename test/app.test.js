const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('hello http app', () => {

    it('says hello on GET /greeting', () => {
        return chai.request(app)
            .get('/greeting') //go get the route
            .then (({ text }) => {
                assert.equal(text, 'hola, name');
            });

    });

    it('says greeting on GET /greeting/<name>', () => {
        return chai.request(app)
            .get('/greeting')
            .query('saluation=greetings')
            .then(({ text }) => {
                assert.equal(text, 'greeting, name');
            });
    });

    it('greet a person', () =>{
        return chai.request(app)
            .get('/greeting/john');

    });
        
});