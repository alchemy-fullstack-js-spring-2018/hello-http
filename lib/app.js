//const facts = require('./facts');
const http = require('http');
//const greeting = require('./lib/greeting')

//eventually need parser


//respond with a greeting
module.exports = http.createServer((req, res) => {
    //request is a readable stream
    if(req.url.startsWith('/greeting')) {
        res.end(JSON.stringify({
            name: 'katlyn',
            greeting: 'welcome'
        }));
    }
    else {
        res.write('hello');
        res.end(' stranger');
    }   
});
