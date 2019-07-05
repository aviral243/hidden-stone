/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/hidden-stone/app/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([47,4,3,5,6,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMThMMTUgMTJMOSA2IiBzdHJva2U9IiNGRjlCNDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIzOS41IC0wLjUgMTY5Ljc1NiAyNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMzkuNSAtMC41IDE2OS43NTYgMjUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNMTUyLjUxMSwyMy4xMTloNDEuMDMxTDIwOS4yNTYtMC41SDU1LjIxNEwzOS41LDIzLjExOWgyNi43MzljMjcuMDg2LDAsNTIuMDg0LDIuMDkyLDYyLjA4MSwyNC43NDNINTUuMjE0IEwzOS41LDcxLjQ4Mmg5MS43NjljLTAuMDAyLDAuMDUzLTAuMDAyLDAuMTAyLTAuMDAyLDAuMTU1YzAsMTYuOTc0LTE0LjEwNiw0My4wMS02MC42ODUsNDMuMDFsLTIyLjUzNy0wLjAyNmwwLjAyNSwyMi4wNjggTDEzOC4zMjksMjQ5LjVoNDAuMTk1bC05My40Mi0xMTYuNzA5YzM4LjQ1Ni0yLjA3NCw3NC41MjMtMjMuNTYzLDc5LjcyMi02MS4zMDloMjguNzE2bDE1LjcxNC0yMy42MmgtNDQuODQgQzE2Mi42MDYsMzguNzYxLDE1OC42NzQsMjkuOTU4LDE1Mi41MTEsMjMuMTE5eiIvPjwvc3ZnPg=="

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(30);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(43)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Yeseva+One:300,400,500);", ""]);
var urlEscape = __webpack_require__(32);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(33));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(34));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(35));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(36));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(37));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(38));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(39));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(40));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(41));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(42));

// Module
exports.push([module.i, "/*100 - Thin\n200 - Extra Light (Ultra Light)\n300 - Light\n400 - Normal\n500 - Medium\n600 - Semi Bold (Demi Bold)\n700 - Bold\n800 - Extra Bold (Ultra Bold)\n900 - Black (Heavy)\n*/\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoLight\";\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoMedium\";\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoBold\";\n  src: url(" + ___CSS_LOADER_URL___6___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"YesevaOne\";\n  src: url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*========THEME============*/\n/*========FONTS============*/\nhtml {\n  font-family: Lato;\n  color: #2b2b2b; }\n\np {\n  font-size: 1.75rem;\n  line-height: 44px;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n  padding: 0 20px;\n  font-family: LatoLight; }\n\nh1 {\n  padding: 45px 20px;\n  margin: 0;\n  font-family: YesevaOne;\n  font-weight: 500;\n  font-size: 3.5rem;\n  line-height: 78px;\n  letter-spacing: 0.1rem; }\n\nb {\n  font-size: 1.75rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem; }\n\n.vertical-line {\n  border: 0.05rem solid #dddddd;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\nhr {\n  border: 0.05rem solid #dddddd;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\np > .orangeText {\n  color: #ff9b40;\n  font-family: LatoMedium; }\n\n.orangeText {\n  color: #ff9b40; }\n\n.TopBarContainer {\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%; }\n\n.logo {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 1rem; }\n\n.contact {\n  position: relative;\n  display: block;\n  margin: auto 0 auto 0; }\n\n.web {\n  position: relative;\n  display: block; }\n\n.contactUs {\n  font-family: \"Lato\";\n  text-decoration: none;\n  color: white;\n  font-size: 28px; }\n\n#bg1 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.NavBarContainer,\n.SubSectionNavBarContainer {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  align-items: center;\n  width: fit-content; }\n  .NavBarContainer a,\n  .SubSectionNavBarContainer a {\n    border-left: 2px solid #2b2b2b;\n    color: #2b2b2b;\n    display: block;\n    font-family: Lato;\n    font-size: 25px;\n    font-weight: normal;\n    line-height: 30px;\n    padding: 32.51px 0px 32.01px 40px;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: background-color .4s ease;\n    width: 422px; }\n    .NavBarContainer a::before,\n    .SubSectionNavBarContainer a::before {\n      content: \"\";\n      border-left: 2px solid rgba(255, 255, 255, 0); }\n    .NavBarContainer a.active::before, .NavBarContainer a:active::before,\n    .SubSectionNavBarContainer a.active::before,\n    .SubSectionNavBarContainer a:active::before {\n      content: \"\";\n      border-left: 0; }\n    .NavBarContainer a:active, .NavBarContainer a.active,\n    .SubSectionNavBarContainer a:active,\n    .SubSectionNavBarContainer a.active {\n      color: #ff9b40;\n      background-color: #fbfbfb;\n      opacity: 0.75;\n      border-left: 6px solid #ff9b40; }\n    .NavBarContainer a:not(:focus):hover,\n    .SubSectionNavBarContainer a:not(:focus):hover {\n      background-color: #f0f0f0; }\n\n.MainSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem;\n  align-content: center; }\n  .MainSection > span {\n    display: flex;\n    flex-direction: row; }\n  .MainSection .donate {\n    align-items: center;\n    border-radius: 0;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: LatoBold;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 8rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    background-color: #ff9b40;\n    text-transform: uppercase; }\n    .MainSection .donate:hover {\n      box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n    .MainSection .donate:hover:active, .MainSection .donate:active {\n      box-shadow: 0 0 0 white;\n      background: #ff8640; }\n    .MainSection .donate:disabled, .MainSection .donate:hover:disabled {\n      box-shadow: 0 0 0 white;\n      color: white;\n      background: #555555; }\n  .MainSection .learnmore {\n    align-items: center;\n    border-radius: 0;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: LatoBold;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 8rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    color: white;\n    background-color: rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover {\n      box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover:active, .MainSection .learnmore:active {\n      box-shadow: 0 0 0 black;\n      background: rgba(0, 0, 0, 0); }\n\n.AboutUsSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n\n.viewMore {\n  align-items: center;\n  border-radius: 0;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: LatoBold;\n  font-size: 1.2rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 8rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  color: #ff9b40;\n  min-width: fit-content;\n  padding: 0;\n  min-height: fit-content; }\n  .viewMore:hover {\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n  .viewMore:hover:active, .viewMore:active {\n    box-shadow: 0 0 0 black;\n    background: rgba(0, 0, 0, 0); }\n  .viewMore > img {\n    margin-top: 0.2rem;\n    margin-left: 1rem; }\n\n.OurWorkSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n  .OurWorkSection > .workContainer > .imgMainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 13.78125rem;\n    width: 22.96875rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgMainContainer > img {\n      width: 22.96875rem;\n      min-height: 7.875rem;\n      height: 13.78125rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgMainContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.7875rem 1.4rem; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgHeading {\n        font-size: 1.4rem;\n        font-family: LatoMedium; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgSubHeading {\n        font-size: 1.05rem;\n        font-family: LatoLight; }\n  .OurWorkSection > .workContainer > .imgContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 7.875rem;\n    width: 13.125rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgContainer > img {\n      width: 13.125rem;\n      min-height: 7.875rem;\n      height: 7.875rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.45rem 0.8rem; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgHeading {\n        font-size: 0.8rem;\n        font-family: LatoMedium; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgSubHeading {\n        font-size: 0.6rem;\n        font-family: LatoLight; }\n\n.DonateSection .donateContainer {\n  display: flex;\n  flex-direction: row; }\n  .DonateSection .donateContainer > .donateSchemesContainer {\n    display: flex;\n    flex-direction: column;\n    width: 50%; }\n    .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes {\n      display: flex;\n      flex-direction: column;\n      margin-top: 4rem; }\n      .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer {\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        cursor: pointer; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate {\n          align-items: center;\n          border-radius: 0;\n          border: 0;\n          color: black;\n          cursor: pointer;\n          display: flex;\n          font-family: LatoBold;\n          font-size: 0.96rem;\n          height: 2.8rem;\n          justify-content: space-around;\n          margin: 0;\n          min-width: 8rem;\n          width: -moz-fit-content;\n          width: fit-content;\n          background-color: #ff9b40;\n          text-transform: uppercase;\n          color: white;\n          position: absolute;\n          z-index: -1;\n          top: 0.6rem;\n          right: 0;\n          max-height: 0;\n          transition: all .4s ease-in-out;\n          opacity: 0; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover {\n            box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover:active, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:active {\n            box-shadow: 0 0 0 white;\n            background: #ff8640; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:disabled, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover:disabled {\n            box-shadow: 0 0 0 white;\n            color: white;\n            background: #555555; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input[type=radio] {\n          position: absolute;\n          opacity: 0;\n          z-index: -1;\n          margin: 0;\n          padding: 0; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeName {\n          padding: 1.25rem; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeName img {\n            transform: rotate(90deg); }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked ~ .donateSchemeContent {\n          max-height: auto;\n          padding: 1em; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked ~ .donateSchemeContent > .donate {\n            max-height: 100vh;\n            opacity: 1; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeName {\n          display: flex;\n          flex-direction: row;\n          cursor: pointer;\n          text-transform: uppercase;\n          font-size: 1.2rem;\n          padding: 1.25rem;\n          align-content: center;\n          align-items: center; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeName > img {\n            margin-right: 1.4rem;\n            transition: all .4s ease-in-out; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContent {\n          max-height: 0;\n          transition: all .4s ease-in-out;\n          padding: 0 1rem; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer-close {\n          display: flex;\n          justify-content: flex-end;\n          padding: 1em;\n          font-size: 0.75em;\n          cursor: pointer; }\n  .DonateSection .donateContainer > .donateAmountContainer {\n    display: flex;\n    flex-direction: column;\n    width: 50%; }\n    .DonateSection .donateContainer > .donateAmountContainer > .donateAmount {\n      display: flex;\n      flex-direction: row;\n      align-content: center;\n      align-items: center; }\n      .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput {\n        margin: 0 1rem;\n        padding: 0px 1rem;\n        height: 3.6rem;\n        width: 16rem;\n        border: solid 1px #c4c4c4;\n        font-size: 1.75rem;\n        font-weight: 300;\n        font-family: Lato;\n        color: #2b2b2b;\n        border: 0.1rem solid #E5E5E5;\n        position: relative;\n        padding-left: 2rem; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:focus {\n          border: 0.1rem solid #ff9b40;\n          outline-color: #ff9b40;\n          outline-style: none; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput::-webkit-inner-spin-button, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput::-webkit-outer-spin-button {\n          -webkit-appearance: none;\n          margin: 0; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:focus + .rupeeSymbol {\n          opacity: 1; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:valid + .rupeeSymbol {\n          opacity: 1; }\n      .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .rupeeSymbol {\n        position: absolute;\n        width: 0.9rem;\n        color: red;\n        margin-left: 2rem;\n        opacity: 0; }\n      .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate {\n        align-items: center;\n        border-radius: 0;\n        border: 0;\n        color: black;\n        cursor: pointer;\n        display: flex;\n        font-family: LatoBold;\n        font-size: 0.96rem;\n        height: 2.8rem;\n        justify-content: space-around;\n        margin: 0;\n        min-width: 8rem;\n        width: -moz-fit-content;\n        width: fit-content;\n        background-color: #ff9b40;\n        text-transform: uppercase;\n        color: white; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover {\n          box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:active, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:active {\n          box-shadow: 0 0 0 white;\n          background: #ff8640; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:disabled, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:disabled {\n          box-shadow: 0 0 0 white;\n          color: white;\n          background: #555555; }\n\n.Error404Section {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem;\n  display: flex;\n  flex-direction: column; }\n\n.ComingSoonSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem;\n  display: flex;\n  flex-direction: column; }\n\n.goHome {\n  align-items: center;\n  border-radius: 0;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: LatoBold;\n  font-size: 1.2rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 8rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #ff9b40;\n  text-transform: uppercase;\n  color: white;\n  margin: 0 20px; }\n  .goHome:hover {\n    box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n  .goHome:hover:active, .goHome:active {\n    box-shadow: 0 0 0 white;\n    background: #ff8640; }\n  .goHome:disabled, .goHome:hover:disabled {\n    box-shadow: 0 0 0 white;\n    color: white;\n    background: #555555; }\n\n.OurStorySubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n\n.OurEndeavoursSubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n\n.OurTeamSubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n  .OurTeamSubSection .teamContainer {\n    display: flex;\n    flex-direction: column;\n    padding: 1.25rem; }\n    .OurTeamSubSection .teamContainer > span {\n      display: flex;\n      flex-direction: row;\n      padding: 1.25rem 0;\n      justify-content: space-between; }\n    .OurTeamSubSection .teamContainer .teamMemberContainer {\n      display: flex;\n      flex-direction: row;\n      width: 40rem; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer > img {\n        background: #c4c4c4;\n        width: 200px;\n        min-width: 10rem;\n        height: 220px; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer > span {\n        display: flex;\n        flex-direction: column;\n        padding: 0.75rem 2rem; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer .teamMemberName {\n        font-size: 1.75rem;\n        font-weight: 400; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer .teamMemberPost {\n        font-size: 1.75rem;\n        font-weight: 300; }\n", ""]);



/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "27bd77b9162d388cb8d4c4217c7c5e2a.woff";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd03a2cc277bbbc338d464e679fe9942.woff2";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "90301aa07d780a09812229d6375c3b28.woff";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7244318390cc4d36aac4a613ff42d308.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "acbd6ecc97c80340e9bf00ea80063234.woff";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0996d39c4cf5d223a14559dfa37047fd.woff2";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d878b6c29b10beca227e9eef4246111b.woff";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cccb897485813c7c256901dbca54ecf2.woff2";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fcd999fae9858c0f135ec64138082bd8.woff";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d350aca05ade9af4c4f8d7ae4caaaaf7.woff2";

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(22);

// CONCATENATED MODULE: ./src/app/components/error404/Error404.js


var Error404_Error404 = function Error404() {
  return react_default.a.createElement("div", {
    className: "Error404Section"
  }, react_default.a.createElement("h1", null, react_default.a.createElement("span", {
    className: "orangeText"
  }, "Oops!!!"), " 404"), react_default.a.createElement("p", null, "Page not found.", react_default.a.createElement("br", null), "You are probably in a wrong place."), react_default.a.createElement("p", null, "Go back to", react_default.a.createElement("span", {
    className: "orangeText"
  }, " Home"), "."), react_default.a.createElement("button", {
    className: "goHome"
  }, "Home"));
};

/* harmony default export */ var error404_Error404 = (Error404_Error404);
// EXTERNAL MODULE: ./src/app/images/chevron-right.svg
var chevron_right = __webpack_require__(8);
var chevron_right_default = /*#__PURE__*/__webpack_require__.n(chevron_right);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);

// CONCATENATED MODULE: ./src/app/components/home/sections/schemes/defaultSchemes.js
var defaultSchemes = [{
  scheme: "Bronze",
  amount: "1000",
  duration: "1 year"
}, {
  scheme: "Silver",
  amount: "10000",
  duration: "2 year"
}, {
  scheme: "Gold",
  amount: "25000",
  duration: "5 year"
}, {
  scheme: "Diamond",
  amount: "50000",
  duration: "10 year"
}];
// CONCATENATED MODULE: ./src/app/components/home/sections/schemes/Schemes.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable arrow-spacing */

/* eslint-disable no-console */





var Schemes_Schemes =
/*#__PURE__*/
function (_Component) {
  _inherits(Schemes, _Component);

  function Schemes(props) {
    var _this;

    _classCallCheck(this, Schemes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Schemes).call(this, props));
    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Schemes, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, defaultSchemes.map(function (schemeDetails, index) {
        return react_default.a.createElement("span", {
          className: "donateSchemeContainer",
          key: schemeDetails
        }, react_default.a.createElement("input", {
          type: "radio",
          id: index,
          name: "scheme"
        }), react_default.a.createElement("label", {
          className: "donateSchemeName",
          htmlFor: index
        }, react_default.a.createElement("img", {
          src: chevron_right_default.a
        }), schemeDetails.scheme), react_default.a.createElement("div", {
          className: "donateSchemeContent"
        }, react_default.a.createElement("button", {
          className: "donate"
        }, "Donate"), react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "schemeContentAmount"
        }, "Amount to be paid"), schemeDetails.amount), react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "schemeContentDuration"
        }, "Membership Tenure"), schemeDetails.duration)), react_default.a.createElement("hr", null));
      }));
    }
  }]);

  return Schemes;
}(react["Component"]);

/* harmony default export */ var schemes_Schemes = (Schemes_Schemes);
// EXTERNAL MODULE: ./src/app/images/rupee.svg
var rupee = __webpack_require__(15);
var rupee_default = /*#__PURE__*/__webpack_require__.n(rupee);

// CONCATENATED MODULE: ./src/app/components/home/sections/Donate.js
function Donate_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Donate_typeof = function _typeof(obj) { return typeof obj; }; } else { Donate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Donate_typeof(obj); }

function Donate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Donate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Donate_createClass(Constructor, protoProps, staticProps) { if (protoProps) Donate_defineProperties(Constructor.prototype, protoProps); if (staticProps) Donate_defineProperties(Constructor, staticProps); return Constructor; }

function Donate_possibleConstructorReturn(self, call) { if (call && (Donate_typeof(call) === "object" || typeof call === "function")) { return call; } return Donate_assertThisInitialized(self); }

function Donate_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Donate_getPrototypeOf(o) { Donate_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Donate_getPrototypeOf(o); }

function Donate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Donate_setPrototypeOf(subClass, superClass); }

function Donate_setPrototypeOf(o, p) { Donate_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Donate_setPrototypeOf(o, p); }






var Donate_Donate =
/*#__PURE__*/
function (_Component) {
  Donate_inherits(Donate, _Component);

  function Donate(props) {
    var _this;

    Donate_classCallCheck(this, Donate);

    _this = Donate_possibleConstructorReturn(this, Donate_getPrototypeOf(Donate).call(this, props));
    _this.state = {
      show: false,
      scheme: ""
    };
    return _this;
  }

  Donate_createClass(Donate, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("section", {
        className: "DonateSection"
      }, react_default.a.createElement("h1", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "help"), " us"), react_default.a.createElement("div", {
        className: "donateContainer"
      }, react_default.a.createElement("div", {
        className: "donateSchemesContainer"
      }, react_default.a.createElement("p", null, "by choosing one of the following schemes"), react_default.a.createElement("div", {
        className: "donateSchemes"
      }, react_default.a.createElement("hr", null), react_default.a.createElement(schemes_Schemes, null))), react_default.a.createElement("div", {
        className: "vertical-line"
      }), react_default.a.createElement("div", {
        className: "donateAmountContainer"
      }, react_default.a.createElement("p", null, "Or donate an amount of your choice :)"), react_default.a.createElement("form", {
        className: "donateAmount"
      }, react_default.a.createElement("input", {
        type: "number",
        min: "0",
        className: "donateInput",
        required: true,
        pattern: "[1-9]{1}"
      }), react_default.a.createElement("img", {
        src: rupee_default.a,
        className: "rupeeSymbol"
      }), react_default.a.createElement("button", {
        className: "donate"
      }, "Donate")))));
    }
  }]);

  return Donate;
}(react["Component"]);

/* harmony default export */ var sections_Donate = (Donate_Donate);
// CONCATENATED MODULE: ./src/app/components/home/Home.js
function Home_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Home_typeof = function _typeof(obj) { return typeof obj; }; } else { Home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Home_typeof(obj); }

function Home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Home_createClass(Constructor, protoProps, staticProps) { if (protoProps) Home_defineProperties(Constructor.prototype, protoProps); if (staticProps) Home_defineProperties(Constructor, staticProps); return Constructor; }

function Home_possibleConstructorReturn(self, call) { if (call && (Home_typeof(call) === "object" || typeof call === "function")) { return call; } return Home_assertThisInitialized(self); }

function Home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Home_getPrototypeOf(o) { Home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Home_getPrototypeOf(o); }

function Home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Home_setPrototypeOf(subClass, superClass); }

function Home_setPrototypeOf(o, p) { Home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Home_setPrototypeOf(o, p); }






var Home_Home =
/*#__PURE__*/
function (_Component) {
  Home_inherits(Home, _Component);

  function Home() {
    Home_classCallCheck(this, Home);

    return Home_possibleConstructorReturn(this, Home_getPrototypeOf(Home).apply(this, arguments));
  }

  Home_createClass(Home, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "main"
      }, react_default.a.createElement(sections_Donate, null), " ");
    }
  }]);

  return Home;
}(react["Component"]);

/* harmony default export */ var home_Home = (Home_Home);
// EXTERNAL MODULE: ./node_modules/offline-plugin/runtime.js
var runtime = __webpack_require__(16);

// EXTERNAL MODULE: ./src/app/styles/main.scss
var main = __webpack_require__(29);

// CONCATENATED MODULE: ./src/app/Index.js
function Index_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Index_typeof = function _typeof(obj) { return typeof obj; }; } else { Index_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Index_typeof(obj); }

function Index_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Index_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Index_createClass(Constructor, protoProps, staticProps) { if (protoProps) Index_defineProperties(Constructor.prototype, protoProps); if (staticProps) Index_defineProperties(Constructor, staticProps); return Constructor; }

function Index_possibleConstructorReturn(self, call) { if (call && (Index_typeof(call) === "object" || typeof call === "function")) { return call; } return Index_assertThisInitialized(self); }

function Index_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Index_getPrototypeOf(o) { Index_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Index_getPrototypeOf(o); }

function Index_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Index_setPrototypeOf(subClass, superClass); }

function Index_setPrototypeOf(o, p) { Index_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Index_setPrototypeOf(o, p); }






runtime["install"]();


var Index_Index =
/*#__PURE__*/
function (_React$Component) {
  Index_inherits(Index, _React$Component);

  function Index() {
    Index_classCallCheck(this, Index);

    return Index_possibleConstructorReturn(this, Index_getPrototypeOf(Index).apply(this, arguments));
  }

  Index_createClass(Index, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement(home_Home, null));
    }
  }]);

  return Index;
}(react_default.a.Component);

Object(react_dom["render"])(react_default.a.createElement(Index_Index, null), window.document.getElementById("app"));

/***/ })
/******/ ]);