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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'My font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        display: block;\n        padding-top: 50px;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'My font';\n    src: url('../fonts/PlayfairDisplaySC-Bold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        display: block;\n        padding-top: 50px;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0csWUFBWTtBQUM1Ryw0RkFBNEYsZUFBZTtBQUMzRyw0RkFBNEYsZUFBZTtBQUMzRyw2RkFBNkYsZUFBZTtBQUM1RyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0csWUFBWTtBQUM1Ryw0RkFBNEYsZUFBZTtBQUMzRyw0RkFBNEYsZUFBZTtBQUMzRyw2RkFBNkYsZUFBZTtBQUM1RyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0csWUFBWTtBQUM1Ryw0RkFBNEYsZUFBZTtBQUMzRyw0RkFBNEYsZUFBZTtBQUMzRyw2RkFBNkYsZUFBZTtBQUM1RyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpR0FBaUcsWUFBWTtBQUM3Ryw0RkFBNEYsZUFBZTtBQUMzRyw0RkFBNEYsZUFBZTtBQUMzRyw0RkFBNEYsZUFBZTtBQUMzRyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsYUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ5QjtBQUNxQjtBQUNaO0FBQ0o7QUFDQTtBQUNVOztBQUV4QztBQUNBOztBQUVBLCtDQUErQyxnREFBVSxDQUFDLEVBQUU7O0FBRTVELG9CQUFvQiwrQ0FBTTtBQUMxQixvQkFBb0IsMkNBQUk7QUFDeEIsb0JBQW9CLDJDQUFJO0FBQ3hCLG9CQUFvQixxREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9jYXRpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5U0MtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeSBmb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgY29sb3I6ICMyZjJkMmM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCAjZGE5YTRjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMxNDE0MTRkNDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxufVxcblxcbi5ndWlkZXMge1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmQxMTExO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ndWlkZXMgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXIsIC5idG4tcGl6emEsXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3MsXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYTlhNGM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXItb25saW5lLCAuYnRuLW9yZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNiZDExMTEgaW5zZXQsIDAgMCAwIDAgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2JkMTExMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3Mge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjZGE5YTRjO1xcbn0gXFxuXFxuLmJ0bi1waXp6YSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLmltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcXG59XFxuXFxuLnN1Yi1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNDUwcHg7XFxufVxcblxcbi5zYWxhZC1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDQ1MHB4O1xcbiAgICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgIzlkMGEwYTtcXG59XFxuXFxuLmJ0bnMtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LXBpenphIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBpenphcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5mbGF2b3JzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaWNlcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LXBhc3RhLCAubWVudS1zYWxhZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51LXBhc3RhID4gaDIsIC5tZW51LXNhbGFkID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wYXN0YXMtbGlzdCA+IGxpID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJpY2VzLXBhc3RhcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1kcmlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kcmlua3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJlZXIgPiBsaSwgLnNvZnQgPiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6ICM5ZDBhMGE7XFxufVxcblxcbi5sb2NhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1ob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaG91cnMtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5yb3cgcCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAgIC5ndWlkZXMge1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNvbnRhY3Qge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaG9tZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5pbWctaG9tZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7IFxcbiAgICB9XFxuXFxuICAgIC5idG5zLW1lbnUge1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5iZWVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC5sb2NhdGlvbnMge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZC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Q2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9QbGF5ZmFpckRpc3BsYXlTQy1Cb2xkLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgY29sb3I6ICMyZjJkMmM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCAjZGE5YTRjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMxNDE0MTRkNDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxufVxcblxcbi5ndWlkZXMge1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmQxMTExO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ndWlkZXMgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXIsIC5idG4tcGl6emEsXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3MsXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYTlhNGM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXItb25saW5lLCAuYnRuLW9yZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNiZDExMTEgaW5zZXQsIDAgMCAwIDAgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2JkMTExMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3Mge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjZGE5YTRjO1xcbn0gXFxuXFxuLmJ0bi1waXp6YSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLmltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcXG59XFxuXFxuLnN1Yi1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNDUwcHg7XFxufVxcblxcbi5zYWxhZC1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDQ1MHB4O1xcbiAgICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgIzlkMGEwYTtcXG59XFxuXFxuLmJ0bnMtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LXBpenphIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBpenphcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5mbGF2b3JzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaWNlcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LXBhc3RhLCAubWVudS1zYWxhZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51LXBhc3RhID4gaDIsIC5tZW51LXNhbGFkID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wYXN0YXMtbGlzdCA+IGxpID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJpY2VzLXBhc3RhcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1kcmlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kcmlua3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJlZXIgPiBsaSwgLnNvZnQgPiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6ICM5ZDBhMGE7XFxufVxcblxcbi5sb2NhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1ob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaG91cnMtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5yb3cgcCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAgIC5ndWlkZXMge1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNvbnRhY3Qge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaG9tZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5pbWctaG9tZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7IFxcbiAgICB9XFxuXFxuICAgIC5idG5zLW1lbnUge1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5iZWVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC5sb2NhdGlvbnMge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoMy5jbGFzc0xpc3QuYWRkKCdzbG9nYW4nKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdndWlkZXMnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhY3QnKTtcblxuICAgIGgzLnRleHRDb250ZW50ID0gJ0l0YWxpYW4nO1xuXG4gICAgYTEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYTEuaHJlZiA9ICcjJztcbiAgICBhMi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbnMnO1xuICAgIGEyLmhyZWYgPSAnIyc7XG4gICAgYTMudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYTMuaHJlZiA9ICcjJztcblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcblxuICAgIGxpMS5hcHBlbmRDaGlsZChhMSk7XG4gICAgbGkyLmFwcGVuZENoaWxkKGEyKTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQoYTMpO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7ICAgIFxuXG4gICAgYTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuaG9tZScpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5tZW51Jyk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbnMnKTtcblxuICAgICAgICBob21lLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICAgICAgbWVudS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jazsnO1xuICAgICAgICBsb2NhdGlvbnMuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgIH0pO1xuXG4gICAgYTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuaG9tZScpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5tZW51Jyk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbnMnKTtcbiAgICAgICAgIFxuICAgICAgICBob21lLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGdyaWQ7JztcbiAgICAgICAgbWVudS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIGxvY2F0aW9ucy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgfSk7XG5cbiAgICBhMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5ob21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLm1lbnUnKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9ucycpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGhvbWUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgICAgICBtZW51LnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICAgICAgbG9jYXRpb25zLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrOyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCBQaXp6YSBmcm9tICcuL2ltZy9waXp6YS5qcGcnO1xuXG5leHBvcnQgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nLWhvbWUnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLW9yZGVyJyk7XG4gICAgXG4gICAgaDEudGV4dENvbnRlbnQgPSAnR09PRCBGT09EIEJSSU5HUyBHRU5VSU5FIEhBUElORVNTJztcbiAgICBwLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaWhpbCBkaWN0YSBpbXBlZGl0IGRvbG9yZW0gYXNwZXJuYXR1ciBhdCByZXByZWhlbmRlcml0JztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUGxhY2UgYW4gb3JkZXInO1xuXG4gICAgaW1nLnNyYyA9IFBpenphO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYyKTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiZXhwb3J0IGNvbnN0IGxvY2F0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25PcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgzQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaDNBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBoM0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9ucycpO1xuICAgIHN1YkRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWhvdXJzJyk7XG4gICAgYnV0dG9uT3JkZXIuY2xhc3NMaXN0LmFkZCgnYnRuLW9yZGVyLW9ubGluZScpO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZCgnYnRuLW1lbnUnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdob3Vycy1saXN0JylcbiAgICBsaTEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGkyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpMy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTQuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk1LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpNi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTcuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBidXR0b25PcmRlci50ZXh0Q29udGVudCA9ICdPUkRFUiBPTkxJTkUnO1xuICAgIGJ1dHRvbk1lbnUudGV4dENvbnRlbnQgPSAnVklFVyBUSEUgTUVOVSc7XG5cbiAgICBoM0NvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgcDEuaW5uZXJIVE1MID0gYFRlbGVwaG9uZSA8YnI+IHh4eC54eHgueHh4eGA7XG4gICAgcDIuaW5uZXJIVE1MID0gYFRha2UgT3V0IDxicj4geXl5Lnl5eS55eXl5YDtcblxuICAgIGgzQWRkcmVzcy50ZXh0Q29udGVudCA9ICdBZGRyZXNzJztcbiAgICBwMy5pbm5lckhUTUwgPSBgMjQwOSBSYWludHJlZSBCb3VsZXZhcmQgPGJyPiBLb2tvbW8sIElOIDQ2OTAxYDtcblxuICAgIGgzSG91cnMudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gICAgcDQudGV4dENvbnRlbnQgPSAnTW9uZGF5JztcbiAgICBwNS50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTEuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGxpMS5hcHBlbmRDaGlsZChwNSk7XG4gICAgICAgIFxuICAgIHA2LnRleHRDb250ZW50ID0gJ1R1ZXNkYXknO1xuICAgIHA3LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwNik7XG4gICAgbGkyLmFwcGVuZENoaWxkKHA3KTtcblxuICAgIHA4LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheSc7XG4gICAgcDkudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGkzLmFwcGVuZENoaWxkKHA4KTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQocDkpO1xuXG4gICAgcDEwLnRleHRDb250ZW50ID0gJ1RodXJzZGF5JztcbiAgICBwMTEudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGk0LmFwcGVuZENoaWxkKHAxMCk7XG4gICAgbGk0LmFwcGVuZENoaWxkKHAxMSk7XG5cbiAgICBwMTIudGV4dENvbnRlbnQgPSAnRnJpZGF5JztcbiAgICBwMTMudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMjowMCBQTSc7XG4gICAgbGk1LmFwcGVuZENoaWxkKHAxMik7XG4gICAgbGk1LmFwcGVuZENoaWxkKHAxMyk7XG5cbiAgICBwMTQudGV4dENvbnRlbnQgPSAnU2F0dXJkYXknO1xuICAgIHAxNS50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEyOjAwIFBNJztcbiAgICBsaTYuYXBwZW5kQ2hpbGQocDE0KTtcbiAgICBsaTYuYXBwZW5kQ2hpbGQocDE1KTtcblxuICAgIHAxNi50ZXh0Q29udGVudCA9ICdNb25kYXknO1xuICAgIHAxNy50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTcuYXBwZW5kQ2hpbGQocDE2KTtcbiAgICBsaTcuYXBwZW5kQ2hpbGQocDE3KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTYpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNyk7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChoM0NvbnRhY3QpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHAxKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwMik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoaDNBZGRyZXNzKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwMyk7XG5cbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoaDNIb3Vycyk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG4gICAgc3ViRGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2Mik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbk9yZGVyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgXG4gICAgcmV0dXJuIGRpdjtcbn07IiwiZXhwb3J0IGNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SGVhZGVyID0gaGVhZGVyTWVudSgpO1xuICAgIGNvbnN0IGRpdlBpenphID0gbWVudVBpenphKCk7XG4gICAgY29uc3QgZGl2UGFzdGEgPSBtZW51UGFzdGEoKTtcbiAgICBjb25zdCBkaXZTYWxhZCA9IG1lbnVTYWxhZCgpO1xuICAgIGNvbnN0IGRpdkRyaW5rcyA9IG1lbnVEcmlua3MoKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2UGl6emEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZQYXN0YSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdlNhbGFkKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2RHJpbmtzKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGhlYWRlck1lbnUoKSB7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYnV0dG9uUGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uRHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1tZW51Jyk7XG4gICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgnb3VyLW1lbnUnKTtcbiAgICBjaGlsZERpdjIuY2xhc3NMaXN0LmFkZCgnYnRucy1tZW51Jyk7XG4gICAgYnV0dG9uUGl6emEuY2xhc3NMaXN0LmFkZCgnYnRuLXBpenphJyk7XG4gICAgYnV0dG9uUGFzdGEuY2xhc3NMaXN0LmFkZCgnYnRuLXBhc3RhJyk7XG4gICAgYnV0dG9uU2FsYWQuY2xhc3NMaXN0LmFkZCgnYnRuLXNhbGFkJyk7XG4gICAgYnV0dG9uRHJpbmtzLmNsYXNzTGlzdC5hZGQoJ2J0bi1kcmlua3MnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gJ09VUiBNRU5VUyc7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4nO1xuICAgIGJ1dHRvblBpenphLnRleHRDb250ZW50ID0gJ1BpenphJztcbiAgICBidXR0b25QYXN0YS50ZXh0Q29udGVudCA9ICdQYXN0YSc7XG4gICAgYnV0dG9uU2FsYWQudGV4dENvbnRlbnQgPSAnU2FsYWQnO1xuICAgIGJ1dHRvbkRyaW5rcy50ZXh0Q29udGVudCA9ICdEcmlua3MnO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChidXR0b25QaXp6YSk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGJ1dHRvblBhc3RhKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uU2FsYWQpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChidXR0b25Ecmlua3MpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoY2hpbGREaXYyKTtcblxuICAgIGJ1dHRvblBpenphLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cbiAgICAgICAgbWVudVBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrJztcbiAgICAgICAgbWVudVBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51U2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVEcmlua3Muc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgICAgICAgYnV0dG9uUGl6emEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvbkRyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uUGFzdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1lbnVQaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBpenphJyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IG1lbnVTYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IG1lbnVEcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1kcmlua3MnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBpenphJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wYXN0YScpO1xuICAgICAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2FsYWQnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uRHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kcmlua3MnKTtcblxuXG4gICAgICAgIG1lbnVQaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuXG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjOyBjb2xvcjogI2ZmZjsnO1xuICAgICAgICBidXR0b25QaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25TYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICB9KTtcblxuICAgIGJ1dHRvblNhbGFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrJztcbiAgICAgICAgbWVudURyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcblxuICAgICAgICBidXR0b25TYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YzsgY29sb3I6ICNmZmY7JztcbiAgICAgICAgYnV0dG9uUGl6emEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uUGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uRHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICBidXR0b25Ecmlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1lbnVQaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBpenphJyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IG1lbnVTYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IG1lbnVEcmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1kcmlua3MnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBpenphJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wYXN0YScpO1xuICAgICAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2FsYWQnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uRHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kcmlua3MnKTtcblxuXG4gICAgICAgIG1lbnVQaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51U2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVEcmlua3Muc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2snO1xuXG4gICAgICAgIGJ1dHRvbkRyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YzsgY29sb3I6ICNmZmY7JztcbiAgICAgICAgYnV0dG9uUGl6emEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uUGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXYyO1xufVxuXG5mdW5jdGlvbiBtZW51UGl6emEoKSB7XG4gICAgY29uc3QgZGl2UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdlBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcE1lbnVQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwTWVudVBpenphMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwTWVudVBpenphMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoMk1lbnVQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXZQaXp6YS5jbGFzc0xpc3QuYWRkKCdtZW51LXBpenphJyk7XG4gICAgY2hpbGREaXZQaXp6YS5jbGFzc0xpc3QuYWRkKCdwaXp6YXMtbGlzdCcpO1xuICAgIFxuXG4gICAgaDJNZW51UGl6emEudGV4dENvbnRlbnQgPSAnQ0xBU1NJQyBQSVpaQSc7XG4gICAgcE1lbnVQaXp6YS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIFNtYWxsICgxNCcnLzYgc2xpY2VzKSwgTGFyZ2UgKDE2JycgLzggc2xpY2VzKSBvciBTaGVldCBQaXp6YVwiO1xuICAgIHBNZW51UGl6emEyLnRleHRDb250ZW50ID0gXCJwbGFpbiBjaGVlc2VcIlxuICAgIHBNZW51UGl6emEzLnRleHRDb250ZW50ID0gXCI4Ljk1IC8gMTIuOTUgLyAyMy45NVwiO1xuXG4gICAgbGkxLnRleHRDb250ZW50ID0gJ0NoaWNrZW4gV2luZyc7XG4gICAgbGkyLnRleHRDb250ZW50ID0gJ0JhY29uICYgVG9tYXRvJztcbiAgICBsaTMudGV4dENvbnRlbnQgPSAnQkJRIFJpYic7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ0xhc2FnbmEnO1xuICAgIGxpNS50ZXh0Q29udGVudCA9ICdQaGlsbHkgU3RlYWsnO1xuICAgIGxpNi50ZXh0Q29udGVudCA9ICdIYXdhaWlhbic7XG5cblxuICAgIGxpNy50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpOC50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpOS50ZXh0Q29udGVudCA9ICckIDE0LjUwIC8gMjAuOTUnO1xuICAgIGxpMTAudGV4dENvbnRlbnQgPSAnJCA4Ljk1IC8gMTIuOTknO1xuICAgIGxpMTEudGV4dENvbnRlbnQgPSAnJCAxNS45NSAvIDIzLjUwJztcbiAgICBsaTEyLnRleHRDb250ZW50ID0gJyQgMTEuNzUgLyAxNi40MCc7XG5cbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTcpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpOCk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk5KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpNCk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTEwKTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpNSk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTExKTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpNik7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTEyKTtcblxuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKGgyTWVudVBpenphKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChwTWVudVBpenphKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChwTWVudVBpenphMik7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQocE1lbnVQaXp6YTMpO1xuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKGNoaWxkRGl2UGl6emEpO1xuXG4gICAgcmV0dXJuIGRpdlBpenphO1xufVxuXG5mdW5jdGlvbiBtZW51UGFzdGEoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1wYXN0YScpO1xuICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Bhc3Rhcy1saXN0Jyk7XG5cbiAgICBoMi50ZXh0Q29udGVudCA9ICdQQVNUQVMnO1xuXG4gICAgbGkxLnRleHRDb250ZW50ID0gJ01lYXQgTGFzYWduYSdcbiAgICBwMS50ZXh0Q29udGVudCA9ICdUaGUgY2xhc3NpYyEgU3dlZXQgSXRhbGlhbiBzYXVzYWdlIGFuZCBncm91bmQgYmVlZiBtaXhlZCB3aXRoIGZyZXNoIGhlcmJzLCBHYXJsaWMsIHJpY290dGEgYW5kIFBhcm1lc2FuLCB0aGVuIGJha2VkIHdpdGggbWFyaW5hcmEgYW5kIG1venphcmVsbGEuJztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnVG9ydGVsbGluaSBhbCBGb3JubydcbiAgICBwMi50ZXh0Q29udGVudCA9ICdHcmlsbGVkIGZyZXNoIHZlZ2V0YWJsZXMgaW5jbHVkaW5nIHN1bW1lciBzcXVhc2gsIHp1Y2NoaW5pLCBicm9jY29saSBhbmQgcmVkIGJlbGwgcGVwcGVycywgd2l0aCB0cmktY29sb3JlZCB0b3J0ZWxsaW5pIHRvc3NlZCBpbiBhIGRlbGljaW91cyB0b21hdG8gY3JlYW0gc2F1Y2UgYW5kIGJha2VkIHdpdGggbW96emFyZWxsYS4nO1xuICAgIGxpMy50ZXh0Q29udGVudCA9ICdCYWtlZCBQZW5uZSdcbiAgICBwMy50ZXh0Q29udGVudCA9ICdQZW5uZSBwYXN0YSB0b3NzZWQgd2l0aCBhIGRlbGljaW91cyBibGVuZCBvZiBtYXJpbmFyYSwgcmljb3R0YSwgUGFybWVzYW4gYW5kIGZyZXNoIGhlcmJzIHRoZW4gYmFrZWQgd2l0aCBmcmVzaCBtb3p6YXJlbGxhIG9uIHRvcC4nO1xuICAgIGxpNC50ZXh0Q29udGVudCA9ICdHcm91cGVyIFRyb3BpY2FsICdcbiAgICBwNC50ZXh0Q29udGVudCA9ICdGcmVzaCBsb2NhbCBncm91cGVyIHBhbiBzZWFyZWQgYW5kIHRvcHBlZCB3aXRoIG1hbmdvIHNhbHNhIG92ZXIgc2VhZm9vZCByaXNvdHRvIHdpdGggc2F1dGVlZCB2ZWdldGFibGVzJztcbiAgICBsaTUudGV4dENvbnRlbnQgPSAnRG9scGhpbiBQaWNhdHRhJ1xuICAgIHA1LnRleHRDb250ZW50ID0gJ0ZyZXNoIGxvY2FsIG1haGktbWFoaSBzYXV0w6kgZWQgd2l0aCBjYXBlcnMgYW5kIGdhcmxpYyBpbiBhIHdoaXRlIHdpbmUgYnV0dGVyIHNhdWNlLic7XG4gICAgbGk2LnRleHRDb250ZW50ID0gJ1NocmltcCBBbGZyZWRvICdcbiAgICBwNi50ZXh0Q29udGVudCA9ICdGcmVzaCBsb2NhbCBzaHJpbXAgaW4gb3VyIGRlbGljaW91cyBjcmVhbXkgUGFybWVzYW4gY2hlZXNlIHNhdWNlLCB0b3NzZWQgd2l0aCBwYXN0YS4nO1xuXG4gICAgbGkxLmFwcGVuZENoaWxkKHAxKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwMyk7XG4gICAgbGk0LmFwcGVuZENoaWxkKHA0KTtcbiAgICBsaTUuYXBwZW5kQ2hpbGQocDUpO1xuICAgIGxpNi5hcHBlbmRDaGlsZChwNik7XG5cbiAgICBsaTcudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTgudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTkudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTEwLnRleHRDb250ZW50ID0gJyQgOC45NSAvIDEyLjk5JztcbiAgICBsaTExLnRleHRDb250ZW50ID0gJyQgMTUuOTUgLyAyMy41MCc7XG4gICAgbGkxMi50ZXh0Q29udGVudCA9ICckIDExLjc1IC8gMTYuNDAnO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTcpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpOSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk0KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTEwKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTUpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMTEpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxMik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBtZW51U2FsYWQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHVsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1zYWxhZCcpO1xuICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Bhc3Rhcy1saXN0Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZmxhdm9ycycpO1xuICAgIHVsUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2VzLXBhc3RhcycpO1xuXG4gICAgaDIudGV4dENvbnRlbnQgPSAnU0FMQURTJztcblxuICAgIGxpMS50ZXh0Q29udGVudCA9ICdDYWVzYXIgU2FsYWQnXG4gICAgcDEudGV4dENvbnRlbnQgPSAnUm9tYWluZSBMZXR0dWNlLCBQYXJtZXNhbiBSb21hbm8gQ2hlZXNlLCBIb21lbWFkZSBHYXJsaWMgQ3JvdXRvbnMtIFNlcnZlZCB3aXRoIEhvdXNlIE1hZGUgQ2Flc2FyIERyZXNzaW5nJztcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnTWl4ZWQgR3JlZW4gU2FsYWQnXG4gICAgcDIudGV4dENvbnRlbnQgPSAnTWl4ZWQgR3JlZW5zLCBUb21hdG8sIE9uaW9ucywgUGVwcGVyb25jaW5pLCBDZWxlcnksIFJhZGlzaCwgT2xpdmVzIC0gU2VydmVkIHdpdGggSG91c2UgVmluYWlncmV0dGUgRHJlc3NpbmcgJztcbiAgICBsaTMudGV4dENvbnRlbnQgPSBcIkNhcm1pbmUncyBTYWxhZFwiO1xuICAgIHAzLnRleHRDb250ZW50ID0gJ01peGVkIEdyZWVucywgVG9tYXRvLCBPbmlvbnMsIFBlcHBlcm9uY2luaSwgQ2VsZXJ5LCBSYWRpc2gsIE9saXZlcyBUb3BwZWQgdy8gRGljZWQgTWVhdHMgJiBDaGVlc2VzIC0gU2VydmVkIHdpdGggSG91c2UgVmluYWlncmV0dGUgRHJlc3NpbmcgJztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnQ2FwcmVzZSBTYWxhZCdcbiAgICBwNC50ZXh0Q29udGVudCA9ICdSaXBlbmVkIFRvbWF0b2VzIHdpdGggQm9jY29uY2luaSwgUmVkIE9uaW9ucywgQ2VyaWdub2xhICYgS2FsYW1hdGEgT2xpdmVzLCBSb2FzdGVkIFJlZCBQZXBwZXJzLCBGcmVzaCBCYXNpbCwgT2xpdmUgT2lsICYgQWdlZCBSZWQgV2luZSBWaW5lZ2FyIFNhbHQsIFBlcHBlciBhbmQgT3JlZ2Fubyc7XG5cbiAgICBsaTEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwMik7XG4gICAgbGkzLmFwcGVuZENoaWxkKHAzKTtcbiAgICBsaTQuYXBwZW5kQ2hpbGQocDQpO1xuXG5cbiAgICBsaTcudGV4dENvbnRlbnQgPSAnJCAyOS45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMjkuOTUnO1xuICAgIGxpOS50ZXh0Q29udGVudCA9ICckIDMzLjk1JztcbiAgICBsaTEwLnRleHRDb250ZW50ID0gJyQgMzMuOTUnO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTcpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk4KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTMpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpOSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk0KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTEwKTtcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBtZW51RHJpbmtzKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBoM0JlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGgzU29mdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGNoaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWxCZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB1bFNvZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtZHJpbmtzJyk7XG4gICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLWxpc3QnKTtcbiAgICB1bEJlZXIuY2xhc3NMaXN0LmFkZCgnYmVlcicpO1xuICAgIHVsU29mdC5jbGFzc0xpc3QuYWRkKCdzb2Z0Jyk7XG4gICAgXG4gICAgaDIudGV4dENvbnRlbnQgPSAnRFJJTktTJztcblxuICAgIGgzQmVlci50ZXh0Q29udGVudCA9ICdCRUVSICYgQ0lERVInO1xuICAgIGxpMS50ZXh0Q29udGVudCA9ICdJbm5pcyBhbmQgR3VubiBDcmFmdCBMYWdlciDigKIgNS4yNSc7XG4gICAgbGkyLnRleHRDb250ZW50ID0gJ0lubmlzIGFuZCBHdW5uIFJvdGF0aW9uYWwg4oCiIDUuNzUnO1xuICAgIGxpMy50ZXh0Q29udGVudCA9ICdQZXJvbmkgTmFzdHJvIEF6enVybyDigKIgNS43NSc7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ1Rlbm5lbnRzIOKAoiA0LjUwJztcblxuICAgIGgzU29mdHMudGV4dENvbnRlbnQgPSAnU09GVFMnO1xuICAgIGxpNS50ZXh0Q29udGVudCA9ICdDb2tlL0RpZXQgQ29rZS9Db2tlIFplcm8g4oCiIDIuNzUnO1xuICAgIGxpNi50ZXh0Q29udGVudCA9ICdJcm4gQnJ1L0RpZXQgSXJuIEJydSDigKIgMi43NSc7XG4gICAgbGk3LnRleHRDb250ZW50ID0gJ1Nwcml0ZS9GYW50YSDigKIgMi43NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJ1NvZGEgRm9sayBSb290IEJlZXIvQ3JlYW0gU29kYSDigKIgMyc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJ0FwcGxldGlzZXIg4oCiIDIuODAnO1xuICAgIGxpMTAudGV4dENvbnRlbnQgPSAnR2luZ2VyIEJlZXIg4oCiIDIuNzUnO1xuICAgIGxpMTEudGV4dENvbnRlbnQgPSAnV2F0ZXIgU3RpbGwvU3BhcmtsaW5nIOKAoiAyLjI1LzQuMjUnO1xuXG4gICAgdWxCZWVyLmFwcGVuZENoaWxkKGgzQmVlcik7XG4gICAgdWxCZWVyLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWxCZWVyLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWxCZWVyLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgdWxCZWVyLmFwcGVuZENoaWxkKGxpNCk7XG5cbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQoaDNTb2Z0cyk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpNSk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpNik7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpNyk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpOCk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpOSk7XG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGxpMTApO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTExKTtcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHVsQmVlcik7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQodWxTb2Z0KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ltZy9iYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgbG9jYXRpb25zIH0gZnJvbSBcIi4vbG9jYXRpb25zXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuYm9keS5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtCYWNrZ3JvdW5kfSk7YDtcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9ucygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==