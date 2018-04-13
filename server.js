const app = require('./lib/app');
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('SERVER ON: ', server.address().port); //eslint-disable-line
});