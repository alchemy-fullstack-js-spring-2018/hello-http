const { parse } = require('url');
const greeting = require('./greeting');
const factGrab = require('./fact-grab');
const seaFactGrab = require('./sea-fact');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        res.setHeader('Content-Type', 'text/html');
        res.end(greeting(pathname, query));
    }
    else if(pathname === '/fact') {
        res.setHeader('Content-Type', 'application/json');
        const fact = JSON.stringify(factGrab());
        res.end(fact);
    }
    else if(pathname === '/seafact') {
        res.setHeader('Content-Type', 'application/json');
        const seaFact = JSON.stringify(seaFactGrab());
        res.end(seaFact);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`CANNOT ${req.method} ${req.url}`);
    }
    
};