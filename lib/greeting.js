module.exports = (pathname, query = null) => {
    const pathArray = pathname.slice(1).split('/');
    if(pathArray.length === 1) return 'Hello stranger';
    else if(query == null || Object.keys(query).length == 0) return `Hello ${pathArray[1]}`;
    else {
        return `${query.salutation} ${pathArray[1]}`;
    }
};