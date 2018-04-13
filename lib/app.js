const greeting = require('./greeting');
//const facts = require('./facts');

//eventually need parser
//eventually need readStream


//respond with a greeting
module.exports =  (req, res) => {
    //request is a readable stream
    if (req.url.startsWith('/greeting')) {
        
        let message = greeting ();
        res.end(message);
    }
};
