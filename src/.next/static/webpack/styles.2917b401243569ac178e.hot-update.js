webpackHotUpdate("styles",{

/***/ "./styles/pages/blog.module.scss":
/*!***************************************!*\
  !*** ./styles/pages/blog.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blog":"_tLWvY1IsKlC2A8fs0zq-","blog__hero":"rzDa9jZIt15KTBqFKN5KS","blog__info":"_1ZD4Xp5DpFSB70b8hlNhwv","blog__body":"_52bYM9ieIN-mriS3hlZGn","blog__footer":"_2EUFVSOad-PflRximL5oY6"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563478253742");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2917b401243569ac178e.hot-update.js.map