/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\boolean\\php-ajax-dischi\\src\\app.js: Unexpected token (28:16)\n\n\u001b[0m \u001b[90m 26 | \u001b[39m  \u001b[36mfor\u001b[39m (\u001b[36mvar\u001b[39m i \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m i \u001b[33m<\u001b[39m data\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m i\u001b[33m++\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m    \u001b[36mvar\u001b[39m context \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 28 | \u001b[39m      locandina \u001b[33m=\u001b[39m data[i]\u001b[33m.\u001b[39mposter\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m      titolo \u001b[33m=\u001b[39m data[i]\u001b[33m.\u001b[39mtitle\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m      autore \u001b[33m=\u001b[39m data[i]\u001b[33m.\u001b[39mauthor\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m      anno \u001b[33m=\u001b[39m data[i]\u001b[33m.\u001b[39myear\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.unexpected (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Parser.checkExpressionErrors (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:9064:12)\n    at Parser.parseMaybeAssign (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:9647:12)\n    at C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:9586:39\n    at Parser.allowInAnd (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11297:16)\n    at Parser.parseMaybeAssignAllowIn (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:9586:17)\n    at Parser.parseVar (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12097:70)\n    at Parser.parseVarStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11906:10)\n    at Parser.parseStatementContent (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11498:21)\n    at Parser.parseStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseBlock (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11983:10)\n    at Parser.parseStatementContent (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11507:21)\n    at Parser.parseStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12056:60\n    at Parser.withTopicForbiddingContext (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11272:14)\n    at Parser.parseFor (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12056:22)\n    at Parser.parseForStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11755:19)\n    at Parser.parseStatementContent (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11456:21)\n    at Parser.parseStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseBlock (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11983:10)\n    at Parser.parseFunctionBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:10963:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:10946:10)\n    at C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12153:12\n    at Parser.withTopicForbiddingContext (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11272:14)\n    at Parser.parseFunction (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12152:10)\n    at Parser.parseFunctionStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11779:17)\n    at Parser.parseStatementContent (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11469:21)\n    at Parser.parseStatement (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\boolean\\php-ajax-dischi\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\boolean\php-ajax-dischi\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\boolean\php-ajax-dischi\src\app.scss */"./src/app.scss");


/***/ })

/******/ });