module.exports = function ValidationException(errors) {
    this.status = 400;
    this.message = 'Bad request';
    this.errors = errors;
}