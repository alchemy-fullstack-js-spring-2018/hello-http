const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai; //equivelent to const assert = chai.assert
const app = require('../lib/app.js');
const fact = require('../lib/facts')

describe('http app', () =>{

    // it('says hello world on GET /', () =>{
    //     //pass app to chai.request, which will start with call.listen()
    //     //then we want to auto close the server after the request.
    //     return chai.request(app)
    //         //method and path
    //         .get('/')
    //         .then(response => {
    //             assert.equal(response.text, 'hello world'); //response.text returns a string.
    //         });
    // });

    it('returns dog object on GET /dog', () =>{
        
        return chai.request(app)
            .get('/dog')
            .then(response => {
                assert.deepEqual(response.body, { //response.body returns an object.
                    name: 'Homer',
                    type: 'Staffordshire Terrier'
                });
            });


    });
    it('returns fact objects on GET /fact', () => {

        return chai.request(app)
            .get('/fact')
            .then(response => {
                assert.ok(/HTTP/.test(response.text)); //assert.ok from lab.md, HTTP must match string.
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
    })
});