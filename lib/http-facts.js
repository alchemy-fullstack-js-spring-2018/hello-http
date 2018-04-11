const facts = {
    fact1: {
        name: 'fact1',
        type: 'cool http fact'
    },
    fact2: {
        name: 'fact2',
        type: 'super cool http fact'
    },
    fact3: {
        name: 'fact3',
        type: 'cooler than cool http fact'
    }
};

module.exports = (fact) => {
    if(!fact) return Object.values(facts);
    return facts[fact] || null;
};