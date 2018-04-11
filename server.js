const app = require('./lib/app');
const http = require('http');



// // same thing as below:
// // const Server = http.Server;
// // const server = new Server();
// // server.on('request', app);

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3000; //on heroku it will set a port based on env.

const server = http.createServer(app);

module.exports = server.listen(PORT, () => { //we now can tell the app test there is a server.
   //eslint-disable-next-line
    console.log('server has started', server.address().port ); //server.listen starts it.
} )


