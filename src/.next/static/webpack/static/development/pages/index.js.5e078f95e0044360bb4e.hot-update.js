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
/* harmony import */ var _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/bloglist.module.scss */ "./styles/components/bloglist.module.scss");
/* harmony import */ var _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "../node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/BlogList.js";






var BlogList = function BlogList() {
  var getPosts = function getPosts() {
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
    }(__webpack_require__("./content/posts sync recursive \\.md$"));

    console.log(posts);
    return posts;
  };

  var mapPosts = function mapPosts(data) {// setPosts(data);
  }; // getPosts().then(data => mapPosts(data));


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getPosts()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  console.log(posts);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.li,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero_image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://source.unsplash.com/random",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blog__info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Blog Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " July 07, 1992"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Blog summary")))));
}; // BlogList.getInitialProps = async function() {
//   // Get posts from folder
//   const posts = (ctx => {
//     const keys = ctx.keys();
//     const values = keys.map(ctx);
//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, "")
//         .split(".")
//         .slice(0, -1)
//         .join(".");
//       const value = values[index];
//       // Parse document
//       const document = matter(value);
//       return {
//         document,
//         slug
//       };
//     });
//     return data;
//   })(require.context("../content/posts", true, /\.md$/));
//   return {
//     posts
//   };
// };


/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.5e078f95e0044360bb4e.hot-update.js.map