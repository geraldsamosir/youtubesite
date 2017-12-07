"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _layout = require("../component/layout");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About(props) {
        (0, _classCallCheck3.default)(this, About);

        var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

        _this.state = {
            description: "",
            Image: []
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getdescription();
            this.getbanner();
        }
    }, {
        key: "getbanner",
        value: function getbanner() {
            var _items = JSON.parse(localStorage.items);

            this.setState({
                items: _items.bannerImageUrl
            });
        }
    }, {
        key: "getdescription",
        value: function getdescription() {
            this.setState({
                description: JSON.parse(localStorage.description)
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_layout2.default, null, _react2.default.createElement("div", null, _react2.default.createElement("img", { src: this.state.items,
                style: {
                    width: "100%",
                    height: "auto"
                },
                alt: "" }), _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "", style: { padding: "10%" } }, this.state.description))));
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;