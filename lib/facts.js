const facts = [
    {
        fact: 'HTTP stands for HyperText Transfer Protocol.',
    },
    {
        fact: 'In HTTP the term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project.',
    },
    {
        fact: 'An HTTP  session is a sequence of network request-response transactions.',
    }
];

const randomFacts = () => {
    return facts[Math.floor(Math.random() * Math.floor(3))];
}; 

module.exports = randomFacts;