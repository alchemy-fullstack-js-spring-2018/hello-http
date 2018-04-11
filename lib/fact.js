const httpFacts = [
    'HTTP Status Code 418 (i.e. "I\'m a teapot") was a joke.',
    'The first web address was "http://info.cern.ch/hypertext/WWW/TheProject.html"',
    'Tim Berners-Lee, the father of HTTP, has said he would have made green the default color of hyperlinks, had he been given the choice.'
];

const random = Math.floor(Math.random() * httpFacts.length);

module.exports = function() {
    return { fact: httpFacts[random] };
};