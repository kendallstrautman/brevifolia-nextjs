webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ "../config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "../config.json", 1);
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/layout.scss */ "./styles/components/layout.scss");
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Layout.js";






function Layout(props) {
  // const isInfo = router.pathname === '/info'
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('inherit'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('inherit'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      typeColor = _useState4[0],
      setTypeColor = _useState4[1];

  function isInfoPage() {
    if (next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname == "/info") {
      return true;
    } else {
      return false;
    }
  }

  function setColor() {
    if (isInfoPage()) {
      setBgColor(_config_json__WEBPACK_IMPORTED_MODULE_3__.primary_color);
      setTypeColor("#fff");
    } else {
      setBgColor("inherit");
      setTypeColor("inherit");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "".concat(_styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4___default.a.layout, " ").concat(isInfoPage() && _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4___default.a.info_page),
    style: {
      backgroundColor: "".concat( true && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.pathname == "/info" && _config_json__WEBPACK_IMPORTED_MODULE_3__.primary_color)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.children));
} // className={`${layoutStyles.layout} ${typeof window !== "undefined" &&
// Router.pathname == "/info" &&
//   layoutStyles.info_page}`}
// style={{
//   backgroundColor: `${typeof window !== "undefined" &&
//   Router.pathname == "/info" && 
//     data.primary_color}`
// }}

/***/ })

})
//# sourceMappingURL=index.js.b57fa7f209ad23a0ed52.hot-update.js.map