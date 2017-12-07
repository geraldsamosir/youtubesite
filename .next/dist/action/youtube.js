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