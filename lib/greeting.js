//setup greeting module to export and test.

module.exports = (salutation = 'Hello', name = 'Stranger') => {
    return `${salutation} ${name}`;
};

