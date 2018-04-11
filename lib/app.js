// const bodyParser = require('./body-parser');
const { parse } = require('url');
const defaultGreeting = require('../lib/basic-greeting');
const yayFact = require('../lib/yay-fact');

module.exports = (req, res) => {

    const { pathname, query } = parse(req.url, true);
    
    if(req.method === 'GET' && pathname.startsWith('/greeting')){

        if(pathname.length > 10){
            const name = pathname.slice(10, pathname.length);
            res.end(defaultGreeting(query.salutation, name));
        } else {
            res.end(defaultGreeting(query.salutation));
        }

    }
    else if(req.method === 'GET' && pathname === '/') {
        res.end(defaultGreeting('hello', 'world'));
    }
    else if(req.method === 'GET' && pathname === '/fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(yayFact()));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};