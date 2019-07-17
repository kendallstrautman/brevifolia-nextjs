webpackHotUpdate("styles",{

/***/ "./styles/components/header.module.scss":
/*!**********************************************!*\
  !*** ./styles/components/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_2NlZ3WKmKqs2Y8LC8r1LLX","nav":"_1VtO2MTm1ES9Wv9-y8SfK2"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1563387253227");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.bceefa3ff80b38731d97.hot-update.js.map