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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push([4,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
// import './assets/img/_sprite.svg';


global.$ = global.jQuery = $;

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(__webpack_require__(18));
requireAll(__webpack_require__(31));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(15);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ic-arrow-right.svg": 19,
	"./ic-arrow-up.svg": 20,
	"./ic-call.svg": 21,
	"./ic-mail.svg": 22,
	"./ic-minus.svg": 23,
	"./ic-next.svg": 24,
	"./ic-person.svg": 25,
	"./ic-phone-bold.svg": 26,
	"./ic-phone.svg": 27,
	"./ic-plus.svg": 28,
	"./ic-prev.svg": 29,
	"./ic-tick.svg": 30
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-arrow-right-usage",
			viewBox: "0 0 7 14",
			url: "assets/sprites/" + "sprite.svg#ic-arrow-right",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-arrow-up-usage",
			viewBox: "0 0 14 8",
			url: "assets/sprites/" + "sprite.svg#ic-arrow-up",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-call-usage",
			viewBox: "0 0 384 384",
			url: "assets/sprites/" + "sprite.svg#ic-call",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-mail-usage",
			viewBox: "0 0 23 14",
			url: "assets/sprites/" + "sprite.svg#ic-mail",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-minus-usage",
			viewBox: "0 0 17 2",
			url: "assets/sprites/" + "sprite.svg#ic-minus",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-next-usage",
			viewBox: "0 0 24 65",
			url: "assets/sprites/" + "sprite.svg#ic-next",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-person-usage",
			viewBox: "0 0 24 24",
			url: "assets/sprites/" + "sprite.svg#ic-person",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-phone-bold-usage",
			viewBox: "0 0 22 22",
			url: "assets/sprites/" + "sprite.svg#ic-phone-bold",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-phone-usage",
			viewBox: "0 0 405.333 405.333",
			url: "assets/sprites/" + "sprite.svg#ic-phone",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-plus-usage",
			viewBox: "0 0 17 17",
			url: "assets/sprites/" + "sprite.svg#ic-plus",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-prev-usage",
			viewBox: "0 0 24 65",
			url: "assets/sprites/" + "sprite.svg#ic-prev",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-tick-usage",
			viewBox: "0 0 10 8",
			url: "assets/sprites/" + "sprite.svg#ic-tick",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ic-facebook.svg": 32,
	"./ic-in.svg": 33,
	"./ic-instagram.svg": 34,
	"./ic-ok.svg": 35,
	"./ic-twitter.svg": 36,
	"./ic-vk.svg": 37,
	"./ic-youtube.svg": 38
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-facebook-usage",
			viewBox: "0 0 34 34",
			url: "assets/sprites/" + "sprite.svg#ic-facebook",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-in-usage",
			viewBox: "0 0 455.731 455.731",
			url: "assets/sprites/" + "sprite.svg#ic-in",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-instagram-usage",
			viewBox: "0 0 512 512",
			url: "assets/sprites/" + "sprite.svg#ic-instagram",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-ok-usage",
			viewBox: "0 0 95.5 95.5",
			url: "assets/sprites/" + "sprite.svg#ic-ok",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-twitter-usage",
			viewBox: "0 0 34 34",
			url: "assets/sprites/" + "sprite.svg#ic-twitter",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-vk-usage",
			viewBox: "0 0 34 34",
			url: "assets/sprites/" + "sprite.svg#ic-vk",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
			id: "ic-youtube-usage",
			viewBox: "0 0 455.731 455.731",
			url: "assets/sprites/" + "sprite.svg#ic-youtube",
			toString: function () {
				return this.url;
			}
		}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/slick-slider/slick/slick.min.js
var slick_min = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/select2/dist/js/select2.js
var select2 = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js
var jquery_fancybox = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/inputmask/index.js
var inputmask = __webpack_require__(2);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);

// EXTERNAL MODULE: ./node_modules/readmore-js/readmore.min.js
var readmore_min = __webpack_require__(13);

// CONCATENATED MODULE: ./src/js/common.js
 // import 'bootstrap/js/dist/modal';







// CONCATENATED MODULE: ./src/js/index.js
 // Стрелка наверх

jquery_default()(window).on('scroll', function () {
	if (jquery_default()(this).scrollTop() > 300) {
		jquery_default()('.js-move-up').addClass('visible');
	} else {
		jquery_default()('.js-move-up').removeClass('visible');
	}
});
jquery_default()('.js-move-up').on('click', function () {
	jquery_default()('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
}); // top-slider

if (jquery_default()('.js-top-slider-img').length) {
	jquery_default()('.js-top-slider-img').slick({
		infinite: true,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				appendDots: jquery_default()('.js-top-slider-dots')
			}
		}]
	});
} // show/hide faq


if (jquery_default()('.js-faq').length) {
	jquery_default()('.js-faq-head').on('click', function () {
		var numElem = jquery_default()(this).parent('.js-faq-item').data('num');

		if (jquery_default()(window).width() > 990) {
			jquery_default()('.js-faq-item').removeClass('active');
			jquery_default()(this).parent('.js-faq-item').addClass('active');
			jquery_default()(this).closest('.js-faq').find('.js-faq-item[data-num=' + numElem + ']').addClass('active');
		} else {
			if (jquery_default()(this).parent('.js-faq-item').hasClass('active')) {
				// jquery_default()('.js-faq-item').removeClass('active');
				jquery_default()(this).parent('.js-faq-item').removeClass('active');
			} else {
				jquery_default()('.js-faq-item').removeClass('active');
				jquery_default()(this).parent('.js-faq-item').addClass('active');
				jquery_default()(this).closest('.js-faq').find('.js-faq-item[data-num=' + numElem + ']').addClass('active');

				var active_element = jquery_default()(this);

				jquery_default()([document.documentElement, document.body]).animate({
					scrollTop: active_element.offset().top
				}, 500);
			}
		}
	});
} // team slider


if (jquery_default()('.js-team-slider').length) {
	jquery_default()('.js-team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button type="button" class="slider-prev"><svg class="icon ic-prev" width="24" height="65" aria-label="Предыдущий"><use xlink:href="/assets/sprites/sprite.svg#ic-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65" aria-label="Следующий"><use xlink:href="/assets/sprites/sprite.svg#ic-next"></use></svg></button>',
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 2.5,
				slidesToScroll: 2,
				arrows: false,
				infinite: false
			}
		}]
	});
} // staf slider


if (jquery_default()('#owl_personal').length) {
	jquery_default()('#owl_personal').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false
			}
		}]
	});
} // слайдер в консультациях

if (jquery_default()('.doc-carousel').length) {
	jquery_default()('.doc-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false
			}
		}]
	});
} // слайдер в консультациях
if (jquery_default()('.owl-rmc.owl-carousel').length) {
	jquery_default()('.owl-rmc.owl-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	});
} // слайдер в консультациях


if (jquery_default()('.js-staf-slider').length) {
	jquery_default()('.js-staf-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		prevArrow: '<button type="button" class="slider-prev"><svg class="icon ic-prev" width="24" height="65" aria-label="Предыдущий"><use xlink:href="/assets/sprites/sprite.svg#ic-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65" aria-label="Следующий"><use xlink:href="/assets/sprites/sprite.svg#ic-next"></use></svg></button>',
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false
			}
		}]
	});
} // quiz


if (jquery_default()('.slick-newgallery').length) {
	jquery_default()('.slick-newgallery').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<img src="/assets/img/slider_arrow_right.png" class="next">',
		prevArrow: '<img src="/assets/img/slider_arrow_left.png" class="prev">',
		dots: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
}
console.log('+1');

// if (jquery_default()('.js-quiz-step').length) {
//   var countSteps = jquery_default()('.js-quiz-step').length;
//   var curStep = 1;
//   var error = false;
//   jquery_default()('.js-quiz-next').on('click', function (e) {
//     curStep++;

//     if (jquery_default()('.js-quiz-step.active .js-req-check').length) {
//       if (jquery_default()('.js-req-check input:checkbox:checked').length == 0) {
//         error = true;
//         jquery_default()('.js-quiz-error').addClass('active');
//       } else {
//         error = false;
//         jquery_default()('.js-quiz-error').removeClass('active');
//       }
//     }

//     if (error == false) {
//       jquery_default()('.js-quiz-step').removeClass('active');
//       jquery_default()('.js-quiz-error').removeClass('active');

//       if (curStep > countSteps) {
//         jquery_default()('.js-quiz-success').addClass('active');
//         jquery_default()(this).addClass('invisible');
//       } else {
//         e.preventDefault();
//         jquery_default()('.js-quiz-step[data-step=' + curStep + ']').addClass('active');
//       }
//     }
//   });
//   jquery_default()('.js-quiz').on('submit', function (e) {
//     jquery_default()(this)[0].reset();
//     e.preventDefault();
//   });
// } 

// Маска для телефона 


inputmask_default()('+7 (999) 999-9999').mask('.js-phone'); // Вывод сообщения об успешной отправке в попапе

// Создание мобильного меню

var arrMobileMenu = [];
jquery_default()('.js-add-mm').each(function () {
	var indexItem = jquery_default()(this).attr('data-order');
	arrMobileMenu[indexItem] = jquery_default()(this);
});

for (var js_i = 0; js_i < arrMobileMenu.length; js_i++) {
	jquery_default()(arrMobileMenu[js_i]).clone().appendTo('.js-mobile-sidebar-content');
} // Открыть/Закрыть мобильное меню


jquery_default()('.js-open-menu').on('click', function () {
	jquery_default()('.js-shadow').addClass('is-visible');
	jquery_default()('.js-mobile-sidebar').addClass('open');
	jquery_default()('.js-body').addClass('no-scroll');
});
jquery_default()('.js-close-menu').on('click', function () {
	closeCatMenu();
});
jquery_default()('.js-shadow').on('click', function () {
	closeCatMenu();
});

function closeCatMenu() {
	jquery_default()('.js-shadow').removeClass('is-visible');
	jquery_default()('.js-mobile-sidebar').removeClass('open');
	jquery_default()('.js-body').removeClass('no-scroll');
} // select


if (jquery_default()('.js-select').length) {
	jquery_default()('.js-select').select2({
		minimumResultsForSearch: -1,
		width : 'resolve'
	});
} // Button for attach file


jquery_default()('.js-input-file').on('change', function () {
	var f_name = [];
	var $elemName = jquery_default()(this).closest('.js-file-upload').find('.js-name-file');

	for (var i = 0; i < jquery_default()(this).get(0).files.length; ++i) {
		f_name.push(" " + jquery_default()(this).get(0).files[i].name);
	}

	$elemName.html(f_name);
	$elemName.attr("title", f_name);
}); // unwrap block

if (jquery_default()('.js-unwrap-block').length) {
	jquery_default()('.js-unwrap-head').on('click', function (event) {
		event.preventDefault();
		var $parent = jquery_default()(this).parents('.js-unwrap-block');
		$parent.toggleClass('opened');

		if ($parent.hasClass('opened')) {
			$parent.children('.js-unwrap-content').slideDown(400);
		} else {
			$parent.children('.js-unwrap-content').slideUp(400);
		}

		jquery_default()([document.documentElement, document.body]).animate({
			scrollTop: $parent.offset().top
		}, 500);

	});
} // Cutting text by the number of characters


if (jquery_default()('.js-read-more').length) {
	jquery_default()('.js-read-more').readmore({
		moreLink: '<a href="#" class="more-link">Читать далее</a>',
		lessLink: '<a href="#" class="more-link">Свернуть</a>'
	});
} // tabs for about contact

if (jquery_default()('.spoiler_text').length) {
	jquery_default()('.spoiler_text').readmore({
		collapsedHeight: 158,
		moreLink: '<a href="#" class="more-link">Читать далее</a>',
		lessLink: '<a href="#" class="more-link">Свернуть</a>'
	});
} // tabs for about contact

jquery_default()('[data-fancybox]').fancybox({
	touch: false
});

if (jquery_default()('.js-about-contact').length) {
	jquery_default()('.js-about-contact-list .js-about-contact-item:first').addClass('active');
	jquery_default()('.js-about-contact-content .js-about-contact-content-item:first').fadeIn();
	jquery_default()('.js-about-contact-item').on('click', function (e) {
		e.preventDefault();
		jquery_default()('.js-about-contact-content-item').hide();
		jquery_default()('.js-about-contact-item').removeClass('active');
		jquery_default()(this).addClass('active');
		jquery_default()('#' + jquery_default()(this).attr('data-item')).fadeIn();
	});
}

/***/ })
/******/ ]);


// Скрипт получения формы
$.fancybox.defaults.closeExisting = true;
$.fancybox.defaults.dragToClose =false,

jQuery(document).ready(function () {
	var currentStep = 1;

	jQuery('.programs .btn').click(function () {
		
		if (this.name=='prog_2') $("#prog_container").html('<iframe width="100%" height="700" src="https://salebot.site/md/zaryadka_1" frameborder="0" allowfullscreen=""></iframe>');
		
		/*jQuery(this).toggleClass('btn-green');
		jQuery(this).text(function (i, text) {
			return text === 'Выбрано' ? 'Выбрать' : 'Выбрано';
		});
		jQuery(this)
			.parents('.itm')
			.toggleClass('active');
		jQuery(this)
			.parents('.itm')
			.find('.check-programm')
			.toggleClass('active');
		jQuery('.btm-form .step-0').hide();
		jQuery('.btm-form .step-1').show();
		var counter = jQuery('.programs .itm.active').length;
		var text = counter + ' программ';
		if (counter == 1) text = counter + ' программу';
		if (counter > 1 && counter < 5) text = counter + ' программы';

		jQuery('.btm-form .step-1 #counterprograms').text(text);

		if (!$('.programs .itm').hasClass('active')) {
			jQuery('.btm-form .step').hide();
			jQuery('.btm-form .step-0').show();
		}*/
	});

	jQuery('#formcancel').on('click', function (e) {
		e.preventDefault();

		// jQuery(this).closest('#modal-call').removeClass('in').hide();
		//jQuery('.modal-backdrop').remove();

		document.cookie = 'hide_modal=true; path=/;';
	});

	jQuery('.steprequest').on('submit', function (e) {
		e.preventDefault();

		var form = jQuery(this);
		var form_id = form.find('input[name="id"]').val();
		var url = window.location.href;
		var formdata = new FormData(form.get(0));
		var valid = true;
		var step = jQuery(this)
			.find('input[name="step"]')
			.val();

		form.find('input').each(function () {
			if (jQuery(this).attr('required')) {
				if (jQuery(this).val == '') {
					valid = false;
				}

				var type = jQuery(this).attr('type');
				var val = jQuery(this).val();
				if (type == 'email' && !(val.indexOf('@') + 1)) {
					valid = false;
				}

				/*if (type == 'tel') {
                    if (!jQuery(this).inputmask("isComplete")){
                        valid = false;
                    }
                }*/
			}
		});

		if (!valid) return false;

		formdata.append('option', 'com_ksenrequest');
		formdata.append('task', 'request.addvote');
		formdata.append('tmpl', 'onlycomponent');
		//formdata.append('form_id', form_id);
		formdata.append('url', url);

		var programms = [];
		form.closest('.modal-content')
			.find('.programs .itm.active')
			.each(function () {
				var number = jQuery(this)
					.find('.check-programm')
					.val();
				formdata.append('programms_' + number, 1);
			});

		jQuery.ajax({
			url: 'https://zelkinezis.ru/form/index.php',
			method: 'POST',
			contentType: false,
			processData: false,
			dataType: 'json',
			data: formdata,
			success: function (response) {
				if (step == 3) {
					form.parents('.modal-dialog').addClass('end');
					jQuery('.theend').show();
					jQuery('.modal-backdrop').remove();

					jQuery.ajax({
						url: 'https://zelkinezis.ru/formsession.php?formsession=1',
						method: 'GET',
						contentType: false,
						processData: false,
						dataType: 'json',
						success: function (response) { },
					});
				}
				if (step == 2) {
					jQuery('.btm-form .step-2').hide();
					jQuery('.btm-form .step-3').show();
					jQuery('.steprequest input[name="request_id"]').val(response.data.id);
					var email = form.find('input[name="form[field_4]"]').val();
					jQuery('.steprequest input[name="form[field_4]"]').val(email);
					var phone = form.find('input[name="form[field_3]"]').val();
					jQuery('.steprequest input[name="form[field_3]"]').val(phone);
				}
				if (step == 1) {
					jQuery('.btm-form .step').hide();
					jQuery('.btm-form .step-2').show();
					jQuery('.steprequest input[name="request_id"]').val(response.data.id);
					var email = form.find('input[name="form[field_4]"]').val();
					jQuery('.steprequest input[name="form[field_4]"]').val(email);
				}
				if (step == 3) {
					step = 1;
				} else {
					step++;
				}
				if (response.success) {
					form.closest('.mod-ksr-form').find('.mod-ksr-form-thanks').fadeIn(500).delay(5000).fadeOut(500);
					form.parent().children('.close').click();
				}
			},
		});
	});

	jQuery('.next-2').click(function () {
		jQuery('.btm-form .step').hide();
		jQuery('.btm-form .step-2').show();
	});
	jQuery('.next-3').click(function () {
		jQuery('.btm-form .step').hide();
		jQuery('.btm-form .step-3').show();
	});
	jQuery('.next-end').click(function () {
		jQuery(this).parents('.modal-dialog').addClass('end');
		jQuery('.theend').show();


		$.post("/tologin/ajax/aj_cmsForm.php",
			{
				email_programs: $('.email_programs').val(),
				user_email: $('.user_email').val(),
				user_phone: $('.user_phone').val(),
				user_name: $('.user_name').val(),
				user_city: $('.user_city').val(),
				program1: $('.check-programm.programm_one.active').val(),
				program2 :$('.check-programm.programm_two.active').val()
			} );
	});
});

// Челик
$(document).on('click', '.formvote .fancybox-close-small, .formvote .cls', function () {
	localStorage.setItem('chelik','1');
	$('.chelik').hide();
});
var chelcoockie = localStorage.getItem('chelik');
if (chelcoockie == '1') {
	// $('.chelik').hide();
} else {
	$('.chelik').show();
}

// Смена городов
$(".select_city").change(function() {
	window.location.href = $(this).children("option:selected").attr("data-city_url");
});

// Выпадающее меню 
$(".drop-m a").click(function() {
	//$(".dropdown-menu").fadeToggle();
});

$('.drop-m').hover(function() {
	$(".dropdown-menu").stop(true, true).fadeIn();
}, function() { $(".dropdown-menu").stop(true, true).fadeOut(); }) 


// Функционал для страниц симптомы

//сортировка списка по алфавиту
var mylist = $('.search-abc__content ul.type-list');
var listitems = mylist.children('li').get();

listitems.sort(function (a, b) {
	return $(a)
		.text()
		.toUpperCase()
		.localeCompare(
			$(b)
				.text()
				.toUpperCase()
		);
});

$.each(listitems, function (idx, itm) {
	mylist.append(itm);
});


$(".search-letters__item").click(function() {
	$(".search-letters__item").removeClass("active");

	$(".search-abc__top .search-abc_bodypart li a").removeClass("active");
	$(".search-abc__top .search-abc_bodypart li:first-child a").addClass("active");

	$(this).addClass("active");

	var symb = $(this).text();
	$(".search-abc__content ul li").each(function(i, el) {
		var elem = $(el).find("a").text();
		if ($(el).find("a").text()[0] == symb) {
			$(el).show();
		} else {
			$(el).hide();
		}
	});

	// Очищаем поиск
	$(".search-abc__field input[type=text]").val('');
});

$(".search-abc__field input").click(function() {
	simptomps_reset_words();
	simptomps_reset_bodyparts();
	$(".search-abc__content ul li").show();
});
$(".search-abc__field input").keyup(function() {
	var symb = $(this).val();
	if (symb) {
		$(".search-abc__content ul li").each(function(i, el) {

			if ( $(el).find("a").text().toLowerCase().indexOf(symb.toLowerCase()) >= 0 ) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
	} else {
		$(".search-abc__content ul li").show();
	}

});

// Поиск по частям тела
$(".search-abc_bodypart .nav.nav-pills li a").click(function() {
	$(".bodyparts.nav-item a").removeClass("active");
	$(this).addClass("active");

	simptomps_reset_words();

	var symb = $(this).attr("data-bodypart");

	if (symb) {
		$(".search-abc__content ul li").each(function(i, el) {
			if ( $(el).find("a").attr("data-bodypart") == symb ) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
	} else {
		$(".search-abc__content ul li").show();
	}

	// Очищаем поиск
	$(".search-abc__field input[type=text]").val('');

});
// Показать все
$(".search-abc__nav .show_all").click(function() {
	simptomps_reset_bodyparts();
	$(".search-abc__content ul li").fadeIn()
});

// Функционал для страниц что   лечим
$(".ctho-lechim-letter-search li a").click(function() {
	$(".ctho-lechim-letter-search .nav-link").removeClass("active");
	$(this).addClass("active");

	if ($(this).hasClass("sieve_letter_all")) {
		simptomps_reset_bodyparts();
	} else {
		var symb = $(this).text();
		$(".chto-lech li").each(function(i, el) {
			var elem = $(el).find("a").text();
			if ($(el).find("a").text()[0] == symb) {
				$(el).show();
			} else {
				$(el).hide();
			}
		});
	}

	// Очищаем поиск
	$(".search-abc__field input[type=text]").val('');
	
});

function simptomps_reset_bodyparts() {
	$(".p-sympt .search-letters__item").removeClass("active");
	$(".search-abc__top .search-abc_bodypart li a").removeClass("active");
	$(".search-abc__top .search-abc_bodypart li:first-child a").addClass("active");
}
function simptomps_reset_words() {
	$(".p-sympt .search-letters__item").removeClass("active");
}


/*$(document).ready(function() {
	grecaptcha.ready(function() {
		grecaptcha.execute('6LfAzBomAAAAADPmIPNPSb1VL7_mJBikUBSgiDzz', {action: 'cms_contact_form'}).then(function(token) {
			$('.cms_contact_form').prepend('<input type="hidden" name="token" value="' + token + '">');
			$('.cms_contact_form').prepend('<input type="hidden" name="action" value="cms_contact_form">');
		});
	});
});*/



$('.cms_contact_form, .cms_contact_form2, .form-site, .green_form').submit(function() {
	/*var th = $(this);

	var button = $(this).find('button');
	var text = button.text();
	button.text('Отправка');
	button.attr('disabled', 'disabled');
	$.ajax({
		type: "POST",
		url: "/tologin/ajax/aj_cmsForm.php",
		data: th.serialize(),
		success: function(result) {
			if (result.indexOf('error') + 1) {
				button.removeAttr('disabled');
				button.text(text);
				alert('Вы неверно заполнили капчу, попробуйте ещё раз', 'error');
			} else {
				$('.cms_contact_form').trigger("reset");
				button.removeAttr('disabled');
				button.text(text);
				$.fancybox.close();
				$.fancybox.open({
					src: '#msg-success',
					type: 'inline',
					opts: {}
				});
			}
		},
	});
	return false;*/
	
	// временное
	// $('.cms_contact_form,.cms_contact_form2, .form-site, .green_form').trigger("reset");
	// $.fancybox.close();
	// $.fancybox.open({
	// 	src: '#msg-success',
	// 	type: 'inline',
	// 	opts: {}
	// });
	return false;
});

/*$('.cms_contact_form2').submit(function(e) {
	var th = $(this);

	var button = $(this).find('button');
	var text = button.text();
	button.text('Отправка');
	button.attr('disabled', 'disabled');
	$.ajax({
		type: "POST",
		url: "/tologin/ajax/aj_cmsForm.php",
		data: th.serialize(),
		success: function(result) {
			if (result.indexOf('error') + 1) {
				button.removeAttr('disabled');
				button.text(text);
				alert('Вы неверно заполнили капчу, попробуйте ещё раз', 'error');
			} else {
				button.removeAttr('disabled');
				button.text(text);
				$('input,textarea').val(' ');
				$.fancybox.close();
				$.fancybox.open({
					src: '#msg-success',
					type: 'inline',
					opts: {}
				});
			}
		},
	});
	return false;
});*/


// Скрипт для кнопки пульсации
document.addEventListener("DOMContentLoaded", () => {
	var elems = document.getElementsByTagName("h4");
	elems = Array.prototype.slice.call(elems);

	elems.forEach(function(elem) {
			if (elem.innerHTML == 'Важно понимать')
			{
					var parent_container = elem.closest('.container');
					parent_container.insertAdjacentHTML('beforeend', ' <div class="wrapper">\n' +
							'  <a href="#opros_block"><div class="pulse">Пройди тест и узнай причину боли</div></a>\n' +
							'</div> ');

					/*скролл до опроса*/
					var linkNav = document.querySelectorAll('[href^="#opros_block"]'), //выбираем все ссылки к якорю на странице
							V = 0.1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
					for (var i = 0; i < linkNav.length; i++) {
							linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
									e.preventDefault(); //отменяем стандартное поведение
									var w = window.pageYOffset,  // производим прокрутка прокрутка
											hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
									t = document.querySelector(hash).getBoundingClientRect().top - 150,  // отступ от окна браузера до id
											start = null;
									requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
									function step(time) {
											if (start === null) start = time;
											var progress = time - start,
													r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
											window.scrollTo(0,r);
											if (r != w + t) {
													requestAnimationFrame(step)
											} else {
													location.hash = hash  // URL с хэшем
											}
									}
							}, false);
					}
			}
	});
});

$(".express_btn[data-target='#consultaion_modal']").click(function() {
	$.fancybox.open({
		src: '#consult-form',
		type: 'inline',
		dragToClose: false,
		opts: {}
	});
});

$('.fancybox').fancybox({});
$(document).on("click", ".docs__more a", function () {
	$(".docs-list__content").css("height", "auto");
	$(this).fadeOut();
});

