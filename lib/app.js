const { parse } = require('url');



module.exports = (req, res) => {
    
    const { pathname, query } = parse(req.url, true);

    if(pathname.startsWith('/greeting')) {
        res.end('hello world');
    }
};