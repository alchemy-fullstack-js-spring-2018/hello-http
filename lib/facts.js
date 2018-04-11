const facts = {
    0: {
        name: 'fact1',
        fact: 'HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.'
    },
    1: {
        name: 'fact2',
        fact: 'HTTP was designed in the early 1990s'
    },
    2: {
        name: 'fact3',
        fact: 'HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example a robot that crawls the Web to populate and maintain a search engine index.'
    },
};

module.exports = (fact) => {
    if(!Number.isInteger(fact)) return Object.values(facts);
    return facts[fact] || null;
};