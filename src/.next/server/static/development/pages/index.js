module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/BlogList.js":
/*!********************************!*\
  !*** ./components/BlogList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/BlogList.js";


// import Link from "next/link";
// import blogListStyles from "../styles/components/bloglist.scss";
// import { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import getPosts from "../utils/getPosts";
// const BlogList = () => {
//   function truncateSummary(content) {
//     return content.slice(0, 200).trimEnd();
//   }
//   function reformatDate(fullDate) {
//     const date = new Date(fullDate)
//     return fullDate.toDateString().slice(4);
//   }
//   function renderPosts(posts) {
//     return posts.map(post => (
//       <Link
//         key={post.slug}
//         href={{ pathname: "/blog", query: { id: post.slug } }}
//       >
//         <a>
//         <li className={blogListStyles.li}>
//           <div className={blogListStyles.hero_image}>
//             <img src={post.document.data.hero_image} />
//           </div>
//           <div className={blogListStyles.blog__info}>
//             <h2>{post.document.data.title}</h2>
//             <h3> {reformatDate(post.document.data.date)}</h3>
//             <ReactMarkdown source={truncateSummary(post.document.content)} />
//           </div>
//         </li>
//         </a>
//       </Link>
//     ));
//   }
//   //store the posts in state with hook
//   const [posts] = useState(getPosts());
//   return (
//     <ul className={blogListStyles.list}>
//       {posts.length > 1 && renderPosts(posts)}
//     </ul>
//   );
// };
// export default BlogList;





var BlogList = function BlogList() {
  function getPosts() {
    //get posts & context from folder
    var posts = function (ctx) {
      var keys = ctx.keys();
      var values = keys.map(ctx);
      var data = keys.map(function (key, index) {
        // Create slug from filename
        var slug = key.replace(/^.*[\\\/]/, "").split(".").slice(0, -1).join(".");
        var value = values[index]; // Parse yaml metadata in document

        var document = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(value["default"]);
        return {
          document: document,
          slug: slug
        };
      });
      return data;
    }(__webpack_require__("./posts sync recursive \\.md$"));

    return posts;
  }

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  } //store the posts in state with hook


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(getPosts()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      posts = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-1848899881" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, posts.length > 1 && posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: post.slug,
      href: {
        pathname: "/blog/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1848899881" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: post.document.data.hero_image,
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1848899881" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, post.document.data.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      source: truncateSummary(post.document.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }))))));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1848899881",
    __self: this
  }, ".jsx-1848899881{margin-bottom:0;}a.jsx-1848899881:hover{opacity:1;}a.jsx-1848899881:hover li.jsx-1848899881 div.hero_image.jsx-1848899881 img.jsx-1848899881{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h2.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h3.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-1848899881{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-1848899881 img.jsx-1848899881{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-1848899881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-1848899881 h2.jsx-1848899881,.blog__info.jsx-1848899881 h3.jsx-1848899881,.blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-1848899881{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-1848899881{margin-bottom:0.5rem;}h3.jsx-1848899881{margin-bottom:1rem;}p.jsx-1848899881{max-width:900px;}@media (min-width:768px){li.jsx-1848899881{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-1848899881{height:100%;}.hero_image.jsx-1848899881 img.jsx-1848899881{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-1848899881{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-1848899881{padding:3rem;}h3.jsx-1848899881{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SFMsQUFFMkIsQUFFSixBQUdFLEFBSWUsQUFJaEIsQUFNTSxBQU9KLEFBU2EsQUFJVixBQVFLLEFBR0YsQUFHSCxBQUlHLEFBS0wsQUFHRyxBQU1ELEFBS0QsQUFHUSxVQTVFekIsQ0FXYyxDQVJpQixBQXlEN0IsQ0FjQSxDQUxBLENBTmMsQ0ExQkQsQUFjZixBQTZCRixDQS9ENEIsQUFzQ04sRUFQcEIsRUFIQSxBQWdDRSxFQWpFZ0IsSUFvREgsTUFSUSxLQVNOLENBcERPLEVBS1osVUFDbUIsQUErQzdCLFVBcERGLGFBVXdCLElBcEJ4QixZQTZCcUMsQUFLWixHQS9CWSxTQWtEbkMsZUFyQ2dCLGdCQUNsQixtQkFJeUIscUNBY0QsOEJBTHhCLEdBMUJBLDZCQWtCeUIsZ0JBY1AsT0FiVSxTQWNWLGdCQUNsQixpRUFkb0MsOEhBQ0YsZ0NBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9CbG9nTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBibG9nTGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvYmxvZ2xpc3Quc2Nzc1wiO1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuLy8gaW1wb3J0IGdldFBvc3RzIGZyb20gXCIuLi91dGlscy9nZXRQb3N0c1wiO1xuXG4vLyBjb25zdCBCbG9nTGlzdCA9ICgpID0+IHtcblxuLy8gICBmdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudCkge1xuLy8gICAgIHJldHVybiBjb250ZW50LnNsaWNlKDAsIDIwMCkudHJpbUVuZCgpO1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlKSB7XG4vLyAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKVxuLy8gICAgIHJldHVybiBmdWxsRGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIHJlbmRlclBvc3RzKHBvc3RzKSB7XG4vLyAgICAgcmV0dXJuIHBvc3RzLm1hcChwb3N0ID0+IChcbi8vICAgICAgIDxMaW5rXG4vLyAgICAgICAgIGtleT17cG9zdC5zbHVnfVxuLy8gICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiBcIi9ibG9nXCIsIHF1ZXJ5OiB7IGlkOiBwb3N0LnNsdWcgfSB9fVxuLy8gICAgICAgPlxuLy8gICAgICAgICA8YT5cbi8vICAgICAgICAgPGxpIGNsYXNzTmFtZT17YmxvZ0xpc3RTdHlsZXMubGl9PlxuICAgICAgICAgXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Jsb2dMaXN0U3R5bGVzLmhlcm9faW1hZ2V9PlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuZG9jdW1lbnQuZGF0YS5oZXJvX2ltYWdlfSAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtibG9nTGlzdFN0eWxlcy5ibG9nX19pbmZvfT5cbi8vICAgICAgICAgICAgIDxoMj57cG9zdC5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4vLyAgICAgICAgICAgICA8aDM+IHtyZWZvcm1hdERhdGUocG9zdC5kb2N1bWVudC5kYXRhLmRhdGUpfTwvaDM+XG4vLyAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3RydW5jYXRlU3VtbWFyeShwb3N0LmRvY3VtZW50LmNvbnRlbnQpfSAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuLy8gICAgICAgICA8L2xpPlxuLy8gICAgICAgICA8L2E+XG4vLyAgICAgICA8L0xpbms+XG4vLyAgICAgKSk7XG4vLyAgIH1cblxuLy8gICAvL3N0b3JlIHRoZSBwb3N0cyBpbiBzdGF0ZSB3aXRoIGhvb2tcbi8vICAgY29uc3QgW3Bvc3RzXSA9IHVzZVN0YXRlKGdldFBvc3RzKCkpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHVsIGNsYXNzTmFtZT17YmxvZ0xpc3RTdHlsZXMubGlzdH0+XG4vLyAgICAgICB7cG9zdHMubGVuZ3RoID4gMSAmJiByZW5kZXJQb3N0cyhwb3N0cyl9XG4vLyAgICAgPC91bD5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0O1xuXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmNvbnN0IEJsb2dMaXN0ID0gKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIC8vZ2V0IHBvc3RzICYgY29udGV4dCBmcm9tIGZvbGRlclxuICAgIGNvbnN0IHBvc3RzID0gKGN0eCA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gY3R4LmtleXMoKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGN0eCk7XG4gICAgICBjb25zdCBkYXRhID0ga2V5cy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIHNsdWcgZnJvbSBmaWxlbmFtZVxuICAgICAgICBjb25zdCBzbHVnID0ga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sIFwiXCIpXG4gICAgICAgICAgLnNwbGl0KFwiLlwiKVxuICAgICAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgICAgICAuam9pbihcIi5cIik7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgLy8gUGFyc2UgeWFtbCBtZXRhZGF0YSBpbiBkb2N1bWVudFxuICAgICAgICBjb25zdCBkb2N1bWVudCA9IG1hdHRlcih2YWx1ZS5kZWZhdWx0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICBzbHVnXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pKHJlcXVpcmUuY29udGV4dChcIi4uL3Bvc3RzXCIsIHRydWUsIC9cXC5tZCQvKSk7XG4gICAgcmV0dXJuIHBvc3RzO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ1bmNhdGVTdW1tYXJ5KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSlcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuXG4gIC8vc3RvcmUgdGhlIHBvc3RzIGluIHN0YXRlIHdpdGggaG9va1xuICBjb25zdCBbcG9zdHNdID0gdXNlU3RhdGUoZ2V0UG9zdHMoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge3Bvc3RzLmxlbmd0aCA+IDEgJiYgcG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke3Bvc3Quc2x1Z31gIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMj57cG9zdC5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPiB7cmVmb3JtYXREYXRlKHBvc3QuZG9jdW1lbnQuZGF0YS5kYXRlKX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt0cnVuY2F0ZVN1bW1hcnkocG9zdC5kb2N1bWVudC5jb250ZW50KX0gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgbGkgZGl2Lmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgyLCBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgzLCBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIHAge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZXJvX2ltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzM3ZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyBoMiwgLmJsb2dfX2luZm8gaDMsIC5ibG9nX19pbmZvIHAge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgb3BhY2l0eTogaW5oZXJpdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOHZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMzN2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvX2ltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Header.js";


// import Link from "next/link";
// import headerStyles from "../styles/components/header.scss";
// export default function Header() {
//   return (
//     <header className={headerStyles.header}>
//       <nav
//         className={headerStyles.nav}
//         role="navigation"
//         aria-label="main navigation"
//       >
//         <Link href="/">
//           <h1>The Blog Title</h1>
//         </Link>
//         <div>
//           <Link href={`${typeof window !== "undefined" &&
//           window.location.pathname == "/info" ?
//           "/" : "/info"}`}>
//             <h1>{`${typeof window !== "undefined" &&
//           window.location.pathname == "/info" ?
//           "close" : "info"}`}</h1>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-523254678" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    role: "navigation",
    "aria-label": "main navigation",
    className: "jsx-523254678" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-523254678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.siteTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-523254678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat( false ? undefined : "/info"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-523254678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "".concat( false ? undefined : "info"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "523254678",
    __self: this
  }, "h1.jsx-523254678{margin-bottom:0;}h1.jsx-523254678:hover{cursor:pointer;}nav.jsx-523254678{padding:1.5rem 1.25rem;border-bottom:1px solid #ebebeb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-523254678{margin-bottom:0;}@media (min-width:768px){.header.jsx-523254678{height:100vh;position:fixed;left:0;top:0;}.nav.jsx-523254678{padding:2rem;width:30vw;height:100%;border-right:1px solid #ebebeb;border-bottom:none;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RTLEFBRzZCLEFBR0QsQUFHUSxBQVFQLEFBSUQsQUFNQSxhQUxFLEFBTUosRUFyQmYsQ0FIQSxBQWNBLE9BUmtDLENBbUJsQixJQU5MLE9BQ0QsQ0FNeUIsS0FMakMsY0FkYSxZQW9CUSxtQkFDRywyQ0FwQk0sbUNBcUJMLGdGQXBCTiw2QkFxQm5CLHdDQXBCbUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgaGVhZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9oZWFkZXIuc2Nzc1wiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGhlYWRlciBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5oZWFkZXJ9PlxuLy8gICAgICAgPG5hdlxuLy8gICAgICAgICBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5uYXZ9XG4vLyAgICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbi8vICAgICAgICAgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiXG4vLyAgICAgICA+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4vLyAgICAgICAgICAgPGgxPlRoZSBCbG9nIFRpdGxlPC9oMT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3R5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbi8vICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvaW5mb1wiID9cbi8vICAgICAgICAgICBcIi9cIiA6IFwiL2luZm9cIn1gfT5cbi8vICAgICAgICAgICAgIDxoMT57YCR7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuLy8gICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9pbmZvXCIgP1xuLy8gICAgICAgICAgIFwiY2xvc2VcIiA6IFwiaW5mb1wifWB9PC9oMT5cbi8vICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9uYXY+XG4vLyAgICAgPC9oZWFkZXI+XG4vLyAgICk7XG4vLyB9XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2XCJcbiAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aDE+e3Byb3BzLnNpdGVUaXRsZX08L2gxPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj17YCR7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9pbmZvXCIgP1xuICAgICAgICAgIFwiL1wiIDogXCIvaW5mb1wifWB9PlxuICAgICAgICAgICAgPGgxPntgJHt0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2luZm9cIiA/XG4gICAgICAgICAgXCJjbG9zZVwiIDogXCJpbmZvXCJ9YH08L2gxPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDE6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Header.js */"));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Layout.js";


// import Header from "./Header";
// import data from "../../config.json";
// import layoutStyles from "../styles/components/layout.scss";
// export default function Layout(props) {
//   return (
//     <section
//         className={`${layoutStyles.layout} ${
//           props.pathname == "/info" &&
//           layoutStyles.info_page}`}
//         style={{
//           backgroundColor: `${
//           props.pathname == "/info" && 
//           data.primary_color}`
//   }}
//     >
//       <Header />
//       <div className={layoutStyles.content}>{props.children}</div>
//     </section>
//   );
// }


function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    style: {
      backgroundColor: "".concat(props.bgColor && props.bgColor),
      color: "".concat(props.pathname == "info" && 'white')
    },
    className: "jsx-2857272008" + " " + "layout ".concat(props.pathname == "info" && "info_page"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: props.siteTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2857272008" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2857272008",
    __self: this
  }, ".layout.jsx-2857272008{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}.layout.jsx-2857272008 .info_page.jsx-2857272008{color:#ebebeb;}.content.jsx-2857272008{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}@media (min-width:768px){.layout.jsx-2857272008{display:block;}.content.jsx-2857272008{-webkit-box-flex:none;-webkit-flex-grow:none;-ms-flex-positive:none;flex-grow:none;width:70vw;margin-left:30vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENPLEFBRzZCLEFBTUosQUFHRixBQUlJLEFBR0MsY0FUbkIsQUFPRSxJQWJhLHFEQVNmLFlBT2UsU0FmUyxFQWdCSCxpQkFDbkIsMkRBaEJpQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2tlbmRhbGxzdHJhdXRtYW4vRm9yZXN0cnkvaW5pdGlhbC1wcm9qZWN0L3N0YXJ0ZXItYmxvZy1uZXh0L3NyYy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG4vLyBpbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcbi8vIGltcG9ydCBsYXlvdXRTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2xheW91dC5zY3NzXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPHNlY3Rpb25cbi8vICAgICAgICAgY2xhc3NOYW1lPXtgJHtsYXlvdXRTdHlsZXMubGF5b3V0fSAke1xuLy8gICAgICAgICAgIHByb3BzLnBhdGhuYW1lID09IFwiL2luZm9cIiAmJlxuLy8gICAgICAgICAgIGxheW91dFN0eWxlcy5pbmZvX3BhZ2V9YH1cbi8vICAgICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke1xuLy8gICAgICAgICAgIHByb3BzLnBhdGhuYW1lID09IFwiL2luZm9cIiAmJiBcbi8vICAgICAgICAgICBkYXRhLnByaW1hcnlfY29sb3J9YFxuLy8gICB9fVxuLy8gICAgID5cbi8vICAgICAgIDxIZWFkZXIgLz5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsYXlvdXRTdHlsZXMuY29udGVudH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH1cblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBNZXRhIGZyb20gJy4vTWV0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICBjbGFzc05hbWU9e2BsYXlvdXQgJHtcbiAgICAgIHByb3BzLnBhdGhuYW1lID09IFwiaW5mb1wiICYmXG4gICAgICBcImluZm9fcGFnZVwifWBcbiAgICB9XG4gICAgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7cHJvcHMuYmdDb2xvciAmJiBwcm9wcy5iZ0NvbG9yfWAsXG4gICAgICBjb2xvcjogYCR7cHJvcHMucGF0aG5hbWUgPT0gXCJpbmZvXCIgJiYgJ3doaXRlJ31gXG4gICAgfX1cbiAgPlxuICAgIDxNZXRhIC8+XG4gICAgPEhlYWRlciBzaXRlVGl0bGU9e3Byb3BzLnNpdGVUaXRsZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmxheW91dCAuaW5mb19wYWdlIHtcbiAgICAgICAgICBjb2xvcjogI2ViZWJlYjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGZsZXgtZ3Jvdzogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Layout.js */"));
}

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Meta.js";



function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1038139684",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-1038139684",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1038139684",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Work+Sans&display=swap\");*{box-sizing:inherit;}html{box-sizing:border-box;overflow-y:scroll;}body{margin:0;font-family:\"Work Sans\",\"Helvetica Neue\",Helvetica,sans-serif;overflow-x:hidden;color:#000;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;}a:hover{-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;opacity:0.5;-webkit-text-decoration-color:inherit;text-decoration-color:inherit;}ul{list-style:none;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;list-style-position:outside;list-style-image:none;}ol{margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;list-style-position:outside;list-style-image:none;}ul,ol,p{margin-bottom:1.45rem;}img{max-width:100%;}img,figure,table,fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}strong{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li>ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li>ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li>p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}h1,h2,h3,h4,h5,h6,p{font-family:\"Work Sans\",\"Helvetica Neue\",Helvetica,sans-serif;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;text-rendering:optimizeLegibility;}h1,h2{font-weight:500;}h1{font-size:2rem;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;line-height:1.1875;}h2{font-size:1.7rem;-webkit-letter-spacing:-0.75px;-moz-letter-spacing:-0.75px;-ms-letter-spacing:-0.75px;letter-spacing:-0.75px;line-height:1.2;}h3{font-size:1.2rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.1875;color:#a0a0a0;font-weight:normal;}p{font-size:1.2rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.5;color:#464646;}@media (min-width:1280px){h1{font-size:2rem;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;line-height:1.1875;}h2{font-size:1.5rem;-webkit-letter-spacing:-0.75px;-moz-letter-spacing:-0.75px;-ms-letter-spacing:-0.75px;letter-spacing:-0.75px;line-height:1.1667;}h3{font-size:1rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.1875;color:#a0a0a0;font-weight:normal;}p{line-height:1.4375;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L2luaXRpYWwtcHJvamVjdC9zdGFydGVyLWJsb2ctbmV4dC9zcmMvY29tcG9uZW50cy9NZXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVpQixBQUVrRyxBQUcxRCxBQUdHLEFBSWIsQUFTWSxBQUtRLEFBS2IsQUFVUCxBQVNhLEFBR1AsQUFHRCxBQVVBLEFBYUMsQUFNSyxBQVVILEFBR2UsQUFHakIsQUFHQSxBQUdLLEFBS0EsQUFLSixBQUdBLEFBR0EsQUFHZ0IsQUFHZCxBQWErQyxBQWVqRCxBQUlELEFBTUUsQUFNQSxBQVFBLEFBUU0sQUFNRSxBQU1GLEFBUUksU0FwTXNDLEFBNkJoRCxLQWVGLEFBVUEsQ0FiZixBQTBCb0IsQUFzQnBCLEFBR0EsQUF5RG9CLEFBNEJRLEFBWUUsQ0ExS3JCLEFBc0ZULEFBR0EsQUFHQSxBQWtDQSxDQTlEQSxBQXdFdUIsQUFNRCxBQVFBLEFBY1MsQ0FsRVgsQ0E1SHBCLEFBNE1JLENBNUhpQixBQXNCVyxBQUtBLEVBeEdkLEFBMENsQixHQWxCaUIsQ0FVRixHQWVGLEFBVUEsR0ErQmIsQUE0QkEsR0E5Q3lCLEdBa0R6QixFQXpIQSxDQWtDZ0IsQUEyQ0gsQ0FyREUsQUF5QkUsQUFVSyxRQS9DUixFQXVGZSxBQUtBLEVBMUJaLEdBckRELEFBVUYsRUFlQyxDQXNCSixFQTZERyxFQXhIZSxBQStDWCxFQTNDTixLQWJNLEFBZ0NVLEFBcUM1QixBQU1lLEVBckRELENBeUJFLEVBbUZELEVBcEhlLEdBa0Y5QixBQUtBLENBNUNpQixJQW1CRCxDQXJEWSxFQXRCakIsQ0ErQ0csQ0FtRkQsUUFsR1MsQUF5QlcsQ0F4RGxCLEVBMkVELEVBNUJRLEFBbUZMLFFBaUJFLEFBNEJRLEdBOUtRLEFBcUJiLENBc0RBLElBK0dLLENBM0ozQixBQW1HZSxDQTRCSSxBQVFILElBdkhoQixBQXlHZ0IsQUE0QlcsR0E1SFQsQ0FqRGxCLENBNElBLEFBNEJJLEtBNUNZLENBN0doQixDQXNEQSxBQTJGYyxDQW9CUSxFQTVCUixDQU5kLEdBNEJJLENBektKLENBNkNjLEdBeERvQixFQW1JcEIsQUFvQ2QsQ0FvQjJCLEVBNUJSLE1BdEdGLEtBMkVLLE1Bd0RsQixFQTVCSixJQXRHZ0IsTUF6RGhCLElBb0ljLE1BMUVkLFFBMkVrQyxrQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL2tlbmRhbGxzdHJhdXRtYW4vRm9yZXN0cnkvaW5pdGlhbC1wcm9qZWN0L3N0YXJ0ZXItYmxvZy1uZXh0L3NyYy9jb21wb25lbnRzL01ldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGEoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FucyZkaXNwbGF5PXN3YXBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9sIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bCwgb2wsIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjQ1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWcsIGZpZ3VyZSwgdGFibGUsIGZpZWxkc2V0ICB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjQ1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1cmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS40NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNDVyZW0gLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsaSA+IG9sIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS40NXJlbSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDEuNDVyZW0gLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsaSA+IHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS40NXJlbSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDEuNDVyZW0gLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBibG9ja3F1b3RlICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkgKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkgPiBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjQ1cmVtIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7LyogLy9UWVBPR1JBUEhZLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cblxuICAgICAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgICAgICAgIGgzLFxuICAgICAgICAgICAgICAgICAgICBoNCxcbiAgICAgICAgICAgICAgICAgICAgaDUsXG4gICAgICAgICAgICAgICAgICAgIGg2LFxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS40NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xODc1O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xODc1O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNjY3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mzc1O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Meta.js */"));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogList */ "./components/BlogList.js");



var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/pages/index.js";




var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pathname: "/",
    siteTitle: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_BlogList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var content;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../data/config.json */ "./data/config.json", 3));

        case 2:
          content = _context.sent;
          return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
            fileRelativePath: "src/data/config.json"
          }, content));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/***/ }),

/***/ "./posts sync recursive \\.md$":
/*!**************************!*\
  !*** ./posts sync \.md$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./coastal-redwood.md": "./posts/coastal-redwood.md",
	"./doug-fir.md": "./posts/doug-fir.md",
	"./rocky-mountain-juniper.md": "./posts/rocky-mountain-juniper.md",
	"./the-oldest-living-organism-on-the-planet.md": "./posts/the-oldest-living-organism-on-the-planet.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./posts sync recursive \\.md$";

/***/ }),

/***/ "./posts/coastal-redwood.md":
/*!**********************************!*\
  !*** ./posts/coastal-redwood.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The coastal red giants\nauthor: Watson & Crick\ndate: 2019-07-10T16:04:44.000+00:00\nhero_image: ../static/jj-ying-7JX0-bfiuxQ-unsplash.jpg\n\n---\nPseudotsuga menziesii is an evergreen conifer species in the pine family, Pinaceae. It is native to western North America and is known as Douglas fir,Douglas-fir,Oregon pine,and Columbian pine. There are two varieties: coast Douglas-fir (P. menziesii var. menziesii), and Rocky Mountain Douglas-fir (P. menziesii var. glauca).\n\nChicharrones kinfolk tumblr narwhal venmo. Iceland cloud bread 8-bit, hashtag single-origin coffee keffiyeh drinking vinegar cray banjo four dollar toast bespoke tbh live-edge celiac. YOLO dreamcatcher hot chicken selvage portland XOXO, single-origin coffee sustainable mustache thundercats fixie pour-over hexagon irony deep v. Farm-to-table ennui mixtape marfa raw denim austin hell of keffiyeh chia prism ethical. Polaroid biodiesel everyday carry VHS hot chicken chartreuse typewriter messenger bag. Cloud bread truffaut street art jean shorts chia.");

/***/ }),

/***/ "./posts/doug-fir.md":
/*!***************************!*\
  !*** ./posts/doug-fir.md ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The truth about Doug-fir\nauthor: Grace Hopper\ndate: 2019-07-09T16:04:44.000+00:00\nhero_image: ../static/sonja-punz-N47B_zibNGo-unsplash.jpg\n\n---\nTousled aesthetic retro, tofu put a bird on it marfa lomo you probably haven't heard of them cronut venmo four dollar toast. Asymmetrical locavore portland flexitarian. Tattooed edison bulb franzen, wayfarers enamel pin pok pok crucifix asymmetrical brooklyn irony gastropub fixie. Gentrify meggings edison bulb migas fanny pack yuccie. Keytar ugh shaman sriracha. Cardigan succulents listicle meditation, next level fixie snackwave raw denim palo santo bitters hashtag lyft normcore hot chicken.\n\nMicrodosing vice etsy photo booth cliche migas chambray banjo pickled mumblecore four dollar toast hella XOXO scenester venmo. Sriracha adaptogen mumblecore, yr man bun vexillologist fanny pack. Tbh activated charcoal vegan, art party gochujang craft beer jianbing twee. Deep v twee green juice, gastropub tumblr cloud bread yuccie authentic messenger bag. Glossier enamel pin health goth, XOXO affogato seitan selfies. Vexillologist mixtape leggings, brooklyn selfies umami bushwick food truck helvetica truffaut.");

/***/ }),

/***/ "./posts/rocky-mountain-juniper.md":
/*!*****************************************!*\
  !*** ./posts/rocky-mountain-juniper.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The most incredible juniper\nauthor: Father John Misty\ndate: 2019-07-08T16:05:29.000+00:00\nhero_image: ../static/adrien-olichon--aOsCcTJXWY-unsplash.jpg\n\n---\n**Juniperus scopulorum**, the Rocky Mountain juniper, is a species of juniper native to western North America, in Canada in British Columbia and southwest Alberta, in the United States from Washington east to North Dakota, south to Arizona and also locally western Texas, and northernmost Mexico from Sonora east to Coahuila. It grows at altitudes of 500–2,700 metres (1,600–8,900 ft) on dry soils, often together with other juniper species. \"Scopulorum\" means \"of the mountains.\n\n![Joshua Tree](static/heather-shevlin-3B_NrzTjajc-unsplash.jpg)\n\nChicharrones kinfolk tumblr narwhal venmo. Iceland cloud bread 8-bit, hashtag single-origin coffee keffiyeh drinking vinegar cray banjo four dollar toast bespoke tbh live-edge celiac. YOLO dreamcatcher hot chicken selvage portland XOXO, single-origin coffee sustainable mustache thundercats fixie pour-over hexagon irony deep v. Farm-to-table ennui mixtape marfa raw denim austin hell of keffiyeh chia prism ethical. Polaroid biodiesel everyday carry VHS hot chicken chartreuse typewriter messenger bag. Cloud bread truffaut street art jean shorts chia.");

/***/ }),

/***/ "./posts/the-oldest-living-organism-on-the-planet.md":
/*!***********************************************************!*\
  !*** ./posts/the-oldest-living-organism-on-the-planet.md ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The oldest living organism on the planet\nauthor: Albert Hoffman\ndate: 2019-07-10T07:00:00.000+00:00\nhero_image: ../static/maksim-shutov-JOEvZOTfp64-unsplash.jpg\n\n---\nThe term **bristlecone pine** covers three [species](https://en.wikipedia.org/wiki/Species \"Species\") of [pine](https://en.wikipedia.org/wiki/Pine \"Pine\") tree (family [Pinaceae](https://en.wikipedia.org/wiki/Pinaceae \"Pinaceae\"), genus [_Pinus_](https://en.wikipedia.org/wiki/Pinus \"Pinus\"), subsection _Balfourianae_). All three species are long-lived and highly resilient to harsh weather and bad soils. One of the three species, _Pinus longaeva_, is among the longest-lived life forms on Earth. The oldest _Pinus longaeva_ is more than 5,000 years old,[\\[1\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-oldest-1) making it the oldest known individual of any species.\n\n![](static/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg)\n\nDespite their potential age and low reproductive rate, bristlecone pines, particularly _Pinus longaeva_, are usually a [first-succession](https://en.wikipedia.org/wiki/Primary_succession \"Primary succession\") species, tending to occupy new open ground.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2) They generally compete poorly in less-than-harsh environments, making them hard to cultivate.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2) In gardens, they succumb quickly to root rot.[\\[3\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-3) They do very well, however, where most other plants cannot even grow, such as in rocky [dolomitic](<https://en.wikipedia.org/wiki/Dolomite_(mineral)> \"Dolomite (mineral)\") soils in areas with virtually no rainfall.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2)\n\nBristlecone pines grow in scattered [subalpine](https://en.wikipedia.org/wiki/Subalpine \"Subalpine\") groves at high altitude in arid regions of the [Western United States](https://en.wikipedia.org/wiki/Western_United_States \"Western United States\"). Bristlecones, along with all related species in class Pinopsida, are [cone-bearing](https://en.wikipedia.org/wiki/Conifer_cone \"Conifer cone\") [seed plants](https://en.wikipedia.org/wiki/Seed_plant \"Seed plant\") commonly known as [conifers](https://en.wikipedia.org/wiki/Conifer \"Conifer\"); the name comes from the prickles on the female cones.[\\[4\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-ARKive-4)");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map