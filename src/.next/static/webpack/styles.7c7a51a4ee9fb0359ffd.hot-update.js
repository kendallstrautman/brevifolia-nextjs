webpackHotUpdate("styles",{

/***/ "./styles/pages/blog.scss":
/*!********************************!*\
  !*** ./styles/pages/blog.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blog":"OWEyILVB73DDjSAhxuC6N","blog__hero":"_3UOBIWjYykgtxA-ffuTai4","blog__info":"_3cQmzIgfYjB8XDGf8tt--D","blog__body":"_1sMzyd_8giSMfzKu-1mdxF","blog__footer":"_3wQM1KzLrwdW47CaJ2hGXW"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1564088843720");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7c7a51a4ee9fb0359ffd.hot-update.js.map