"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottomnavReducer = void 0;

var _bottomnavTypes = _interopRequireDefault(require("./bottomnav-types.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  bottomnav: {
    show: true
  }
};

var bottomnavReducer = function bottomnavReducer() {
  var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _bottomnavTypes.default.CHANGE_BOTTOMNAV:
      return _objectSpread({}, currentState, {
        bottomnav: _objectSpread({}, currentState.bottomnav, {}, action.payload)
      });

    default:
      return currentState;
  }
};

exports.bottomnavReducer = bottomnavReducer;