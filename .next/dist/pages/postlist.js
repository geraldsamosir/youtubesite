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

// list blog


//component
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
                    } }, _react2.default.createElement(_headers.Link, { href: "/postlist?id=" + data.id.videoId }, _react2.default.createElement("img", {
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
                return _react2.default.createElement("div", { id: data.id, key: data.id,
                    style: {
                        flex: "auto",
                        display: "flex",
                        marginTop: "10%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                        transition: "0.3s"
                    } }, _react2.default.createElement(_headers.Link, { href: "/postlist?id=" + data.id }, _react2.default.createElement("img", {
                    style: {
                        width: "100%",
                        height: 350
                    },
                    src: data.snippet.thumbnails.high.url,
                    alt: "" }), _react2.default.createElement("h2", { style: {
                        color: "black"
                    } }, data.snippet.title)));
            });

            return _react2.default.createElement("div", { style: { display: "block" } }, _react2.default.createElement("center", null, _react2.default.createElement("h1", null, "List Playlist")), _react2.default.createElement("br", null), _react2.default.createElement("div", { style: {

                    display: "grid",
                    gridTemplateColumns: "32% 32% 32% ",
                    gridGap: "2%"
                } }, _playlist));
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
                return _react2.default.createElement("li", { style: { display: "flex", borderTop: "1px solid #e6e6e6" }, onClick: _this3.changevideo.bind(_this3, data) }, _react2.default.createElement("div", { style: { flex: 3 } }, _react2.default.createElement("img", { src: url,
                    style: {
                        height: "50px"
                    },
                    alt: "" })), _react2.default.createElement("div", { style: { flex: 6 } }, data.snippet.title));
            });

            return _react2.default.createElement("div", { style: { display: "" } }, _react2.default.createElement("p", { className: "", style: { flex: "0 1 auto", justifyContent: "flex-start" } }, _react2.default.createElement("center", null, this.state.detail != "" ? _react2.default.createElement("div", { style: { margin: "auto" } }, _react2.default.createElement("div", { style: {
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s"
                } }, _react2.default.createElement("h1", null, this.state.detail.snippet.title, " "), _react2.default.createElement("br", null), _react2.default.createElement("div", { style: { display: "flex" } }, _react2.default.createElement("div", { style: { flex: 7 } }, _react2.default.createElement("iframe", { src: "https://www.youtube.com/embed/" + this.state.detail.snippet.resourceId.videoId,
                style: {
                    width: "80%",
                    height: "500px"
                } })), _react2.default.createElement("div", { style: { flex: 3, textAlign: "left", maxHeight: "500px", overflowY: "scroll" } }, _playlist)), _react2.default.createElement("br", null)), _react2.default.createElement(_post.Commentlist, { id: this.state.detail.snippet.resourceId.videoId })) : "")));
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

            return _react2.default.createElement(_layout2.default, null, this.props.url.query.id == undefined || this.props.url.query.id == "undefined" ? _react2.default.createElement(Listblog, { key: 1 }) : _react2.default.createElement(Blogsdetail, { id: this.props.url.query.id }));
        }
    }]);

    return PostsList;
}(_react.Component);

exports.default = PostsList;