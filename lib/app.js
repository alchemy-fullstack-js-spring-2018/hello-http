const { parse } = require('url');
const greeting = require('./greeting');
const factGrab = require('./fact-grab');
const { createReadStream } = require('fs');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

}