const { parse } = require('url');
const greeting = require('./greeting');
const facts = require('./facts');


module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    let salutation = 'hello';

    if(pathname.startsWith('/greeting')) {
        if(query.salutation) salutation = query.salutation;
        const name = pathname.slice(1).split('/')[1] || 'stranger';
        const greet = greeting(salutation, name);
        res.end(greet);
    }

    if(pathname.startsWith('/fact')) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts()));
    }


};