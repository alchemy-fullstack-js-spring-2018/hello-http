const greeting = require('../lib/greeting');
const {assert} = require('chai');

describe('specific greeting', () => {
    
    it('returns specific greeting', () => {
        const response = greeting('Katlyn');
        assert.equal(response, 'hello Katlyn');
    });
});


//request that doesn't match a defined `METHOD` and url `path` should return 404 Not Found 
//and include the text: `CANNOT <METHOD> <path>`
