const { parse } = require('url');
const { createReadStream } = require('fs');
const greeting = require('./greeting');
const fact = require('./fact');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname === '/greeting') {
        res.end(greeting());
    }
};