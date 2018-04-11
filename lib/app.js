const bodyParser = require('./body-parser');
const { parse } = require('url');
const defaultGreeting = require('../lib/basic-greeting');
const yayFact = require('../lib/yay-fact');

//define GET method @ url(path) /greeting/<name>
//**say hello unless a greeting is defined a la /greeting/person?salutation=frogs */
//greeting/?name=fred&&&&&&salutation=hiya
//**if a name is not included in the above string, respond with "stranger" */
//define GET method @ url(path) /fact where an object with a random fact property is returned
//**make sure content-type is application/json, and all facts contain the word HTTP */

module.exports = (req, res) => {

    const { pathname, query } = parse(req.url, true);

    
    if(req.method === 'GET' && pathname.startsWith('/greeting')){

        if(pathname.length > 10){
            const name = pathname.slice(10, pathname.length);
            res.end(defaultGreeting(query.salutation, name));
        } else {
            res.end(defaultGreeting(query.salutation));
        }

    }
    else if(req.method === 'GET' && pathname === '/') {
        res.end(defaultGreeting('hello', 'world'));
    }
    else if(req.method === 'GET' && pathname === '/fact') {
        res.end(yayFact());
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};