const { parse } = require('url');
const greeting = require('./greeting');
const fact = require('./fact');

module.exports = (request, response) => {
    const { pathname, query } = parse(request.url, true);

    if(pathname.startsWith('/greeting')) {
        const name = pathname.slice(1).split('/')[1];
        response.end(greeting(query.salutation, name));
    } 
    else if(pathname === '/fact') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(fact()));
    }
};