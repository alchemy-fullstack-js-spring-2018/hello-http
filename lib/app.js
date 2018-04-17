const http = require('http');
//const fact = require('./fact');
//const greeting = require('./greeting');

//eventually need parser


//respond with a specific greeting
module.exports = http.createServer((req, res) => {

    //request is a readable stream

    if(req.url.startsWith('/greeting')) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: 'katlyn',
            greeting: 'welcome'
        }));
    }
    else {
        res.write('hello ');
        res.end('stranger');
    }   
});
