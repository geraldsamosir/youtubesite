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

var _jsxFileName = "/home/gerald/project/withalders/youtubestatic/pages/index.js?entry";


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

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement("img", { src: this.state.items,
                style: {
                    width: "100%",
                    height: "auto"
                },
                alt: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement("div", { style: { width: "100%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_post.Listblog, { limit: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement(_postlist.Listblog, { limit: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }))));
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwieXRBY3Rpb24iLCJMaXN0YmxvZyIsIkxpc3BsYXkiLCJJbmRleCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRiYW5uZXIiLCJfaXRlbXMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRTdGF0ZSIsImJhbm5lckltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBRWYsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBZ0I7Ozs7QUFFdkIsQUFBUSxBQUFlOztBQUV2QixBQUFRLEFBQVksQUFBYzs7Ozs7OztJQUVaLEE7bUNBQ2xCOzttQkFBQSxBQUFZLE9BQU07NENBQUE7O3dJQUFBLEFBQ1IsQUFDTjs7Y0FBQSxBQUFLO21CQUFRLEFBQ0QsQUFDUjttQkFGUyxBQUVELEFBQ1I7eUJBTFUsQUFFZCxBQUFhLEFBR0k7QUFISixBQUNUO2VBSVA7Ozs7OzRDQUVtQixBQUNoQjtpQkFBQSxBQUFLLEFBRVI7Ozs7b0NBRVUsQUFDUDtnQkFBSSxTQUFTLEtBQUEsQUFBSyxNQUFNLGFBQXhCLEFBQWEsQUFBd0IsQUFFckM7O2lCQUFBLEFBQUs7dUJBQ08sT0FEWixBQUFjLEFBQ0ssQUFFdEI7QUFIaUIsQUFDVjs7OztpQ0FJQSxBQUVKOzttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBRUk7QUFGSjtBQUFBLHNEQUVTLEtBQUssS0FBQSxBQUFLLE1BQWYsQUFBcUIsQUFDckI7OzJCQUFPLEFBQ0ssQUFDUjs0QkFISixBQUNPLEFBRUssQUFFWjtBQUpPLEFBQ0Y7cUJBRkwsQUFLSTs4QkFMSjtnQ0FGSixBQUVJLEFBTUE7QUFOQTs7OzhCQU1BO2dDQVJKLEFBUUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLE9BQU8sRUFBQyxPQUFiLEFBQVksQUFBTzs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOzs7OEJBQ0k7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLGdDQUFVLE9BQVgsQUFBa0I7OEJBQWxCO2dDQUZKLEFBRUksQUFDQTtBQURBOzs7OEJBQ0E7Z0NBSEosQUFHSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLG9DQUFRLE9BQVQsQUFBZ0I7OEJBQWhCO2dDQWhCaEIsQUFFSSxBQUNJLEFBU0ksQUFJSSxBQU1uQjtBQU5tQjs7Ozs7O0FBekNZLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2VyYWxkL3Byb2plY3Qvd2l0aGFsZGVycy95b3V0dWJlc3RhdGljIn0=