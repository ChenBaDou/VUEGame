(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["util"] = factory();
	else
		root["util"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (_type2.default.isArray(params) && params.length === 0) {
        return true;
    }
    if (_type2.default.isObject(params) && Object.key(params).length === 0) {
        return true;
    }
    if (_type2.default.isUndefined(params)) {
        return true;
    }
    if (_type2.default.isNull(params)) {
        return true;
    }
    if (_type2.default.isString(params) && params.length === 0) {
        return true;
    }
    return false;
};
exports.default = isEmpty;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var type = function type(o) {
    return Object.prototype.toString.call(o).match(/\[object (.*?)\]/)[1].toLowerCase();
};

var typeArr = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'NaN', 'Infinite'];

typeArr.forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o) === t.toLowerCase();
    };;
});

exports.default = type;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = function cookie() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    //name value domain path expires;

    var domainPrefix = window.location.hostname;

    var _set = function _set() {

        var name = args[0],
            value = encodeURI(args[1]) + '; ',
            domain = args[2] ? 'domain=' + args[2] + '; ' : 'domain=' + domainPrefix + ';',
            path = args[3] ? 'path=' + args[3] + '; ' : 'path=/; ',
            expires = args[4] ? 'expires=' + args[4] + '; ' : '';

        window.document.cookie = name + '=' + value + path + expires + domain;
    };

    var _get = function _get() {
        var name = args[0],
            r = new RegExp('(?:^|;+|\\s+)' + name + '=([^;]*)'),
            m = window.document.cookie.match(r);

        return decodeURI(!m ? '' : m[1]);
    };

    args.length > 1 && _set();

    if (args.length == 1) {
        return _get();
    }
};

exports.default = cookie;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 密码本
// T = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIAuGmpyZPfS9YXzhTmZkExMcnvMM0hzpRxxvpxAC2YooXECpPcI4HTROuH2OckLosFWzzc8ud7NCOiQ3ZEjNexoH7+0Gpqiu/ygRUiWNstwb7wAYoZHsVFzcA/HXcNAIrjaKHQKbQdYJeg8k0XzI8SKJd0t6UWgtc48QERxrpDf+nAGQtZuPCuB/YXKzIZ/eF8tuAkkGg16zHbJVLWYkWKq/tjOv5UK+BiroN7osVzO2LYNj6jcFKxRaxmGqBCaOydcUJMQ4ZBx/KqE0TKHR08TY4lmS1TSu5uitFfSG+/WKI7w/Iicq/1V4VFdXnL5ezJK8+hAD1hzJGH3Px4tk/AgMBAAECggEARfbkElTUDOhAgIxGes/2+/kNpXPdYOmQ1/xrYjmC+km7/ldURZecxycKJFWslZ720ObpxruR1Xt6dPGyW2WHfLa5z3hTvtLdHOjA3QV2NxhLJBNG1ChZ+cW2Iu0tGUtEGxIfcWqHL9J7OS6mWmCWhQnvahySaZiZ8vNlpQ1ud2kjumAbhCrgxG8LAATsNOm9wamNM3R5PEnKvJlcsWXoS4VkanpVRbDLLXhL6DTsjJKeN8gpjfteTO/gGrc4OQJMuabSVcTOb+M0cz776HhG0Jem5ESZ95zFKtT5hNLuKOsZZ8T/TQp/5dkZ2oDBJr8kLsL6eBP0/t1IwOF+G2jcQQKBgQD/IYyeT5fhRTxhcaloU4K5duaRoKdU0bKw5LJAQQBVsLZYznOWBQ6t093hmoZTD5LTHC4yxsTdwVfJvnKz7M/l+NYKR2oHFJRzmd9r9DXFdgz27vn/9PApvUlUDTybhMuJ+2KktKGiKONyLlw+YPYmGjM0btciAMKoH+Fc6CC/YQKBgQDIsUXVbhGZLu09HzMly1awq7oDREFktdQz4g6G5zBBX1ao14iPc7RP1+oAi5uIgmlf90L7iaid',
// 排列本
// N = '123123123123123123123123'

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ek = function ek() {
    var _arguments = arguments;

    //生成随机数
    var a = function a(min, max) {
        if (_arguments.length == '1') {
            return parseInt(Math.random() * min + 1);
        } else {
            return parseInt(Math.random() * (max - min + 1) + min);
        }
    };

    //返回随机数
    var b = function b(x, y) {
        var y = y || 10,
            min,
            max;
        //如果是1位最小数减1(0-9) (10-99) (100-999)
        min = x == '1' ? Math.pow(y, x - 1) - 1 : Math.pow(y, x - 1);
        //传入最小数最大数
        return a(min, Math.pow(y, x) - 1);
    };

    var arr = [],
        listNum = this.N.split('');

    //拼接随机数组
    listNum.forEach(function (o, i) {
        arr.push(b(listNum[i]));
    });

    return arr.join('');
},
    dk = function dk(msgId) {
    var _this = this;

    //返回每个数字对应的字母
    var d = function d(index) {
        return _this.T.substr(index, 1);
    };

    var listNum = this.N.split(''),
        index = void 0,
        j = 0,
        key = '';

    //拼接秘钥
    listNum.forEach(function (o, i) {
        index = msgId.substr(j, parseInt(listNum[i]));
        key += d(index);
        j += parseInt(listNum[i]);
    });

    return key;
};

var Edk = function () {
    function Edk(T, N) {
        _classCallCheck(this, Edk);

        this.T = T;
        this.N = N;
    }

    _createClass(Edk, [{
        key: 'fEDk',
        value: function fEDk() {
            if (arguments.length > 0 && arguments.length === 1) {
                return dk.call(this, arguments[0]);
            } else if (arguments.length === 0) {
                return ek.call(this);
            }
        }
    }]);

    return Edk;
}();

exports.default = Edk;
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var escapeHTML = function escapeHTML(str) {
    if ((0, _isEmpty2.default)(str)) return '';

    var c = '',
        i = 0,
        arr = str.split('');

    while (i < arr.length) {
        switch (arr[i]) {
            case '<':
                arr[i] = '&lt;';
                break;
            case '>':
                arr[i] = '&gt;';
                break;
        }
        c += arr[i];
        i++;
    }
    return c;
};

exports.default = escapeHTML;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUrlParams = function getUrlParams(query) {

    if ((0, _isEmpty2.default)(query)) return '';

    var subUrl = location.search.slice(location.search.indexOf('?') + 1),
        subArr = subUrl.split('&') || [],
        querystr = '';

    return subArr.forEach(function (v) {
        v.indexOf(query + '=') === 0 && (querystr = v.slice(query.length + 1));
    }), querystr;
};

exports.default = getUrlParams;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Element.prototype.isVisible = function () {

    var noStyle = document.defaultView.getComputedStyle || window.getComputedStyle;

    return this.style.display === 'none' || this.style.visibility === 'hidden' || noStyle(this, null).display === 'none' || noStyle(this, null).visibility === 'hidden' ? false : true;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mresize = function mresize() {
    var psdW = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 750;
    var baseFz = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 23.4376;

    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function recalc() {
        var clientWidth = docEl.clientWidth > psdW ? psdW : docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        docEl.style.fontSize = baseFz * (clientWidth / psdW) + 'px';
    };

    document.addEventListener('DOMContentLoaded', recalc, false);
    window.addEventListener(resizeEvt, recalc, false);
};

//解决IOS :active无效
document.body && document.body.addEventListener('touchstart', function () {});

exports.default = mresize;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * [randomStr 生成随机字符串]
 * @param  {Number} rlen [rlen< 10都是数字，>10包含字母（偶数是短字符串，奇数是长字符串）]
 * @param  {Number} len  [len生成长度]
 * @return String
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomStr;
function randomStr(rlen, len) {
  return Math.random().toString(rlen).slice(2, len);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var ua = navigator.userAgent.toLocaleLowerCase();
    var b = '',
        s = '';

    if (ua.search(/chrome\/(\d+\.\d+)/i) > 0) {
        b = 'chrome';
    } else if (ua.search(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i) > 0) {
        b = 'safari';
    } else if (ua.search(/firefox\/(\d+\.\d+)/i) > 0) {
        b = 'firefox';
    } else if (ua.search(/msie (\d+\.\d+)|trident\/(\d+\.\d+)|edge\/(\d+\.\d+)/i) > 0) {
        b = 'ie';
    } else if (ua.search(/opera\/(\d+\.\d+)/i) > 0) {
        b = 'opera';
    }

    if (ua.search(/android/i) > 0) {
        s = 'android';
    } else if (ua.search(/ipad/i) > 0) {
        s = 'ipad';
    } else if (ua.search(/iphone/i) > 0) {
        s = 'iphone';
    } else if (ua.search(/macintosh/i) > 0) {
        s = 'mac';
    } else if (ua.search(/windows/i) > 0) {
        s = 'windows';
    }

    return { browser: b, system: s };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var uuid = function uuid() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();; //use high-precision timer if available
    }
    var uuidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuidStr;
};

exports.default = uuid;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var verfiyBankCard = function verfiyBankCard(str) {

    if ((0, _isEmpty2.default)(num)) return 0;

    var strArr = [].concat(_toConsumableArray(str.split(' ').join(''))).reverse(),
        oddArr = [],
        evenArr = [],
        oddRes = 0,
        evenRes = 0;

    strArr.forEach(function (v, i) {
        if ((i + 1) % 2 == 0) {
            evenArr.push(strArr[i] * 2);
        } else {
            oddArr.push(strArr[i] * 1);
        }
    });

    oddArr.forEach(function (v, i) {
        oddRes += v * 1;
    });

    evenArr.forEach(function (v, i) {
        evenRes += v * 1;
    });

    if ((oddRes + evenRes) % 10 == 0) {
        return 1;
    } else {
        return 0;
    }
};

exports.default = verfiyBankCard;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verfiyID = function verfiyID(str) {
    if ((0, _isEmpty2.default)(str)) return 0;

    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    var arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码

    if (/^\d{17}\d|x$/i.test(str)) {
        var sum = 0,
            idx = void 0,
            i = 0;

        for (; i < str.length - 1; i++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(str.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == str.substr(17, 1).toUpperCase();
    } else {
        return 0;
    }
};

exports.default = verfiyID;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = verfiyName;
function verfiyName() {
    var reg = /^[a-zA-Z\u4e00-\u9fa5\.\·]+$/g;

    return reg.test(name) ? true : false;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edk = exports.verfiyName = exports.randomStr = exports.uuid = exports.mresize = exports.cookie = exports.type = exports.escapeHTML = exports.verfiyID = exports.verfiyBankCard = exports.getURLParams = exports.isEmpty = exports.ua = undefined;

var _isEmpty = __webpack_require__(0);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _getURLParams = __webpack_require__(5);

var _getURLParams2 = _interopRequireDefault(_getURLParams);

var _verfiyBankCard = __webpack_require__(11);

var _verfiyBankCard2 = _interopRequireDefault(_verfiyBankCard);

var _verfiyID = __webpack_require__(12);

var _verfiyID2 = _interopRequireDefault(_verfiyID);

var _escapeHTML = __webpack_require__(4);

var _escapeHTML2 = _interopRequireDefault(_escapeHTML);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

var _ua = __webpack_require__(9);

var _ua2 = _interopRequireDefault(_ua);

var _cookie = __webpack_require__(2);

var _cookie2 = _interopRequireDefault(_cookie);

var _mresize = __webpack_require__(7);

var _mresize2 = _interopRequireDefault(_mresize);

var _uuid = __webpack_require__(10);

var _uuid2 = _interopRequireDefault(_uuid);

var _isVisible = __webpack_require__(6);

var _isVisible2 = _interopRequireDefault(_isVisible);

var _randomString = __webpack_require__(8);

var _randomString2 = _interopRequireDefault(_randomString);

var _verfiyName = __webpack_require__(13);

var _verfiyName2 = _interopRequireDefault(_verfiyName);

var _edk = __webpack_require__(3);

var _edk2 = _interopRequireDefault(_edk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ua return Object {browser, system}
 * isEmpty @param(any type) return Boolean
 * getURLParams @param(String) return String
 * verfiyBankCard @param(String) return Boolean
 * verfiyID @param(String) return Boolean
 * escapeHTML @param(String) return String
 * type @param(any type) return dataType
 * cookie @param(name,value,domain,path,expires) return String
 * mresize @param(psdW 设计图宽度, baseFz 基本字号)
 * uuid return String
 * randomStr return String
 * verfiyName @param(String) return Boolean
 * Edk[构造函数] @param(T 密码本, N 排列本) [@method fEDk return String]
 */
exports.ua = _ua2.default;
exports.isEmpty = _isEmpty2.default;
exports.getURLParams = _getURLParams2.default;
exports.verfiyBankCard = _verfiyBankCard2.default;
exports.verfiyID = _verfiyID2.default;
exports.escapeHTML = _escapeHTML2.default;
exports.type = _type2.default;
exports.cookie = _cookie2.default;
exports.mresize = _mresize2.default;
exports.uuid = _uuid2.default;
exports.randomStr = _randomString2.default;
exports.verfiyName = _verfiyName2.default;
exports.Edk = _edk2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.map