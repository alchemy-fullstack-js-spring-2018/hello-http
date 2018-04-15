//will need to know about server.js, greeting.js and facts.js

// const server = new Server();
//server.on('request', (req, res) => { });both these lines equavilent to http.createServer

module.exports = ( req, res ) => { 
    
    if(req.url === '/') {
    
        res.write('hello'); //this is our response we are writing hello world
        res.write(' ');
        res.end('world'); //we need to end the response so we don't get timedout. 
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
        res.end(JSON.stringify({
           factOne: 'it takes 142.18 licks to reach the center of a Tootsie pop.',
           factTwo: 'it is impossible to sneeze with your eyes open.',
           factThree: 'The "hashtag" key on a keyboard is called an octotroph.'
        }));
    } 
    
    else {
        res.statusCode = 404; //return a 404 if nothing found.
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.path}</strong>`);
    }
};
