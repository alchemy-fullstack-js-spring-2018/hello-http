const bodyParser = require('./body-parser');
const { parse } = require('url');
const defaultGreeting = require('../lib/basic-greeting');

//define GET method @ url(path) /greeting/<name>
//**say hello unless a greeting is defined a la /greeting/person?salutation=frogs */
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
    else if(req.method === 'GET') {
        res.end(defaultGreeting('hello', 'world'));
    }
    else {
        res.end(`you just ${req.method}, how boring`);
    }
};