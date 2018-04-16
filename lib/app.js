//will need to know about server.js, greeting.js and facts.js

// const server = new Server();
//server.on('request', (req, res) => { });both these lines equavilent to http.createServer

const basicGreeting = require('./greeting.js');
const facts = require('./facts');

module.exports = ( req, res ) => { 
    
    if(req.url === '/') {
    
     //this is our response we are writing hello world
    res.end(basicGreeting()); //we need to end the response so we don't get timedout. 
    } 
    else if(req.url.startsWith('/dog')) {
        res.setHeader('Content-Type', 'application/json'); //adds a note that these are objects, read carefully.
        res.end(JSON.stringify({
            name: 'Homer',
            type: 'Staffordshire Terrier'
        }));
    } 
    else if (req.url.startsWith('/fact')) {
        res.setHeader('Content-Type', 'application/json'); //adds a note that these are objects, read carefully.
        res.end(JSON.stringify(facts()));
    } 
    
    else {
        res.statusCode = 404; //return a 404 if nothing found.
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.path}</strong>`);
    }
};
