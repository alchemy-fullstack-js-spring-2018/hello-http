module.exports = (salutation, name) => {
    let name1, greet;
    if(!name){
        name1 = 'stranger';
    } else {
        name1 = name;
    }
    if(salutation) {
        greet = salutation;
    } else {
        greet = 'hello';
    }
    return `${greet} ${name1}`;
};