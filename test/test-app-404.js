const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('GET - 404', () => {

    it('Properly handles 404', () => {
        return chai.request(app)
            .get('/wherever')
            .then(response => {
                assert.equal(response.status, 404);
            });
    });

});