const InvalidIdException = require('../shared/InvalidIdException');

module.exports = (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    if (Number.isNaN(id)) {
        throw new InvalidIdException();
    }
    next()
}