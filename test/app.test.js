//import { request } from 'http';

const chai = require('chai');
const chaiHttp = require('chaiHttp');
chai.use(chaiHttp);
const {assert} = chai;
const app = require('./lib/app');
//const server = require('./lib/server');


//returns a greeting on GET
describe('http app', () => {
    
    return chai.request(app)
        .get('/')
        .then(response => {
            assert.deepEqual(response.body, 'hello stranger');
        });
});
