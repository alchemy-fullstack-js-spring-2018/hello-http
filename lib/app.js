//const greeting = require('.lib/greeting');
//eventually need parser
//eventually need readStream


//respond with a greeting
module.exports =  (req, res) => {
    //request is a readable stream
    //console.log(req.url);
    if (req.url === '/app') {
        //response is a writable stream
        res.write('hello ');
        res.end('stranger');
    }
};
