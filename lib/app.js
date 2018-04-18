const { parse } = require('url');
const greeting = require('./greeting'); 
const random = require('./random');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        res.setHeader('Content-Type', 'text/html');
        res.end(greeting(pathname, query));
    }

    else if(pathname == '/fact'){
        res.setHeader('Content-Type', 'application/json');
        const fact = JSON.stringify(random());
        res.end(fact);
    }
};