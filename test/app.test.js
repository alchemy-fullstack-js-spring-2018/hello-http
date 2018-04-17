const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {assert} = chai;
const app = require('../lib/app');
//const request = chai.request(app);

describe('returns greeting on GET / ', () => {
    
    it('gets greeting', () => {
        return chai.request(app)
            //method and path
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
        
    });
});