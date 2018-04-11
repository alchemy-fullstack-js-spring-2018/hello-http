const facts = {
    0: {
        fact: 'cool http fact'
    },
    1: {
        fact: 'super cool http fact'
    },
    2: {
        fact: 'cooler than cool http fact'
    }
};

module.exports = (fact) => {
    if(!fact) return facts[Math.floor(Math.random() * Math.floor(3))];
    return facts[fact];
};