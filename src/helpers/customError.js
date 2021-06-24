function CustomError(message, code) {
  this.message = message;
  this.stack = Error().stack;
  this.code = code;
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.name = 'CustomError';

module.exports = CustomError;
