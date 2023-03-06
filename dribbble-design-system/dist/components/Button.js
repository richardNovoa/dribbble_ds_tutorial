"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    label,
    type,
    sx
  } = _ref;
  var buttonType = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary'
  };
  var bootstrap = buttonType[type];
  console.log(bootstrap);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: bootstrap
  }, label);
};
Button.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  sx: _propTypes.default.object
};
var _default = Button;
exports.default = _default;