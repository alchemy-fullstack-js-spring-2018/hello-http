const facts = [
    {
        fact: 'HTTP was introduced in 1991'
    },
    {
        fact: 'Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.'
    },
    {
        fact: 'HTTP functions as a request–response protocol in the client–server computing model.'
    },
    {
        fact: 'The term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project.'
    }
];

module.exports = () => {
    return facts[Math.floor(Math.random() * facts.length)];
};