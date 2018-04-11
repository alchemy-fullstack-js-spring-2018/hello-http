# Hello HTTP Server

## Author: Charly Welch
<blwbiology@gmail.com>

## Description
A simple HTTP server created as a student exercise for Alchemy Code Lab, Portland, OR. Get a personalized greeting or a random fact about HTTP.  

## To Use API

GET requests to greeting:
* `/greeting` returns 'Hello Stranger!'
* `/greeting/<name>?salutation=<salutation>`returns 'Salutation name!'
    * example: `/greeting/Norman?salutation=Hiya`
    // 'Hiya Norman!

GET requests to /fact
* `/fact` returns a random fact about HTTP and an object with a 'fact' property

Bad requests return a 404 response. 


## Resources
HTTP facts gathered from the following:
* https://hpbn.co/brief-history-of-http/
