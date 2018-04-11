const { parse } = require('url');
const greeting = require('./greeting');

module.exports = (req, res) => {

    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        const name = pathname.slice(1).split('/')[1];
        const salutation = query.salutation;
        res.end(greeting(salutation, name));
    }
};