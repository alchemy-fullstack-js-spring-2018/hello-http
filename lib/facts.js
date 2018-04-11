const facts = {
    first: {
        name: 'garfield',
        type: 'orange tabby'
    },
    second: {
        name: 'marie',
        type: 'artistocat'
    },
    third: {
        name: 'duchess',
        type: 'artistocat'
    },
};

let factArray = [facts['first'], facts['second'], facts['third']];

module.exports = (fact) => {
    let randomFact = Math.floor(Math.random() * Math.floor(3));
    console.log(factArray[randomFact]);
    return factArray[randomFact];
};