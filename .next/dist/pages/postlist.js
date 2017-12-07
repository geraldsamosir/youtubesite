"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Listblog = undefined;

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

var _post = require("./post");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gerald/project/withalders/youtubestatic/pages/postlist.js";

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
            this.getplaylist();
        }
    }, {
        key: "getplaylist",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var result, items;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _youtube2.default.getbylistinchanel();

                            case 2:
                                result = _context.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    if (this.props.limit == undefined) {
                                        this.setState({
                                            playlist: items
                                        });
                                    } else {
                                        this.setState({
                                            playlist: items.slice(0, items.length >= 6 ? 6 : items.length)
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

            function getplaylist() {
                return _ref.apply(this, arguments);
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
                        lineNumber: 51
                    }
                }, _react2.default.createElement(_headers.Link, { href: "/postlist?id=" + data.id.videoId, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement("img", {
                    style: {
                        width: "100%",
                        height: 350
                    },
                    src: data.snippet.thumbnails.high.url,
                    alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }), _react2.default.createElement("h2", { style: {
                        color: "black"
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, data.snippet.title)));
            });

            var _playlist = this.state.playlist.map(function (data) {
                return _react2.default.createElement("div", { id: data.id, key: data.id,
                    style: {
                        flex: "auto",
                        display: "flex",
                        marginTop: "10%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                        transition: "0.3s"
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }, _react2.default.createElement(_headers.Link, { href: "/postlist?id=" + data.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }, _react2.default.createElement("img", {
                    style: {
                        width: "100%",
                        height: 350
                    },
                    src: data.snippet.thumbnails.high.url,
                    alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }), _react2.default.createElement("h2", { style: {
                        color: "black"
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }, data.snippet.title)));
            });

            return _react2.default.createElement("div", { style: { display: "block" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement("center", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, "List Playlist")), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }), _react2.default.createElement("div", { style: {

                    display: "grid",
                    gridTemplateColumns: "32% 32% 32% ",
                    gridGap: "2%"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _playlist));
        }
    }]);

    return Listblog;
}(_react.Component);

// blog detail

var Blogsdetail = function (_Component2) {
    (0, _inherits3.default)(Blogsdetail, _Component2);

    function Blogsdetail(props) {
        (0, _classCallCheck3.default)(this, Blogsdetail);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Blogsdetail.__proto__ || (0, _getPrototypeOf2.default)(Blogsdetail)).call(this, props));

        _this2.state = {
            detail: [],
            items: []
        };
        return _this2;
    }

    (0, _createClass3.default)(Blogsdetail, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getdetail();
        }
    }, {
        key: "getdetail",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var result, items;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _youtube2.default.getlistitem(this.props.id);

                            case 2:
                                result = _context2.sent;

                                if (result.items.length > 0) {
                                    items = result.items;

                                    this.setState({
                                        items: items,
                                        detail: items[0]
                                    });
                                }

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getdetail() {
                return _ref2.apply(this, arguments);
            }

            return getdetail;
        }()
    }, {
        key: "changevideo",
        value: function changevideo(data) {
            this.setState({
                detail: data
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _playlist = this.state.items.map(function (data) {
                var url = "";
                try {
                    url = data.snippet.thumbnails.standard.url;
                } catch (e) {}
                return _react2.default.createElement("li", { style: { display: "flex", borderTop: "1px solid #e6e6e6" }, onClick: _this3.changevideo.bind(_this3, data), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, _react2.default.createElement("div", { style: { flex: 3 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 177
                    }
                }, _react2.default.createElement("img", { src: url,
                    style: {
                        height: "50px"
                    },
                    alt: "", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                    }
                })), _react2.default.createElement("div", { style: { flex: 6 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                    }
                }, data.snippet.title));
            });

            return _react2.default.createElement("div", { style: { display: "" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement("p", { className: "", style: { flex: "0 1 auto", justifyContent: "flex-start" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, _react2.default.createElement("center", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, this.state.detail != "" ? _react2.default.createElement("div", { style: { margin: "auto" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement("div", { style: {
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, this.state.detail.snippet.title, " "), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }), _react2.default.createElement("div", { style: { display: "flex" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, _react2.default.createElement("div", { style: { flex: 7 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement("iframe", { src: "https://www.youtube.com/embed/" + this.state.detail.snippet.resourceId.videoId,
                style: {
                    width: "80%",
                    height: "500px"
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            })), _react2.default.createElement("div", { style: { flex: 3, textAlign: "left", maxHeight: "500px", overflowY: "scroll" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            }, _playlist)), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            })), _react2.default.createElement(_post.Commentlist, { id: this.state.detail.snippet.resourceId.videoId, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            })) : "")));
        }
    }]);

    return Blogsdetail;
}(_react.Component);

var PostsList = function (_Component3) {
    (0, _inherits3.default)(PostsList, _Component3);

    function PostsList(props) {
        (0, _classCallCheck3.default)(this, PostsList);

        return (0, _possibleConstructorReturn3.default)(this, (PostsList.__proto__ || (0, _getPrototypeOf2.default)(PostsList)).call(this, props));
    }

    (0, _createClass3.default)(PostsList, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, this.props.url.query.id == undefined || this.props.url.query.id == "undefined" ? _react2.default.createElement(Listblog, { key: 1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }) : _react2.default.createElement(Blogsdetail, { id: this.props.url.query.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }));
        }
    }]);

    return PostsList;
}(_react.Component);

exports.default = PostsList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RsaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwieXRBY3Rpb24iLCJMaW5rIiwiQ29tbWVudGxpc3QiLCJMaXN0YmxvZyIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsInBsYXlsaXN0IiwiZ2V0cGxheWxpc3QiLCJnZXRieWxpc3RpbmNoYW5lbCIsInJlc3VsdCIsImxlbmd0aCIsImxpbWl0IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJzbGljZSIsIl9pdGVtcyIsIm1hcCIsImRhdGEiLCJpZCIsInZpZGVvSWQiLCJmbGV4IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwiaGlnaCIsInVybCIsImNvbG9yIiwidGl0bGUiLCJfcGxheWxpc3QiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCIsIkJsb2dzZGV0YWlsIiwiZGV0YWlsIiwiZ2V0ZGV0YWlsIiwiZ2V0bGlzdGl0ZW0iLCJzdGFuZGFyZCIsImUiLCJib3JkZXJUb3AiLCJjaGFuZ2V2aWRlbyIsImJpbmQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsInJlc291cmNlSWQiLCJ0ZXh0QWxpZ24iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJQb3N0c0xpc3QiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFFZixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFnQjs7OztBQUd2QixBQUFRLEFBQVk7O0FBRXBCLEFBQVEsQUFBa0I7Ozs7OztBQUgxQjs7O0FBTUEsQUFDQTtBQUFPLElBQU8sb0RBQUE7c0NBQ1Y7O3NCQUFBLEFBQVksT0FBTTs0Q0FBQTs7OElBQUEsQUFDUixBQUNOOztjQUFBLEFBQUs7bUJBQU8sQUFDRCxBQUNQO3NC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SixBQUNSOzhCQURKO2dDQUFBLEFBSUE7QUFKQTsrQkFJQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSxvQkFBSyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFFBQXZCLEFBQStCLE9BSi9CLEFBSUEsQUFDQTs7OEJBQUE7Z0NBTEEsQUFLQSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssT0FBTyxFQUFDLFNBQWIsQUFBWSxBQUFTOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTTs4QkFBbEI7Z0NBQUEsQUFDQTtBQURBO3lEQUNRLEtBQUssbUNBQWlDLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixRQUFsQixBQUEwQixXQUF4RSxBQUFtRixBQUMvRTs7MkJBQU8sQUFDRyxBQUNOOzRCQUhSLEFBQ1csQUFFSTtBQUZKLEFBQ0g7OEJBRlI7Z0NBRkosQUFDSSxBQUNBLEFBTUQ7QUFOQztpQ0FNRCxjQUFBLFNBQUssT0FBTyxFQUFDLE1BQUQsQUFBTSxHQUFFLFdBQVIsQUFBa0IsUUFBTyxXQUF6QixBQUFtQyxTQUFRLFdBQXZELEFBQVksQUFBcUQ7OEJBQWpFO2dDQUFBLEFBQ007QUFETjtlQWRILEFBTUEsQUFRRyxBQUtGOzs4QkFBQTtnQ0FwQkwsQUFDSSxBQW1CQyxBQUVBO0FBRkE7QUFBQSxpQ0FFQSxBQUFDLG1DQUFZLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFFBQWxCLEFBQTBCLFdBQTNDLEFBQXNEOzhCQUF0RDtnQ0F2QkwsQUFDQSxBQXNCSztBQUFBO2tCQTVCckIsQUFDSSxBQUNJLEFBQ0ksQUEyQkssQUFNcEI7Ozs7O0EsQUE5RnFCOztJLEFBaUdKO3VDQUNsQjs7dUJBQUEsQUFBWSxPQUFNOzRDQUFBOzsySUFBQSxBQUNSLEFBQ1Q7Ozs7O2lDQUdPLEFBRUo7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRVM7QUFGVDtBQUFBLGFBQUEsT0FFUyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBZixBQUFxQixNQUFyQixBQUEyQixhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWYsQUFBcUIsTUFBOUQsQUFBb0UsNENBQ25FLEFBQUMsWUFBUyxLQUFWLEFBQWU7OEJBQWY7Z0NBREQsQUFDQztBQUFBO2FBQUEsa0NBQ0csQUFBQyxlQUFZLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBaEMsQUFBc0M7OEJBQXRDO2dDQUxoQixBQUNJLEFBSVksQUFLbkI7QUFMbUI7YUFBQTs7Ozs7QUFiZ0IsQTs7a0JBQWxCLEEiLCJmaWxlIjoicG9zdGxpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2VyYWxkL3Byb2plY3Qvd2l0aGFsZGVycy95b3V0dWJlc3RhdGljIn0=