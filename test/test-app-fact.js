const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('GET - Fact', () => {

    it('GET Returns random fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(response => {
                assert.ok(/http/.test(response.text));
            });
    });

});