"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = exports.PUT = exports.POST = exports.GET = exports.apiUrl = void 0;
var node_fetch_1 = require("node-fetch");
var url_1 = require("url");
exports.apiUrl = 'https://api.spotify.com/v1/';
exports.GET = { 'method': 'GET' };
exports.POST = { 'method': 'POST' };
exports.PUT = { 'method': 'PUT' };
var getHeaders = function (token) {
    return {
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json; charset=utf-8",
        }
    };
};
var queryParamsHelper = function (url, queryPrams) {
    var sP = queryPrams && Object.keys(queryPrams).reduce(function (searchParams, key) {
        var v = queryPrams[key];
        if (v != null) {
            searchParams.set(key, v + '');
        }
        return searchParams;
    }, new url_1.URLSearchParams()).toString();
    return sP ? url + "?" + sP : url;
};
exports.getApi = function (spotifyAuthServer, token, refreshToken, onTokenRefreshed) {
    var headers = getHeaders(token);
    var refreshTokenFunc = function () { return __awaiter(void 0, void 0, void 0, function () {
        var searchParams, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    searchParams = new url_1.URLSearchParams();
                    searchParams.set('refresh_token', refreshToken);
                    return [4 /*yield*/, node_fetch_1.default(spotifyAuthServer + "/refresh_token?" + searchParams.toString())];
                case 1:
                    response = _c.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    _a = Error.bind;
                    _b = "Failed to refresh token: ";
                    return [4 /*yield*/, response.text()];
                case 2: throw new (_a.apply(Error, [void 0, _b + (_c.sent())]))();
                case 3: return [4 /*yield*/, response.json()];
                case 4: return [2 /*return*/, (_c.sent()).access_token];
            }
        });
    }); };
    var makeRequest = function (urlPart, options, retry) {
        if (retry === void 0) { retry = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var response, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, node_fetch_1.default("" + exports.apiUrl + urlPart, options)];
                    case 1:
                        response = _e.sent();
                        if (response.ok) {
                            if (response.status === 204) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, response.json()];
                        }
                        if (!(response.status === 401)) return [3 /*break*/, 5];
                        if (!!retry) return [3 /*break*/, 3];
                        return [4 /*yield*/, refreshTokenFunc()];
                    case 2:
                        // try to refresh token
                        token = _e.sent();
                        onTokenRefreshed && onTokenRefreshed(token);
                        headers = getHeaders(token);
                        return [2 /*return*/, makeRequest(urlPart, __assign(__assign({}, options), headers), true)];
                    case 3:
                        _a = Error.bind;
                        _b = 'Invalid token: ';
                        return [4 /*yield*/, response.text()];
                    case 4: throw new (_a.apply(Error, [void 0, _b + (_e.sent())]))();
                    case 5:
                        _c = Error.bind;
                        _d = 'Unknown error: status code' + response.status + ' ; ';
                        return [4 /*yield*/, response.text()];
                    case 6: throw new (_c.apply(Error, [void 0, _d + (_e.sent())]))();
                }
            });
        });
    };
    return {
        me: {
            get: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, makeRequest('me', __assign(__assign({}, exports.GET), headers))];
                });
            }); },
            tracks: {
                get: function (options) { return __awaiter(void 0, void 0, void 0, function () {
                    var opt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                opt = __assign({ fields: 'items(track(id,name,uri,album(id,name),artists(id,name))),limit,offset,total', limit: 100, offset: 0 }, options);
                                return [4 /*yield*/, makeRequest(queryParamsHelper("me/tracks", opt), __assign(__assign({}, exports.GET), headers))];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); },
                getAll: function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var tracks, limit, getOperations, i, offset, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    tracks = [];
                                    limit = 50;
                                    getOperations = 1;
                                    i = 0;
                                    offset = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < getOperations)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.get({ limit: limit, offset: offset })];
                                case 2:
                                    res = _a.sent();
                                    i++;
                                    offset += limit;
                                    getOperations = Math.ceil(res.total / limit);
                                    tracks = tracks.concat(res.items);
                                    return [3 /*break*/, 1];
                                case 3: return [2 /*return*/, tracks];
                            }
                        });
                    });
                }
            }
        },
        player: {
            get: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, makeRequest('me/player', __assign(__assign({}, exports.GET), headers))];
                });
            }); },
            devices: {
                get: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest('me/player/devices', __assign(__assign({}, exports.GET), headers))];
                    });
                }); }
            },
            play: {
                put: function (params) { return __awaiter(void 0, void 0, void 0, function () {
                    var trackUri, albumUri, deviceId, offset, body;
                    return __generator(this, function (_a) {
                        trackUri = params.trackUri, albumUri = params.albumUri, deviceId = params.deviceId, offset = params.offset;
                        body = JSON.stringify(__assign(__assign(__assign({}, (trackUri ? { "uris": [trackUri] } : {})), (albumUri ? { "context_uri": albumUri } : {})), (offset !== void 0 ? { "offset": { "position": offset } } : {})));
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/play", { 'device_id': deviceId }), __assign(__assign({ body: body }, exports.PUT), headers))];
                    });
                }); }
            },
            pause: {
                put: function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/pause", { 'device_id': deviceId }), __assign(__assign({}, exports.PUT), headers))];
                    });
                }); }
            },
            previous: {
                post: function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/previous", { 'device_id': deviceId }), __assign(__assign({}, exports.POST), headers))];
                    });
                }); }
            },
            next: {
                post: function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/next", { 'device_id': deviceId }), __assign(__assign({}, exports.POST), headers))];
                    });
                }); }
            },
            shuffle: {
                put: function (state, deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/shuffle", { state: state, 'device_id': deviceId }), __assign(__assign({}, exports.PUT), headers))];
                    });
                }); }
            },
            repeat: {
                put: function (state, deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/repeat", { state: state, 'device_id': deviceId }), __assign(__assign({}, exports.PUT), headers))];
                    });
                }); }
            },
            volume: {
                put: function (volumePersent, deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/volume", { 'volume_percent': volumePersent, 'device_id': deviceId }), __assign(__assign({}, exports.PUT), headers))];
                    });
                }); }
            },
            seek: {
                put: function (positionMs, deviceId) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, makeRequest(queryParamsHelper("me/player/seek", { 'position_ms': positionMs, 'device_id': deviceId }), __assign(__assign({}, exports.PUT), headers))];
                    });
                }); }
            }
        },
        playlists: {
            get: function (options) { return __awaiter(void 0, void 0, void 0, function () {
                var opt;
                return __generator(this, function (_a) {
                    opt = __assign({ limit: 50, offset: 0 }, options);
                    return [2 /*return*/, makeRequest(queryParamsHelper('me/playlists', opt), __assign(__assign({}, exports.GET), headers))];
                });
            }); },
            getAll: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var tracks, limit, getOperations, i, offset, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                tracks = [];
                                limit = 50;
                                getOperations = 1;
                                i = 0;
                                offset = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < getOperations)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.get({ limit: limit, offset: offset })];
                            case 2:
                                res = _a.sent();
                                i++;
                                offset += limit;
                                getOperations = Math.ceil(res.total / limit);
                                tracks = tracks.concat(res.items);
                                return [3 /*break*/, 1];
                            case 3: return [2 /*return*/, tracks];
                        }
                    });
                });
            },
            tracks: {
                get: function (playlist, options) { return __awaiter(void 0, void 0, void 0, function () {
                    var opt, userId, playlistId;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                opt = __assign({ fields: 'items(track(id,name,uri,album(id,name),artists(id,name))),limit,offset,total', limit: 100, offset: 0 }, options);
                                userId = playlist.owner.id;
                                playlistId = playlist.id;
                                return [4 /*yield*/, makeRequest(queryParamsHelper("users/" + userId + "/playlists/" + playlistId + "/tracks", opt), __assign(__assign({}, exports.GET), headers))];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); },
                getAll: function (playlist) {
                    return __awaiter(this, void 0, void 0, function () {
                        var tracks, limit, getOperations, i, offset, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    tracks = [];
                                    limit = 100;
                                    getOperations = 1;
                                    i = 0;
                                    offset = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < getOperations)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.get(playlist, { limit: limit, offset: offset })];
                                case 2:
                                    res = _a.sent();
                                    i++;
                                    offset += limit;
                                    getOperations = Math.ceil(res.total / limit);
                                    tracks = tracks.concat(res.items);
                                    return [3 /*break*/, 1];
                                case 3: return [2 /*return*/, tracks];
                            }
                        });
                    });
                }
            }
        }
    };
};
var tempAPI = exports.getApi('', '', '');
//# sourceMappingURL=api.js.map