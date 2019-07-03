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
/******/ 	deferredModules.push([37,5,4,6,7,2,1,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMThMMTUgMTJMOSA2IiBzdHJva2U9IiNGRjlCNDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(31);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(33)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Yeseva+One:300,400,500);", ""]);

// Module
exports.push([module.i, "/*========THEME============*/\n/*========FONTS============*/\nhtml {\n  font-family: Lato;\n  color: #2b2b2b; }\n\np {\n  font-size: 1.75rem;\n  line-height: 44px;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n  padding: 0 20px; }\n\nh1 {\n  padding: 45px 20px;\n  margin: 0;\n  font-family: Yeseva One;\n  font-weight: 500;\n  font-size: 3.5rem;\n  line-height: 78px;\n  letter-spacing: 0.1rem; }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput {\n  margin: 20px;\n  padding: 0px 15px 0px 15px;\n  height: 3.4rem;\n  width: 330px;\n  border: solid 1px #c4c4c4;\n  font-size: 1.75rem;\n  font-weight: 300;\n  font-family: Lato; }\n\ninput:focus {\n  outline-color: #FF9B40; }\n\n.vertical-line {\n  border: 0.05rem solid #DDDDDD;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\nhr {\n  border: 0.05rem solid #DDDDDD;\n  border-radius: 0;\n  width: auto;\n  height: auto;\n  margin: 0;\n  padding: 0; }\n\n.orangeText {\n  color: #ff9b40;\n  font-weight: 500; }\n\n.TopBarContainer {\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%; }\n\n.logo {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 1rem; }\n\n.contact {\n  position: relative;\n  display: block;\n  margin: auto 0 auto 0; }\n\n.web {\n  position: relative;\n  display: block; }\n\n.contactUs {\n  font-family: \"Lato\";\n  text-decoration: none;\n  color: white;\n  font-size: 28px; }\n\n#bg1 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.NavBarContainer {\n  list-style: none;\n  align-items: center;\n  width: fit-content; }\n\n.NavItem a {\n  color: #2b2b2b;\n  text-decoration: none;\n  width: 422px;\n  display: block;\n  font-family: Lato;\n  font-size: 25px;\n  line-height: 30px;\n  font-style: normal;\n  font-weight: normal;\n  padding: 32.51px 0px 32.01px 40px;\n  border-left: 2px solid #2b2b2b;\n  transition: background-color 1s; }\n\n.NavItem a:active,\n.NavItem a.active {\n  color: #ff9b40;\n  background-color: #fbfbfb;\n  opacity: 0.75;\n  border-left: 6px solid #ff9b40; }\n\n.NavItem a:hover {\n  background-color: #fbfbfb; }\n\n.MainSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem;\n  align-content: center; }\n  .MainSection > span {\n    display: flex;\n    flex-direction: row; }\n  .MainSection .donate {\n    align-items: center;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: Lato;\n    font-size: 1.4rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 12rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 0;\n    background-color: #ff9b40; }\n    .MainSection .donate:hover {\n      box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n    .MainSection .donate:hover:active, .MainSection .donate:active {\n      box-shadow: 0 0 0 white;\n      background: #ff8640; }\n    .MainSection .donate:disabled, .MainSection .donate:hover:disabled {\n      box-shadow: 0 0 0 white;\n      color: white;\n      background: #555555; }\n  .MainSection .learnmore {\n    align-items: center;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: Lato;\n    font-size: 1.4rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 12rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 0;\n    color: white;\n    background-color: rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover {\n      box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover:active, .MainSection .learnmore:active {\n      box-shadow: 0 0 0 black;\n      background: rgba(0, 0, 0, 0); }\n\n.AboutUsSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n\n.viewMore {\n  align-items: center;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: Lato;\n  font-size: 1.4rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 12rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  color: #ff9b40;\n  min-width: fit-content;\n  padding: 0;\n  min-height: fit-content; }\n  .viewMore:hover {\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n  .viewMore:hover:active, .viewMore:active {\n    box-shadow: 0 0 0 black;\n    background: rgba(0, 0, 0, 0); }\n  .viewMore > img {\n    margin-top: 0.2rem;\n    margin-left: 1rem; }\n\n.OurWorkSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n  .OurWorkSection > .workContainer > .imgMainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 13.78125rem;\n    width: 22.96875rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgMainContainer > img {\n      width: 22.96875rem;\n      min-height: 7.875rem;\n      height: 13.78125rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgMainContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.7875rem 1.4rem; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgHeading {\n        font-size: 1.4rem;\n        font-weight: 500; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgSubHeading {\n        font-size: 1.05rem;\n        font-weight: 300; }\n  .OurWorkSection > .workContainer > .imgContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 7.875rem;\n    width: 13.125rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgContainer > img {\n      width: 13.125rem;\n      min-height: 7.875rem;\n      height: 7.875rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.45rem 0.8rem; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgHeading {\n        font-size: 0.8rem;\n        font-weight: 500; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgSubHeading {\n        font-size: 0.6rem;\n        font-weight: 300; }\n\n.DonateSection .donateContainer {\n  display: flex;\n  flex-direction: row; }\n  .DonateSection .donateContainer > .donateSchemesContainer {\n    display: flex;\n    flex-direction: column;\n    width: 50%; }\n    .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes {\n      display: flex;\n      flex-direction: column;\n      margin-top: 4rem; }\n      .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer {\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        cursor: pointer; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate {\n          align-items: center;\n          border: 0;\n          color: black;\n          cursor: pointer;\n          display: flex;\n          font-family: Lato;\n          font-size: 1.12rem;\n          height: 2.8rem;\n          justify-content: space-around;\n          margin: 0;\n          min-width: 12rem;\n          width: -moz-fit-content;\n          width: fit-content;\n          border-radius: 0;\n          background-color: #ff9b40;\n          color: white;\n          position: absolute;\n          z-index: -1;\n          top: 0.6rem;\n          right: 0;\n          max-height: 0;\n          transition: all .4s;\n          opacity: 0; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover {\n            box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover:active, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:active {\n            box-shadow: 0 0 0 white;\n            background: #ff8640; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:disabled, .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donate:hover:disabled {\n            box-shadow: 0 0 0 white;\n            color: white;\n            background: #555555; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input[type=radio] {\n          position: absolute;\n          opacity: 0;\n          z-index: -1; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked + .donateSchemeName img {\n          transform: rotate(90deg); }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked ~ .donateSchemeContent {\n          max-height: 100vh;\n          padding: 1em; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer input:checked ~ .donateSchemeContent > .donate {\n            max-height: 100vh;\n            opacity: 1; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeName {\n          display: flex;\n          flex-direction: row;\n          cursor: pointer;\n          text-transform: uppercase;\n          font-size: 1.2rem;\n          padding: 1.25rem;\n          align-content: center;\n          align-items: center; }\n          .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeName > img {\n            margin-right: 1.4rem;\n            transition: all .4s; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer .donateSchemeContent {\n          max-height: 0;\n          transition: all .4s;\n          padding: 0 1rem; }\n        .DonateSection .donateContainer > .donateSchemesContainer .donateSchemes .donateSchemeContainer-close {\n          display: flex;\n          justify-content: flex-end;\n          padding: 1em;\n          font-size: 0.75em;\n          cursor: pointer; }\n  .DonateSection .donateContainer > .donateAmountContainer {\n    display: flex;\n    flex-direction: column;\n    width: 50%; }\n    .DonateSection .donateContainer > .donateAmountContainer > .donateAmount {\n      display: flex;\n      flex-direction: row;\n      align-content: center;\n      align-items: center; }\n      .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate {\n        align-items: center;\n        border: 0;\n        color: black;\n        cursor: pointer;\n        display: flex;\n        font-family: Lato;\n        font-size: 1.4rem;\n        height: 3.5rem;\n        justify-content: space-around;\n        margin: 0;\n        min-width: 12rem;\n        width: -moz-fit-content;\n        width: fit-content;\n        border-radius: 0;\n        background-color: #ff9b40;\n        color: white; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover {\n          box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:active, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:active {\n          box-shadow: 0 0 0 white;\n          background: #ff8640; }\n        .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:disabled, .DonateSection .donateContainer > .donateAmountContainer > .donateAmount .donate:hover:disabled {\n          box-shadow: 0 0 0 white;\n          color: white;\n          background: #555555; }\n", ""]);



/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54306fbd36a21d268eacd1613702188f.png";

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMTJIMjAiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDZMMjAgMTJMMTQgMTgiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ })

/******/ });