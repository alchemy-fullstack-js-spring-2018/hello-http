const app = require('./lib/app');
const http = require('http');

const PORT = process.env.PORT || 3000; //on heroku it will set a port based on env.

const server = http.createServer(app);

server.listen(PORT, () => { //we now can tell the app test there is a server.
    //eslint-disable-next-line
    console.log('server has started', server.address().port ); //server.listen starts it.
});


