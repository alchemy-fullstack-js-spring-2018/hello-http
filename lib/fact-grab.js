const facts = [

    {
        fact: 'HTTP was first outlined in 1991 by Tim Berners-Lee, who also happens to be the person who invented the world wide web.'
    }, 
    {
        fact: 'HTTP 1.0 was never a formal standard of the internet as we know it, but this is the point in http evolution where "hypertext transfer" became a minomer. Files of any type could be sent back from the server to the client!'
    }, 
    {
        fact: 'It wasn\'t until http 1.1 that `connection keepalive` was implemented as a default. Prior to v1.1, a Keep-Alive header was needed to maintain the connection. Since implementation of http 1.1, a specific `close` specification must be sent to the server.'
    }, 
    {
        fact: 'Chunked encoding transfers were not included in http prior to http 1.1. Neither were byte-range requests, additional caching mechanisms, transfer encodings, or request pipelining.'
    }
];

const factGrab = () => {
    return facts[Math.floor(Math.random() * facts.length)];
};

module.exports = factGrab;
