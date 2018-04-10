const { parse } = require('url');
const greeting = require('./greeting');


module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        console.log('got here');
        const name = pathname.slice(1).split('/')[1];
        const greet = greeting('hello', name);
        res.end(greet);
    }

};