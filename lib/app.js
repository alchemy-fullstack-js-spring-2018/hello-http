const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const facts = require('./http-facts');
const { createReadStream } = require('fs');

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
};