const validator = require('../helpers/validate');

const createUser = (req, res, next) => {

    const validationRule = {
        name: 'required|string',
        username: 'required|string',
        email: 'required|email',
        password: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    createUser
};