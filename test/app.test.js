const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {assert} = chai;
const app = require('../lib/app');
const request = chai.request(app);

//returns a greeting on GET
describe('http app', () => {
    
    it.skip('getting greeting', () => {
        return request
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
                setTimeout(//function, 3000);
                );
            });
        
    });
});