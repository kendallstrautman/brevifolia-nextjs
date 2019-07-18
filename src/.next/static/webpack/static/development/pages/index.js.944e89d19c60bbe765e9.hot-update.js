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
    }(__webpack_require__("./posts sync recursive \\.md$"));

    return posts;
  }

  function renderPosts(posts) {
    return posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: post.slug,
        href: {
          pathname: "/post",
          query: {
            id: post.slug
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.li,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: post.document.data.hero_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blog__info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, post.document.data.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, " some date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "summary"))));
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getPosts()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      posts = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: _styles_components_bloglist_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, posts.length > 1 && renderPosts(posts));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ }),

/***/ "./content/posts sync recursive \\.md$":
false,

/***/ "./content/posts/coastal-redwood.md":
false,

/***/ "./content/posts/doug-fir.md":
false,

/***/ "./content/posts/rocky-mountain-juniper.md":
false,

/***/ "./content/posts/the-oldest-living-organism-on-the-planet.md":
false,

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
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The coastal red giants\nauthor: Ricardo Nagaoka\ndate: 2019-07-10T16:04:44.000+00:00\nhero_image: \"static/jj-ying-7JX0-bfiuxQ-unsplash.jpg\"\n---\n\nPseudotsuga menziesii is an evergreen conifer species in the pine family, Pinaceae. It is native to western North America and is known as Douglas fir,Douglas-fir,Oregon pine,and Columbian pine. There are two varieties: coast Douglas-fir (P. menziesii var. menziesii), and Rocky Mountain Douglas-fir (P. menziesii var. glauca).\n\nChicharrones kinfolk tumblr narwhal venmo. Iceland cloud bread 8-bit, hashtag single-origin coffee keffiyeh drinking vinegar cray banjo four dollar toast bespoke tbh live-edge celiac. YOLO dreamcatcher hot chicken selvage portland XOXO, single-origin coffee sustainable mustache thundercats fixie pour-over hexagon irony deep v. Farm-to-table ennui mixtape marfa raw denim austin hell of keffiyeh chia prism ethical. Polaroid biodiesel everyday carry VHS hot chicken chartreuse typewriter messenger bag. Cloud bread truffaut street art jean shorts chia.\n");

/***/ }),

/***/ "./posts/doug-fir.md":
/*!***************************!*\
  !*** ./posts/doug-fir.md ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The truth about Doug-fir\nauthor: David Douglas\ndate: 2019-07-09T16:04:44.000+00:00\nhero_image: \"static/sonja-punz-N47B_zibNGo-unsplash.jpg\"\n---\n\nTousled aesthetic retro, tofu put a bird on it marfa lomo you probably haven't heard of them cronut venmo four dollar toast. Asymmetrical locavore portland flexitarian. Tattooed edison bulb franzen, wayfarers enamel pin pok pok crucifix asymmetrical brooklyn irony gastropub fixie. Gentrify meggings edison bulb migas fanny pack yuccie. Keytar ugh shaman sriracha. Cardigan succulents listicle meditation, next level fixie snackwave raw denim palo santo bitters hashtag lyft normcore hot chicken.\n\nMicrodosing vice etsy photo booth cliche migas chambray banjo pickled mumblecore four dollar toast hella XOXO scenester venmo. Sriracha adaptogen mumblecore, yr man bun vexillologist fanny pack. Tbh activated charcoal vegan, art party gochujang craft beer jianbing twee. Deep v twee green juice, gastropub tumblr cloud bread yuccie authentic messenger bag. Glossier enamel pin health goth, XOXO affogato seitan selfies. Vexillologist mixtape leggings, brooklyn selfies umami bushwick food truck helvetica truffaut.\n");

/***/ }),

/***/ "./posts/rocky-mountain-juniper.md":
/*!*****************************************!*\
  !*** ./posts/rocky-mountain-juniper.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The most incredible juniper\nauthor: Walt Whitman\ndate: 2019-07-08T16:05:29.000+00:00\nhero_image: \"static/adrien-olichon--aOsCcTJXWY-unsplash.jpg\"\n---\n\n**Juniperus scopulorum**, the Rocky Mountain juniper, is a species of juniper native to western North America, in Canada in British Columbia and southwest Alberta, in the United States from Washington east to North Dakota, south to Arizona and also locally western Texas, and northernmost Mexico from Sonora east to Coahuila. It grows at altitudes of 500–2,700 metres (1,600–8,900 ft) on dry soils, often together with other juniper species. \"Scopulorum\" means \"of the mountains.\n\n![Joshua Tree](../images/heather-shevlin-3B_NrzTjajc-unsplash.jpg)\n\nChicharrones kinfolk tumblr narwhal venmo. Iceland cloud bread 8-bit, hashtag single-origin coffee keffiyeh drinking vinegar cray banjo four dollar toast bespoke tbh live-edge celiac. YOLO dreamcatcher hot chicken selvage portland XOXO, single-origin coffee sustainable mustache thundercats fixie pour-over hexagon irony deep v. Farm-to-table ennui mixtape marfa raw denim austin hell of keffiyeh chia prism ethical. Polaroid biodiesel everyday carry VHS hot chicken chartreuse typewriter messenger bag. Cloud bread truffaut street art jean shorts chia.\n");

/***/ }),

/***/ "./posts/the-oldest-living-organism-on-the-planet.md":
/*!***********************************************************!*\
  !*** ./posts/the-oldest-living-organism-on-the-planet.md ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: The oldest living organism on the planet\nauthor: Donal Rusk Currey\ndate: 2019-07-10T07:00:00Z\nhero_image: \"static/maksim-shutov-JOEvZOTfp64-unsplash.jpg\"\n---\n\nThe term **bristlecone pine** covers three [species](https://en.wikipedia.org/wiki/Species \"Species\") of [pine](https://en.wikipedia.org/wiki/Pine \"Pine\") tree (family [Pinaceae](https://en.wikipedia.org/wiki/Pinaceae \"Pinaceae\"), genus [_Pinus_](https://en.wikipedia.org/wiki/Pinus \"Pinus\"), subsection _Balfourianae_). All three species are long-lived and highly resilient to harsh weather and bad soils. One of the three species, _Pinus longaeva_, is among the longest-lived life forms on Earth. The oldest _Pinus longaeva_ is more than 5,000 years old,[\\[1\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-oldest-1) making it the oldest known individual of any species.\n\n![](/src/content/images/scott-webb-qauaqihMwpc-unsplash.jpg)\n\nDespite their potential age and low reproductive rate, bristlecone pines, particularly _Pinus longaeva_, are usually a [first-succession](https://en.wikipedia.org/wiki/Primary_succession \"Primary succession\") species, tending to occupy new open ground.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2) They generally compete poorly in less-than-harsh environments, making them hard to cultivate.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2) In gardens, they succumb quickly to root rot.[\\[3\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-3) They do very well, however, where most other plants cannot even grow, such as in rocky [dolomitic](<https://en.wikipedia.org/wiki/Dolomite_(mineral)> \"Dolomite (mineral)\") soils in areas with virtually no rainfall.[\\[2\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-FEIS-2)\n\nBristlecone pines grow in scattered [subalpine](https://en.wikipedia.org/wiki/Subalpine \"Subalpine\") groves at high altitude in arid regions of the [Western United States](https://en.wikipedia.org/wiki/Western_United_States \"Western United States\"). Bristlecones, along with all related species in class Pinopsida, are [cone-bearing](https://en.wikipedia.org/wiki/Conifer_cone \"Conifer cone\") [seed plants](https://en.wikipedia.org/wiki/Seed_plant \"Seed plant\") commonly known as [conifers](https://en.wikipedia.org/wiki/Conifer \"Conifer\"); the name comes from the prickles on the female cones.[\\[4\\]](https://en.wikipedia.org/wiki/Bristlecone_pine#cite_note-ARKive-4)\n");

/***/ })

})
//# sourceMappingURL=index.js.944e89d19c60bbe765e9.hot-update.js.map