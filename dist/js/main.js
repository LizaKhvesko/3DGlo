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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('5 march 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const main = document.querySelector('main');\n    const menu = document.querySelector('menu');\n    const arrowDown = document.querySelector('main>a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    }\n\n    const scroll = (element) => {\n        const id = element.getAttribute('href');\n        document.querySelector(id).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    }\n\n    main.addEventListener('click', (e) => {\n        if (e.target.closest('.menu')) {\n            handleMenu();\n        } else if (e.target.closest('a')) {\n            e.preventDefault();\n            scroll(arrowDown) \n        }\n    });\n\n    menu.addEventListener('click', (e) => {\n        if(e.target.matches('ul>li>a')) {\n           let link = e.target.closest('a');\n           e.preventDefault();\n           scroll(link);\n           handleMenu();\n        } else if (e.target.closest('.close-btn')) {\n            e.preventDefault();\n            handleMenu();\n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n   const buttons = document.querySelectorAll('.popup-btn');\n   const modal = document.querySelector('.popup');\n   const modalContent = document.querySelector('.popup-content')\n   let animation;\n   let count = -70;\n   let widthScreen = window.screen.width;\n\n   function appear () {\n        count++\n        animation = requestAnimationFrame(appear);\n        if (count > 20) {\n        cancelAnimationFrame(animation)\n      } else {\n        modalContent.style.top= count * 6 + 'px'\n      }  \n   }\n\n   buttons.forEach(btn => {\n       btn.addEventListener('click', () => {\n           if(widthScreen < 768) {\n              modal.style.display = 'block';\n           } else {\n              modal.style.display = 'block';\n              appear();\n           }\n       })\n   })\n   \n   modal.addEventListener('click', (e) => {\n      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n         modal.style.display = 'none';\n         count = -70;\n      }\n   })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    const tabContent = document.querySelectorAll('.service-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n            tabs.forEach((tab, index) => {\n                if(tab === tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n            })\n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    //получили элементы\n    const timerHours = document.querySelector('#timer-hours');\n    const timerMinutes = document.querySelector('#timer-minutes');\n    const timerSeconds = document.querySelector('#timer-seconds');\n\n    //получили цифры по времени \n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        if (timeRemaining < 0) {\n            timeRemaining = 0;\n            hours = 0;\n            minutes = 0;\n            seconds = 0;\n        }\n\n        return {timeRemaining, hours, minutes, seconds}\n    }\n\n    //занесли данные на страницу\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n        \n        getTime.hours < 10 ? timerHours.textContent = '0' + getTime.hours : timerHours.textContent = getTime.hours;\n        getTime.minutes < 10 ?  timerMinutes.textContent = '0' + getTime.minutes : timerMinutes.textContent = getTime.minutes;\n        getTime.seconds < 10 ? timerSeconds.textContent = '0' + getTime.seconds : timerSeconds.textContent = getTime.seconds;\n    }\n    //запустили таймер\n    const interval = () => {\n        let intervalId;\n        let getTime = getTimeRemaining();\n        updateClock();\n        if(getTime.timeRemaining > 0) {\n            intervalId = setInterval(updateClock, 1000);\n        } else {\n            clearInterval(intervalId)\n        }\n    }\n    interval();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n    const calcItemsNumber = document.querySelectorAll('input.calc-item');\n    const inputsText = document.querySelectorAll('input[id*=name], input.mess');\n    const emails = document.querySelectorAll('input[type=\"email\"]');\n    const tels = document.querySelectorAll('input[type=\"tel\"]');\n\n    function noMoreSpace(expr) {\n        let reg = /\\s+/g;\n        expr.value = expr.value.replace(reg, ' ');\n        if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])){\n            expr.value = expr.value.trim();\n        }\n    }\n\n    function noMoreHyphen(expr) {\n        let reg = /\\-+/g;\n        expr.value = expr.value.replace(reg, '-');\n        if(reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {\n           expr.value = expr.value.replace(reg, ''); \n        }\n    }\n\n    function letters(expr) {\n        let regBig = /[А-Я]/;\n        let regSmall = /[а-я]/;\n        let arr = expr.value.split(' ');\n        let result = [];\n        arr.forEach(item => {\n            if(regSmall.test(item[0])){\n                item = item[0].toUpperCase() + item.slice(1).toLowerCase();\n            } else {\n                item = item;\n            }\n\n            if (regBig.test(item.slice(1))) {\n                item = item[0].toUpperCase() + item.slice(1).toLowerCase();\n            } else {\n                item = item;\n            }\n            result.push(item);\n            expr.value = result.join(' ');\n        })\n    }\n\n    calcItemsNumber.forEach(item => {\n        item.addEventListener('input', function(e) {\n            e.target.value = e.target.value.replace(/\\D/g, ''); \n        });\n    });\n\n    inputsText.forEach(item => {\n        item.addEventListener('input', function(e) {\n            e.target.value = e.target.value.replace(/[^а-яА-я\\s\\-]/g, '');   \n        })\n    })\n \n     inputsText.forEach(item => {\n        item.addEventListener('blur', function() {\n            noMoreSpace(item);\n            noMoreHyphen(item);\n            letters(item);\n        })\n    })\n\n    emails.forEach(item => {\n        item.addEventListener('input', function(e) {\n            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, '');\n        })\n    })\n\n    emails.forEach(item => {\n        item.addEventListener('blur', function() {\n            noMoreHyphen(item);\n        })\n    })\n\n    tels.forEach(item => {\n        item.addEventListener('input', function(e) {\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, '');\n        })\n    })\n\n    tels.forEach(item => {\n        item.addEventListener('blur', function(e) {\n           noMoreHyphen(item);\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;