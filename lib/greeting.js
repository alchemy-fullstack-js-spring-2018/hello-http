//setup greeting module to export and test.

module.exports = (salutation, name) => {
    return `${salutation} ${name}`;
};

// module.exports = (req, res) => {
//     return req, res;
// };

//think about settting the parameters, by just passing the paramters as variables. 
//name = 'stranger, greeting = 'Hello';