const { parse } = require('url');
const defaultGreeting = require('./greeting');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/') {
        res.end(defaultGreeting(query.salutation, ''));
    }

    else if(pathname.startsWith('/greeting')) {
        res.end(defaultGreeting(query.salutation, query.name));
    }
};