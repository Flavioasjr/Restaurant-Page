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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'My font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        padding-top: 50px;\n        align-items: start;\n        grid-template-columns: 6fr;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'My font';\n    src: url('../fonts/PlayfairDisplaySC-Bold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        padding-top: 50px;\n        align-items: start;\n        grid-template-columns: 6fr;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}"],"sourceRoot":""}]);
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


    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    childDivPizza.appendChild(li1);
    childDivPizza.appendChild(li7);
    childDivPizza.appendChild(li2);
    childDivPizza.appendChild(li8);
    childDivPizza.appendChild(li3);
    childDivPizza.appendChild(li9);
    childDivPizza.appendChild(li4);
    childDivPizza.appendChild(li10);
    childDivPizza.appendChild(li5);
    childDivPizza.appendChild(li11);
    childDivPizza.appendChild(li6);
    childDivPizza.appendChild(li12);

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

    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    childDiv.appendChild(li1);
    childDiv.appendChild(li7);
    childDiv.appendChild(li2);
    childDiv.appendChild(li8);
    childDiv.appendChild(li3);
    childDiv.appendChild(li9);
    childDiv.appendChild(li4);
    childDiv.appendChild(li10);
    childDiv.appendChild(li5);
    childDiv.appendChild(li11);
    childDiv.appendChild(li6);
    childDiv.appendChild(li12);

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


    li7.textContent = '$ 29.95';
    li8.textContent = '$ 29.95';
    li9.textContent = '$ 33.95';
    li10.textContent = '$ 33.95';

    childDiv.appendChild(li1);
    childDiv.appendChild(li7);
    childDiv.appendChild(li2);
    childDiv.appendChild(li8);
    childDiv.appendChild(li3);
    childDiv.appendChild(li9);
    childDiv.appendChild(li4);
    childDiv.appendChild(li10);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxX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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHLFlBQVk7QUFDNUcsNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNkZBQTZGLGVBQWU7QUFDNUcsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUdBQWlHLFlBQVk7QUFDN0csNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csNEZBQTRGLGVBQWU7QUFDM0csS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbGFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUI7QUFDcUI7QUFDWjtBQUNKO0FBQ0E7QUFDVTs7QUFFeEM7QUFDQTs7QUFFQSwrQ0FBK0MsZ0RBQVUsQ0FBQyxFQUFFOztBQUU1RCxvQkFBb0IsK0NBQU07QUFDMUIsb0JBQW9CLDJDQUFJO0FBQ3hCLG9CQUFvQiwyQ0FBSTtBQUN4QixvQkFBb0IscURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheVNDLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGNvbG9yOiAjMmYyZDJjO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTdweCAycHggI2RhOWE0YztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0ZDQ7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgICBmb250LWZhbWlseTogJ015IGZvbnQnO1xcbn1cXG5cXG4uZ3VpZGVzIHtcXG4gICAgZ2FwOiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5ndWlkZXMgbGkgYSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTVweDtcXG4gICAgbGVmdDogMiU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDAuMnJlbTtcXG4gICAgYmFja2dyb3VuZDogI2JkMTExMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDk2JTtcXG59XFxuXFxuLmJ0bi1jb250YWN0LCAuYnRuLW9yZGVyLCAuYnRuLXBpenphLFxcbi5idG4tcGFzdGEsIC5idG4tc2FsYWQsIC5idG4tZHJpbmtzLFxcbi5idG4tb3JkZXItb25saW5lLCAuYnRuLW1lbnUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGE5YTRjO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1jb250YWN0LCAuYnRuLW9yZGVyLW9ubGluZSwgLmJ0bi1vcmRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZDExMTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjYmQxMTExIGluc2V0LCAwIDAgMCAwICNiZDExMTE7XFxufVxcblxcbi5idG4tb3JkZXItb25saW5lLCAuYnRuLW1lbnUge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmJ0bi1tZW51IHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTtcXG4gICAgY29sb3I6ICNiZDExMTE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZDExMTE7XFxufVxcblxcbi5idG4tcGFzdGEsIC5idG4tc2FsYWQsIC5idG4tZHJpbmtzIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2RhOWE0YztcXG59IFxcblxcbi5idG4tcGl6emEge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciA0ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbi5pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAwcHg7XFxufVxcblxcbi5zdWItaW1nLWhvbWUge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDQ1MHB4O1xcbn1cXG5cXG4uc2FsYWQtaW1nLWhvbWUge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA0NTBweDtcXG4gICAgdG9wOiAzNTBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgICBwYWRkaW5nOiAwIDUwcHggMCA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkICM5ZDBhMGE7XFxufVxcblxcbi5idG5zLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1waXp6YSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBpenphcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5waXp6YXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZmxhdm9ycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmljZXMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1wYXN0YSwgLm1lbnUtc2FsYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudS1wYXN0YSA+IGgyLCAubWVudS1zYWxhZCA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFzdGFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFzdGFzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucGFzdGFzLWxpc3QgPiBsaSA+IHAge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnByaWNlcy1wYXN0YXMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm1lbnUtZHJpbmtzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZHJpbmtzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iZWVyID4gbGksIC5zb2Z0ID4gbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGNvbG9yOiAjOWQwYTBhO1xcbn1cXG5cXG4ubG9jYXRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmhvdXJzLWxpc3Qge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucm93IHAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgICAuZ3VpZGVzIHtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLmJ0bi1jb250YWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmcjtcXG4gICAgfVxcblxcbiAgICAuaW1nLWhvbWUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4OyBcXG4gICAgfVxcblxcbiAgICAuYnRucy1tZW51IHtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAuYmVlciB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAubG9jYXRpb25zIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeSBmb250JztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheVNDLUJvbGQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBjb2xvcjogIzJmMmQyYztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE3cHggMnB4ICNkYTlhNGM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzE0MTQxNGQ0O1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeSBmb250JztcXG59XFxuXFxuLmd1aWRlcyB7XFxuICAgIGdhcDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ndWlkZXMgbGkgYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDIlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwLjJyZW07XFxuICAgIGJhY2tncm91bmQ6ICNiZDExMTE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmd1aWRlcyBsaSBhOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiA5NiU7XFxufVxcblxcbi5idG4tY29udGFjdCwgLmJ0bi1vcmRlciwgLmJ0bi1waXp6YSxcXG4uYnRuLXBhc3RhLCAuYnRuLXNhbGFkLCAuYnRuLWRyaW5rcyxcXG4uYnRuLW9yZGVyLW9ubGluZSwgLmJ0bi1tZW51IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RhOWE0YztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tY29udGFjdCwgLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tb3JkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmQxMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2JkMTExMSBpbnNldCwgMCAwIDAgMCAjYmQxMTExO1xcbn1cXG5cXG4uYnRuLW9yZGVyLW9ubGluZSwgLmJ0bi1tZW51IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjYmQxMTExO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmQxMTExO1xcbn1cXG5cXG4uYnRuLXBhc3RhLCAuYnRuLXNhbGFkLCAuYnRuLWRyaW5rcyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTtcXG4gICAgY29sb3I6ICNkYTlhNGM7XFxufSBcXG5cXG4uYnRuLXBpenphIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgNGZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4uaW1nLWhvbWUge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xcbn1cXG5cXG4uc3ViLWltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiA0NTBweDtcXG59XFxuXFxuLnNhbGFkLWltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNDUwcHg7XFxuICAgIHRvcDogMzUwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG4gICAgcGFkZGluZzogMCA1MHB4IDAgNTBweDtcXG59XFxuXFxuLmhlYWRlci1tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAjOWQwYTBhO1xcbn1cXG5cXG4uYnRucy1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtcGl6emEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5waXp6YXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGl6emFzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmZsYXZvcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpY2VzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtcGFzdGEsIC5tZW51LXNhbGFkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnUtcGFzdGEgPiBoMiwgLm1lbnUtc2FsYWQgPiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhc3Rhcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhc3Rhcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnBhc3Rhcy1saXN0ID4gbGkgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcmljZXMtcGFzdGFzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWRyaW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRyaW5rcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmVlciA+IGxpLCAuc29mdCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogIzlkMGEwYTtcXG59XFxuXFxuLmxvY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob3Vycy1saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJvdyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gICAgLmd1aWRlcyB7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5idG4tY29udGFjdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnI7XFxuICAgIH1cXG5cXG4gICAgLmltZy1ob21lIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDsgXFxuICAgIH1cXG5cXG4gICAgLmJ0bnMtbWVudSB7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLmJlZXIge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmxvY2F0aW9ucyB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ3Nsb2dhbicpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2d1aWRlcycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFjdCcpO1xuXG4gICAgaDMudGV4dENvbnRlbnQgPSAnSXRhbGlhbic7XG5cbiAgICBhMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBhMS5ocmVmID0gJyMnO1xuICAgIGEyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9ucyc7XG4gICAgYTIuaHJlZiA9ICcjJztcbiAgICBhMy50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBhMy5ocmVmID0gJyMnO1xuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuXG4gICAgbGkxLmFwcGVuZENoaWxkKGExKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQoYTIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChhMyk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTsgICAgXG5cbiAgICBhMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5ob21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm1lbnUnKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9ucycpO1xuXG4gICAgICAgIGhvbWUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgICAgICBtZW51LnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrOyc7XG4gICAgICAgIGxvY2F0aW9ucy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgfSk7XG5cbiAgICBhMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5ob21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm1lbnUnKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9ucycpO1xuICAgICAgICAgXG4gICAgICAgIGhvbWUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogZ3JpZDsnO1xuICAgICAgICBtZW51LnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICAgICAgbG9jYXRpb25zLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICB9KTtcblxuICAgIGEyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubWVudScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25zJyk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgaG9tZS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIG1lbnUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgICAgICBsb2NhdGlvbnMuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2s7JztcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiaW1wb3J0IFBpenphIGZyb20gJy4vaW1nL3BpenphLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBob21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWctaG9tZScpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tb3JkZXInKTtcbiAgICBcbiAgICBoMS50ZXh0Q29udGVudCA9ICdHT09EIEZPT0QgQlJJTkdTIEdFTlVJTkUgSEFQSU5FU1MnO1xuICAgIHAudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5paGlsIGRpY3RhIGltcGVkaXQgZG9sb3JlbSBhc3Blcm5hdHVyIGF0IHJlcHJlaGVuZGVyaXQnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGFjZSBhbiBvcmRlcic7XG5cbiAgICBpbWcuc3JjID0gUGl6emE7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdjIpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgY29uc3QgbG9jYXRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbk9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDNDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBoM0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGgzSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25zJyk7XG4gICAgc3ViRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaG91cnMnKTtcbiAgICBidXR0b25PcmRlci5jbGFzc0xpc3QuYWRkKCdidG4tb3JkZXItb25saW5lJyk7XG4gICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidG4tbWVudScpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKVxuICAgIGxpMS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGkzLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpNC5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTUuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk2LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpNy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGJ1dHRvbk9yZGVyLnRleHRDb250ZW50ID0gJ09SREVSIE9OTElORSc7XG4gICAgYnV0dG9uTWVudS50ZXh0Q29udGVudCA9ICdWSUVXIFRIRSBNRU5VJztcblxuICAgIGgzQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBwMS5pbm5lckhUTUwgPSBgVGVsZXBob25lIDxicj4geHh4Lnh4eC54eHh4YDtcbiAgICBwMi5pbm5lckhUTUwgPSBgVGFrZSBPdXQgPGJyPiB5eXkueXl5Lnl5eXlgO1xuXG4gICAgaDNBZGRyZXNzLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICAgIHAzLmlubmVySFRNTCA9IGAyNDA5IFJhaW50cmVlIEJvdWxldmFyZCA8YnI+IEtva29tbywgSU4gNDY5MDFgO1xuXG4gICAgaDNIb3Vycy50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgICBwNC50ZXh0Q29udGVudCA9ICdNb25kYXknO1xuICAgIHA1LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpMS5hcHBlbmRDaGlsZChwNCk7XG4gICAgbGkxLmFwcGVuZENoaWxkKHA1KTtcbiAgICAgICAgXG4gICAgcDYudGV4dENvbnRlbnQgPSAnVHVlc2RheSc7XG4gICAgcDcudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGkyLmFwcGVuZENoaWxkKHA2KTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDcpO1xuXG4gICAgcDgudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5JztcbiAgICBwOS50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTMuYXBwZW5kQ2hpbGQocDgpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwOSk7XG5cbiAgICBwMTAudGV4dENvbnRlbnQgPSAnVGh1cnNkYXknO1xuICAgIHAxMS50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTQuYXBwZW5kQ2hpbGQocDEwKTtcbiAgICBsaTQuYXBwZW5kQ2hpbGQocDExKTtcblxuICAgIHAxMi50ZXh0Q29udGVudCA9ICdGcmlkYXknO1xuICAgIHAxMy50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEyOjAwIFBNJztcbiAgICBsaTUuYXBwZW5kQ2hpbGQocDEyKTtcbiAgICBsaTUuYXBwZW5kQ2hpbGQocDEzKTtcblxuICAgIHAxNC50ZXh0Q29udGVudCA9ICdTYXR1cmRheSc7XG4gICAgcDE1LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTI6MDAgUE0nO1xuICAgIGxpNi5hcHBlbmRDaGlsZChwMTQpO1xuICAgIGxpNi5hcHBlbmRDaGlsZChwMTUpO1xuXG4gICAgcDE2LnRleHRDb250ZW50ID0gJ01vbmRheSc7XG4gICAgcDE3LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpNy5hcHBlbmRDaGlsZChwMTYpO1xuICAgIGxpNy5hcHBlbmRDaGlsZChwMTcpO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk0KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTUpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk3KTtcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgzQ29udGFjdCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHAyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChoM0FkZHJlc3MpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHAzKTtcblxuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChoM0hvdXJzKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgc3ViRGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uT3JkZXIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25NZW51KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICBcbiAgICByZXR1cm4gZGl2O1xufTsiLCJleHBvcnQgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZIZWFkZXIgPSBoZWFkZXJNZW51KCk7XG4gICAgY29uc3QgZGl2UGl6emEgPSBtZW51UGl6emEoKTtcbiAgICBjb25zdCBkaXZQYXN0YSA9IG1lbnVQYXN0YSgpO1xuICAgIGNvbnN0IGRpdlNhbGFkID0gbWVudVNhbGFkKCk7XG4gICAgY29uc3QgZGl2RHJpbmtzID0gbWVudURyaW5rcygpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZIZWFkZXIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZQaXp6YSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdlBhc3RhKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2U2FsYWQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZEcmlua3MpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gaGVhZGVyTWVudSgpIHtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvblBhc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1lbnUnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdvdXItbWVudScpO1xuICAgIGNoaWxkRGl2Mi5jbGFzc0xpc3QuYWRkKCdidG5zLW1lbnUnKTtcbiAgICBidXR0b25QaXp6YS5jbGFzc0xpc3QuYWRkKCdidG4tcGl6emEnKTtcbiAgICBidXR0b25QYXN0YS5jbGFzc0xpc3QuYWRkKCdidG4tcGFzdGEnKTtcbiAgICBidXR0b25TYWxhZC5jbGFzc0xpc3QuYWRkKCdidG4tc2FsYWQnKTtcbiAgICBidXR0b25Ecmlua3MuY2xhc3NMaXN0LmFkZCgnYnRuLWRyaW5rcycpO1xuXG4gICAgaDIudGV4dENvbnRlbnQgPSAnT1VSIE1FTlVTJztcbiAgICBwLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0Lic7XG4gICAgYnV0dG9uUGl6emEudGV4dENvbnRlbnQgPSAnUGl6emEnO1xuICAgIGJ1dHRvblBhc3RhLnRleHRDb250ZW50ID0gJ1Bhc3RhJztcbiAgICBidXR0b25TYWxhZC50ZXh0Q29udGVudCA9ICdTYWxhZCc7XG4gICAgYnV0dG9uRHJpbmtzLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGJ1dHRvblBpenphKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uUGFzdGEpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChidXR0b25TYWxhZCk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGJ1dHRvbkRyaW5rcyk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChjaGlsZERpdjIpO1xuXG4gICAgYnV0dG9uUGl6emEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1lbnVQaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBpenphJyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IG1lbnVTYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IG1lbnVEcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1kcmlua3MnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBpenphJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wYXN0YScpO1xuICAgICAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2FsYWQnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uRHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kcmlua3MnKTtcblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2snO1xuICAgICAgICBtZW51UGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudURyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcblxuICAgICAgICBidXR0b25QaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YzsgY29sb3I6ICNmZmY7JztcbiAgICAgICAgYnV0dG9uUGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uRHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICBidXR0b25QYXN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG5cbiAgICAgICAgbWVudVBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51UGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2snO1xuICAgICAgICBtZW51U2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVEcmlua3Muc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgICAgICAgYnV0dG9uUGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvbkRyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uU2FsYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1lbnVQaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBpenphJyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IG1lbnVTYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IG1lbnVEcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1kcmlua3MnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBpenphJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wYXN0YScpO1xuICAgICAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2FsYWQnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uRHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kcmlua3MnKTtcblxuXG4gICAgICAgIG1lbnVQaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51U2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2snO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuXG4gICAgICAgIGJ1dHRvblNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjOyBjb2xvcjogI2ZmZjsnO1xuICAgICAgICBidXR0b25QaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICB9KTtcblxuICAgIGJ1dHRvbkRyaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG5cbiAgICAgICAgbWVudVBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51UGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudURyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG5cbiAgICAgICAgYnV0dG9uRHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjOyBjb2xvcjogI2ZmZjsnO1xuICAgICAgICBidXR0b25QaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25TYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjI7XG59XG5cbmZ1bmN0aW9uIG1lbnVQaXp6YSgpIHtcbiAgICBjb25zdCBkaXZQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwTWVudVBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBNZW51UGl6emEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBNZW51UGl6emEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGgyTWVudVBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdlBpenphLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGl6emEnKTtcbiAgICBjaGlsZERpdlBpenphLmNsYXNzTGlzdC5hZGQoJ3Bpenphcy1saXN0Jyk7XG4gICAgXG5cbiAgICBoMk1lbnVQaXp6YS50ZXh0Q29udGVudCA9ICdDTEFTU0lDIFBJWlpBJztcbiAgICBwTWVudVBpenphLnRleHRDb250ZW50ID0gXCJDaG9vc2UgU21hbGwgKDE0JycvNiBzbGljZXMpLCBMYXJnZSAoMTYnJyAvOCBzbGljZXMpIG9yIFNoZWV0IFBpenphXCI7XG4gICAgcE1lbnVQaXp6YTIudGV4dENvbnRlbnQgPSBcInBsYWluIGNoZWVzZVwiXG4gICAgcE1lbnVQaXp6YTMudGV4dENvbnRlbnQgPSBcIjguOTUgLyAxMi45NSAvIDIzLjk1XCI7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBXaW5nJztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnQmFjb24gJiBUb21hdG8nO1xuICAgIGxpMy50ZXh0Q29udGVudCA9ICdCQlEgUmliJztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnTGFzYWduYSc7XG4gICAgbGk1LnRleHRDb250ZW50ID0gJ1BoaWxseSBTdGVhayc7XG4gICAgbGk2LnRleHRDb250ZW50ID0gJ0hhd2FpaWFuJztcblxuXG4gICAgbGk3LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICckIDguOTUgLyAxMi45OSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICckIDE1Ljk1IC8gMjMuNTAnO1xuICAgIGxpMTIudGV4dENvbnRlbnQgPSAnJCAxMS43NSAvIDE2LjQwJztcblxuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpNyk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTkpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk0KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMTApO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMTEpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMTIpO1xuXG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQoaDJNZW51UGl6emEpO1xuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKHBNZW51UGl6emEpO1xuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKHBNZW51UGl6emEyKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChwTWVudVBpenphMyk7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQoY2hpbGREaXZQaXp6YSk7XG5cbiAgICByZXR1cm4gZGl2UGl6emE7XG59XG5cbmZ1bmN0aW9uIG1lbnVQYXN0YSgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXBhc3RhJyk7XG4gICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgncGFzdGFzLWxpc3QnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gJ1BBU1RBUyc7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnTWVhdCBMYXNhZ25hJ1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1RoZSBjbGFzc2ljISBTd2VldCBJdGFsaWFuIHNhdXNhZ2UgYW5kIGdyb3VuZCBiZWVmIG1peGVkIHdpdGggZnJlc2ggaGVyYnMsIEdhcmxpYywgcmljb3R0YSBhbmQgUGFybWVzYW4sIHRoZW4gYmFrZWQgd2l0aCBtYXJpbmFyYSBhbmQgbW96emFyZWxsYS4nO1xuICAgIGxpMi50ZXh0Q29udGVudCA9ICdUb3J0ZWxsaW5pIGFsIEZvcm5vJ1xuICAgIHAyLnRleHRDb250ZW50ID0gJ0dyaWxsZWQgZnJlc2ggdmVnZXRhYmxlcyBpbmNsdWRpbmcgc3VtbWVyIHNxdWFzaCwgenVjY2hpbmksIGJyb2Njb2xpIGFuZCByZWQgYmVsbCBwZXBwZXJzLCB3aXRoIHRyaS1jb2xvcmVkIHRvcnRlbGxpbmkgdG9zc2VkIGluIGEgZGVsaWNpb3VzIHRvbWF0byBjcmVhbSBzYXVjZSBhbmQgYmFrZWQgd2l0aCBtb3p6YXJlbGxhLic7XG4gICAgbGkzLnRleHRDb250ZW50ID0gJ0Jha2VkIFBlbm5lJ1xuICAgIHAzLnRleHRDb250ZW50ID0gJ1Blbm5lIHBhc3RhIHRvc3NlZCB3aXRoIGEgZGVsaWNpb3VzIGJsZW5kIG9mIG1hcmluYXJhLCByaWNvdHRhLCBQYXJtZXNhbiBhbmQgZnJlc2ggaGVyYnMgdGhlbiBiYWtlZCB3aXRoIGZyZXNoIG1venphcmVsbGEgb24gdG9wLic7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ0dyb3VwZXIgVHJvcGljYWwgJ1xuICAgIHA0LnRleHRDb250ZW50ID0gJ0ZyZXNoIGxvY2FsIGdyb3VwZXIgcGFuIHNlYXJlZCBhbmQgdG9wcGVkIHdpdGggbWFuZ28gc2Fsc2Egb3ZlciBzZWFmb29kIHJpc290dG8gd2l0aCBzYXV0ZWVkIHZlZ2V0YWJsZXMnO1xuICAgIGxpNS50ZXh0Q29udGVudCA9ICdEb2xwaGluIFBpY2F0dGEnXG4gICAgcDUudGV4dENvbnRlbnQgPSAnRnJlc2ggbG9jYWwgbWFoaS1tYWhpIHNhdXTDqSBlZCB3aXRoIGNhcGVycyBhbmQgZ2FybGljIGluIGEgd2hpdGUgd2luZSBidXR0ZXIgc2F1Y2UuJztcbiAgICBsaTYudGV4dENvbnRlbnQgPSAnU2hyaW1wIEFsZnJlZG8gJ1xuICAgIHA2LnRleHRDb250ZW50ID0gJ0ZyZXNoIGxvY2FsIHNocmltcCBpbiBvdXIgZGVsaWNpb3VzIGNyZWFteSBQYXJtZXNhbiBjaGVlc2Ugc2F1Y2UsIHRvc3NlZCB3aXRoIHBhc3RhLic7XG5cbiAgICBsaTEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwMik7XG4gICAgbGkzLmFwcGVuZENoaWxkKHAzKTtcbiAgICBsaTQuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwNSk7XG4gICAgbGk2LmFwcGVuZENoaWxkKHA2KTtcblxuICAgIGxpNy50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpOC50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpOS50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpMTAudGV4dENvbnRlbnQgPSAnJCA4Ljk1IC8gMTIuOTknO1xuICAgIGxpMTEudGV4dENvbnRlbnQgPSAnJCAxNS45NSAvIDIzLjUwJztcbiAgICBsaTEyLnRleHRDb250ZW50ID0gJyQgMTEuNzUgLyAxNi40MCc7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTgpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk5KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTQpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMTApO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTEyKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIG1lbnVTYWxhZCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXNhbGFkJyk7XG4gICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgncGFzdGFzLWxpc3QnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdmbGF2b3JzJyk7XG4gICAgdWxQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZXMtcGFzdGFzJyk7XG5cbiAgICBoMi50ZXh0Q29udGVudCA9ICdTQUxBRFMnO1xuXG4gICAgbGkxLnRleHRDb250ZW50ID0gJ0NhZXNhciBTYWxhZCdcbiAgICBwMS50ZXh0Q29udGVudCA9ICdSb21haW5lIExldHR1Y2UsIFBhcm1lc2FuIFJvbWFubyBDaGVlc2UsIEhvbWVtYWRlIEdhcmxpYyBDcm91dG9ucy0gU2VydmVkIHdpdGggSG91c2UgTWFkZSBDYWVzYXIgRHJlc3NpbmcnO1xuICAgIGxpMi50ZXh0Q29udGVudCA9ICdNaXhlZCBHcmVlbiBTYWxhZCdcbiAgICBwMi50ZXh0Q29udGVudCA9ICdNaXhlZCBHcmVlbnMsIFRvbWF0bywgT25pb25zLCBQZXBwZXJvbmNpbmksIENlbGVyeSwgUmFkaXNoLCBPbGl2ZXMgLSBTZXJ2ZWQgd2l0aCBIb3VzZSBWaW5haWdyZXR0ZSBEcmVzc2luZyAnO1xuICAgIGxpMy50ZXh0Q29udGVudCA9IFwiQ2FybWluZSdzIFNhbGFkXCI7XG4gICAgcDMudGV4dENvbnRlbnQgPSAnTWl4ZWQgR3JlZW5zLCBUb21hdG8sIE9uaW9ucywgUGVwcGVyb25jaW5pLCBDZWxlcnksIFJhZGlzaCwgT2xpdmVzIFRvcHBlZCB3LyBEaWNlZCBNZWF0cyAmIENoZWVzZXMgLSBTZXJ2ZWQgd2l0aCBIb3VzZSBWaW5haWdyZXR0ZSBEcmVzc2luZyAnO1xuICAgIGxpNC50ZXh0Q29udGVudCA9ICdDYXByZXNlIFNhbGFkJ1xuICAgIHA0LnRleHRDb250ZW50ID0gJ1JpcGVuZWQgVG9tYXRvZXMgd2l0aCBCb2Njb25jaW5pLCBSZWQgT25pb25zLCBDZXJpZ25vbGEgJiBLYWxhbWF0YSBPbGl2ZXMsIFJvYXN0ZWQgUmVkIFBlcHBlcnMsIEZyZXNoIEJhc2lsLCBPbGl2ZSBPaWwgJiBBZ2VkIFJlZCBXaW5lIFZpbmVnYXIgU2FsdCwgUGVwcGVyIGFuZCBPcmVnYW5vJztcblxuICAgIGxpMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgbGkyLmFwcGVuZENoaWxkKHAyKTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwNCk7XG5cblxuICAgIGxpNy50ZXh0Q29udGVudCA9ICckIDI5Ljk1JztcbiAgICBsaTgudGV4dENvbnRlbnQgPSAnJCAyOS45NSc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJyQgMzMuOTUnO1xuICAgIGxpMTAudGV4dENvbnRlbnQgPSAnJCAzMy45NSc7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTgpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk5KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTQpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMTApO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIG1lbnVEcmlua3MoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGgzQmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaDNTb2Z0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1bEJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHVsU29mdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1kcmlua3MnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdkcmlua3MtbGlzdCcpO1xuICAgIHVsQmVlci5jbGFzc0xpc3QuYWRkKCdiZWVyJyk7XG4gICAgdWxTb2Z0LmNsYXNzTGlzdC5hZGQoJ3NvZnQnKTtcbiAgICBcbiAgICBoMi50ZXh0Q29udGVudCA9ICdEUklOS1MnO1xuXG4gICAgaDNCZWVyLnRleHRDb250ZW50ID0gJ0JFRVIgJiBDSURFUic7XG4gICAgbGkxLnRleHRDb250ZW50ID0gJ0lubmlzIGFuZCBHdW5uIENyYWZ0IExhZ2VyIOKAoiA1LjI1JztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnSW5uaXMgYW5kIEd1bm4gUm90YXRpb25hbCDigKIgNS43NSc7XG4gICAgbGkzLnRleHRDb250ZW50ID0gJ1Blcm9uaSBOYXN0cm8gQXp6dXJvIOKAoiA1Ljc1JztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnVGVubmVudHMg4oCiIDQuNTAnO1xuXG4gICAgaDNTb2Z0cy50ZXh0Q29udGVudCA9ICdTT0ZUUyc7XG4gICAgbGk1LnRleHRDb250ZW50ID0gJ0Nva2UvRGlldCBDb2tlL0Nva2UgWmVybyDigKIgMi43NSc7XG4gICAgbGk2LnRleHRDb250ZW50ID0gJ0lybiBCcnUvRGlldCBJcm4gQnJ1IOKAoiAyLjc1JztcbiAgICBsaTcudGV4dENvbnRlbnQgPSAnU3ByaXRlL0ZhbnRhIOKAoiAyLjc1JztcbiAgICBsaTgudGV4dENvbnRlbnQgPSAnU29kYSBGb2xrIFJvb3QgQmVlci9DcmVhbSBTb2RhIOKAoiAzJztcbiAgICBsaTkudGV4dENvbnRlbnQgPSAnQXBwbGV0aXNlciDigKIgMi44MCc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICdHaW5nZXIgQmVlciDigKIgMi43NSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICdXYXRlciBTdGlsbC9TcGFya2xpbmcg4oCiIDIuMjUvNC4yNSc7XG5cbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQoaDNCZWVyKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICB1bEJlZXIuYXBwZW5kQ2hpbGQobGk0KTtcblxuICAgIHVsU29mdC5hcHBlbmRDaGlsZChoM1NvZnRzKTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGk5KTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpMTEpO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQodWxCZWVyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZCh1bFNvZnQpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vaW1nL2JhY2tncm91bmQuanBnJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2NhdGlvbnMgfSBmcm9tIFwiLi9sb2NhdGlvbnNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5ib2R5LnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke0JhY2tncm91bmR9KTtgO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25zKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9