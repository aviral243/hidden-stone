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
/******/ 	deferredModules.push([36,4,3,5,6,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(30)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Yeseva+One:100,200,300,400,500,600,700,800,900);", ""]);

// Module
exports.push([module.i, ".orangeText {\n  color: #FF9B40;\n  font-weight: 500; }\n\np {\n  font-size: 28px;\n  line-height: 44px;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n  padding: 0 20px; }\n\nh1 {\n  padding: 45px 20px;\n  margin: 0;\n  font-family: Yeseva One;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 56px;\n  line-height: 78px;\n  letter-spacing: 0.1rem; }\n\nhtml {\n  font-family: Lato; }\n\n.TopBarContainer {\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%; }\n\n.logo {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 1rem; }\n\n.contact {\n  position: relative;\n  display: block;\n  margin: auto 0 auto 0; }\n\n.web {\n  position: relative;\n  display: block; }\n\n.contactUs {\n  font-family: \"Lato\";\n  text-decoration: none;\n  color: white;\n  font-size: 28px; }\n\n#bg1 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.NavBarContainer {\n  list-style: none;\n  align-items: center;\n  width: fit-content; }\n\n.NavItem a {\n  color: #2b2b2b;\n  text-decoration: none;\n  width: 422px;\n  display: block;\n  font-family: Lato;\n  font-size: 25px;\n  line-height: 30px;\n  font-style: normal;\n  font-weight: normal;\n  padding: 32.51px 0px 32.01px 40px;\n  border-left: 2px solid #2b2b2b;\n  transition: background-color 1s; }\n\n.NavItem a:active,\n.NavItem a.active {\n  color: #ff9b40;\n  background-color: #fbfbfb;\n  opacity: 0.75;\n  border-left: 6px solid #ff9b40; }\n\n.NavItem a:hover {\n  background-color: #fbfbfb; }\n\n.MainSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem;\n  align-content: center; }\n  .MainSection > span {\n    display: flex;\n    flex-direction: row; }\n  .MainSection .donate {\n    align-items: center;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: Lato;\n    font-size: 1.4rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 12rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 0;\n    background-color: #FF9B40; }\n    .MainSection .donate:hover {\n      box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.15); }\n    .MainSection .donate:hover:active, .MainSection .donate:active {\n      box-shadow: 0 0 0 white;\n      background: #ff8640; }\n    .MainSection .donate:disabled, .MainSection .donate:hover:disabled {\n      box-shadow: 0 0 0 white;\n      color: white;\n      background: #555555; }\n  .MainSection .learnmore {\n    align-items: center;\n    border: 0;\n    color: black;\n    cursor: pointer;\n    display: flex;\n    font-family: Lato;\n    font-size: 1.4rem;\n    height: 3.5rem;\n    justify-content: space-around;\n    margin: 0;\n    min-width: 12rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 0;\n    color: white;\n    background-color: rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover {\n      box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n    .MainSection .learnmore:hover:active, .MainSection .learnmore:active {\n      box-shadow: 0 0 0 black;\n      background: rgba(0, 0, 0, 0); }\n\n.AboutUsSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n\n.viewMore {\n  align-items: center;\n  border: 0;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  font-family: Lato;\n  font-size: 1.4rem;\n  height: 3.5rem;\n  justify-content: space-around;\n  margin: 0;\n  min-width: 12rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0);\n  color: #FF9B40;\n  min-width: fit-content;\n  padding: 0;\n  min-height: fit-content; }\n  .viewMore:hover {\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0); }\n  .viewMore:hover:active, .viewMore:active {\n    box-shadow: 0 0 0 black;\n    background: rgba(0, 0, 0, 0); }\n  .viewMore > img {\n    margin-top: 0.2rem;\n    margin-left: 1rem; }\n\n.OurWorkSection {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding: 0.9375rem 0.625rem;\n  margin: 2.5rem; }\n  .OurWorkSection > .workContainer > .imgMainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 13.78125rem;\n    width: 22.96875rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgMainContainer > img {\n      width: 22.96875rem;\n      min-height: 7.875rem;\n      height: 13.78125rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgMainContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.7875rem 1.4rem; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgHeading {\n        font-size: 1.4rem;\n        font-weight: 500; }\n      .OurWorkSection > .workContainer > .imgMainContainer > .imgContent > .imgSubHeading {\n        font-size: 1.05rem;\n        font-weight: 300; }\n  .OurWorkSection > .workContainer > .imgContainer {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    overflow: hidden;\n    min-height: 7.875rem;\n    width: 13.125rem;\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1); }\n    .OurWorkSection > .workContainer > .imgContainer > img {\n      width: 13.125rem;\n      min-height: 7.875rem;\n      height: 7.875rem;\n      object-fit: cover;\n      margin: 0; }\n    .OurWorkSection > .workContainer > .imgContainer > .imgContent {\n      display: flex;\n      flex-direction: column;\n      padding: 0.45rem 0.8rem; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgHeading {\n        font-size: 0.8rem;\n        font-weight: 500; }\n      .OurWorkSection > .workContainer > .imgContainer > .imgContent > .imgSubHeading {\n        font-size: 0.6rem;\n        font-weight: 300; }\n", ""]);



/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(22);

// CONCATENATED MODULE: ./src/app/components/home/sections/Main.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Main_Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("section", {
        className: "MainSection"
      }, react_default.a.createElement("h1", null, "let\u2019s build a ", react_default.a.createElement("span", {
        className: "orangeText"
      }, "society"), " with skilled individuals"), react_default.a.createElement("p", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "Utthan"), " works to build this society of our dreams"), react_default.a.createElement("span", null, react_default.a.createElement("button", {
        className: "donate"
      }, "Donate"), react_default.a.createElement("button", {
        className: "learnmore"
      }, "Learn More")));
    }
  }]);

  return Main;
}(react["Component"]);

/* harmony default export */ var sections_Main = (Main_Main);
// EXTERNAL MODULE: ./src/app/images/arrow-right.svg
var arrow_right = __webpack_require__(8);
var arrow_right_default = /*#__PURE__*/__webpack_require__.n(arrow_right);

// CONCATENATED MODULE: ./src/app/components/home/sections/AboutUs.js
function AboutUs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AboutUs_typeof = function _typeof(obj) { return typeof obj; }; } else { AboutUs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AboutUs_typeof(obj); }

function AboutUs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AboutUs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AboutUs_createClass(Constructor, protoProps, staticProps) { if (protoProps) AboutUs_defineProperties(Constructor.prototype, protoProps); if (staticProps) AboutUs_defineProperties(Constructor, staticProps); return Constructor; }

function AboutUs_possibleConstructorReturn(self, call) { if (call && (AboutUs_typeof(call) === "object" || typeof call === "function")) { return call; } return AboutUs_assertThisInitialized(self); }

function AboutUs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AboutUs_getPrototypeOf(o) { AboutUs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AboutUs_getPrototypeOf(o); }

function AboutUs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AboutUs_setPrototypeOf(subClass, superClass); }

function AboutUs_setPrototypeOf(o, p) { AboutUs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AboutUs_setPrototypeOf(o, p); }




var AboutUs_AboutUs =
/*#__PURE__*/
function (_Component) {
  AboutUs_inherits(AboutUs, _Component);

  function AboutUs() {
    AboutUs_classCallCheck(this, AboutUs);

    return AboutUs_possibleConstructorReturn(this, AboutUs_getPrototypeOf(AboutUs).apply(this, arguments));
  }

  AboutUs_createClass(AboutUs, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("section", {
        className: "AboutUsSection"
      }, react_default.a.createElement("h1", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "the"), " challenge"), react_default.a.createElement("p", null, "We believe that society can only thrive when every individual is given a chance to contribute. However, due to issues such as poverty and umeployment, a part of society is left out. The rural areas are currently in despair, and the ongoing solutions aren\u2019t just enough."), react_default.a.createElement("p", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "Utthan"), " is an NGO which works to enhance the current scenario.", " "), react_default.a.createElement("button", {
        className: "viewMore"
      }, "view more", react_default.a.createElement("img", {
        src: arrow_right_default.a
      })));
    }
  }]);

  return AboutUs;
}(react["Component"]);

/* harmony default export */ var sections_AboutUs = (AboutUs_AboutUs);
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

  function Donate() {
    Donate_classCallCheck(this, Donate);

    return Donate_possibleConstructorReturn(this, Donate_getPrototypeOf(Donate).apply(this, arguments));
  }

  Donate_createClass(Donate, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("section", {
        className: "DonateSection"
      }, "hi");
    }
  }]);

  return Donate;
}(react["Component"]);

/* harmony default export */ var sections_Donate = (Donate_Donate);
// EXTERNAL MODULE: ./src/app/images/HomeBG.png
var HomeBG = __webpack_require__(6);
var HomeBG_default = /*#__PURE__*/__webpack_require__.n(HomeBG);

// CONCATENATED MODULE: ./src/app/components/home/sections/OurWork.js
function OurWork_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OurWork_typeof = function _typeof(obj) { return typeof obj; }; } else { OurWork_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OurWork_typeof(obj); }

function OurWork_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OurWork_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OurWork_createClass(Constructor, protoProps, staticProps) { if (protoProps) OurWork_defineProperties(Constructor.prototype, protoProps); if (staticProps) OurWork_defineProperties(Constructor, staticProps); return Constructor; }

function OurWork_possibleConstructorReturn(self, call) { if (call && (OurWork_typeof(call) === "object" || typeof call === "function")) { return call; } return OurWork_assertThisInitialized(self); }

function OurWork_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OurWork_getPrototypeOf(o) { OurWork_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OurWork_getPrototypeOf(o); }

function OurWork_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OurWork_setPrototypeOf(subClass, superClass); }

function OurWork_setPrototypeOf(o, p) { OurWork_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OurWork_setPrototypeOf(o, p); }





var OurWork_OurWork =
/*#__PURE__*/
function (_Component) {
  OurWork_inherits(OurWork, _Component);

  function OurWork() {
    OurWork_classCallCheck(this, OurWork);

    return OurWork_possibleConstructorReturn(this, OurWork_getPrototypeOf(OurWork).apply(this, arguments));
  }

  OurWork_createClass(OurWork, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("section", {
        className: "OurWorkSection"
      }, react_default.a.createElement("h1", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "the"), " mission"), react_default.a.createElement("p", null, react_default.a.createElement("span", {
        className: "orangeText"
      }, "Utthan"), " strives to deliver facilites at the doorstep of these people. Our primary aim is to teach them different skills. Later we collaborate with different sectors to find them jobs. We also organise session to spread awareness and education"), react_default.a.createElement("div", {
        className: "workContainer"
      }, react_default.a.createElement("div", {
        className: "imgMainContainer"
      }, react_default.a.createElement("img", {
        src: HomeBG_default.a
      }), react_default.a.createElement("span", {
        className: "imgContent"
      }, react_default.a.createElement("span", {
        className: "imgHeading"
      }, "Stiching workshop in Bareily"), react_default.a.createElement("span", {
        className: "imgSubHeading"
      }, " March 2, 2019"))), react_default.a.createElement("div", {
        className: "imgContainer"
      }, react_default.a.createElement("img", {
        src: HomeBG_default.a
      })), react_default.a.createElement("div", {
        className: "imgContainer"
      }, react_default.a.createElement("img", {
        src: HomeBG_default.a
      })), react_default.a.createElement("div", {
        className: "imgContainer"
      }, react_default.a.createElement("img", {
        src: HomeBG_default.a
      })), react_default.a.createElement("div", {
        className: "imgContainer"
      }, react_default.a.createElement("img", {
        src: HomeBG_default.a
      })), react_default.a.createElement("button", {
        className: "viewMore"
      }, "view more", react_default.a.createElement("img", {
        src: arrow_right_default.a
      }))));
    }
  }]);

  return OurWork;
}(react["Component"]);

/* harmony default export */ var sections_OurWork = (OurWork_OurWork);
// CONCATENATED MODULE: ./src/app/components/home/sections/index.js




/* harmony default export */ var sections = ({
  Main: sections_Main,
  AboutUs: sections_AboutUs,
  Donate: sections_Donate,
  OurWork: sections_OurWork
});
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
      }, react_default.a.createElement(sections.OurWork, null));
    }
  }]);

  return Home;
}(react["Component"]);

/* harmony default export */ var home_Home = (Home_Home);
// EXTERNAL MODULE: ./node_modules/offline-plugin/runtime.js
var runtime = __webpack_require__(16);

// EXTERNAL MODULE: ./src/app/styles/main.scss
var main = __webpack_require__(27);

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

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54306fbd36a21d268eacd1613702188f.png";

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMTJIMjAiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDZMMjAgMTJMMTQgMTgiIHN0cm9rZT0iI0ZGOUI0MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ })

/******/ });