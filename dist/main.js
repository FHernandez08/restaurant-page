/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./open-sans.woff2 */ \"./src/open-sans.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/dark-surface-with-blank-space-fast-food-menu.jpg */ \"./src/images/dark-surface-with-blank-space-fast-food-menu.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n  2. Remove default margin\r\n*/\r\n* {\r\n  margin: 0;\r\n}\r\n/*\r\n  Typographic tweaks!\r\n  3. Add accessible line-height\r\n  4. Improve text rendering\r\n*/\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n  5. Improve media defaults\r\n*/\r\nimg, picture, video, canvas, svg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n  6. Remove built-in form typography styles\r\n*/\r\ninput, button, textarea, select {\r\n  font: inherit;\r\n}\r\n/*\r\n  7. Avoid text overflows\r\n*/\r\np, h1, h2, h3, h4, h5, h6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n  8. Create a root stacking context\r\n*/\r\n#root, #__next {\r\n  isolation: isolate;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'my-font';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    font-family: 'my-font', serif;\r\n\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n/* main header styling */\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-content: baseline;\r\n\r\n  padding-top: 20px;\r\n  gap: 250px;\r\n}\r\n\r\n.main-logo {\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n}\r\n\r\nheader h1 {\r\n  font-size: 2rem;\r\n  color: #fffdd0;\r\n  padding-left: 125px;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    gap: 50px;\r\n}\r\n\r\nnav button {\r\n    width: 100px;\r\n    height: 50px;\r\n\r\n    border: none;\r\n    border-radius: 10px;\r\n\r\n    background-color: #fffdd0;\r\n    color: #000000;\r\n}\r\n\r\n/* home section */\r\n.home-container {\r\n  width: 1000px;\r\n  height: 100%;\r\n\r\n  padding-top: 30px;\r\n}\r\n\r\n.home-container .heading {\r\n  font-size: 75px;\r\n  color: #ffffff;\r\n  \r\n  padding-left: 25%;\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n}\r\n\r\n.quotes {\r\n  padding-left: 225px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.quote-heading {\r\n  color: #ffffff;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.articles {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n\r\n  gap: 20px;\r\n\r\n  color: #ffffff;\r\n}\r\n\r\n.quote-one,\r\n.quote-two {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n\r\n  border: #ffffff solid;\r\n  padding: 25px;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.hours {\r\n  position: absolute;\r\n  left: 25%;\r\n\r\n  padding-top: 100px;\r\n}\r\n\r\n.business-hours {\r\n  font-size: 24px;\r\n  text-decoration: underline;\r\n  color: #4169e1;\r\n  text-align: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.time-one,\r\n.time-two {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n}\r\n\r\n/* about-section */\r\n.about-container {\r\n  width: 70%;\r\n  height: 100%;\r\n\r\n  padding: 50px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n}\r\n\r\n.about-container h2 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  color: #98fb98;\r\n}\r\n\r\nsection h4 {\r\n  padding-left: 25%;\r\n  color: #98fb98;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n}\r\n\r\nsection p {\r\n  padding-bottom: 25px;\r\n}\r\n\r\nsection p,\r\n.question-answer {\r\n  font-size: 16px;\r\n  color: #ffffff;\r\n}\r\n\r\n.questionaire {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.question {\r\n  color: #f5f5dc;\r\n  padding-bottom: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n/* menu section */\r\n.menu-container {\r\n  width: 70%;\r\n  height: 100%;\r\n\r\n  padding: 50px;\r\n}\r\n\r\n.menu-container h2 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  color: #98fb98;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.tables {\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n#table-header {\r\n  font-size: 24px;\r\n  color: #fffdd0;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\ntable {\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n}\r\n\r\n/* contact section */\r\n.contact-container {\r\n  width: 70%;\r\n  height: 100%;\r\n\r\n  padding: 50px;\r\n}\r\n\r\n.contact-container h2 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  color: #98fb98;\r\n}\r\n\r\n.contact-container .description {\r\n  padding-left: 50px;\r\n  color: #f5f5dc;\r\n  font-size: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.contact-container article {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  color: #ffffff;\r\n\r\n  gap: 50px;\r\n  padding: 25px;\r\n}\r\n\r\narticle p {\r\n  text-decoration: underline;\r\n}\r\n\r\n#contact-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  gap: 25px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutSection: () => (/* binding */ aboutSection)\n/* harmony export */ });\nfunction aboutSection() {\r\n    const aboutContent = document.createElement('div');\r\n    aboutContent.innerHTML = `\r\n    \r\n    <div class=\"about-container\">\r\n        <h2>About</h2>\r\n\r\n        <section>\r\n            <h4>Our rich history</h4>\r\n            <p>\r\n                Welcome to The Fudd Burgers, Birmingham's premier destination for mouthwatering gourmet burgers! Located in the heart of Alabama, The Fudd Burgers prides itself on crafting the juiciest, most flavorful burgers using only the freshest, locally-sourced ingredients. Our diverse menu offers a delicious array of options, from classic beef patties to inventive vegetarian creations, all served in a vibrant, family-friendly atmosphere. Whether you're a burger enthusiast or simply looking for a great place to dine with friends, The Fudd Burgers promises a memorable culinary experience with every bite. Join us today and taste the difference!\r\n            </p>\r\n        </section>\r\n        <div class=\"questionaire\">\r\n            <div class=\"question-one\">\r\n                <p class=\"question\"><b>\r\n                    What makes the burgers at The Fudd Burgers special compared to other burger joints?\r\n                </b></p>\r\n                <p class=\"question-answer\">\r\n                    At The Fudd Burgers, our burgers stand out because we use only the freshest, locally-sourced ingredients, including\r\n                    premium quality beef and artisanal buns. Our culinary team crafts each burger with care, ensuring a perfect balance of\r\n                    flavors and textures. Additionally, we offer a variety of unique toppings and house-made sauces that you won't find\r\n                    anywhere else, making every burger a one-of-a-kind experience.\r\n                </p>\r\n            </div>\r\n            <div class=\"question-two\">\r\n                <p class=\"question\"><b>\r\n                    Are there any special deals or events that I should know about?\r\n                </b></p>\r\n                <p class=\"question-answer\">\r\n                    Yes, we love to treat our customers with special deals and events! We have weekly specials, including discounts on\r\n                    certain burgers and combo meals. Additionally, we host fun events like trivia nights, live music, and burger-eating\r\n                    contests. Be sure to follow us on social media and check our website regularly to stay updated on all the latest\r\n                    promotions and happenings at The Fudd Burgers.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    `;\r\n\r\n    return aboutContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactSection: () => (/* binding */ contactSection)\n/* harmony export */ });\nfunction contactSection() {\r\n    const contactContent = document.createElement('div');\r\n    contactContent.innerHTML = `\r\n    \r\n    <div class=\"contact-container\">\r\n        <h2>Contact</h2>\r\n\r\n        <p class=\"description\">These will be the best ways to contact us and give you a quick and accurate response.</p>\r\n\r\n        <article id=\"main-office\">\r\n            <p>Main Office</p>\r\n            <div id=\"contact-info\">\r\n                <a href=\"#\">(222)493-3589</a>\r\n                <a href=\"#\">main-office@thefeedburger.com</a>\r\n            </div>\r\n        </article>\r\n\r\n        <article id=\"catering\">\r\n            <p>Catering Services</p>\r\n            <div id=\"contact-info\">\r\n                <a href=\"#\">(222)192-4389</a>\r\n                <a href=\"#\">catering@thefeedburger.com</a>\r\n            </div>\r\n        </article>\r\n\r\n        <article id=\"delivery\">\r\n            <p>Delivery Services</p>\r\n            <div id=\"contact-info\">\r\n                <a href=\"#\">(222)498-2397</a>\r\n                <a href=\"#\">delivery@thefeedburger.com</a>\r\n            </div>\r\n        </article>\r\n\r\n        <article id=\"employment\">\r\n            <p>Employment Opportunities</p>\r\n            <div id=\"contact-info\">\r\n                <a href=\"#\">(222)971-0138</a>\r\n                <a href=\"#\">employment-opportunity@thefeedburger.com</a>\r\n            </div>\r\n        </article>\r\n    </div>\r\n\r\n    `;\r\n    \r\n    return contactContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\r\n    const homeContent = document.createElement('div');\r\n    homeContent.innerHTML = `\r\n    \r\n    <div class=\"home-container\">\r\n\r\n        <h3 class=\"heading\">Best burgers in town!</h3>\r\n\r\n        <div class=\"quotes\">\r\n            <p class=\"quote-heading\">Hear from our customers!</p>\r\n            <div class=\"articles\">\r\n                <article class=\"quote quote-one\">\r\n                    <h4>George Looney</h4>\r\n                    <p class=\"customer-quote\">\"The experience the first I came to this restaurant was incredible, I not only became a regular at this restaurant, I spreaded the word around town!\"</p>\r\n                </article>\r\n            <article class=\"quote quote-two\">\r\n                    <h4>Patricia Wilkins</h4>\r\n                    <p class=\"customer-quote\">\"I don't know what they do, but these burgers have been such a huge reminder of home. These burgers have great taste and the atmosphere   when you come to the restaurant makes you feel at home.\"</p>\r\n                </article>\r\n            </div>\r\n        </div>\r\n        <div class=\"hours\">\r\n            <h3 class='business-hours'>Hours</h3>\r\n            <div class=\"times\">\r\n                <div class=\"time time-one\">\r\n                    <div id=\"day\">Sunday - Thursday</div>\r\n                    <div id=\"time\">11am - 7pm</div>\r\n                </div>\r\n                <div class=\"time time-two\">\r\n                    <div id=\"day\">Friday and Saturday</div>\r\n                    <div id=\"time\">11am - 10pm</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    `;\r\n\r\n    return homeContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n// tab-switching logic\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const content = document.getElementById('content');\r\n    const homeBtn = document.querySelector('#home');\r\n    const aboutBtn = document.querySelector('#about');\r\n    const menuBtn = document.querySelector('#menu');\r\n    const contactBtn = document.querySelector('#contact');\r\n\r\n    homeBtn.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)());\r\n    });\r\n\r\n    aboutBtn.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutSection)());\r\n    });\r\n\r\n    menuBtn.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuSection)());\r\n    });\r\n\r\n    contactBtn.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactSection)());\r\n    });\r\n\r\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)());\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuSection: () => (/* binding */ menuSection)\n/* harmony export */ });\nfunction menuSection() {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.innerHTML = `\r\n    \r\n    <div class=\"menu-container\">\r\n        <h2>Menu</h2>\r\n\r\n        <div class=\"tables\">\r\n            <div class=\"table drinks-table\">\r\n                <p id=\"table-header\">Drinks</p>\r\n                    <table>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Price</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Soft Drink</td>\r\n                            <td>$2.50</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Lemonade</td>\r\n                            <td>$3.50</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Draft Beer</td>\r\n                            <td>$6.50</td>\r\n                        </tr>\r\n                    </table>\r\n            </div>\r\n    \r\n            <div class=\"table apps-table\">\r\n                <p id=\"table-header\">Appetizers</p>\r\n                    <table>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Price</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Mozzarella Sticks</td>\r\n                            <td>$6.99</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Fried Pickles</td>\r\n                            <td>$7.99</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Mac and Cheese Balls</td>\r\n                            <td>$7.99</td>\r\n                        </tr>\r\n                    </table>\r\n            </div>\r\n\r\n            <div class=\"table entrees-table\">\r\n                <p id=\"table-header\">Entrees</p>\r\n                    <table>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Price</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>The Fudd Burger</td>\r\n                            <td>$12.50</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>The American Burger</td>\r\n                            <td>$10.00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Brisket Burger</td>\r\n                            <td>$14.50</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Fully Loaded Burger</td>\r\n                            <td>$16.50</td>\r\n                        </tr>\r\n                    </table>\r\n            </div>\r\n\r\n            <div class=\"table dessert-table\">\r\n                <p id=\"table-header\">Desserts</p>\r\n                    <table>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Price</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Brownie</td>\r\n                            <td>$5.99</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Chocolate Pecan Pie</td>\r\n                            <td>$8.99</td>\r\n                        </tr>\r\n                    </table>\r\n            </div>\r\n    </div>\r\n\r\n    `;\r\n\r\n    return menuContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/dark-surface-with-blank-space-fast-food-menu.jpg":
/*!*********************************************************************!*\
  !*** ./src/images/dark-surface-with-blank-space-fast-food-menu.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"800ffd0ccc36b6657c40.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dark-surface-with-blank-space-fast-food-menu.jpg?");

/***/ }),

/***/ "./src/open-sans.woff2":
/*!*****************************!*\
  !*** ./src/open-sans.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"feb0d8644aca3df9fabf.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/open-sans.woff2?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;