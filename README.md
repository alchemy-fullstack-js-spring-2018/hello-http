# Http Server

# Author
Jack Lomax

# Description
This is an http server that gets a personalized greeting or a random fact about HTTP

## How to use
* `/greeting`
    * returns **'Hello Stranger'**

* `greeting/name`
    * returns **'Hello name'**

* `greeting/name?salutation=nameSalutation` 
    * returns **'nameSalutation name'**

## Bad requests
* 404 response if request is bad
