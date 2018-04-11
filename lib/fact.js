const facts = [
    {
        fact: 'fact 1'
    },
    {
        fact: 'fact 2'
    },
    {
        fact: 'fact 3'
    }
];

module.exports = () => {
    return facts[Math.floor(Math.random() * Math.floor(3))];
};