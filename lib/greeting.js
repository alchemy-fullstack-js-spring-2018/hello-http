module.exports = (pathname, query = {}) => {
    const urlArray = pathname.slice(1).split('/');

    if(urlArray.length === 1) return 'Hello stranger!';
    else if(Object.keys(query).length === 0) return `Hello ${urlArray[1]}!`;
    else {
        return `${query.salutation} ${urlArray[1]}!`;
    }
};