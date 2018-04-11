const { parse } = require('url');
const defaultGreeting = require('./greeting');
const facts = require('./facts');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/') {
        res.end(defaultGreeting(query.salutation, ''));
    }

    else if(pathname.startsWith('/greeting')) {
        res.end(defaultGreeting(query.salutation, query.name));
    }
    else if(pathname === '/fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts()));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }

};