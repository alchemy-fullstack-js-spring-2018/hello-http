const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const facts = require('./http-facts');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname === '/greeting/') {
        res.end(defaultGreeting(query.salutation));
    }
    else if(pathname.startsWith('/http-facts')) {
        res.setHeader('Content-Type', 'application/json');
        const factKey = pathname.slice(1).split('/')[1];
        const fact = facts(factKey);
        res.end(JSON.stringify(fact));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};