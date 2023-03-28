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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nwindow.onload = function () {\n  var canvasWrapper = document.querySelector(\".canvas-wrapper\");\n  drawBrightnessImage(canvasWrapper);\n  drawGrayScaleImage(canvasWrapper);\n  drawAverageImage(canvasWrapper);\n  drawReverseImage(canvasWrapper);\n  drawRainbow(canvasWrapper);\n  drawGraph(canvasWrapper);\n  drawPattern(canvasWrapper);\n  drawImage(canvasWrapper);\n  drawPolygon(canvasWrapper);\n  drawFiveStar(canvasWrapper);\n  drawCagePalette(canvasWrapper);\n  drawGradientPalette(canvasWrapper);\n  drawRound(canvasWrapper);\n  drawRoundedRect(canvasWrapper);\n  drawLeaf(canvasWrapper);\n  drawSector(canvasWrapper);\n};\n\n// 图片亮度效果\nfunction drawBrightnessImage(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.src = 'src/static/images/bvb.png';\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0);\n    var imgData = ctx.getImageData(0, 0, 120, 120);\n    var data = imgData.data;\n    for (var i = 0; i < data.length; i += 4) {\n      var brightness = 100;\n      data[i + 0] += brightness;\n      data[i + 1] += brightness;\n      data[i + 2] += brightness;\n    }\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\n// 图片黑白效果（加权）\nfunction drawGrayScaleImage(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.src = 'src/static/images/bvb.png';\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0);\n    var imgData = ctx.getImageData(0, 0, 150, 120);\n    var data = imgData.data;\n    for (var i = 0; i < data.length; i += 4) {\n      var grayscale = data[i] * 0.3 + data[i] * 0.6 + data[i + 2] * 0.1;\n      data[i + 0] = grayscale;\n      data[i + 1] = grayscale;\n      data[i + 2] = grayscale;\n    }\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\n// 图片黑白效果（平均）\nfunction drawAverageImage(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.src = 'src/static/images/bvb.png';\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0);\n    var imgData = ctx.getImageData(0, 0, 150, 120);\n    var data = imgData.data;\n    for (var i = 0; i < data.length; i += 4) {\n      var average = (data[i + 0] + data[i + 1] + data[i + 2] + data[i + 3]) / 3;\n      data[i + 0] = average;\n      data[i + 1] = average;\n      data[i + 2] = average;\n    }\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\n// 图片反转效果\nfunction drawReverseImage(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.src = 'src/static/images/bvb.png';\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0);\n    var imgData = ctx.getImageData(0, 0, 150, 120);\n    var data = imgData.data;\n    for (var i = 0; i < data.length; i += 4) {\n      data[i + 0] = 255 - data[i + 0];\n      data[i + 1] = 255 - data[i + 1];\n      data[i + 2] = 255 - data[i + 2];\n    }\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\n// 绘制彩虹\nfunction drawRainbow(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];\n  ctx.lineWidth = 12;\n  ctx.translate(50, 0);\n  for (var i = 0, len = colors.length; i < len; i++) {\n    ctx.translate(0, 10);\n    ctx.strokeStyle = colors[i];\n    ctx.beginPath();\n    ctx.arc(50, 100, 100, 0, 180 * Math.PI / 180, true);\n    ctx.stroke();\n  }\n}\n\n// 绘制变形图案\nfunction drawGraph(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  ctx.translate(150, 0);\n  ctx.fillStyle = 'rgba(255,0,0,0.25)';\n  for (var i = 0; i < 50; i++) {\n    ctx.translate(25, 25);\n    ctx.scale(0.95, 0.95);\n    ctx.rotate(Math.PI / 10);\n    ctx.fillRect(0, 0, 100, 50);\n  }\n}\n\n// 平铺canvas图案\nfunction drawPattern(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var bgCanvas = document.createElement('canvas');\n  bgCanvas.width = 20;\n  bgCanvas.height = 20;\n  var bgCtx = bgCanvas.getContext('2d');\n  bgCtx.beginPath();\n  bgCtx.arc(10, 10, 10, 0, 360 * Math.PI / 180, true);\n  bgCtx.closePath();\n  bgCtx.fillStyle = 'HotPink';\n  bgCtx.fill();\n  var pattern = ctx.createPattern(bgCanvas, 'repeat');\n  ctx.fillStyle = pattern;\n  ctx.fillRect(0, 0, 200, 200);\n}\n\n// 绘制图片\nfunction drawImage(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  var image = new Image();\n  image.src = \"src/static/images/bvb.png\";\n  image.onload = function () {\n    ctx.drawImage(image, 0, 0, 200, 150, 50, 25, 100, 100);\n  };\n}\n\n// 绘制正多边形\nfunction drawPolygon(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createPolygon)(ctx, 3, 100, 75, 50);\n  ctx.fillStyle = \"HotPink\";\n  ctx.fill();\n}\n\n// 绘制五角星\nfunction drawFiveStar(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createFiveStar)(ctx);\n}\n\n// 绘制方格调色板\nfunction drawCagePalette(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createCagePalette)(ctx);\n}\n\n// 绘制渐变调色板\nfunction drawGradientPalette(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createGradientPalette)(ctx, canvas.height);\n}\n\n// 绘制圆形\nfunction drawRound(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  // 半圆\n  ctx.beginPath();\n  ctx.arc(80, 80, 50, 0, 180 * Math.PI / 180, true);\n  ctx.closePath();\n  ctx.fillStyle = \"HotPink\";\n  ctx.fill();\n  // 整圆\n  ctx.beginPath();\n  ctx.arc(120, 80, 50, 0, 360 * Math.PI / 180, true);\n  ctx.closePath();\n  ctx.fillStyle = \"#9966ff\";\n  ctx.fill();\n}\n\n// 绘制圆角矩形\nfunction drawRoundedRect(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createRoundedRect)(ctx, 100, 100, 20, 20, 20);\n  ctx.fillStyle = \"HotPink\";\n  ctx.fill();\n}\n\n// 绘制N叶草\nfunction drawLeaf(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createLeaf)(ctx, 4, canvas.width / 2, canvas.height / 2, 20, 80);\n  ctx.fillStyle = \"#00ff99\";\n  ctx.fill();\n}\n\n// 绘制扇形\nfunction drawSector(canvasWrapper) {\n  var canvas = createEle(canvasWrapper);\n  var ctx = canvas.getContext('2d');\n  (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.createSector)(ctx, canvas.width / 2, canvas.height / 2, 50, 30, 120);\n  ctx.fillStyle = \"HotPink\";\n  ctx.fill();\n}\nfunction createEle(canvasWrapper) {\n  var canvas = document.createElement('canvas');\n  canvas.setAttribute('width', '200');\n  canvas.setAttribute('height', '150');\n  canvas.style.border = '1px dashed gray';\n  canvas.style.borderRadius = \"8px\";\n  canvasWrapper.appendChild(canvas);\n  return canvas;\n}\n\n//# sourceURL=webpack://canvas-utils/./src/index.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCagePalette\": () => (/* binding */ createCagePalette),\n/* harmony export */   \"createFiveStar\": () => (/* binding */ createFiveStar),\n/* harmony export */   \"createGradientPalette\": () => (/* binding */ createGradientPalette),\n/* harmony export */   \"createLeaf\": () => (/* binding */ createLeaf),\n/* harmony export */   \"createPolygon\": () => (/* binding */ createPolygon),\n/* harmony export */   \"createRoundedRect\": () => (/* binding */ createRoundedRect),\n/* harmony export */   \"createSector\": () => (/* binding */ createSector)\n/* harmony export */ });\n// 绘制正多边形\nvar createPolygon = function createPolygon(ctx, n, dx, dy, size) {\n  ctx.beginPath();\n  var degree = 2 * Math.PI / n;\n  for (var i = 0; i < n; i++) {\n    var x = Math.cos(i * degree);\n    var y = Math.sin(i * degree);\n    ctx.lineTo(x * size + dx, y * size + dy);\n  }\n  ctx.closePath();\n};\n\n// 绘制五角星\nvar createFiveStar = function createFiveStar(ctx) {\n  ctx.beginPath();\n  for (var i = 0; i < 5; i++) {\n    ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 100, -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 100);\n    ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 100, -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 100);\n  }\n  ctx.closePath();\n  ctx.stroke();\n};\n\n// 绘制方格调色板\nvar createCagePalette = function createCagePalette(ctx) {\n  for (var i = 0; i < 6; i++) {\n    for (var j = 0; j < 6; j++) {\n      ctx.fillStyle = \"rgb(\".concat(Math.floor(255 - 42.5 * i), \",\").concat(Math.floor(255 - 42.5 * j), \",0)\");\n      ctx.fillRect(j * 25, i * 25, 25, 25);\n    }\n  }\n};\n\n// 绘制渐变调色板\nvar createGradientPalette = function createGradientPalette(ctx, height) {\n  var r = 255,\n    g = 0,\n    b = 0;\n  for (var i = 0; i < 150; i++) {\n    if (i < 25) {\n      g += 10;\n    } else if (i > 25 && i < 50) {\n      r -= 10;\n    } else if (i > 50 && i < 75) {\n      g -= 10;\n      b += 10;\n    } else if (i >= 75 && i < 100) {\n      r += 10;\n    } else {\n      b -= 10;\n    }\n    ctx.fillStyle = \"rgb(\".concat(r, \",\").concat(g, \",\").concat(b, \")\");\n    ctx.fillRect(3 * i, 0, 3, height);\n  }\n};\n\n// 绘制圆角矩形\nvar createRoundedRect = function createRoundedRect(ctx, width, height, r, offsetX, offsetY) {\n  ctx.beginPath();\n  ctx.moveTo(offsetX + r, offsetY);\n  ctx.lineTo(offsetX + width - r, offsetY);\n  ctx.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);\n  ctx.lineTo(offsetX + width, offsetY + height - r);\n  ctx.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);\n  ctx.lineTo(offsetX + r, offsetY + height);\n  ctx.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);\n  ctx.lineTo(offsetX, offsetY + r);\n  ctx.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);\n  ctx.closePath();\n};\n\n// 绘制N叶草\nvar createLeaf = function createLeaf(ctx, n, dx, dy, size, length) {\n  ctx.beginPath();\n  ctx.moveTo(dx, dy + size);\n  var degree = 2 * Math.PI / n;\n  for (var i = 1; i < n + 1; i++) {\n    // 控制点坐标\n    var cx1 = Math.sin((i - 1) * degree) * length + dx;\n    var cy1 = Math.cos((i - 1) * degree) * length + dy;\n    var cx2 = Math.sin(i * degree) * length + dx;\n    var cy2 = Math.cos(i * degree) * length + dy;\n\n    // 结束点坐标\n    var x = Math.sin(i * degree) * size + dx;\n    var y = Math.cos(i * degree) * size + dy;\n    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);\n  }\n  ctx.closePath();\n};\n\n// 绘制扇形\nvar createSector = function createSector(ctx, x, y, r, angle1, angle2) {\n  ctx.beginPath();\n  ctx.moveTo(x, y);\n  ctx.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false);\n  ctx.closePath();\n};\n\n//# sourceURL=webpack://canvas-utils/./src/utils/util.js?");

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