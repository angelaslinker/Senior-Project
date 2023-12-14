const Validator = require('validatorjs');
const validator = (body, rules, customMessages, callback) => {
    console.log('validate.js function success!');
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;