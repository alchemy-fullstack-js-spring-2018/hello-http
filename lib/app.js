const greeting = require('./greeting');
const fact = require('./fact');
const { parse } = require('url');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/') {
        const greet = greeting(query.salutation, query.name);
        res.end(greet);
    }
    else if(pathname === '/fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(fact()));
    }
};