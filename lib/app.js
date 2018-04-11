const { parse } = require('url');
const { createReadStream } = require('fs');

// const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname.startsWith('/greeting')) {
        const name = pathname.slice(1).split('/')[1];
        res.end(`Hello ${name}`);
    } else (
        res.end('oops')
    );

};