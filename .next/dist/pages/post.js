"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Commentlist = exports.Listblog = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _layout = require("../component/layout");

var _layout2 = _interopRequireDefault(_layout);

var _youtube = require("../action/youtube");

var _youtube2 = _interopRequireDefault(_youtube);

var _headers = require("../component/headers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gerald/project/withalders/youtubestatic/pages/post.js";

//component


// list blog
var Listblog = exports.Listblog = function (_Component) {
    (0, _inherits3.default)(Listblog, _Component);

    function Listblog(props) {
        (0, _classCallCheck3.default)(this, Listblog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Listblog.__proto__ || (0, _getPrototypeOf2.default)(Listblog)).call(this, props));

        _this.state = {
            items: [],
            playlist: []
        };
        return _this;
    }

    (0, _createClass3.default)(Listblog, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getall();
        }
    }, {
        key: "getall",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var result, items;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _youtube2.default.getallbychanel();

                            case 2:
                                result = _context.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    if (this.props.limit == undefined) {
                                        this.setState({
                                            items: items
                                        });
                                    } else {
                                        this.setState({
                                            items: items.slice(0, items.length >= 6 ? 6 : items.length)
                                        });
                                    }
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getall() {
                return _ref.apply(this, arguments);
            }

            return getall;
        }()
    }, {
        key: "getplaylist",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var result, items;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _youtube2.default.getbylistinchanel();

                            case 2:
                                result = _context2.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    if (this.props.limit == undefined) {
                                        this.setState({
                                            playlist: items
                                        });
                                    } else {
                                        this.setState({
                                            playlist: items.slice(0, items.length >= 6 ? 5 : items.length)
                                        });
                                    }
                                }

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getplaylist() {
                return _ref2.apply(this, arguments);
            }

            return getplaylist;
        }()
    }, {
        key: "render",
        value: function render() {

            var _items = this.state.items.map(function (data) {
                return _react2.default.createElement("div", { id: data.id.videoId, key: data.id.videoId,
                    style: {
                        flex: "auto",
                        display: "flex",
                        marginTop: "10%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                        transition: "0.3s"
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, _react2.default.createElement(_headers.Link, { href: "/post?id=" + data.id.videoId, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, _react2.default.createElement("img", {
                    style: {
                        width: "100%",
                        height: 350
                    },
                    src: data.snippet.thumbnails.high.url,
                    alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }), _react2.default.createElement("h2", { style: {
                        color: "black"
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, data.snippet.title)));
            });

            var _playlist = this.state.playlist.map(function (data) {
                return _react2.default.createElement("div", { key: data.id.videoId, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }, _react2.default.createElement("img", { src: data.snippet.thumbnails.high.url, alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                    }
                }), _react2.default.createElement("h5", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                    }
                }, data.snippet.title));
            });

            return _react2.default.createElement("div", { style: { display: "block" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement("center", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, "List video")), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }), _react2.default.createElement("div", { style: {

                    display: "grid",
                    gridTemplateColumns: "32% 32% 32% ",
                    "grid-gap": "2%"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _items));
        }
    }]);

    return Listblog;
}(_react.Component);

//class commentslist

var Commentlist = exports.Commentlist = function (_Component2) {
    (0, _inherits3.default)(Commentlist, _Component2);

    function Commentlist(props) {
        (0, _classCallCheck3.default)(this, Commentlist);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Commentlist.__proto__ || (0, _getPrototypeOf2.default)(Commentlist)).call(this, props));

        _this2.state = {
            comments: []
        };
        return _this2;
    }

    (0, _createClass3.default)(Commentlist, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getallcomment();
        }
    }, {
        key: "getallcomment",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                var result, items;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _youtube2.default.getallcomment(this.props.id);

                            case 2:
                                result = _context3.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    this.setState({
                                        comments: items
                                    });
                                }

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getallcomment() {
                return _ref3.apply(this, arguments);
            }

            return getallcomment;
        }()
    }, {
        key: "render",
        value: function render() {
            var _comments = this.state.comments.map(function (data) {
                return _react2.default.createElement("li", { style: {
                        textAlign: "left",
                        width: "100%",
                        padding: "2%",
                        listStyle: "none",
                        borderTop: "1px solid #e6e6e6",
                        fontSize: "13px"

                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
                    }
                }, _react2.default.createElement("div", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                    }
                }, _react2.default.createElement("div", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                    }
                }, _react2.default.createElement("img", { src: data.snippet.topLevelComment.snippet.authorProfileImageUrl, alt: "",
                    style: { float: "left", height: "40px", width: "40px", "border-radius": "50%" }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                    }
                })), _react2.default.createElement("div", { style: { marginLeft: "10%" }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 169
                    }
                }, data.snippet.topLevelComment.snippet.authorDisplayName, _react2.default.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                    }
                }), data.snippet.topLevelComment.snippet.publishedAt, _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: data.snippet.topLevelComment.snippet.textDisplay }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                    }
                }))));
            });
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement("ul", { style: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    height: window.innerHeight / 1.5,
                    overflowY: "scroll"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _comments));
        }
    }]);

    return Commentlist;
}(_react.Component);

// blog detail

var Blogsdetail = function (_Component3) {
    (0, _inherits3.default)(Blogsdetail, _Component3);

    function Blogsdetail(props) {
        (0, _classCallCheck3.default)(this, Blogsdetail);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Blogsdetail.__proto__ || (0, _getPrototypeOf2.default)(Blogsdetail)).call(this, props));

        _this3.state = {
            detail: []
        };
        return _this3;
    }

    (0, _createClass3.default)(Blogsdetail, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getdetail();
        }
    }, {
        key: "getdetail",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                var result, items;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _youtube2.default.getbyid(this.props.id);

                            case 2:
                                result = _context4.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    this.setState({
                                        detail: items[0]
                                    });
                                }

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getdetail() {
                return _ref4.apply(this, arguments);
            }

            return getdetail;
        }()
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { style: { display: "" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, _react2.default.createElement("p", { className: "", style: { flex: "0 1 auto", justifyContent: "flex-start" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, _react2.default.createElement("center", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, this.state.detail != "" ? _react2.default.createElement("div", { style: { margin: "auto" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233
                }
            }, _react2.default.createElement("div", { style: {
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, this.state.detail.snippet.title, " "), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }), _react2.default.createElement("iframe", { src: "https://www.youtube.com/embed/" + this.props.id,
                style: {
                    width: "80%",
                    height: "500px"

                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                }
            }), _react2.default.createElement("p", { className: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                }
            }, _react2.default.createElement("span", { className: "ion-thumbsup", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                }
            }), ": ", this.state.detail.statistics.likeCount, "\xA0\xA0", _react2.default.createElement("span", { className: "ion-thumbsdown", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }), " : ", this.state.detail.statistics.dislikeCount, _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }), this.state.detail.snippet.description), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            })), _react2.default.createElement(Commentlist, { id: this.props.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            })) : "")));
        }
    }]);

    return Blogsdetail;
}(_react.Component);

var Posts = function (_Component4) {
    (0, _inherits3.default)(Posts, _Component4);

    function Posts(props) {
        (0, _classCallCheck3.default)(this, Posts);

        return (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || (0, _getPrototypeOf2.default)(Posts)).call(this, props));
    }

    (0, _createClass3.default)(Posts, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                }
            }, this.props.url.query.id == undefined || this.props.url.query.id == "undefined" ? _react2.default.createElement(Listblog, { key: 1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }) : _react2.default.createElement(Blogsdetail, { id: this.props.url.query.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                }
            }));
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJ5dEFjdGlvbiIsIkxpbmsiLCJMaXN0YmxvZyIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsInBsYXlsaXN0IiwiZ2V0YWxsIiwiZ2V0YWxsYnljaGFuZWwiLCJyZXN1bHQiLCJsZW5ndGgiLCJsaW1pdCIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwic2xpY2UiLCJnZXRieWxpc3RpbmNoYW5lbCIsIl9pdGVtcyIsIm1hcCIsImRhdGEiLCJpZCIsInZpZGVvSWQiLCJmbGV4IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwiaGlnaCIsInVybCIsImNvbG9yIiwidGl0bGUiLCJfcGxheWxpc3QiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiQ29tbWVudGxpc3QiLCJjb21tZW50cyIsImdldGFsbGNvbW1lbnQiLCJfY29tbWVudHMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwiYm9yZGVyVG9wIiwiZm9udFNpemUiLCJ0b3BMZXZlbENvbW1lbnQiLCJhdXRob3JQcm9maWxlSW1hZ2VVcmwiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJhdXRob3JEaXNwbGF5TmFtZSIsInB1Ymxpc2hlZEF0IiwiX19odG1sIiwidGV4dERpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm92ZXJmbG93WSIsIkJsb2dzZGV0YWlsIiwiZGV0YWlsIiwiZ2V0ZGV0YWlsIiwiZ2V0YnlpZCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwic3RhdGlzdGljcyIsImxpa2VDb3VudCIsImRpc2xpa2VDb3VudCIsImRlc2NyaXB0aW9uIiwiUG9zdHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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R0s7QUFBQTtnQkFBNEMsWUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFdBSG5FLEFBRzhFLEFBQ3pFOzs4QkFBQTtnQ0FKTCxBQUlLLEFBQUs7QUFBTDtBQUFBOzs4QkFBSztnQ0FKVixBQUlVLEFBQ0w7QUFESztBQUFBLHFCQUNMLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsUUFuQnhCLEFBY0MsQUFLK0IsQUFFL0I7OzhCQUFBO2dDQXRCTCxBQUNJLEFBcUJDLEFBRUE7QUFGQTtBQUFBLCtDQUVBLEFBQUMsZUFBWSxJQUFJLEtBQUEsQUFBSyxNQUF0QixBQUE0Qjs4QkFBNUI7Z0NBekJMLEFBQ0EsQUF3Qks7QUFBQTtrQkE5QnJCLEFBQ0ksQUFDSSxBQUNJLEFBNkJLLEFBTXBCOzs7OztBQS9EcUIsQTs7SSxBQWtFSjttQ0FDbEI7O21CQUFBLEFBQVksT0FBTTs0Q0FBQTs7bUlBQUEsQUFDUixBQUNUOzs7OztpQ0FHTyxBQUVKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVTO0FBRlQ7QUFBQSxhQUFBLE9BRVMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWYsQUFBcUIsTUFBckIsQUFBMkIsYUFBYSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFmLEFBQXFCLE1BQTlELEFBQW9FLDRDQUNuRSxBQUFDLFlBQVMsS0FBVixBQUFlOzhCQUFmO2dDQURELEFBQ0M7QUFBQTthQUFBLGtDQUNDLEFBQUMsZUFBWSxJQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWhDLEFBQXNDOzhCQUF0QztnQ0FMZCxBQUNJLEFBSVUsQUFLakI7QUFMaUI7YUFBQTs7Ozs7QUFiYyxBOztrQkFBZCxBIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2VyYWxkL3Byb2plY3Qvd2l0aGFsZGVycy95b3V0dWJlc3RhdGljIn0=