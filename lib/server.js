const app = require('./lib.app');
const http = require('./http');

//creates a port
const PORT = process.env.port || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('listening at port', server.address().port);
});


