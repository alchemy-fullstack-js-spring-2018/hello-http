const facts = {
    0: {
        name: 'fact1',
        fact: 'this is a fact, http'
    },
    1: {
        name: 'fact2',
        fact: 'this is a fact2, http'
    },
    2: {
        name: 'fact3',
        fact: 'this is a fact3, http'
    },
};

module.exports = (fact) => {
    if(!Number.isInteger(fact)) return Object.values(facts);
    return facts[fact] || null;
};