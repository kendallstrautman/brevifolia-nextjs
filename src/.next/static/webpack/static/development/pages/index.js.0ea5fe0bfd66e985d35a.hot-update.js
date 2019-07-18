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
    }(__webpack_require__("./content/posts sync recursive \\.md$"));

    console.log(posts);
    return posts;
  }

  function renderPosts(posts) {
    return posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.li,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, post.document.data.title));
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getPosts()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      posts = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, posts.length > 1 && renderPosts(posts));
};

{}
/* <Link href="/">
      <li className={blogListStyles.li}>
        <div className={blogListStyles.hero_image}>
          <img src="https://source.unsplash.com/random" />
        </div>
        <div className={blogListStyles.blog__info}>
          <h1>Blog Title</h1>
          <h3> July 07, 1992</h3>
          <p>Blog summary</p>
        </div>
      </li>
    </Link> */
// BlogList.getInitialProps = async function() {
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
//# sourceMappingURL=index.js.0ea5fe0bfd66e985d35a.hot-update.js.map