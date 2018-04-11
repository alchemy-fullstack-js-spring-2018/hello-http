module.exports = () => {
    
    const facts = [
        'http is your mom',
        'if http was your dad, your mom would be happier',
        'i wish http was my grandpa'
    ];

    return { fact : facts[Math.floor(Math.random() * (facts.length))] };
};