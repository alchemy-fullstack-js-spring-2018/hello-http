const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const facts = require('./http-facts');
const { createReadStream } = require('fs');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname === '/') {
        res.end(defaultGreeting(query.salutation));
    }
};