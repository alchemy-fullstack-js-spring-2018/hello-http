const { parse } = require('url');
// const { createReadStream } = require('fs');
const greeting = require('./greeting');

// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        res.end(greeting(pathname, query));
    } else (
        res.end('oops')
    );

};