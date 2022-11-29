module.exports = (err, req, res, next) => {
    const { status, message, errors } = err;
    const { originalUrl } = req;

    let validationErrors; 

    if(errors) {
        validationErrors = {};

        errors.forEach(error => {
            validationErrors[error.param] = error.msg
        });
    }

    return res.status(status).send({
        message: message,
        timestamp: Date.now(),
        path: originalUrl,
        validationErrors
    })
};