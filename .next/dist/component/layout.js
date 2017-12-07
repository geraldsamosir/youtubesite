"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _headers = require("./headers");

var _headers2 = _interopRequireDefault(_headers);

var _youtube = require("../action/youtube");

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

        _this.state = {
            items: [],
            title: "",
            description: ""
        };
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getbanner();
        }
    }, {
        key: "getbanner",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var result, items;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _youtube2.default.getbanner();

                            case 2:
                                result = _context.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    this.setState({
                                        items: items[0].brandingSettings.image,
                                        title: items[0].brandingSettings.channel.title,
                                        description: items[0].brandingSettings.channel.description
                                    });
                                    localStorage.setItem("items", (0, _stringify2.default)(items[0].brandingSettings.image));
                                    localStorage.setItem("description", (0, _stringify2.default)(items[0].brandingSettings.channel.description));
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getbanner() {
                return _ref.apply(this, arguments);
            }

            return getbanner;
        }()
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement("div", null, _react2.default.createElement(_headers2.default, { title: this.state.title }), _react2.default.cloneElement(this.props.children, (0, _extends3.default)({}, this.state)), _react2.default.createElement("footer", { style: { flexDirection: "row" } }, _react2.default.createElement("center", null, "\xA9 2017  ", this.state.title)));
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;