const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');
const facts = require('../lib/facts');

describe('GET - Fact', () => {

    it('GET Returns random fact', () => {
        console.log(facts());
    });

});