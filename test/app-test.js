const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai; //equivelent to const assert = chai.assert
const app = require('../lib/app.js')

describe('http app', () =>{

    it('says hello world on GET /', () =>{
        //pass app to chai.request, which will start with call.listen()
        //then we want to auto close the server after the request.
        return chai.request(app)
            //method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello world'); //response.text returns a string.
            });
    });

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
});