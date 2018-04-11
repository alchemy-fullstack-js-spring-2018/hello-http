const http = require('http');
const app = require('./lib/app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('server started');
});