//const facts = require('./facts');
const http = require('http');
//const greeting = require('./lib/greeting')

//eventually need parser


//respond with a greeting
module.exports = http.createServer((req, res) => {
    //request is a readable stream
    res.write('hello stranger');
    res.end();
});
