module.exports = () => {
    const facts = [
        'The http protocol is used to communicate between web browsers and web servers.',
        'There is no link between successive requests being carried out because http is stateless.',
        'How documents are cached can be controlled with http.',
        'Everyone knows that http loves mangos'
    ];
    return { fact : facts[(Math.floor(Math.random() * facts.length))] };
};

