module.exports = () => {
    
    const facts = [
        'http started the rivalry between england and france',
        'if http was your dad, your mom would be happier',
        'the first woman who climbed everest only brought http',
        'the only thing at the bottom of the marianas trench is http'
    ];

    return { fact : facts[Math.floor(Math.random() * (facts.length))] };
};