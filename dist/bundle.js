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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nwindow.onload = function () {\n  var canvasWrapper = document.querySelector(\".canvas-wrapper\");\n  drawPolygon(canvasWrapper);\n  drawFiveStar(canvasWrapper);\n  drawCagePalette(canvasWrapper);\n  drawGradientPalette(canvasWrapper);\n};\nfunction createEle(canvasWrapper) {\n  var canvas = document.createElement('canvas');\n  canvas.setAttribute('width', '200');\n  canvas.setAttribute('height', '150');\n  canvas.style.border = '1px dashed gray';\n  canvasWrapper.appendChild(canvas);\n  return canvas;\n}\nfunction drawPolygon(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  canvas.setAttribute('id', 'canvas1');\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createPolygon)(ctx, 3, 100, 75, 50);\n  ctx.fillStyle = \"HotPink\";\n  ctx.fill();\n}\nfunction drawFiveStar(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  canvas.setAttribute('id', 'canvas2');\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createFiveStar)(ctx);\n}\nfunction drawCagePalette(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  canvas.setAttribute('id', 'canvas3');\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createCagePalette)(ctx);\n}\nfunction drawGradientPalette(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  canvas.setAttribute('id', 'canvas4');\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createGradientPalette)(ctx, canvas.height);\n}\n\n//# sourceURL=webpack://canvas-utils/./src/index.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCagePalette\": () => (/* binding */ createCagePalette),\n/* harmony export */   \"createFiveStar\": () => (/* binding */ createFiveStar),\n/* harmony export */   \"createGradientPalette\": () => (/* binding */ createGradientPalette),\n/* harmony export */   \"createPolygon\": () => (/* binding */ createPolygon)\n/* harmony export */ });\n// 绘制正多边形\nvar createPolygon = function createPolygon(ctx, n, dx, dy, size) {\n  ctx.beginPath();\n  var degree = 2 * Math.PI / n;\n  for (var i = 0; i < n; i++) {\n    var x = Math.cos(i * degree);\n    var y = Math.sin(i * degree);\n    ctx.lineTo(x * size + dx, y * size + dy);\n  }\n  ctx.closePath();\n};\n\n// 绘制五角星\nvar createFiveStar = function createFiveStar(ctx) {\n  ctx.beginPath();\n  for (var i = 0; i < 5; i++) {\n    ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 100, -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 100);\n    ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 100, -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 100);\n  }\n  ctx.closePath();\n  ctx.stroke();\n};\n\n// 绘制方格调色板\nvar createCagePalette = function createCagePalette(ctx) {\n  for (var i = 0; i < 6; i++) {\n    for (var j = 0; j < 6; j++) {\n      ctx.fillStyle = \"rgb(\".concat(Math.floor(255 - 42.5 * i), \",\").concat(Math.floor(255 - 42.5 * j), \",0)\");\n      ctx.fillRect(j * 25, i * 25, 25, 25);\n    }\n  }\n};\n\n// 绘制渐变调色板\nvar createGradientPalette = function createGradientPalette(ctx, height) {\n  var r = 255,\n    g = 0,\n    b = 0;\n  for (var i = 0; i < 150; i++) {\n    if (i < 25) {\n      g += 10;\n    } else if (i > 25 && i < 50) {\n      r -= 10;\n    } else if (i > 50 && i < 75) {\n      g -= 10;\n      b += 10;\n    } else if (i >= 75 && i < 100) {\n      r += 10;\n    } else {\n      b -= 10;\n    }\n    ctx.fillStyle = \"rgb(\".concat(r, \",\").concat(g, \",\").concat(b, \")\");\n    ctx.fillRect(3 * i, 0, 3, height);\n  }\n};\n\n//# sourceURL=webpack://canvas-utils/./src/utils/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;