const facts = [
    {
        fact: 'The term HTTP was coined by Ted Nelson.'
    },
    {
        fact: 'The standard port for HTTP connections is port 80.'
    },
    {
        fact: 'HTTPS, stands for HyperText Transfer Protocol Secure and uses port 443 to transfer its information.'
    },
    {
        fact: 'HTTP status code 404 tells browser the request does not exist on server'
    }
];

module.exports = () => {
    return facts[Math.floor(Math.random() * facts.length)];
};