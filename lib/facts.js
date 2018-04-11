const facts = {
    0: {
        fact: 'http fact 1'
    },
    1: {
        fact: 'http fact 2'
    },
    2: {
        fact: 'http fact 3'
    }
};

module.exports = () => {
    return facts[Math.floor(Math.random() * Math.floor(3))];
};