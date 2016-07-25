'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorMessage;
exports.resetErrorMessage = resetErrorMessage;
var RESET_ERROR_MESSAGE = exports.RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Updates error message to notify about the failed fetches.
function errorMessage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];
  var type = action.type;
  var error = action.error;
  var payload = action.payload;


  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    var message = payload.message;
    var name = payload.name;

    return '[' + type + '] ' + (name || 'Error') + ': ' + (message || 'Please try again.');
  } else if (state && state.startsWith('[' + type + ']')) {
    return null;
  }

  return state;
}

// Resets the currently visible error message.
function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}