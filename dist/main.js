/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PlayfairDisplaySC-Bold.ttf */ "./src/fonts/PlayfairDisplaySC-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'My font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.flavors > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAA+C;IAC/C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,QAAQ;IACR,cAAc;IACd,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,UAAU;AACd;;AAEA;;;IAGI,gBAAgB;IAChB,yBAAyB;IACzB,WAAW;IACX,wDAAwD;IACxD,yCAAyC;IACzC,iCAAiC;IACjC,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,wDAAwD;AAC5D;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,oDAAoD;IACpD,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,oDAAoD;IACpD,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'My font';\n    src: url('../fonts/PlayfairDisplaySC-Bold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.flavors > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
const header = () => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const button = document.createElement('button');
    
    div.classList.add('header');
    h3.classList.add('slogan');
    ul.classList.add('guides');
    button.classList.add('btn-contact');

    h3.textContent = 'Italian';

    a1.textContent = 'Home';
    a1.href = '#';
    a2.textContent = 'Locations';
    a2.href = '#';
    a3.textContent = 'Menu';
    a3.href = '#';

    button.textContent = 'Contact us';

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    div.appendChild(h3);
    div.appendChild(ul);
    div.appendChild(button);    

    a3.addEventListener('click', e => {
        e.preventDefault(); 
        const home = document.querySelector ('.home');
        const menu = document.querySelector ('.menu');
        const locations = document.querySelector('.locations');

        home.style.cssText += 'display: none;';
        menu.style.cssText += 'display: block;';
        locations.style.cssText += 'display: none;';
    });

    a1.addEventListener('click', e => {
        e.preventDefault(); 
        const home = document.querySelector ('.home');
        const menu = document.querySelector ('.menu');
        const locations = document.querySelector('.locations');
         
        home.style.cssText += 'display: grid;';
        menu.style.cssText += 'display: none;';
        locations.style.cssText += 'display: none;';
    });

    a2.addEventListener('click', e => {
        e.preventDefault(); 
        const home = document.querySelector ('.home');
        const menu = document.querySelector ('.menu');
        const locations = document.querySelector('.locations');
                  
        home.style.cssText += 'display: none;';
        menu.style.cssText += 'display: none;';
        locations.style.cssText += 'display: block;';
    });

    return div;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ "./src/img/pizza.jpg");


const home = () => {
    const div = document.createElement('div');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const button = document.createElement('button');

    div.classList.add('home');
    img.classList.add('img-home');
    button.classList.add('btn-order');
    
    h1.textContent = 'GOOD FOOD BRINGS GENUINE HAPINESS';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta impedit dolorem aspernatur at reprehenderit';
    button.textContent = 'Place an order';

    img.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;

    childDiv.appendChild(h1);
    childDiv.appendChild(p);
    childDiv.appendChild(button);
    childDiv2.appendChild(img);
    div.appendChild(childDiv);
    div.appendChild(childDiv2);

    return div;
}

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locations": () => (/* binding */ locations)
/* harmony export */ });
const locations = () => {
    const div = document.createElement('div');
    const subDiv = document.createElement('div');
    const buttonOrder = document.createElement('button');
    const buttonMenu = document.createElement('button');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h3Contact = document.createElement('h3');
    const h3Address = document.createElement('h3');
    const h3Hours = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    const p9 = document.createElement('p');
    const p10 = document.createElement('p');
    const p11 = document.createElement('p');
    const p12 = document.createElement('p');
    const p13 = document.createElement('p');
    const p14 = document.createElement('p');
    const p15 = document.createElement('p');
    const p16 = document.createElement('p');
    const p17 = document.createElement('p');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');

    div.classList.add('locations');
    subDiv.classList.add('contact-hours');
    buttonOrder.classList.add('btn-order-online');
    buttonMenu.classList.add('btn-menu');
    ul.classList.add('hours-list')
    li1.classList.add('row');
    li2.classList.add('row');
    li3.classList.add('row');
    li4.classList.add('row');
    li5.classList.add('row');
    li6.classList.add('row');
    li7.classList.add('row');

    buttonOrder.textContent = 'ORDER ONLINE';
    buttonMenu.textContent = 'VIEW THE MENU';

    h3Contact.textContent = 'Contact';
    p1.innerHTML = `Telephone <br> xxx.xxx.xxxx`;
    p2.innerHTML = `Take Out <br> yyy.yyy.yyyy`;

    h3Address.textContent = 'Address';
    p3.innerHTML = `2409 Raintree Boulevard <br> Kokomo, IN 46901`;

    h3Hours.textContent = 'Hours';

    p4.textContent = 'Monday';
    p5.textContent = '11:30 AM - 10:30 PM';
    li1.appendChild(p4);
    li1.appendChild(p5);
        
    p6.textContent = 'Tuesday';
    p7.textContent = '11:30 AM - 10:30 PM';
    li2.appendChild(p6);
    li2.appendChild(p7);

    p8.textContent = 'Wednesday';
    p9.textContent = '11:30 AM - 10:30 PM';
    li3.appendChild(p8);
    li3.appendChild(p9);

    p10.textContent = 'Thursday';
    p11.textContent = '11:30 AM - 10:30 PM';
    li4.appendChild(p10);
    li4.appendChild(p11);

    p12.textContent = 'Friday';
    p13.textContent = '11:30 AM - 12:00 PM';
    li5.appendChild(p12);
    li5.appendChild(p13);

    p14.textContent = 'Saturday';
    p15.textContent = '11:30 AM - 12:00 PM';
    li6.appendChild(p14);
    li6.appendChild(p15);

    p16.textContent = 'Monday';
    p17.textContent = '11:30 AM - 10:30 PM';
    li7.appendChild(p16);
    li7.appendChild(p17);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    childDiv.appendChild(h3Contact);
    childDiv.appendChild(p1);
    childDiv.appendChild(p2);
    childDiv.appendChild(h3Address);
    childDiv.appendChild(p3);

    childDiv2.appendChild(h3Hours);
    childDiv2.appendChild(ul);

    subDiv.appendChild(childDiv);
    subDiv.appendChild(childDiv2);
    div.appendChild(buttonOrder);
    div.appendChild(buttonMenu);
    div.appendChild(subDiv);
    
    return div;
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = () => {
    const div = document.createElement('div');
    const divHeader = headerMenu();
    const divPizza = menuPizza();
    const divPasta = menuPasta();
    const divSalad = menuSalad();
    const divDrinks = menuDrinks();

    div.classList.add('menu');

    div.appendChild(divHeader);
    div.appendChild(divPizza);
    div.appendChild(divPasta);
    div.appendChild(divSalad);
    div.appendChild(divDrinks);

    return div;
}

function headerMenu() {
    const div2 = document.createElement('div');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const buttonPizza = document.createElement('button');
    const buttonPasta = document.createElement('button');
    const buttonSalad = document.createElement('button');
    const buttonDrinks = document.createElement('button');

    div2.classList.add('header-menu');
    childDiv.classList.add('our-menu');
    childDiv2.classList.add('btns-menu');
    buttonPizza.classList.add('btn-pizza');
    buttonPasta.classList.add('btn-pasta');
    buttonSalad.classList.add('btn-salad');
    buttonDrinks.classList.add('btn-drinks');

    h2.textContent = 'OUR MENUS';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    buttonPizza.textContent = 'Pizza';
    buttonPasta.textContent = 'Pasta';
    buttonSalad.textContent = 'Salad';
    buttonDrinks.textContent = 'Drinks';

    childDiv.appendChild(h2);
    childDiv.appendChild(p);
    childDiv2.appendChild(buttonPizza);
    childDiv2.appendChild(buttonPasta);
    childDiv2.appendChild(buttonSalad);
    childDiv2.appendChild(buttonDrinks);
    div2.appendChild(childDiv);
    div2.appendChild(childDiv2);

    buttonPizza.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');

        menuPizza.style.cssText += 'display: block';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: none';

        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonPasta.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: block';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: none';

        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonSalad.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: block';
        menuDrinks.style.cssText += 'display: none';

        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonDrinks.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: block';

        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    return div2;
}

function menuPizza() {
    const divPizza = document.createElement('div');
    const childDivPizza = document.createElement('div');
    const pMenuPizza = document.createElement('p');
    const pMenuPizza2 = document.createElement('p');
    const pMenuPizza3 = document.createElement('p');
    const h2MenuPizza = document.createElement('h2');
    const ul = document.createElement('ul');
    const ulPrice = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');

    divPizza.classList.add('menu-pizza');
    childDivPizza.classList.add('pizzas-list');
    ul.classList.add('flavors');
    ulPrice.classList.add('prices');
    

    h2MenuPizza.textContent = 'CLASSIC PIZZA';
    pMenuPizza.textContent = "Choose Small (14''/6 slices), Large (16'' /8 slices) or Sheet Pizza";
    pMenuPizza2.textContent = "plain cheese"
    pMenuPizza3.textContent = "8.95 / 12.95 / 23.95";

    li1.textContent = 'Chicken Wing';
    li2.textContent = 'Bacon & Tomato';
    li3.textContent = 'BBQ Rib';
    li4.textContent = 'Lasagna';
    li5.textContent = 'Philly Steak';
    li6.textContent = 'Hawaiian';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);

    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    ulPrice.appendChild(li7);
    ulPrice.appendChild(li8);
    ulPrice.appendChild(li9);
    ulPrice.appendChild(li10);
    ulPrice.appendChild(li11);
    ulPrice.appendChild(li12);

    childDivPizza.appendChild(ul);
    childDivPizza.appendChild(ulPrice);

    divPizza.appendChild(h2MenuPizza);
    divPizza.appendChild(pMenuPizza);
    divPizza.appendChild(pMenuPizza2);
    divPizza.appendChild(pMenuPizza3);
    divPizza.appendChild(childDivPizza);

    return divPizza;
}

function menuPasta() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const childDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const ulPrice = document.createElement('ul');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');

    div.classList.add('menu-pasta');
    childDiv.classList.add('pastas-list');
    ul.classList.add('flavors');
    ulPrice.classList.add('prices-pastas');

    h2.textContent = 'PASTAS';

    li1.textContent = 'Meat Lasagna'
    p1.textContent = 'The classic! Sweet Italian sausage and ground beef mixed with fresh herbs, Garlic, ricotta and Parmesan, then baked with marinara and mozzarella.';
    li2.textContent = 'Tortellini al Forno'
    p2.textContent = 'Grilled fresh vegetables including summer squash, zucchini, broccoli and red bell peppers, with tri-colored tortellini tossed in a delicious tomato cream sauce and baked with mozzarella.';
    li3.textContent = 'Baked Penne'
    p3.textContent = 'Penne pasta tossed with a delicious blend of marinara, ricotta, Parmesan and fresh herbs then baked with fresh mozzarella on top.';
    li4.textContent = 'Grouper Tropical '
    p4.textContent = 'Fresh local grouper pan seared and topped with mango salsa over seafood risotto with sauteed vegetables';
    li5.textContent = 'Dolphin Picatta'
    p5.textContent = 'Fresh local mahi-mahi sauté ed with capers and garlic in a white wine butter sauce.';
    li6.textContent = 'Shrimp Alfredo '
    p6.textContent = 'Fresh local shrimp in our delicious creamy Parmesan cheese sauce, tossed with pasta.';

    li1.appendChild(p1);
    li2.appendChild(p2);
    li3.appendChild(p3);
    li4.appendChild(p4);
    li5.appendChild(p5);
    li6.appendChild(p6);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);

    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    ulPrice.appendChild(li7);
    ulPrice.appendChild(li8);
    ulPrice.appendChild(li9);
    ulPrice.appendChild(li10);
    ulPrice.appendChild(li11);
    ulPrice.appendChild(li12);

    childDiv.appendChild(ul);
    childDiv.appendChild(ulPrice);

    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}

function menuSalad() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const childDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const ulPrice = document.createElement('ul');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');

    div.classList.add('menu-salad');
    childDiv.classList.add('pastas-list');
    ul.classList.add('flavors');
    ulPrice.classList.add('prices-pastas');

    h2.textContent = 'SALADS';

    li1.textContent = 'Caesar Salad'
    p1.textContent = 'Romaine Lettuce, Parmesan Romano Cheese, Homemade Garlic Croutons- Served with House Made Caesar Dressing';
    li2.textContent = 'Mixed Green Salad'
    p2.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives - Served with House Vinaigrette Dressing ';
    li3.textContent = "Carmine's Salad";
    p3.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives Topped w/ Diced Meats & Cheeses - Served with House Vinaigrette Dressing ';
    li4.textContent = 'Caprese Salad'
    p4.textContent = 'Ripened Tomatoes with Bocconcini, Red Onions, Cerignola & Kalamata Olives, Roasted Red Peppers, Fresh Basil, Olive Oil & Aged Red Wine Vinegar Salt, Pepper and Oregano';

    li1.appendChild(p1);
    li2.appendChild(p2);
    li3.appendChild(p3);
    li4.appendChild(p4);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    li7.textContent = '$ 29.95';
    li8.textContent = '$ 29.95';
    li9.textContent = '$ 33.95';
    li10.textContent = '$ 33.95';

    ulPrice.appendChild(li7);
    ulPrice.appendChild(li8);
    ulPrice.appendChild(li9);
    ulPrice.appendChild(li10);

    childDiv.appendChild(ul);
    childDiv.appendChild(ulPrice);

    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}

function menuDrinks() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3Beer = document.createElement('h3');
    const h3Softs = document.createElement('h3');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const ulBeer = document.createElement('ul');
    const ulSoft = document.createElement('ul');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');

    div.classList.add('menu-drinks');
    childDiv.classList.add('drinks-list');
    ulBeer.classList.add('beer');
    ulSoft.classList.add('soft');
    
    h2.textContent = 'DRINKS';

    h3Beer.textContent = 'BEER & CIDER';
    li1.textContent = 'Innis and Gunn Craft Lager • 5.25';
    li2.textContent = 'Innis and Gunn Rotational • 5.75';
    li3.textContent = 'Peroni Nastro Azzuro • 5.75';
    li4.textContent = 'Tennents • 4.50';

    h3Softs.textContent = 'SOFTS';
    li5.textContent = 'Coke/Diet Coke/Coke Zero • 2.75';
    li6.textContent = 'Irn Bru/Diet Irn Bru • 2.75';
    li7.textContent = 'Sprite/Fanta • 2.75';
    li8.textContent = 'Soda Folk Root Beer/Cream Soda • 3';
    li9.textContent = 'Appletiser • 2.80';
    li10.textContent = 'Ginger Beer • 2.75';
    li11.textContent = 'Water Still/Sparkling • 2.25/4.25';

    ulBeer.appendChild(h3Beer);
    ulBeer.appendChild(li1);
    ulBeer.appendChild(li2);
    ulBeer.appendChild(li3);
    ulBeer.appendChild(li4);

    ulSoft.appendChild(h3Softs);
    ulSoft.appendChild(li5);
    ulSoft.appendChild(li6);
    ulSoft.appendChild(li7);
    ulSoft.appendChild(li8);
    ulSoft.appendChild(li9);
    ulSoft.appendChild(li10);
    ulSoft.appendChild(li11);

    childDiv.appendChild(ulBeer);
    childDiv.appendChild(ulSoft);

    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}

/***/ }),

/***/ "./src/fonts/PlayfairDisplaySC-Bold.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/PlayfairDisplaySC-Bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b17fb4f9060e1d49e27.ttf";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6598e021e11bf40308a2.jpg";

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f867bdad4bcd2c8b2f1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locations */ "./src/locations.js");







const body = document.querySelector('body');
const content = document.querySelector('.content');

body.style.cssText += `background-image: url(${_img_background_jpg__WEBPACK_IMPORTED_MODULE_1__});`;

content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__.header)());
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__.home)());
content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)());
content.appendChild((0,_locations__WEBPACK_IMPORTED_MODULE_5__.locations)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUdBQWlHLFlBQVk7QUFDN0csNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnlCO0FBQ3FCO0FBQ1o7QUFDSjtBQUNBO0FBQ1U7O0FBRXhDO0FBQ0E7O0FBRUEsK0NBQStDLGdEQUFVLENBQUMsRUFBRTs7QUFFNUQsb0JBQW9CLCtDQUFNO0FBQzFCLG9CQUFvQiwyQ0FBSTtBQUN4QixvQkFBb0IsMkNBQUk7QUFDeEIsb0JBQW9CLHFEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2NhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QbGF5ZmFpckRpc3BsYXlTQy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015IGZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgY29sb3I6ICMyZjJkMmM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCAjZGE5YTRjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMxNDE0MTRkNDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxufVxcblxcbi5ndWlkZXMge1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmQxMTExO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ndWlkZXMgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXIsIC5idG4tcGl6emEsXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3MsXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYTlhNGM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXItb25saW5lLCAuYnRuLW9yZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNiZDExMTEgaW5zZXQsIDAgMCAwIDAgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2JkMTExMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3Mge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjZGE5YTRjO1xcbn0gXFxuXFxuLmJ0bi1waXp6YSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLmltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcXG59XFxuXFxuLnN1Yi1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNDUwcHg7XFxufVxcblxcbi5zYWxhZC1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDQ1MHB4O1xcbiAgICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgIzlkMGEwYTtcXG59XFxuXFxuLmJ0bnMtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LXBpenphIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZmxhdm9ycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmljZXMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1wYXN0YSwgLm1lbnUtc2FsYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudS1wYXN0YSA+IGgyLCAubWVudS1zYWxhZCA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFzdGFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mbGF2b3JzID4gbGkgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcmljZXMtcGFzdGFzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWRyaW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRyaW5rcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmVlciA+IGxpLCAuc29mdCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogIzlkMGEwYTtcXG59XFxuXFxuLmxvY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob3Vycy1saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJvdyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeSBmb250JztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheVNDLUJvbGQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgY29sb3I6ICMyZjJkMmM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCAjZGE5YTRjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMxNDE0MTRkNDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxufVxcblxcbi5ndWlkZXMge1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmQxMTExO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ndWlkZXMgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXIsIC5idG4tcGl6emEsXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3MsXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYTlhNGM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXItb25saW5lLCAuYnRuLW9yZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNiZDExMTEgaW5zZXQsIDAgMCAwIDAgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2JkMTExMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3Mge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjZGE5YTRjO1xcbn0gXFxuXFxuLmJ0bi1waXp6YSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLmltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcXG59XFxuXFxuLnN1Yi1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNDUwcHg7XFxufVxcblxcbi5zYWxhZC1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDQ1MHB4O1xcbiAgICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgIzlkMGEwYTtcXG59XFxuXFxuLmJ0bnMtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LXBpenphIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZmxhdm9ycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmljZXMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1wYXN0YSwgLm1lbnUtc2FsYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudS1wYXN0YSA+IGgyLCAubWVudS1zYWxhZCA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFzdGFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mbGF2b3JzID4gbGkgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcmljZXMtcGFzdGFzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWRyaW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRyaW5rcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmVlciA+IGxpLCAuc29mdCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogIzlkMGEwYTtcXG59XFxuXFxuLmxvY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob3Vycy1saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJvdyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnc2xvZ2FuJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZ3VpZGVzJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWN0Jyk7XG5cbiAgICBoMy50ZXh0Q29udGVudCA9ICdJdGFsaWFuJztcblxuICAgIGExLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGExLmhyZWYgPSAnIyc7XG4gICAgYTIudGV4dENvbnRlbnQgPSAnTG9jYXRpb25zJztcbiAgICBhMi5ocmVmID0gJyMnO1xuICAgIGEzLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGEzLmhyZWYgPSAnIyc7XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cbiAgICBsaTEuYXBwZW5kQ2hpbGQoYTEpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChhMik7XG4gICAgbGkzLmFwcGVuZENoaWxkKGEzKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pOyAgICBcblxuICAgIGEzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubWVudScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25zJyk7XG5cbiAgICAgICAgaG9tZS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIG1lbnUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2s7JztcbiAgICAgICAgbG9jYXRpb25zLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICB9KTtcblxuICAgIGExLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubWVudScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25zJyk7XG4gICAgICAgICBcbiAgICAgICAgaG9tZS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBncmlkOyc7XG4gICAgICAgIG1lbnUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgICAgICBsb2NhdGlvbnMuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgIH0pO1xuXG4gICAgYTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuaG9tZScpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5tZW51Jyk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICBob21lLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICAgICAgbWVudS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIGxvY2F0aW9ucy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jazsnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgUGl6emEgZnJvbSAnLi9pbWcvcGl6emEuanBnJztcblxuZXhwb3J0IGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ltZy1ob21lJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1vcmRlcicpO1xuICAgIFxuICAgIGgxLnRleHRDb250ZW50ID0gJ0dPT0QgRk9PRCBCUklOR1MgR0VOVUlORSBIQVBJTkVTUyc7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwgZGljdGEgaW1wZWRpdCBkb2xvcmVtIGFzcGVybmF0dXIgYXQgcmVwcmVoZW5kZXJpdCc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYWNlIGFuIG9yZGVyJztcblxuICAgIGltZy5zcmMgPSBQaXp6YTtcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2Mik7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBjb25zdCBsb2NhdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoM0NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGgzQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaDNIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbnMnKTtcbiAgICBzdWJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ob3VycycpO1xuICAgIGJ1dHRvbk9yZGVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1vcmRlci1vbmxpbmUnKTtcbiAgICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnaG91cnMtbGlzdCcpXG4gICAgbGkxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpMi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTMuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk0LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpNS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk3LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgYnV0dG9uT3JkZXIudGV4dENvbnRlbnQgPSAnT1JERVIgT05MSU5FJztcbiAgICBidXR0b25NZW51LnRleHRDb250ZW50ID0gJ1ZJRVcgVEhFIE1FTlUnO1xuXG4gICAgaDNDb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHAxLmlubmVySFRNTCA9IGBUZWxlcGhvbmUgPGJyPiB4eHgueHh4Lnh4eHhgO1xuICAgIHAyLmlubmVySFRNTCA9IGBUYWtlIE91dCA8YnI+IHl5eS55eXkueXl5eWA7XG5cbiAgICBoM0FkZHJlc3MudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG4gICAgcDMuaW5uZXJIVE1MID0gYDI0MDkgUmFpbnRyZWUgQm91bGV2YXJkIDxicj4gS29rb21vLCBJTiA0NjkwMWA7XG5cbiAgICBoM0hvdXJzLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICAgIHA0LnRleHRDb250ZW50ID0gJ01vbmRheSc7XG4gICAgcDUudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGkxLmFwcGVuZENoaWxkKHA0KTtcbiAgICBsaTEuYXBwZW5kQ2hpbGQocDUpO1xuICAgICAgICBcbiAgICBwNi50ZXh0Q29udGVudCA9ICdUdWVzZGF5JztcbiAgICBwNy50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDYpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwNyk7XG5cbiAgICBwOC50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXknO1xuICAgIHA5LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwOCk7XG4gICAgbGkzLmFwcGVuZENoaWxkKHA5KTtcblxuICAgIHAxMC50ZXh0Q29udGVudCA9ICdUaHVyc2RheSc7XG4gICAgcDExLnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwMTApO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwMTEpO1xuXG4gICAgcDEyLnRleHRDb250ZW50ID0gJ0ZyaWRheSc7XG4gICAgcDEzLnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTI6MDAgUE0nO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwMTIpO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwMTMpO1xuXG4gICAgcDE0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5JztcbiAgICBwMTUudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMjowMCBQTSc7XG4gICAgbGk2LmFwcGVuZENoaWxkKHAxNCk7XG4gICAgbGk2LmFwcGVuZENoaWxkKHAxNSk7XG5cbiAgICBwMTYudGV4dENvbnRlbnQgPSAnTW9uZGF5JztcbiAgICBwMTcudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGk3LmFwcGVuZENoaWxkKHAxNik7XG4gICAgbGk3LmFwcGVuZENoaWxkKHAxNyk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTQpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTcpO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoaDNDb250YWN0KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgzQWRkcmVzcyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocDMpO1xuXG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGgzSG91cnMpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChjaGlsZERpdjIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25PcmRlcik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59OyIsImV4cG9ydCBjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkhlYWRlciA9IGhlYWRlck1lbnUoKTtcbiAgICBjb25zdCBkaXZQaXp6YSA9IG1lbnVQaXp6YSgpO1xuICAgIGNvbnN0IGRpdlBhc3RhID0gbWVudVBhc3RhKCk7XG4gICAgY29uc3QgZGl2U2FsYWQgPSBtZW51U2FsYWQoKTtcbiAgICBjb25zdCBkaXZEcmlua3MgPSBtZW51RHJpbmtzKCk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdlBpenphKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2UGFzdGEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZTYWxhZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkRyaW5rcyk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJNZW51KCkge1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ291ci1tZW51Jyk7XG4gICAgY2hpbGREaXYyLmNsYXNzTGlzdC5hZGQoJ2J0bnMtbWVudScpO1xuICAgIGJ1dHRvblBpenphLmNsYXNzTGlzdC5hZGQoJ2J0bi1waXp6YScpO1xuICAgIGJ1dHRvblBhc3RhLmNsYXNzTGlzdC5hZGQoJ2J0bi1wYXN0YScpO1xuICAgIGJ1dHRvblNhbGFkLmNsYXNzTGlzdC5hZGQoJ2J0bi1zYWxhZCcpO1xuICAgIGJ1dHRvbkRyaW5rcy5jbGFzc0xpc3QuYWRkKCdidG4tZHJpbmtzJyk7XG5cbiAgICBoMi50ZXh0Q29udGVudCA9ICdPVVIgTUVOVVMnO1xuICAgIHAudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJztcbiAgICBidXR0b25QaXp6YS50ZXh0Q29udGVudCA9ICdQaXp6YSc7XG4gICAgYnV0dG9uUGFzdGEudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuICAgIGJ1dHRvblNhbGFkLnRleHRDb250ZW50ID0gJ1NhbGFkJztcbiAgICBidXR0b25Ecmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uUGl6emEpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChidXR0b25QYXN0YSk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGJ1dHRvblNhbGFkKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uRHJpbmtzKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGNoaWxkRGl2Mik7XG5cbiAgICBidXR0b25QaXp6YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG4gICAgICAgIG1lbnVQaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuXG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjOyBjb2xvcjogI2ZmZjsnO1xuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25TYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICB9KTtcblxuICAgIGJ1dHRvblBhc3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudURyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcblxuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YzsgY29sb3I6ICNmZmY7JztcbiAgICAgICAgYnV0dG9uUGl6emEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uRHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICBidXR0b25TYWxhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG5cbiAgICAgICAgbWVudVBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51UGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVEcmlua3Muc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvbkRyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRHJpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrJztcblxuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2Mjtcbn1cblxuZnVuY3Rpb24gbWVudVBpenphKCkge1xuICAgIGNvbnN0IGRpdlBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXZQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBNZW51UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1lbnVQaXp6YTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1lbnVQaXp6YTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaDJNZW51UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB1bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdlBpenphLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGl6emEnKTtcbiAgICBjaGlsZERpdlBpenphLmNsYXNzTGlzdC5hZGQoJ3Bpenphcy1saXN0Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZmxhdm9ycycpO1xuICAgIHVsUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2VzJyk7XG4gICAgXG5cbiAgICBoMk1lbnVQaXp6YS50ZXh0Q29udGVudCA9ICdDTEFTU0lDIFBJWlpBJztcbiAgICBwTWVudVBpenphLnRleHRDb250ZW50ID0gXCJDaG9vc2UgU21hbGwgKDE0JycvNiBzbGljZXMpLCBMYXJnZSAoMTYnJyAvOCBzbGljZXMpIG9yIFNoZWV0IFBpenphXCI7XG4gICAgcE1lbnVQaXp6YTIudGV4dENvbnRlbnQgPSBcInBsYWluIGNoZWVzZVwiXG4gICAgcE1lbnVQaXp6YTMudGV4dENvbnRlbnQgPSBcIjguOTUgLyAxMi45NSAvIDIzLjk1XCI7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBXaW5nJztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnQmFjb24gJiBUb21hdG8nO1xuICAgIGxpMy50ZXh0Q29udGVudCA9ICdCQlEgUmliJztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnTGFzYWduYSc7XG4gICAgbGk1LnRleHRDb250ZW50ID0gJ1BoaWxseSBTdGVhayc7XG4gICAgbGk2LnRleHRDb250ZW50ID0gJ0hhd2FpaWFuJztcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTYpO1xuXG4gICAgbGk3LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICckIDguOTUgLyAxMi45OSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICckIDE1Ljk1IC8gMjMuNTAnO1xuICAgIGxpMTIudGV4dENvbnRlbnQgPSAnJCAxMS43NSAvIDE2LjQwJztcblxuICAgIHVsUHJpY2UuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICB1bFByaWNlLmFwcGVuZENoaWxkKGxpOCk7XG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTkpO1xuICAgIHVsUHJpY2UuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTExKTtcbiAgICB1bFByaWNlLmFwcGVuZENoaWxkKGxpMTIpO1xuXG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZCh1bFByaWNlKTtcblxuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKGgyTWVudVBpenphKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChwTWVudVBpenphKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChwTWVudVBpenphMik7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQocE1lbnVQaXp6YTMpO1xuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKGNoaWxkRGl2UGl6emEpO1xuXG4gICAgcmV0dXJuIGRpdlBpenphO1xufVxuXG5mdW5jdGlvbiBtZW51UGFzdGEoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHVsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFzdGEnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdwYXN0YXMtbGlzdCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2ZsYXZvcnMnKTtcbiAgICB1bFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlcy1wYXN0YXMnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gJ1BBU1RBUyc7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnTWVhdCBMYXNhZ25hJ1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1RoZSBjbGFzc2ljISBTd2VldCBJdGFsaWFuIHNhdXNhZ2UgYW5kIGdyb3VuZCBiZWVmIG1peGVkIHdpdGggZnJlc2ggaGVyYnMsIEdhcmxpYywgcmljb3R0YSBhbmQgUGFybWVzYW4sIHRoZW4gYmFrZWQgd2l0aCBtYXJpbmFyYSBhbmQgbW96emFyZWxsYS4nO1xuICAgIGxpMi50ZXh0Q29udGVudCA9ICdUb3J0ZWxsaW5pIGFsIEZvcm5vJ1xuICAgIHAyLnRleHRDb250ZW50ID0gJ0dyaWxsZWQgZnJlc2ggdmVnZXRhYmxlcyBpbmNsdWRpbmcgc3VtbWVyIHNxdWFzaCwgenVjY2hpbmksIGJyb2Njb2xpIGFuZCByZWQgYmVsbCBwZXBwZXJzLCB3aXRoIHRyaS1jb2xvcmVkIHRvcnRlbGxpbmkgdG9zc2VkIGluIGEgZGVsaWNpb3VzIHRvbWF0byBjcmVhbSBzYXVjZSBhbmQgYmFrZWQgd2l0aCBtb3p6YXJlbGxhLic7XG4gICAgbGkzLnRleHRDb250ZW50ID0gJ0Jha2VkIFBlbm5lJ1xuICAgIHAzLnRleHRDb250ZW50ID0gJ1Blbm5lIHBhc3RhIHRvc3NlZCB3aXRoIGEgZGVsaWNpb3VzIGJsZW5kIG9mIG1hcmluYXJhLCByaWNvdHRhLCBQYXJtZXNhbiBhbmQgZnJlc2ggaGVyYnMgdGhlbiBiYWtlZCB3aXRoIGZyZXNoIG1venphcmVsbGEgb24gdG9wLic7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ0dyb3VwZXIgVHJvcGljYWwgJ1xuICAgIHA0LnRleHRDb250ZW50ID0gJ0ZyZXNoIGxvY2FsIGdyb3VwZXIgcGFuIHNlYXJlZCBhbmQgdG9wcGVkIHdpdGggbWFuZ28gc2Fsc2Egb3ZlciBzZWFmb29kIHJpc290dG8gd2l0aCBzYXV0ZWVkIHZlZ2V0YWJsZXMnO1xuICAgIGxpNS50ZXh0Q29udGVudCA9ICdEb2xwaGluIFBpY2F0dGEnXG4gICAgcDUudGV4dENvbnRlbnQgPSAnRnJlc2ggbG9jYWwgbWFoaS1tYWhpIHNhdXTDqSBlZCB3aXRoIGNhcGVycyBhbmQgZ2FybGljIGluIGEgd2hpdGUgd2luZSBidXR0ZXIgc2F1Y2UuJztcbiAgICBsaTYudGV4dENvbnRlbnQgPSAnU2hyaW1wIEFsZnJlZG8gJ1xuICAgIHA2LnRleHRDb250ZW50ID0gJ0ZyZXNoIGxvY2FsIHNocmltcCBpbiBvdXIgZGVsaWNpb3VzIGNyZWFteSBQYXJtZXNhbiBjaGVlc2Ugc2F1Y2UsIHRvc3NlZCB3aXRoIHBhc3RhLic7XG5cbiAgICBsaTEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwMik7XG4gICAgbGkzLmFwcGVuZENoaWxkKHAzKTtcbiAgICBsaTQuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwNSk7XG4gICAgbGk2LmFwcGVuZENoaWxkKHA2KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTYpO1xuXG4gICAgbGk3LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICckIDguOTUgLyAxMi45OSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICckIDE1Ljk1IC8gMjMuNTAnO1xuICAgIGxpMTIudGV4dENvbnRlbnQgPSAnJCAxMS43NSAvIDE2LjQwJztcblxuICAgIHVsUHJpY2UuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICB1bFByaWNlLmFwcGVuZENoaWxkKGxpOCk7XG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTkpO1xuICAgIHVsUHJpY2UuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTExKTtcbiAgICB1bFByaWNlLmFwcGVuZENoaWxkKGxpMTIpO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHVsUHJpY2UpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gbWVudVNhbGFkKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB1bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2FsYWQnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdwYXN0YXMtbGlzdCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2ZsYXZvcnMnKTtcbiAgICB1bFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlcy1wYXN0YXMnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gJ1NBTEFEUyc7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnQ2Flc2FyIFNhbGFkJ1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1JvbWFpbmUgTGV0dHVjZSwgUGFybWVzYW4gUm9tYW5vIENoZWVzZSwgSG9tZW1hZGUgR2FybGljIENyb3V0b25zLSBTZXJ2ZWQgd2l0aCBIb3VzZSBNYWRlIENhZXNhciBEcmVzc2luZyc7XG4gICAgbGkyLnRleHRDb250ZW50ID0gJ01peGVkIEdyZWVuIFNhbGFkJ1xuICAgIHAyLnRleHRDb250ZW50ID0gJ01peGVkIEdyZWVucywgVG9tYXRvLCBPbmlvbnMsIFBlcHBlcm9uY2luaSwgQ2VsZXJ5LCBSYWRpc2gsIE9saXZlcyAtIFNlcnZlZCB3aXRoIEhvdXNlIFZpbmFpZ3JldHRlIERyZXNzaW5nICc7XG4gICAgbGkzLnRleHRDb250ZW50ID0gXCJDYXJtaW5lJ3MgU2FsYWRcIjtcbiAgICBwMy50ZXh0Q29udGVudCA9ICdNaXhlZCBHcmVlbnMsIFRvbWF0bywgT25pb25zLCBQZXBwZXJvbmNpbmksIENlbGVyeSwgUmFkaXNoLCBPbGl2ZXMgVG9wcGVkIHcvIERpY2VkIE1lYXRzICYgQ2hlZXNlcyAtIFNlcnZlZCB3aXRoIEhvdXNlIFZpbmFpZ3JldHRlIERyZXNzaW5nICc7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ0NhcHJlc2UgU2FsYWQnXG4gICAgcDQudGV4dENvbnRlbnQgPSAnUmlwZW5lZCBUb21hdG9lcyB3aXRoIEJvY2NvbmNpbmksIFJlZCBPbmlvbnMsIENlcmlnbm9sYSAmIEthbGFtYXRhIE9saXZlcywgUm9hc3RlZCBSZWQgUGVwcGVycywgRnJlc2ggQmFzaWwsIE9saXZlIE9pbCAmIEFnZWQgUmVkIFdpbmUgVmluZWdhciBTYWx0LCBQZXBwZXIgYW5kIE9yZWdhbm8nO1xuXG4gICAgbGkxLmFwcGVuZENoaWxkKHAxKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwMyk7XG4gICAgbGk0LmFwcGVuZENoaWxkKHA0KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNCk7XG5cbiAgICBsaTcudGV4dENvbnRlbnQgPSAnJCAyOS45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMjkuOTUnO1xuICAgIGxpOS50ZXh0Q29udGVudCA9ICckIDMzLjk1JztcbiAgICBsaTEwLnRleHRDb250ZW50ID0gJyQgMzMuOTUnO1xuXG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTcpO1xuICAgIHVsUHJpY2UuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICB1bFByaWNlLmFwcGVuZENoaWxkKGxpOSk7XG4gICAgdWxQcmljZS5hcHBlbmRDaGlsZChsaTEwKTtcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZCh1bFByaWNlKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIG1lbnVEcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGgzQmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaDNTb2Z0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1bEJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHVsU29mdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kcmlua3MnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdkcmlua3MtbGlzdCcpO1xuICAgIHVsQmVlci5jbGFzc0xpc3QuYWRkKCdiZWVyJyk7XG4gICAgdWxTb2Z0LmNsYXNzTGlzdC5hZGQoJ3NvZnQnKTtcbiAgICBcbiAgICBoMi50ZXh0Q29udGVudCA9ICdEUklOS1MnO1xuXG4gICAgaDNCZWVyLnRleHRDb250ZW50ID0gJ0JFRVIgJiBDSURFUic7XG4gICAgbGkxLnRleHRDb250ZW50ID0gJ0lubmlzIGFuZCBHdW5uIENyYWZ0IExhZ2VyIOKAoiA1LjI1JztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnSW5uaXMgYW5kIEd1bm4gUm90YXRpb25hbCDigKIgNS43NSc7XG4gICAgbGkzLnRleHRDb250ZW50ID0gJ1Blcm9uaSBOYXN0cm8gQXp6dXJvIOKAoiA1Ljc1JztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnVGVubmVudHMg4oCiIDQuNTAnO1xuXG4gICAgaDNTb2Z0cy50ZXh0Q29udGVudCA9ICdTT0ZUUyc7XG4gICAgbGk1LnRleHRDb250ZW50ID0gJ0Nva2UvRGlldCBDb2tlL0Nva2UgWmVybyDigKIgMi43NSc7XG4gICAgbGk2LnRleHRDb250ZW50ID0gJ0lybiBCcnUvRGlldCBJcm4gQnJ1IOKAoiAyLjc1JztcbiAgICBsaTcudGV4dENvbnRlbnQgPSAnU3ByaXRlL0ZhbnRhIOKAoiAyLjc1JztcbiAgICBsaTgudGV4dENvbnRlbnQgPSAnU29kYSBGb2xrIFJvb3QgQmVlci9DcmVhbSBTb2RhIOKAoiAzJztcbiAgICBsaTkudGV4dENvbnRlbnQgPSAnQXBwbGV0aXNlciDigKIgMi44MCc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICdHaW5nZXIgQmVlciDigKIgMi43NSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICdXYXRlciBTdGlsbC9TcGFya2xpbmcg4oCiIDIuMjUvNC4yNSc7XG5cbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQoaDNCZWVyKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGk0KTtcblxuICAgIHVsU29mdC5hcHBlbmRDaGlsZChoM1NvZnRzKTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk5KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpMTEpO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQodWxCZWVyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZCh1bFNvZnQpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vaW1nL2JhY2tncm91bmQuanBnJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2NhdGlvbnMgfSBmcm9tIFwiLi9sb2NhdGlvbnNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5ib2R5LnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke0JhY2tncm91bmR9KTtgO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25zKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9