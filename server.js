const app = require('./lib/app');
const http = require('http');


//creates a port
const PORT = process.env.port || 3000;
const server = http.createServer(app);

/*also creates a port, different way
const server = newServer();
const Server = http.Server;
server.on('request', listener);*/


module.exports = server.listen(PORT, () => {
    
    console.log('listening at port', server.address().port); // eslint-disable-line
});


