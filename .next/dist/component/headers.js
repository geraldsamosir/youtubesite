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

var _jsxFileName = "/home/gerald/project/withalders/youtubestatic/component/headers.js";


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
      LinkStyle: "none" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, children);
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

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: _headers2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement("div", { style: { position: "fixed" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("input", { type: "checkbox", id: "menuToggle", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("div", { className: "facebook", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, " ", _react2.default.createElement(Link, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("h2", { id: "menu_title", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Home"), " ")), _react2.default.createElement("div", { className: "twitter", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, " ", _react2.default.createElement(Link, { href: "/post", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("h2", { id: "menu_title", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Video"))), _react2.default.createElement("div", { className: "google", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, " ", _react2.default.createElement(Link, { href: "/postlist", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("h2", { id: "menu_title", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Playlist"))), _react2.default.createElement("div", { className: "youtube", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(Link, { href: "/about", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("h2", { id: "menu_title", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "About"))), _react2.default.createElement("label", { "for": "menuToggle", "class": "menu-icon", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "\u2749")), _react2.default.createElement("div", { style: { display: "gird", flex: 1, padding: "5%", borderBottom: "1px solid rgba(0,0,0,.0975)" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.title))));
    }
  }]);

  return Headers;
}(_react.Component);

exports.default = Headers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9oZWFkZXJzLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVzaGVldCIsIm9uQ2xpY2tIYW5kbGVyIiwiaHJlZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJMaW5rIiwiY2hpbGRyZW4iLCJ0ZXh0RGVjb3JhdGlvbiIsIkxpbmtTdHlsZSIsIkhlYWRlcnMiLCJfX2h0bWwiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsInByb3BzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVE7Ozs7QUFFZixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsSUFBTyxpQkFBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLE1BQVEsQUFDL0I7U0FBTyxVQUFBLEFBQUMsR0FBTSxBQUNaO01BQUEsQUFBRSxBQUNGO29CQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFIRCxBQUlEO0FBTEQsQUFPQTs7QUFBTyxJQUFNLHNCQUFNLFNBQU4sQUFBTSxXQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO01BQUgsQUFBYSxZQUFiLEFBQWE7eUJBQzlCLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxTQUFTLGVBQXJCLEFBQXFCLEFBQWUsQUFDbEM7V0FBTyxBQUNEO3NCQURDLEFBQ2dCLEFBQ2pCO2lCQUhSLEFBQ1MsQUFFVztnQkFIcEI7a0JBQUEsQUFJRztBQUpIO0dBQUEsRUFEaUIsQUFDakI7QUFESzs7SUFTYyxBOzs7Ozs7Ozs7Ozs2QkFDVCxBQUVKOzs2QkFFSSxjQUFBOztvQkFBQTtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBLDJDQUVTLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7b0JBQTFDO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUMsVUFBYixBQUFZLEFBQVU7b0JBQXRCO3NCQUFBLEFBQ0E7QUFEQTtrREFDTyxNQUFQLEFBQVksWUFBVyxJQUF2QixBQUEwQjtvQkFBMUI7c0JBREEsQUFDQSxBQUNFO0FBREY7MEJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBQTJCLHFCQUFDLGNBQUQsUUFBTSxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBZTtBQUFmO3lCQUFlLGNBQUEsUUFBSSxJQUFKLEFBQU87b0JBQVA7c0JBQUE7QUFBQTtTQUFmLEFBQWUsU0FGNUMsQUFFRSxBQUEyQixBQUMzQix1QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FBMEIscUJBQUMsY0FBRCxRQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUFtQjtBQUFuQjt5QkFBbUIsY0FBQSxRQUFJLElBQUosQUFBTztvQkFBUDtzQkFBQTtBQUFBO1NBSC9DLEFBR0UsQUFBMEIsQUFBbUIsQUFDN0MsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBQXlCLHFCQUFDLGNBQUQsUUFBTSxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBdUI7QUFBdkI7eUJBQXVCLGNBQUEsUUFBSSxJQUFKLEFBQU87b0JBQVA7c0JBQUE7QUFBQTtTQUpsRCxBQUlFLEFBQXlCLEFBQXVCLEFBQy9DLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBeUI7QUFBekI7eUJBQTBCLGNBQUQsUUFBTSxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBb0I7QUFBcEI7eUJBQW9CLGNBQUEsUUFBSSxJQUFKLEFBQU87b0JBQVA7c0JBQUE7QUFBQTtTQUxoRCxBQUtHLEFBQXlCLEFBQW9CLEFBQzlDLDRCQUFBLGNBQUEsV0FBTyxPQUFQLEFBQVcsY0FBYSxTQUF4QixBQUE4QjtvQkFBOUI7c0JBQUE7QUFBQTtTQVRKLEFBR0UsQUFNRSxBQUVBLDRCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBRCxBQUFTLFFBQU8sTUFBaEIsQUFBcUIsR0FBRSxTQUF2QixBQUErQixNQUFLLGNBQWhELEFBQVksQUFBaUQ7b0JBQTdEO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFmeEIsQUFFSSxBQVdJLEFBQ0ksQUFDRSxBQUFnQixBQU1qQzs7Ozs7QUF4QmlDLEE7O2tCQUFqQixBIiwiZmlsZSI6ImhlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2VyYWxkL3Byb2plY3Qvd2l0aGFsZGVycy95b3V0dWJlc3RhdGljIn0=