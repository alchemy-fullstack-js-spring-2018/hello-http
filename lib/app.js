const greeting = require('./greeting');
const { parse } = require('url');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/') {
        const greet = greeting(query.salutation, query.name);
        res.end(greet);
    }
};