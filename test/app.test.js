const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert, expect } = chai;
const app = require('../lib/app');

describe(('http app'), () => {
    
    it('say default greeting hello stranger on GET /', () => {
        return chai.request(app)
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello stranger');
            });
    });

    it('says custom greeding on GET / with query', () => {
        return chai.request(app)
            .get('/')
            .query('salutation=what%20up')
            .query('name=steve')
            .then(response => {
                assert.equal(response.text, 'what up steve');
            });
    });

    it('returns random fact on get /fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(({ body }) => {
                expect(body.fact).to.include('HTTP');
            });
    });

    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(response => {
                assert.equal(response.status, 404);                
            });
    });
});