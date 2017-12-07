"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = {
    key: "AIzaSyCuGd21zRRGSUYW2rvD-u14zMQXpyYG-OQ",
    channelId: "UC_ZTmAt4G3AotY5RtfDK3Pg",
    maxResults: 50
};

var mainuri = function mainuri(type) {
    return "https://www.googleapis.com/youtube/v3/" + type + "?key=" + configuration.key;
};

exports.default = new (function () {
    function youtube() {
        (0, _classCallCheck3.default)(this, youtube);
    }

    (0, _createClass3.default)(youtube, [{
        key: "getallbychanel",
        value: function getallbychanel() {
            return fetch(mainuri("search") + "&channelId=" + configuration.channelId + "&part=snippet,id&order=date&maxResults=50", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getbyid",
        value: function getbyid(id) {
            return fetch(mainuri("videos") + "&id=" + id + "&part=snippet,contentDetails,statistics", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getallcomment",
        value: function getallcomment(id) {
            return fetch(mainuri("commentThreads") + "&videoId=" + id + "&part=snippet", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getbanner",
        value: function getbanner() {
            return fetch(mainuri("channels") + "&id=" + configuration.channelId + "&part=brandingSettings", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getbylistbylistid",
        value: function getbylistbylistid(id) {

            return fetch(mainuri("playlists") + "&part=snippet,contentDetails&id=" + id, { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getlistitem",
        value: function getlistitem(id) {
            return fetch(mainuri("playlistItems") + "&part=snippet,contentDetails,id&playlistId=" + id + "&maxResults=50", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }, {
        key: "getbylistinchanel",
        value: function getbylistinchanel() {
            return fetch(mainuri("playlists") + "&channelId=" + configuration.channelId + "&part=snippet,id&order=date&maxResults=50", { method: "GET" }).then(function (Response) {
                return Response.json();
            });
        }
    }]);

    return youtube;
}())();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi95b3V0dWJlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyYXRpb24iLCJrZXkiLCJjaGFubmVsSWQiLCJtYXhSZXN1bHRzIiwibWFpbnVyaSIsInR5cGUiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJSZXNwb25zZSIsImpzb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU07U0FBaUIsQUFDYixBQUNOO2VBRm1CLEFBRVQsQUFDVjtnQkFISixBQUF1QixBQUdOO0FBSE0sQUFDbkI7O0FBTUosSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsTUFBRDtXQUFRLDJDQUFBLEFBQXlDLE9BQXpDLEFBQThDLFVBQVEsY0FBOUQsQUFBNEU7QUFBNUYsQUFFQTs7bUNBQWU7dUJBQUE7NENBQUE7QUFBQTs7O2FBQUE7eUNBRUssQUFDWjt5QkFBYSxRQUFBLEFBQVEsWUFBUixBQUFrQixnQkFBYyxjQUFoQyxBQUE4QyxZQUFwRCxBQUNQLDZDQUE0QyxFQUFDLFFBRHRDLEFBQ3FDLEFBQVEsU0FEN0MsQUFFRSxLQUFLLG9CQUFBO3VCQUFXLFNBQVgsQUFBVyxBQUFTO0FBRmxDLEFBQU8sQUFHVixhQUhVO0FBSEE7QUFBQTthQUFBO2dDQUFBLEFBUUgsSUFBRyxBQUNQO3lCQUFhLFFBQUEsQUFBUSxZQUFSLEFBQWtCLFNBQWxCLEFBQXlCLEtBQS9CLEFBQ0gsMkNBQTJDLEVBQUMsUUFEekMsQUFDd0MsQUFBUSxTQURoRCxBQUVELEtBQUssb0JBQUE7dUJBQVcsU0FBWCxBQUFXLEFBQVM7QUFGL0IsQUFBTyxBQUdWLGFBSFU7QUFUQTtBQUFBO2FBQUE7c0NBQUEsQUFjRyxJQUFHLEFBQ2I7eUJBQWEsUUFBQSxBQUFRLG9CQUFSLEFBQTBCLGNBQTFCLEFBQXNDLEtBQTVDLEFBQ0gsaUJBQWlCLEVBQUMsUUFEZixBQUNjLEFBQVEsU0FEdEIsQUFFRCxLQUFLLG9CQUFBO3VCQUFXLFNBQVgsQUFBVyxBQUFTO0FBRi9CLEFBQU8sQUFHVixhQUhVO0FBZkE7QUFBQTthQUFBO29DQW9CQSxBQUNOO3lCQUFhLFFBQUEsQUFBUSxjQUFSLEFBQW9CLFNBQU8sY0FBM0IsQUFBeUMsWUFBL0MsQUFDSiwwQkFBMEIsRUFBQyxRQUR2QixBQUNzQixBQUFRLFNBRDlCLEFBRUYsS0FBSyxvQkFBQTt1QkFBVyxTQUFYLEFBQVcsQUFBUztBQUY5QixBQUFPLEFBR1gsYUFIVztBQXJCRDtBQUFBO2FBQUE7MENBQUEsQUEyQk8sSUFBRyxBQUVoQjs7eUJBQWEsUUFBQSxBQUFRLGVBQVIsQUFBcUIscUNBQTNCLEFBQThELElBQUcsRUFBQyxRQUFsRSxBQUFpRSxBQUFRLFNBQXpFLEFBQ0MsS0FBSyxvQkFBQTt1QkFBVyxTQUFYLEFBQVcsQUFBUztBQURqQyxBQUFPLEFBRVgsYUFGVztBQTdCRDtBQUFBO2FBQUE7b0NBQUEsQUFpQ0MsSUFBRyxBQUNSO3lCQUFhLFFBQUEsQUFBUSxtQkFBUixBQUF5QixnREFBekIsQUFBdUUsS0FBN0UsQUFBZ0Ysa0JBQWlCLEVBQUMsUUFBbEcsQUFBaUcsQUFBUSxTQUF6RyxBQUNELEtBQUssb0JBQUE7dUJBQVcsU0FBWCxBQUFXLEFBQVM7QUFEL0IsQUFBTyxBQUViLGFBRmE7QUFsQ0g7QUFBQTthQUFBOzRDQXNDUSxBQUNmO3lCQUFhLFFBQUEsQUFBUSxlQUFSLEFBQXFCLGdCQUFjLGNBQW5DLEFBQWlELFlBQXZELEFBQ1AsNkNBQTRDLEVBQUMsUUFEdEMsQUFDcUMsQUFBUSxTQUQ3QyxBQUVFLEtBQUssb0JBQUE7dUJBQVcsU0FBWCxBQUFXLEFBQVM7QUFGbEMsQUFBTyxBQUdWLGFBSFU7QUF2Q0E7QUFBQTs7V0FBQTtBQUFmLEdBQWUiLCJmaWxlIjoieW91dHViZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nZXJhbGQvcHJvamVjdC93aXRoYWxkZXJzL3lvdXR1YmVzdGF0aWMifQ==