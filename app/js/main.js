/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/libs/index.js":
/*!******************************!*\
  !*** ./src/js/libs/index.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/project/index.js":
/*!*********************************!*\
  !*** ./src/js/project/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/templates/index.js":
/*!***********************************!*\
  !*** ./src/js/templates/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/utils/_disable-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/utils/_disable-scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/utils/index.js");

var disableScroll = function disableScroll() {
  var pagePosition = window.scrollY;
  var paddingOffset = "".concat(window.innerWidth - _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.offsetWidth, "px");
  var fixBlocks = document.querySelectorAll('.fix-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = paddingOffset;
    });
  }
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.htmlEl.style.scrollBehavior = 'none';
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.style.paddingRight = paddingOffset;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.classList.add('disable-scroll');
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.dataset.position = pagePosition;
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./src/js/utils/_enable-scroll.js":
/*!****************************************!*\
  !*** ./src/js/utils/_enable-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/utils/index.js");

var enableScroll = function enableScroll() {
  var fixBlocks = document.querySelectorAll('.fix-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = '0';
    });
  }
  var pagePosition = parseInt(_index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.dataset.position, 10);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.style.paddingRight = '0';
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.style.top = 'auto';
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.classList.remove('disable-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _index_js__WEBPACK_IMPORTED_MODULE_0__.globalVars.bodyEl.removeAttribute('data-position');
};

/***/ }),

/***/ "./src/js/utils/_throttle.js":
/*!***********************************!*\
  !*** ./src/js/utils/_throttle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
var throttle = function throttle(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var isThrottled = false;
  var savedArgs = null;
  var savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};

/***/ }),

/***/ "./src/js/utils/_vars.js":
/*!*******************************!*\
  !*** ./src/js/utils/_vars.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalVars: () => (/* binding */ globalVars)
/* harmony export */ });
var globalVars = {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  focusEl: ['a[href]', 'input', 'select', 'textarea', 'button', 'iframe', '[contenteditable]', '[tabindex]:not([tabindex^="-"])']
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* reexport safe */ _disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll),
/* harmony export */   enableScroll: () => (/* reexport safe */ _enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll),
/* harmony export */   globalVars: () => (/* reexport safe */ _vars_js__WEBPACK_IMPORTED_MODULE_3__.globalVars),
/* harmony export */   throttle: () => (/* reexport safe */ _throttle_js__WEBPACK_IMPORTED_MODULE_2__.throttle)
/* harmony export */ });
/* harmony import */ var _disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_disable-scroll.js */ "./src/js/utils/_disable-scroll.js");
/* harmony import */ var _enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_enable-scroll.js */ "./src/js/utils/_enable-scroll.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_throttle.js */ "./src/js/utils/_throttle.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_vars.js */ "./src/js/utils/_vars.js");




// import { fixFullheight } from './_fix-fullheight.js';
// import { getHeaderHeight } from './_get-header-height.js';
// import { mobileCheck } from './_mobile-check.js';

// fixFullheight();
// getHeaderHeight();
// mobileCheck();

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/index.js */ "./src/js/libs/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index.js */ "./src/js/utils/index.js");
/* harmony import */ var _templates_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/index.js */ "./src/js/templates/index.js");
/* harmony import */ var _project_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/index.js */ "./src/js/project/index.js");




console.log('gulp');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map