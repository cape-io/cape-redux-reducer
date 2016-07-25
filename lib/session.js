"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectYear = selectYear;
exports.default = reducer;
function selectYear(state) {
  return state.session.currentYear;
}

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return state;
}