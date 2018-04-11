const { parse } = require('url');
const greeting = require('./greeting'); 

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        res.setHeader('Content-Type', 'text/html');
        res.end(greeting(pathname, query));
    }
};