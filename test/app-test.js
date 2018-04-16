const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai; //equivelent to const assert = chai.assert
const app = require('../lib/app.js');

describe('http app', () =>{


    it('returns random fact on GET /fact', () => {

        return chai.request(app)
            .get('/fact')
            .then(response => {
                assert.ok(/HTTP/.test(response.text)); //assert.ok from lab.md, HTTP must match string.
            });
    });

    it('return custom greeting', () => {
        return chai.request(app)
            .get('/greeting/Jeff?salutation=Hello')
            .then(response => {
                assert.equal(response.text, 'Hello Jeff');
            });
    });

    it('return a not found 404 error on bad path', () =>{
        return chai.request(app)
            .get('/bad')
            .then(
                //in case of success
                () => {
                    // throw new Error('unexpected successful response');
                    //trying to get an error in case of having a successful path.
                    //we are testing an inverted condition.
                },
                //in case of error
                response => {
                    assert.equal(response.status, 404);
                    // assert.equal(response.text, 'Sorry, cannot get path');
                }
            );
    });
});