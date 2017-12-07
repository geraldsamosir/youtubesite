"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _headers = require("./style/headers.css");

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onClickHandler = function onClickHandler(href) {
  return function (e) {
    e.preventDefault();
    _index2.default.push(href);
  };
};

var Link = exports.Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement("a", { href: "#", onClick: onClickHandler(href),
    style: {
      textDecoration: "none",
      LinkStyle: "none" } }, children);
};

var Headers = function (_Component) {
  (0, _inherits3.default)(Headers, _Component);

  function Headers() {
    (0, _classCallCheck3.default)(this, Headers);

    return (0, _possibleConstructorReturn3.default)(this, (Headers.__proto__ || (0, _getPrototypeOf2.default)(Headers)).apply(this, arguments));
  }

  (0, _createClass3.default)(Headers, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement("div", null, _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: _headers2.default } }), _react2.default.createElement("div", { style: { position: "fixed" } }, _react2.default.createElement("input", { type: "checkbox", id: "menuToggle" }), _react2.default.createElement("div", { className: "facebook" }, " ", _react2.default.createElement(Link, { href: "/" }, _react2.default.createElement("h2", { id: "menu_title" }, "Home"), " ")), _react2.default.createElement("div", { className: "twitter" }, " ", _react2.default.createElement(Link, { href: "/post" }, _react2.default.createElement("h2", { id: "menu_title" }, "Video"))), _react2.default.createElement("div", { className: "google" }, " ", _react2.default.createElement(Link, { href: "/postlist" }, _react2.default.createElement("h2", { id: "menu_title" }, "Playlist"))), _react2.default.createElement("div", { className: "youtube" }, _react2.default.createElement(Link, { href: "/about" }, _react2.default.createElement("h2", { id: "menu_title" }, "About"))), _react2.default.createElement("label", { "for": "menuToggle", "class": "menu-icon" }, "\u2749")), _react2.default.createElement("div", { style: { display: "gird", flex: 1, padding: "5%", borderBottom: "1px solid rgba(0,0,0,.0975)" } }, _react2.default.createElement("center", null, _react2.default.createElement("h1", null, this.props.title))));
    }
  }]);

  return Headers;
}(_react.Component);

exports.default = Headers;