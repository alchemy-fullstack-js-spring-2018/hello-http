const facts = {
    fact1: 'I was named after a Star Trek character in Next Gen.',
    fact2: 'I played guitar in a band called "Working Class Zeros"',
    fact3: 'I am a huge movie aficionado, and love to talk about color theory and lighting technique in film.'
};
module.exports = (fact) => {
    if(!fact) return Object.values(fact);
    return facts[fact] || null;
};