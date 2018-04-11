const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');
// const facts = require('../lib/facts');

describe ('http app', () => {

    
    it('says hello world on GET /', () => {
        return chai.request(app)
            .get('/')
            .then(response => {
                assert.equal(response.text, 'nuqneH ');
            });
    });

    it('says greeting on GET / with query', () => {
        return chai.request(app)
            .get('/greeting/worf')
            .query('salutation=Qapla')
            .query('name=Worf!')
            .then(({ text }) => {
                assert.equal(text, 'Qapla Worf!');
            });
    });

    it('says greeting if no name is supplied', () => {
        return chai.request(app)
            .get('/greeting')
            .query('salutation=Qapla')
            .then(({ text }) => {
                assert.equal(text, 'Qapla Targ!');
            });
    });

    // it('returns fact', () => {
    //     return chai.request(app)
    //         .get('/fact')
    //         .then(({ body }) => {
    //             assert.include(body.fact, 'http');
    //         });
    // });
});