const { parse } = require('url');
const basicGreeting = require('./greeting.js'); 
const facts = require('./facts');

module.exports = (req, res) => { 
    const { pathname, query } = parse(req.url, true);
   
    if(pathname.startsWith('/greeting')) {
        const thisPath = pathname.slice(1).split('/')[1];
        res.end(basicGreeting(query.salutation, thisPath));
    }
    else if(req.url.startsWith('/fact')) {
        res.setHeader('Content-Type', 'application/json'); //adds a note that these are objects, read carefully.
        res.end(JSON.stringify(facts()));
    } 
    
    else {
        res.statusCode = 404; //return a 404 if nothing found.
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, 404 not found cannot <strong>${req.method} ${req.path}</strong>`);
    }
};
