module.exports = (something) => {
    const facts = {
        fact1: {
            content: 'the http protocol is used to communicate between web browsers and web servers.',
        },
        fact2: {
            content: 'There is no link between successive requests being carried out because http is stateless.',
        },
        fact3: {
            content: 'How documents are cached can be controlled with http.'
        }
    };
    return facts[something];
};

