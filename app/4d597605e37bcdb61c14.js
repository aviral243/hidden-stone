(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/9c66bab167a73034d7e85ff6d2fb9333.woff";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/f79fdb7f94b6c44fa464aaf878f986a4.woff2";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/5e010e7d5a21e9105d6073ceec643520.woff";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/620aadb8da576bcc887bc711463d99d5.woff2";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/12a77593f1a1e9f8ecddb8bfdaa4e836.woff";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/72bb03785e860c75618d1d7cdd478f24.woff2";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/0b6ba4ad52519bf0a2001b0004f62d03.woff";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/8a4beeaa789b8d5bbeb7742e7e7ca64e.woff2";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/85650919c1d44b3c6ba44e987de12d8c.woff";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/85bf84b45af1babcee374acae66a9ca3.woff2";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/95ce76bd4b86c78903abba2b749e7f23.woff";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/2011437f9a6e713e01b4e8871bf39f3e.woff2";

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/offline-plugin/runtime.js
var runtime = __webpack_require__(20);

// EXTERNAL MODULE: ./src/app/styles/main.scss
var main = __webpack_require__(30);

// CONCATENATED MODULE: ./src/app/components/navbar/NavBar.js



var NavBar_NavBar = function NavBar() {
  return react_default.a.createElement("ul", {
    className: "NavBarContainer"
  }, react_default.a.createElement("li", {
    className: "NavItem"
  }, react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    to: "/",
    exact: true
  }, "HOME")), react_default.a.createElement("li", {
    className: "NavItem"
  }, react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    to: "/aboutus",
    exact: true
  }, "WHO WE ARE")), react_default.a.createElement("li", {
    className: "NavItem"
  }, react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    to: "/ourwork",
    exact: true
  }, "WHAT WE DO")), react_default.a.createElement("li", {
    className: "NavItem"
  }, react_default.a.createElement(react_router_dom["c" /* NavLink */], {
    to: "/donate",
    exact: true
  }, "JOIN THE JOURNEY")));
};

/* harmony default export */ var navbar_NavBar = (NavBar_NavBar);
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
var arrow_right = __webpack_require__(10);
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
// EXTERNAL MODULE: ./src/app/images/HomeBG.png
var HomeBG = __webpack_require__(8);
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
// EXTERNAL MODULE: ./src/app/images/chevron-right.svg
var chevron_right = __webpack_require__(13);
var chevron_right_default = /*#__PURE__*/__webpack_require__.n(chevron_right);

// EXTERNAL MODULE: ./src/app/images/rupee.svg
var rupee = __webpack_require__(11);
var rupee_default = /*#__PURE__*/__webpack_require__.n(rupee);

// CONCATENATED MODULE: ./src/app/components/home/sections/schemes/defaultSchemes.js
var defaultSchemes = [{
  scheme: "Bronze",
  amount: "1000",
  duration: "1 year",
  selected: true
}, {
  scheme: "Silver",
  amount: "10000",
  duration: "2 year",
  selected: false
}, {
  scheme: "Gold",
  amount: "25000",
  duration: "5 year",
  selected: false
}, {
  scheme: "Diamond",
  amount: "50000",
  duration: "10 year",
  selected: false
}];
// CONCATENATED MODULE: ./src/app/components/home/sections/schemes/Schemes.js





var Schemes_Schemes = function Schemes() {
  return react_default.a.createElement("div", null, defaultSchemes.map(function (schemeDetails, index) {
    return react_default.a.createElement("span", {
      className: "donateSchemeContainer",
      key: index
    }, react_default.a.createElement("input", {
      type: "radio",
      id: index,
      name: "scheme",
      value: index,
      defaultChecked: schemeDetails.selected
    }), react_default.a.createElement("span", {
      className: "donateSchemeContainerContent"
    }, react_default.a.createElement("label", {
      className: "donateSchemeName",
      htmlFor: index
    }, react_default.a.createElement("img", {
      src: chevron_right_default.a
    }), schemeDetails.scheme), react_default.a.createElement("div", {
      className: "donateSchemeContent"
    }, react_default.a.createElement("button", {
      className: "donate"
    }, "Donate"), react_default.a.createElement("span", null, react_default.a.createElement("label", {
      className: "schemeContentAmount"
    }, "Amount to be paid"), react_default.a.createElement("label", null, react_default.a.createElement("img", {
      src: rupee_default.a
    }), schemeDetails.amount)), react_default.a.createElement("span", null, react_default.a.createElement("label", {
      className: "schemeContentDuration"
    }, "Membership Tenure"), schemeDetails.duration))), react_default.a.createElement("hr", null));
  }));
};

/* harmony default export */ var schemes_Schemes = (Schemes_Schemes);
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
        className: "verticalLine"
      }), react_default.a.createElement("div", {
        className: "donateAmountContainer"
      }, react_default.a.createElement("p", null, "Or donate an amount of your choice :)"), react_default.a.createElement("form", {
        className: "donateAmount"
      }, react_default.a.createElement("input", {
        type: "number",
        min: "0",
        max: "99999999",
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
// CONCATENATED MODULE: ./src/app/components/error404/Error404.js



var Error404_Error404 = function Error404() {
  return react_default.a.createElement("div", {
    className: "Error404Section"
  }, react_default.a.createElement("h1", null, react_default.a.createElement("span", {
    className: "orangeText"
  }, "Oops!!!"), " 404"), react_default.a.createElement("p", null, "Page not found.", react_default.a.createElement("br", null), "You are probably in a wrong place."), react_default.a.createElement("p", null, "Go back to", react_default.a.createElement("span", {
    className: "orangeText"
  }, " Home"), "."), react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: "goHome",
    to: "/"
  }, "Home"));
};

/* harmony default export */ var error404_Error404 = (Error404_Error404);
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



 //import Home from "./components/home/Home";


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
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement(navbar_NavBar, null), react_default.a.createElement(react_router["c" /* Switch */], null, react_default.a.createElement(react_router["a" /* Route */], {
        path: "/",
        exact: true,
        component: sections_Main
      }), react_default.a.createElement(react_router["a" /* Route */], {
        path: "/aboutus",
        component: sections_AboutUs
      }), react_default.a.createElement(react_router["a" /* Route */], {
        path: "/ourwork",
        component: sections_OurWork
      }), react_default.a.createElement(react_router["a" /* Route */], {
        path: "/donate",
        component: sections_Donate
      }), react_default.a.createElement(react_router["a" /* Route */], {
        component: error404_Error404
      })));
    }
  }]);

  return Index;
}(react_default.a.Component);

Object(react_dom["render"])(react_default.a.createElement(Index_Index, null), window.document.getElementById("app"));

/***/ })

}]);