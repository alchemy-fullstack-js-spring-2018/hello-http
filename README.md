# HTTP Server

# Author
    Charlie Heiner

# How To Use
## GET requests to /greeting
* `/greeting` 
    * returns **'Hello stranger'**

* `greeting/name`
    * returns **'Hello name'**
    * example: `greeting/JohnSmith` returns **'Hello JohnSmith'**

* `greeting/name?salutation=customGreeting` 
    * returns 'customGreeting name'
    * example: `gretting/JohnSmith?salutation=Yo` returns **'Yo JohnSmith'**

## GET requests to /fact
* returns a random HTTP fact as an object with property of fact.
* `{ "fact": "random fact" }`

## Bad requests
* requests to routes not handled above returns 404 response