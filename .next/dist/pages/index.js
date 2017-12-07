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

var _youtube = require("../action/youtube");

var _youtube2 = _interopRequireDefault(_youtube);

var _post = require("./post");

var _postlist = require("./postlist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.state = {
            items: [],
            title: "",
            description: ""
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: "componentDidMount",
        value: function componentDidMount() {
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
        key: "render",
        value: function render() {

            return _react2.default.createElement(_layout2.default, null, _react2.default.createElement("div", null, _react2.default.createElement("img", { src: this.state.items,
                style: {
                    width: "100%",
                    height: "auto"
                },
                alt: "" }), _react2.default.createElement("br", null), _react2.default.createElement("div", { style: { width: "100%" } }, _react2.default.createElement("br", null), _react2.default.createElement(_post.Listblog, { limit: 6 }), _react2.default.createElement("br", null), _react2.default.createElement(_postlist.Listblog, { limit: 6 }))));
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;