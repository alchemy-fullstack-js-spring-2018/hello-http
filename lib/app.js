//const greeting = require('./lib/greeting');
//const app = require('./lib/app');
const http =require('http');
//eventually need parser
//eventually need readStream


//respond with a greeting
module.exports =  http.createServer((req, res) => {
    //request is a readable stream
    if (req.url === '/') {
        //response is a writable stream
        res.write('hello');
        res.end('stranger');
    }
});
