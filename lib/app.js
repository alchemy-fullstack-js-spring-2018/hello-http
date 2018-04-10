const { parse } = require('url');
const { createReadStream } = require('fs');

// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname === '/') {
        res.end('hello');
    } else (
        res.end('oops')
    );

};