const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {assert} = chai;
const app = require('../lib/app');
//const greeting = require('../lib/greeting');

describe('returns greeting on GET / ', () => {

    it('gets general greeting', () => {
        return chai.request(app)
            //method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });
    
    it('gets specific greeting', () => {
        return chai.request(app)
            //method and path
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
        
    });
});