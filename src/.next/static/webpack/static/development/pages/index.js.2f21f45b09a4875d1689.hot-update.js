webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogList.js":
/*!********************************!*\
  !*** ./components/BlogList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/bloglist.scss */ "./styles/components/bloglist.scss");
/* harmony import */ var _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "../node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ "../node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/BlogList.js";







var BlogList = function BlogList() {
  function getPosts() {
    var posts = function (ctx) {
      var keys = ctx.keys();
      var values = keys.map(ctx);
      var data = keys.map(function (key, index) {
        // Create slug from filename
        var slug = key.replace(/^.*[\\\/]/, "").split(".").slice(0, -1).join(".");
        var value = values[index]; // Parse document

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
    var summary = content.slice(0, 200);
    return summary;
  }

  function renderPosts(posts) {
    console.log(posts);
    return posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: post.slug,
        href: {
          pathname: "/blog",
          query: {
            id: post.slug
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3___default.a.li,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: post.document.data.hero_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blog__info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, post.document.data.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " some date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, truncateSummary(post.document.content)))));
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getPosts()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      posts = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _styles_components_bloglist_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, posts.length > 1 && renderPosts(posts));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.2f21f45b09a4875d1689.hot-update.js.map