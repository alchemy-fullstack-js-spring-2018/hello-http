//import { request } from 'http';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {assert} = chai;
const app = require('../lib/app');
const request = chai.request(app);

//returns a greeting on GET
describe('http app', () => {
    
    it('getting greeting', () => {
        return request
            .get('/app')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });
});
