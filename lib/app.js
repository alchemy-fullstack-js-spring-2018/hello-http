const greeting = require('./greeting');
//const facts = require('./lib/facts');

//eventually need parser
//eventually need readStream


//respond with a greeting
module.exports =  (req, res) => {
    //request is a readable stream
    if (req.url === '/app') {
        //response is a writable stream
        res.write('hello ');
        res.end('stranger');
    }
};
