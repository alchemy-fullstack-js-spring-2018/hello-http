
const defaultGreeting = require('../lib/greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says Klingon greeting', () => {
        assert.equal(defaultGreeting('nuqneH', ''), 'nuqneH ');
    });
    
    it('says custom saluation', () => {
        assert.equal(defaultGreeting('Qapla', 'Worf!'), 'Qapla Worf!');
    });

    it('default geeting for stranger', () => {
        assert.equal(defaultGreeting('Qapla'), 'Qapla Targ!');
    });
});