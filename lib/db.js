'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
exports.updateTitle = updateTitle;
var UPDATE_TITLE = 'db/UPDATE_TITLE';

var defaultState = {
  title: 'Default Title'
};

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_TITLE:
      return _extends({}, state, { title: action.payload });
    default:
      return state;
  }
}

function updateTitle(value) {
  return {
    type: UPDATE_TITLE,
    payload: value
  };
}