const { parse } = require('url');
const greeting = require('./greeting');
const facts = require('./facts');

module.exports = (req, res) => {

    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        const name = pathname.slice(1).split('/')[1];
        const salutation = query.salutation;
        res.end(greeting(salutation, name));
    }
    else if(pathname === '/fact') {
        res.setHeader('Content-Type', 'application/json');
        const randomNum = Math.floor(Math.random() * (facts().length));
        const randomFact = facts(randomNum);
        console.log(randomNum, randomFact);
        res.end(JSON.stringify(randomFact));
    }

};