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
/******/ 		0: 0
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
/******/ 	deferredModules.push([49,5,4,6,7,2,1,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMThMMTUgMTJMOSA2IiBzdHJva2U9IiNGRjlCNDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 29:
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// Imports
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
exports.push([module.i, "/*100 - Thin\n200 - Extra Light (Ultra Light)\n300 - Light\n400 - Normal\n500 - Medium\n600 - Semi Bold (Demi Bold)\n700 - Bold\n800 - Extra Bold (Ultra Bold)\n900 - Black (Heavy)\n*/\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoLight\";\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoMedium\";\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"LatoBold\";\n  src: url(" + ___CSS_LOADER_URL___6___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"YesevaOne\";\n  src: url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*========THEME============*/\n/*========FONTS============*/\nhtml {\n  font-family: \"Lato,Open Sans\";\n  color: #2b2b2b; }\n\nbody {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n\np {\n  font-size: 1.75rem;\n  line-height: 44px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  padding: 1.25rem 2.5rem;\n  font-family: LatoLight; }\n\nh1 {\n  padding: 1.25rem 2.5rem;\n  margin: 0;\n  font-family: YesevaOne;\n  font-weight: 500;\n  font-size: 3.5rem;\n  line-height: 78px;\n  letter-spacing: 0rem; }\n\nb {\n  font-size: 1.75rem;\n  font-weight: 500;\n  letter-spacing: 0rem; }\n\n.verticalLine {\n  border: 0.05rem solid #dddddd;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\nhr {\n  border: 0.05rem solid #dddddd;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\np > .orangeText {\n  color: #ff9b40;\n  font-family: LatoMedium; }\n\n.orangeText {\n  color: #ff9b40; }\n\n.TopBarContainer {\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%; }\n\n.logo {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 1rem; }\n\n.contact {\n  position: relative;\n  display: block;\n  margin: auto 0 auto 0; }\n\n.web {\n  position: relative;\n  display: block; }\n\n.contactUs {\n  font-family: \"Lato\";\n  text-decoration: none;\n  color: white;\n  font-size: 28px; }\n\n#bg1 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.NavBarContainer,\n.SubSectionNavBarContainer {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  align-items: center;\n  width: fit-content; }\n  .NavBarContainer a,\n  .SubSectionNavBarContainer a {\n    border-left: 2px solid #2b2b2b;\n    color: #2b2b2b;\n    display: block;\n    font-family: Lato;\n    font-size: 25px;\n    font-weight: normal;\n    line-height: 30px;\n    padding: 32.51px 0px 32.01px 40px;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: background-color .4s ease;\n    width: 422px; }\n    .NavBarContainer a::before,\n    .SubSectionNavBarContainer a::before {\n      content: \"\";\n      border-left: 2px solid rgba(255, 255, 255, 0); }\n    .NavBarContainer a.active::before, .NavBarContainer a:active::before,\n    .SubSectionNavBarContainer a.active::before,\n    .SubSectionNavBarContainer a:active::before {\n      content: \"\";\n      border-left: 0; }\n    .NavBarContainer a:active, .NavBarContainer a.active,\n    .SubSectionNavBarContainer a:active,\n    .SubSectionNavBarContainer a.active {\n      color: #ff9b40;\n      background-color: #fbfbfb;\n      opacity: 0.75;\n      border-left: 6px solid #ff9b40; }\n    .NavBarContainer a:not(:focus):hover,\n    .SubSectionNavBarContainer a:not(:focus):hover {\n      background-color: #f0f0f0; }\n\n.viewMore {\n  align-items: center;\n  border-radius: 0;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: LatoBold;\n  font-size: 1.2rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 8rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  color: #ff9b40;\n  min-width: fit-content;\n  padding: 0;\n  min-height: fit-content; }\n  .viewMore:hover {\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n  .viewMore:hover:active, .viewMore:active {\n    box-shadow: 0 0 0 black;\n    background: rgba(0, 0, 0, 0); }\n  .viewMore > img {\n    margin-top: 0.2rem;\n    margin-left: 1rem; }\n\n.MainSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  align-content: center; }\n  .MainSection > span {\n    display: flex;\n    flex-direction: row; }\n  .MainSection .donate {\n    align-items: center;\n    border-radius: 0;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: LatoBold;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 8rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    background-color: #ff9b40;\n    text-transform: uppercase; }\n    .MainSection .donate:hover {\n      box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n    .MainSection .donate:hover:active, .MainSection .donate:active {\n      box-shadow: 0 0 0 white;\n      background: #ff8640; }\n    .MainSection .donate:disabled, .MainSection .donate:hover:disabled {\n      box-shadow: 0 0 0 white;\n      color: white;\n      background: #555555; }\n  .MainSection .learnmore {\n    align-items: center;\n    border-radius: 0;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: LatoBold;\n    font-size: 1.2rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 8rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    color: white;\n    background-color: rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover {\n      box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover:active, .MainSection .learnmore:active {\n      box-shadow: 0 0 0 black;\n      background: rgba(0, 0, 0, 0); }\n\n.AboutUsSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n\n.OurWorkSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n  .OurWorkSection > .workContainer > .imgMainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 13.78125rem;\n    width: 22.96875rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgMainContainer > img {\n      width: 22.96875rem;\n      min-height: 7.875rem;\n      height: 13.78125rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgMainContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 1.05rem 1.575rem; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgHeading {\n        font-size: 1.4rem;\n        margin-bottom: 0.35rem;\n        font-family: LatoMedium; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgSubHeading {\n        font-size: 1.05rem;\n        font-family: LatoLight; }\n  .OurWorkSection > .workContainer > .imgContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 7.875rem;\n    width: 13.125rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgContainer > img {\n      width: 13.125rem;\n      min-height: 7.875rem;\n      height: 7.875rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.6rem 0.9rem; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgHeading {\n        font-size: 0.8rem;\n        margin-bottom: 0.2rem;\n        font-family: LatoMedium; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgSubHeading {\n        font-size: 0.6rem;\n        font-family: LatoLight; }\n\n.DonateSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n  .DonateSection .verticalLine {\n    margin-top: 16.25rem;\n    margin-bottom: 5rem; }\n  .DonateSection .donateContainer {\n    display: flex;\n    flex-direction: row; }\n    .DonateSection .donateContainer > .donateSchemesContainer {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n      .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes {\n        display: flex;\n        flex-direction: column;\n        margin-top: 2.5rem;\n        padding: 0 2.5rem; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input[type=radio] {\n          position: absolute;\n          opacity: 0;\n          margin: 0;\n          padding: 0; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeContainerContent {\n          padding-bottom: 5rem; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeContainerContent .donateSchemeName {\n            padding: 1.25rem; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeContainerContent .donateSchemeName img {\n              transform: rotate(90deg); }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeContainerContent .donateSchemeContent > .donate {\n            max-height: 100vh;\n            opacity: 1; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent {\n          position: relative;\n          transition: all .4s ease-in-out;\n          height: fit-content;\n          overflow: hidden;\n          display: flex;\n          flex-direction: column;\n          cursor: pointer; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate {\n            align-items: center;\n            border-radius: 0;\n            border: 0;\n            color: black;\n            cursor: pointer;\n            display: flex;\n            font-family: LatoBold;\n            font-size: 0.96rem;\n            height: 2.8rem;\n            justify-content: space-around;\n            margin: 0;\n            min-width: 8rem;\n            width: -moz-fit-content;\n            width: fit-content;\n            background-color: #ff9b40;\n            text-transform: uppercase;\n            color: white;\n            position: absolute;\n            top: 0.6rem;\n            right: 0;\n            max-height: 0;\n            transition: opacity .4s ease-in-out, max-height .4s ease-in-out;\n            opacity: 0; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate:hover {\n              box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate:hover:active, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate:active {\n              box-shadow: 0 0 0 white;\n              background: #ff8640; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate:disabled, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donate:hover:disabled {\n              box-shadow: 0 0 0 white;\n              color: white;\n              background: #555555; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeName {\n            display: flex;\n            flex-direction: row;\n            cursor: pointer;\n            text-transform: uppercase;\n            font-size: 1.2rem;\n            padding: 1.25rem;\n            align-content: center;\n            align-items: center; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeName > img {\n              margin-right: 1.4rem;\n              transition: all .4s ease-in-out; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeContent {\n            max-height: 0;\n            padding: 0 1rem;\n            display: grid;\n            grid-template-rows: auto auto; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeContent .schemeContentAmount,\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeContent .schemeContentDuration {\n              color: #888888; }\n            .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContainerContent .donateSchemeContent > span {\n              display: grid;\n              grid-template-columns: auto 5rem;\n              padding: 0.125rem 1.875rem 0.125rem 3.125rem; }\n    .DonateSection .donateContainer > .donateAmountContainer {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n      .DonateSection .donateContainer > .donateAmountContainer > .donateAmount {\n        display: flex;\n        flex-direction: row;\n        align-content: center;\n        align-items: center;\n        margin-top: 2.5rem;\n        padding: 0 2.5rem; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput {\n          padding: 0px 1rem;\n          height: 3.6rem;\n          width: 16rem;\n          border: solid 1px #c4c4c4;\n          font-size: 1.75rem;\n          font-weight: 300;\n          font-family: \"Lato,Open Sans\";\n          color: #2b2b2b;\n          border: 0.1rem solid #E5E5E5;\n          position: relative;\n          padding-left: 2rem;\n          margin-right: 1.25rem; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:focus {\n            border: 0.1rem solid #ff9b40;\n            outline-color: #ff9b40;\n            outline-style: none; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput::-webkit-inner-spin-button, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput::-webkit-outer-spin-button {\n            -webkit-appearance: none;\n            margin: 0; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:focus + .rupeeSymbol {\n            opacity: 1; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donateInput:valid + .rupeeSymbol {\n            opacity: 1; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .rupeeSymbol {\n          position: absolute;\n          width: 0.9rem;\n          color: red;\n          margin-left: 2rem;\n          opacity: 0; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate {\n          align-items: center;\n          border-radius: 0;\n          border: 0;\n          color: black;\n          cursor: pointer;\n          display: flex;\n          font-family: LatoBold;\n          font-size: 0.96rem;\n          height: 2.8rem;\n          justify-content: space-around;\n          margin: 0;\n          min-width: 8rem;\n          width: -moz-fit-content;\n          width: fit-content;\n          background-color: #ff9b40;\n          text-transform: uppercase;\n          color: white; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover {\n            box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:active, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:active {\n            box-shadow: 0 0 0 white;\n            background: #ff8640; }\n          .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:disabled, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:disabled {\n            box-shadow: 0 0 0 white;\n            color: white;\n            background: #555555; }\n\n.Error404Section {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  display: flex;\n  flex-direction: column; }\n\n.ComingSoonSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  display: flex;\n  flex-direction: column; }\n\n.goHome {\n  align-items: center;\n  border-radius: 0;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: LatoBold;\n  font-size: 1.2rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 8rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #ff9b40;\n  text-transform: uppercase;\n  color: white;\n  margin: 0 20px; }\n  .goHome:hover {\n    box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n  .goHome:hover:active, .goHome:active {\n    box-shadow: 0 0 0 white;\n    background: #ff8640; }\n  .goHome:disabled, .goHome:hover:disabled {\n    box-shadow: 0 0 0 white;\n    color: white;\n    background: #555555; }\n\n.OurStorySubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n\n.OurEndeavoursSubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n\n.OurTeamSubSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem; }\n  .OurTeamSubSection .teamContainer {\n    display: flex;\n    flex-direction: column;\n    padding: 1.25rem; }\n    .OurTeamSubSection .teamContainer > span {\n      display: flex;\n      flex-direction: row;\n      padding: 1.25rem 0;\n      justify-content: space-between; }\n    .OurTeamSubSection .teamContainer .teamMemberContainer {\n      display: flex;\n      flex-direction: row;\n      width: 40rem; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer > img {\n        background: #c4c4c4;\n        width: 200px;\n        min-width: 10rem;\n        height: 220px; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer > span {\n        display: flex;\n        flex-direction: column;\n        padding: 0.75rem 2rem; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer .teamMemberName {\n        font-size: 1.75rem;\n        font-family: \"Lato,Open Sans\";\n        margin-bottom: 1.25rem; }\n      .OurTeamSubSection .teamContainer .teamMemberContainer .teamMemberPost {\n        font-size: 1.75rem;\n        font-family: LatoLight; }\n", ""]);



/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54306fbd36a21d268eacd1613702188f.png";

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMTJIMjAiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDZMMjAgMTJMMTQgMTgiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDcwNzUgMS4zNjNINS43MTM3NUM2LjEzMzc1IDEuNTg1IDYuNDQ4NzUgMS44NTggNi42NTg3NSAyLjE4MkM2Ljg3NDc1IDIuNTA2IDcuMDE1NzUgMi44NzUgNy4wODE3NSAzLjI4OUg5LjA3MDc1VjQuNTRINy4wNjM3NUM2Ljk0Mzc1IDUuMTk0IDYuNjQwNzUgNS43NjEgNi4xNTQ3NSA2LjI0MUM1LjY3NDc1IDYuNzIxIDUuMDM1NzUgNy4wNjYgNC4yMzc3NSA3LjI3NkM0LjQ5NTc1IDcuNDE0IDQuNzE3NzUgNy42MTUgNC45MDM3NSA3Ljg3OUw4LjY2NTc1IDEzSDcuMTA4NzVDNi43OTY3NSAxMyA2LjU2NTc1IDEyLjg3NyA2LjQxNTc1IDEyLjYzMUwzLjA2Nzc1IDguMDIzQzIuOTY1NzUgNy44NzkgMi44NTQ3NSA3Ljc3NyAyLjczNDc1IDcuNzE3QzIuNjIwNzUgNy42NTEgMi40NDA3NSA3LjYxOCAyLjE5NDc1IDcuNjE4SDAuNjgyNzVWNi40MTJIMi4zNzQ3NUMzLjIyMDc1IDYuNDEyIDMuODk1NzUgNi4yNDEgNC4zOTk3NSA1Ljg5OUM0LjkwOTc1IDUuNTU3IDUuMjM5NzUgNS4xMDQgNS4zODk3NSA0LjU0SDAuNjY0NzVWMy4yODlINS40MjU3NUM1LjMxMTc1IDIuNjg5IDUuMDA1NzUgMi4yMjcgNC41MDc3NSAxLjkwM0M0LjAwOTc1IDEuNTczIDMuMzIyNzUgMS40MDggMi40NDY3NSAxLjQwOEgwLjY4Mjc1VjAuMTAyOTk5SDkuMDcwNzVWMS4zNjNaIiBmaWxsPSIjMkIyQjJCIi8+Cjwvc3ZnPgo="

/***/ })

/******/ });