const facts = [
    {
        fact: 'HTTP stands for HyperText Transfer Protocol.'
    },
    {
        fact: 'HTTP was first used in 1991.'
    },
    {
        fact: 'HTTP is a stateless protocol'
    }
];

module.exports = () => {
    return facts[Math.floor(Math.random() * Math.floor(3))];
};