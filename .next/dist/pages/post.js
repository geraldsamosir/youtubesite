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
                    } }, _react2.default.createElement(_headers.Link, { href: "/post?id=" + data.id.videoId }, _react2.default.createElement("img", {
                    style: {
                        width: "100%",
                        height: 350
                    },
                    src: data.snippet.thumbnails.high.url,
                    alt: "" }), _react2.default.createElement("h2", { style: {
                        color: "black"
                    } }, data.snippet.title)));
            });

            var _playlist = this.state.playlist.map(function (data) {
                return _react2.default.createElement("div", { key: data.id.videoId }, _react2.default.createElement("img", { src: data.snippet.thumbnails.high.url, alt: "" }), _react2.default.createElement("h5", null, data.snippet.title));
            });

            return _react2.default.createElement("div", { style: { display: "block" } }, _react2.default.createElement("center", null, _react2.default.createElement("h1", null, "List video")), _react2.default.createElement("br", null), _react2.default.createElement("div", { style: {

                    display: "grid",
                    gridTemplateColumns: "32% 32% 32% ",
                    "grid-gap": "2%"
                } }, _items));
        }
    }]);

    return Listblog;
}(_react.Component);

//class commentslist

//component
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

                    } }, _react2.default.createElement("div", null, _react2.default.createElement("div", null, _react2.default.createElement("img", { src: data.snippet.topLevelComment.snippet.authorProfileImageUrl, alt: "",
                    style: { float: "left", height: "40px", width: "40px", "border-radius": "50%" } })), _react2.default.createElement("div", { style: { marginLeft: "10%" } }, data.snippet.topLevelComment.snippet.authorDisplayName, _react2.default.createElement("br", null), data.snippet.topLevelComment.snippet.publishedAt, _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: data.snippet.topLevelComment.snippet.textDisplay } }))));
            });
            return _react2.default.createElement("div", null, _react2.default.createElement("ul", { style: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    height: window.innerHeight / 1.5,
                    overflowY: "scroll"
                } }, _comments));
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
            return _react2.default.createElement("div", { style: { display: "" } }, _react2.default.createElement("p", { className: "", style: { flex: "0 1 auto", justifyContent: "flex-start" } }, _react2.default.createElement("center", null, this.state.detail != "" ? _react2.default.createElement("div", { style: { margin: "auto" } }, _react2.default.createElement("div", { style: {
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s"
                } }, _react2.default.createElement("h1", null, this.state.detail.snippet.title, " "), _react2.default.createElement("br", null), _react2.default.createElement("iframe", { src: "https://www.youtube.com/embed/" + this.props.id,
                style: {
                    width: "80%",
                    height: "500px"

                } }), _react2.default.createElement("br", null), _react2.default.createElement("p", { className: "" }, _react2.default.createElement("span", { className: "ion-thumbsup" }), ": ", this.state.detail.statistics.likeCount, "\xA0\xA0", _react2.default.createElement("span", { className: "ion-thumbsdown" }), " : ", this.state.detail.statistics.dislikeCount, _react2.default.createElement("br", null), _react2.default.createElement("br", null), this.state.detail.snippet.description), _react2.default.createElement("br", null)), _react2.default.createElement(Commentlist, { id: this.props.id })) : "")));
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

            return _react2.default.createElement(_layout2.default, null, this.props.url.query.id == undefined || this.props.url.query.id == "undefined" ? _react2.default.createElement(Listblog, { key: 1 }) : _react2.default.createElement(Blogsdetail, { id: this.props.url.query.id }));
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;