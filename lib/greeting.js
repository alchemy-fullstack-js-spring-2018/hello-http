
//returns specific greeting on get

module.exports = (name = 'name', greeting = 'hello') => {
    return `${greeting} ${name}`;
};    
