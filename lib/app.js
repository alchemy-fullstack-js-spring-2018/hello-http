const { parse } = require('url');
const { createReadStream } = require('fs');
const greeting = require('./greeting');
const fact = require('./fact');

module.exports = (request, response) => {
    const { pathname, query } = parse(request.url, true);

    if(pathname === '/greeting') {
        response.end(greeting(query.salutation));
    } 
    
};