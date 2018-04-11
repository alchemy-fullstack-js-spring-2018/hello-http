const facts = {
    0: {
        fact: 'fact 1'
    },
    1: {
        fact: 'fact 2'
    },
    2: {
        fact: 'fact 3'
    }
};

module.exports = () => {
    const random = Math.floor(Math.random() * Math.floor(3));
    return facts[random];
};