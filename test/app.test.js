const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

//define GET method @ url(path) /greeting/<name>
//**say hello unless a greeting is defined a la /greeting/person?salutation=frogs */
//**if a name is not included in the above string, respond with "stranger" */
//define GET method @ url(path) /fact where an object with a random fact property is returned
//**make sure content-type is application/json, and all facts contain the word HTTP */

describe('http app', () => {

    it('says hello world on GET /', () => {
        // Pass app to chai.request, which will start (call .listen())
        // and auto-close server after request
        return chai.request(app)
            // method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello world');
            });
    });

    it('says hello stranger on GET /greeting', () => {
        // Pass app to chai.request, which will start (call .listen())
        // and auto-close server after request
        return chai.request(app)
            // method and path
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });

    it('says custom greeting on GET / with query', () => {
        return chai.request(app)
            .get('/greeting/')
            .query('salutation=yo')
            .then(({ text }) => {
                assert.equal(text, 'yo stranger');
            });
    });

    it('says custom nome on GET / with name', () => {
        return chai.request(app)
            .get('/greeting/henry')
            .then(({ text }) => {
                assert.deepEqual(text, 'hello henry');
            });
    });

    it.only('returns object with random fact property on  GET /fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(({ body }) => {
                assert.include(body.fact, 'http');
            });
    });

    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(
                response => {
                    assert.equal(response.status, 404);
                    // assert.equal(response.text, 'Sorry...')
                }
            ); 
    });
});