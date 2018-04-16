const facts = {
    0: {
        fact: 'HTTP functions as a request–response protocol in the client–server computing model. A web browser, for example, may be the client and an application running on a computer hosting a website may be the server. The client submits an HTTP request message to the server. The server, which provides resources such as HTML files and other content, or performs other functions on behalf of the client, returns a response message to the client. The response contains completion status information about the request and may also contain requested content in its message body.'
    },
    1: {
        fact: 'Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989.'
    },
    2: {
        fact: 'HTTP defines methods (sometimes referred to as verbs) to indicate the desired action to be performed on the identified resource.'
    }
};

module.exports = () => {
    return facts[Math.floor(Math.random() * Math.floor(3))];
};