const httpFacts = [
    'HTTP Status Code 418 ("I\'m a teapot") was a joke.',
    'The first web address was "http://info.cern.ch/hypertext/WWW/TheProject.html"',
    'Tim Berners-Lee, the father of HTTP, has said he would have made green the default color of hyperlinks, had he been given the choice.'
];

module.exports = function() {
    const random = Math.floor(Math.random() * 3);
    return { fact: httpFacts[random] };
};