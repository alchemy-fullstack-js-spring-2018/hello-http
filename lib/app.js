const { parse } = require('url');
// const { createReadStream } = require('fs');
const greeting = require('./greeting');
const randomFact = require('./randomFact');

// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        res.setHeader('Content-Type', 'text/html');
        res.end(greeting(pathname, query));
    }
    else if(pathname == '/fact'){
        res.setHeader('Content-Type', 'application/json');
        const fact = JSON.stringify(randomFact());
        res.end(fact);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('httpCat', 'https://http.cat/404');
        res.end(`Cannot ${req.method} ${req.url}`);
    }

};