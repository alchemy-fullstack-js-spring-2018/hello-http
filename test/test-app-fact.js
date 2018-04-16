const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('GET - Fact', () => {

    it('Returns random http fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(response => {
                assert.ok(/HTTP/.test(response.text));
            });
    });

});