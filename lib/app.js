const greeting = require('./greeting');

module.exports = (req, res) => {
    if(req.url === '/') {
        const greet = greeting();
        res.end(greet);
    }
};