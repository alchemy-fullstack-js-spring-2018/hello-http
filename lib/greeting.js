
//returns specific greeting on get

module.exports = (name = 'stranger', greeting = 'hello') => {
    return `${greeting} ${name}`;
};    
