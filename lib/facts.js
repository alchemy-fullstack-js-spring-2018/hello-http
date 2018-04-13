const facts = {
    first: {
        title: 'Origins of HTTP',
        description: 'HTTP was a project developed by CERN, the European Institure for Nuclear Research!'
    },
    second: {
        title: 'Whered this idea come from?',
        description: 'The idea was inspired by the Memex project 35 years prior, which attempted to retrieve information from a physical film.'
    },
    third: {
        title: 'Anatomy',
        description: 'Request line, request header, blank line, optional request body.'
    },
};

let factArray = [facts['first'], facts['second'], facts['third']];

module.exports = () => {
    let randomFact = Math.floor(Math.random() * Math.floor(3));
    return factArray[randomFact];
};