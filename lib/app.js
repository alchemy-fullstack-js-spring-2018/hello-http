const { parse } = require('url');
const greeting = require('./greeting');


module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    let salutation = 'hello';

    if(pathname.startsWith('/greeting')) {
        if(query.salutation) salutation = query.salutation;
        const name = pathname.slice(1).split('/')[1];
        const greet = greeting(salutation, name);
        res.end(greet);
    }

};