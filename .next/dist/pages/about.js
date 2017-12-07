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

var _jsxFileName = "/home/gerald/project/withalders/youtubestatic/pages/about.js?entry";


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
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement("img", { src: this.state.items,
                style: {
                    width: "100%",
                    height: "auto"
                },
                alt: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement("div", { className: "", style: { padding: "10%" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, this.state.description))));
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJJbWFnZSIsImdldGRlc2NyaXB0aW9uIiwiZ2V0YmFubmVyIiwiX2l0ZW1zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiaXRlbXMiLCJzZXRTdGF0ZSIsImJhbm5lckltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUVmLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFJRTttQ0FDbEI7O21CQUFBLEFBQVksT0FBTTs0Q0FBQTs7d0lBQUEsQUFDUixBQUNOOztjQUFBLEFBQUs7eUJBQU8sQUFDSyxBQUNiO21CQUpVLEFBRWQsQUFBWSxBQUVBO0FBRkEsQUFDUjtlQUdQOzs7Ozs0Q0FFbUIsQUFDaEI7aUJBQUEsQUFBSyxBQUNMO2lCQUFBLEFBQUssQUFDUjs7OztvQ0FDVSxBQUNQO2dCQUFJLFNBQVMsS0FBQSxBQUFLLE1BQU0sYUFBeEIsQUFBYSxBQUF3QixBQUVyQzs7aUJBQUEsQUFBSzt1QkFDTyxPQURaLEFBQWMsQUFDSyxBQUV0QjtBQUhpQixBQUNWOzs7O3lDQUdRLEFBQ1o7aUJBQUEsQUFBSzs2QkFDYSxLQUFBLEFBQUssTUFBTSxhQUQ3QixBQUFjLEFBQ0ksQUFBd0IsQUFFN0M7QUFIaUIsQUFDVjs7OztpQ0FHQSxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsc0RBQ1MsS0FBSyxLQUFBLEFBQUssTUFBZixBQUFxQixBQUNqQjs7MkJBQU8sQUFDSSxBQUNQOzRCQUhSLEFBQ1csQUFFSyxBQUVaO0FBSk8sQUFDSDtxQkFGUixBQUtROzhCQUxSO2dDQURKLEFBQ0ksQUFNSTtBQU5KOzs7OEJBTUk7Z0NBUFIsQUFPUSxBQUFLO0FBQUw7QUFBQTs7OEJBQUs7Z0NBUGIsQUFPYSxBQUFLO0FBQUw7QUFBQTs7OEJBQUs7Z0NBUGxCLEFBT2tCLEFBQ1Y7QUFEVTtBQUFBLGdDQUNWLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsSUFBRyxPQUFPLEVBQUMsU0FBMUIsQUFBeUIsQUFBUzs4QkFBbEM7Z0NBQUEsQUFDSztBQURMO29CQUNLLEFBQUssTUFaOUIsQUFDSSxBQUNJLEFBUVEsQUFDSSxBQUNnQixBQU92Qzs7Ozs7QUE3QytCLEE7O2tCQUFkLEEiLCJmaWxlIjoiYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2VyYWxkL3Byb2plY3Qvd2l0aGFsZGVycy95b3V0dWJlc3RhdGljIn0=