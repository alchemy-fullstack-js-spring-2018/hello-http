// const http = require('http');
const { parse } = require('url');
const greeting = require('./greeting');
const { createReadStream } = require('fs');
// const app = http.createServer((req, res) => {

// });

module.exports = (req, res) => {

    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        const name = pathname.slice(1).split('/')[1] || undefined ;
        res.end(greeting(query.salutation, name));
    }
    // else if(pathname === '/file') {
    //     res.setHeader('Content-Type', 'application/json');

    //     // const readStream = createReadStream(`${__dirname}/test.html}`);
    //     // readStream.pipe(res);
    //}
};
