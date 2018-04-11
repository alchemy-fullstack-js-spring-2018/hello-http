const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const facts = require('./facts');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/') {
        res.end(defaultGreeting());
    }

    else if(pathname.startsWith('/greeting/')) {
        let nameKey = pathname.replace('/greeting/', '');
        nameKey === '' ? nameKey = 'stranger' : null;
        res.end(defaultGreeting(query.salutation, nameKey));
    }

    else if(pathname.startsWith('/fact')) {
        res.setHeader('Content-Type', 'application/json');
        const fact = facts();
        res.end(JSON.stringify(fact));
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`NO ${req.method} ${req.url}`);
    }
};