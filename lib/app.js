const greeting = require('./lib/greeting');
//eventually need parser
//eventually need readStream

module.exports = http.creatServer(req, res) => {
    if(req.url === '/' {
        //request is a readable stream
        //response is a writable stream
        res.write('welcome');
        res.end('to the world');
    })
    
}