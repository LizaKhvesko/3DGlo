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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('5 march 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item');\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block');\n    const calcType = document.querySelector('.calc-type');\n    const calcSquare= document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n    const total = document.querySelector('#total');\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n        const calcSquareValue = calcSquare.value;\n\n        let totalValue = 0;\n        let calcCountValue = 1;\n        let calcDayValue = 1;\n\n        if (calcCount.value > 1) {\n            calcCountValue +=  +calcCount.value / 10\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2;\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5;\n        }\n        \n        if(calcTypeValue && calcSquareValue) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n        } else {\n            totalValue = 0;\n        }\n\n        let diff = totalValue - +total.textContent;\n        let start = +total.textContent;\n         (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                  duration: 1000,\n                  timing(timeFraction) {\n                     return timeFraction;\n                  },\n                  draw(progress) {\n                    total.textContent = start + Math.round(diff * progress)\n                  }\n               });\n    }\n\n    calcBlock.addEventListener('change', (e) => {\n        if (e.target === calcType || e.target === calcSquare ||\n            e.target === calcCount || e.target === calcDay) {\n                countCalc();\n            }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = function ({timing, draw, duration}) {\n\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n\n  });\n}\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const body = document.querySelector('body');\n    const menu = document.querySelector('menu');\n    const arrowDown = document.querySelector('main>a');\n    const arrowDownImg = document.querySelector('main>a>img');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    }\n\n    const scroll = (element) => {\n        const id = element.getAttribute('href');\n        document.querySelector(id).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    }\n\n    body.addEventListener('click', (e) => {\n       if (e.target.closest('.menu')) {\n            handleMenu();\n        } else if (e.target === arrowDownImg) {\n            e.preventDefault();\n            scroll(arrowDown)\n        } else if (e.target.matches('menu>ul>li>a')) {\n           let link = e.target.closest('a');\n           e.preventDefault();\n           scroll(link);\n           handleMenu();\n        } else if (e.target.closest('.close-btn')) {\n           e.preventDefault();\n           handleMenu();\n        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {\n            menu.classList.remove('active-menu');\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n   const buttons = document.querySelectorAll('.popup-btn');\n   const modal = document.querySelector('.popup');\n   const modalContent = document.querySelector('.popup-content')\n   let widthScreen = window.screen.width;\n\n   buttons.forEach(btn => {\n       btn.addEventListener('click', () => {\n           if(widthScreen < 768) {\n              modal.style.display = 'block';\n           } else {\n              modal.style.display = 'block';\n                 (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                  duration: 2000,\n                  timing(timeFraction) {\n                     return timeFraction;\n                  },\n                  draw(progress) {\n                     modalContent.style.left = (40 * progress) + '%' \n                  }\n               });\n              }\n       })\n   })\n   \n   modal.addEventListener('click', (e) => {\n      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n         modal.style.display = 'none';\n      }\n   })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classSlider, classSlides, activeSlideClass = 'portfolio-item-active', activeDotClass = 'dot-active') => {\n\n    if (!document.querySelector(classSlider) || !document.querySelectorAll(classSlides)) {\n        return\n    } else {\n        const sliderBlock = document.querySelector(classSlider);\n        const slides = document.querySelectorAll(classSlides);\n        let currentSlide = 0;\n        let timeInterval = 2000;\n        let interval;\n        let dots;\n\n        const getDot = () => {\n            let portfolioDots = document.createElement('ul');\n            portfolioDots.classList.add('portfolio-dots');\n            portfolioDots.innerHTML = '';\n            for (let i = 0; i < slides.length; i++) {\n                portfolioDots.innerHTML += '<li class=\"dot\"></li>'; \n            }\n            sliderBlock.append(portfolioDots);\n            dots = document.querySelectorAll('.dot');\n            dots[0].classList.add(activeDotClass)\n        }\n\n        const prevSlide = (elements, index, strClass) => {\n            elements[index].classList.remove(strClass);\n        };\n\n        const nextSlide = (elements, index, strClass) => {\n    ;       elements[index].classList.add(strClass);\n        }\n\n        const autoSlide = () => {\n            prevSlide(slides, currentSlide, activeSlideClass);\n            prevSlide(dots, currentSlide, activeDotClass);\n            currentSlide++\n            if(currentSlide >= slides.length) {\n                currentSlide = 0;\n            }\n            nextSlide(slides, currentSlide, activeSlideClass);\n            nextSlide(dots, currentSlide, activeDotClass);\n        };\n\n        const startSlide = (timer = 1500) => {\n            interval = setInterval(autoSlide, timer);\n        };\n\n        const stopSlide = () => {\n            clearInterval(interval);\n        }\n\n        sliderBlock.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            if(!e.target.matches('.dot, .portfolio-btn')) {\n                return;\n            }\n\n            prevSlide(slides, currentSlide, activeSlideClass);\n            prevSlide(dots, currentSlide, activeDotClass);\n\n            if(e.target.matches('#arrow-right')) {\n            currentSlide++ \n            } else if (e.target.matches('#arrow-left')) {\n                currentSlide--\n            } else if (e.target.classList.contains('dot')) {\n                dots.forEach((dot, index) => {\n                    if(e.target === dot) {\n                    currentSlide = index; \n                    }\n                })\n            }\n\n            if(currentSlide >= slides.length) {\n                currentSlide = 0;\n            }\n\n            if(currentSlide < 0) {\n                currentSlide = slides.length - 1;\n            }\n\n            nextSlide(slides, currentSlide, activeSlideClass);\n            nextSlide(dots, currentSlide, activeDotClass);\n        })\n\n        sliderBlock.addEventListener('mouseenter', (e) => {\n            if(e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide(); \n            }\n        }, true);\n\n        sliderBlock.addEventListener('mouseleave', (e) => {\n            if(e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval); \n            }\n        }, true)\n\n        getDot();\n        startSlide(timeInterval);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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