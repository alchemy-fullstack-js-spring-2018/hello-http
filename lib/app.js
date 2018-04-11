

module.exports = (req, res) => {
    if(req.url === '/') {
        res.write('hello ');
        res.end('world');
    }
};