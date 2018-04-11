module.exports = (pathname, query = {}) => {

    const array = pathname.slice(1).split('/');

    if(array.length === 1) return 'Go blazers';
    else if(Object.keys(query).length === 0) return `Hello ${array[1]}!`;
    else {
        return `${query.salutation} ${array[1]}!`;
    }
};