
//returns specific greeting on get
//const specific = specific greeting;

module.exports = (name = 'stranger', greeting = 'hello') => {
    return `${greeting} ${name}`;
};    
