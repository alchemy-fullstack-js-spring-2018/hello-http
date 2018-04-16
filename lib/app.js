const { parse } = require('url');
const greeting = require('./greeting');
const facts = require('./facts');

module.exports = (req, res) => {
    
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        let salutation = 'hello';
        if(query.salutation) salutation = query.salutation;
        const name = pathname.slice(1).split('/')[1] || 'stranger';
        const greet = greeting(salutation, name);
        res.end(greet);
    }

    else if(pathname.startsWith('/fact')) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts()));
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('404 error!');
    }

};