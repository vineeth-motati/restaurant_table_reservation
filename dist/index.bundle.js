/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/app.scss */ "./src/style/app.scss");
/* harmony import */ var _style_auth_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/auth.scss */ "./src/style/auth.scss");
/* harmony import */ var _style_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/menu.scss */ "./src/style/menu.scss");
/* harmony import */ var _style_about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/about.scss */ "./src/style/about.scss");
/* harmony import */ var _style_manage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/manage.scss */ "./src/style/manage.scss");
/* harmony import */ var _style_user_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/user.scss */ "./src/style/user.scss");
/* harmony import */ var _style_checkout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/checkout.scss */ "./src/style/checkout.scss");






 // import './about.js';
// import './auth.js';

var modal = document.getElementById('modal-dialog');

window.smoothScroll = function (target) {
  var scrollContainer = target;

  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;

  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (_scroll) {
    function scroll(_x, _x2, _x3, _x4) {
      return _scroll.apply(this, arguments);
    }

    scroll.toString = function () {
      return _scroll.toString();
    };

    return scroll;
  }(function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  }); // start scrolling


  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

var span = document.getElementsByClassName('close')[0];

if (span) {
  span.onclick = function () {
    modal.style.display = 'none';
  };
}

var obj1 = [1, 2, 3];
var obj2 = [].concat(obj1, [4, 5]);
console.log(obj2);
var logout = document.getElementById('logout');

if (localStorage.getItem('loggedIn') === 'true') {
  logout.style.display = 'inline';
  login.style.display = 'none';
} else if (localStorage.getItem('loggedIn') === 'false') {
  logout.style.display = 'none';
  login.style.display = 'inline';
} // document.getElementById('btn').onclick = function clicked() {
//     console.log('clicked again');
//     // var data = 'as';
//     // firebase
//     //     .database()
//     //     .ref('tes/' + data)
//     //     .set({
//     //         d: data,
//     //     });
// };

/***/ }),

/***/ "./src/style/about.scss":
/*!******************************!*\
  !*** ./src/style/about.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/app.scss":
/*!****************************!*\
  !*** ./src/style/app.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/auth.scss":
/*!*****************************!*\
  !*** ./src/style/auth.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/checkout.scss":
/*!*********************************!*\
  !*** ./src/style/checkout.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/manage.scss":
/*!*******************************!*\
  !*** ./src/style/manage.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/menu.scss":
/*!*****************************!*\
  !*** ./src/style/menu.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/user.scss":
/*!*****************************!*\
  !*** ./src/style/user.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL2Fib3V0LnNjc3M/ZmRmNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL2FwcC5zY3NzPzJjNTAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS8uL3NyYy9zdHlsZS9hdXRoLnNjc3M/Yzc1YSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL2NoZWNrb3V0LnNjc3M/MjcxOSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL21hbmFnZS5zY3NzPzc0MzMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS8uL3NyYy9zdHlsZS9tZW51LnNjc3M/NjdjMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL3VzZXIuc2Nzcz8wNjFlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsInNtb290aFNjcm9sbCIsInRhcmdldCIsInNjcm9sbENvbnRhaW5lciIsInBhcmVudE5vZGUiLCJzY3JvbGxUb3AiLCJ0YXJnZXRZIiwib2Zmc2V0VG9wIiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsIiwiYyIsImEiLCJiIiwiaSIsInNldFRpbWVvdXQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJvYmoxIiwib2JqMiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWjs7QUFFQUMsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLFVBQVVDLE1BQVYsRUFBa0I7QUFDcEMsTUFBSUMsZUFBZSxHQUFHRCxNQUF0Qjs7QUFDQSxLQUFHO0FBQ0M7QUFDQUMsbUJBQWUsR0FBR0EsZUFBZSxDQUFDQyxVQUFsQztBQUNBLFFBQUksQ0FBQ0QsZUFBTCxFQUFzQjtBQUN0QkEsbUJBQWUsQ0FBQ0UsU0FBaEIsSUFBNkIsQ0FBN0I7QUFDSCxHQUxELFFBS1NGLGVBQWUsQ0FBQ0UsU0FBaEIsSUFBNkIsQ0FMdEM7O0FBT0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBQ0EsS0FBRztBQUNDO0FBQ0EsUUFBSUosTUFBTSxJQUFJQyxlQUFkLEVBQStCO0FBQy9CRyxXQUFPLElBQUlKLE1BQU0sQ0FBQ0ssU0FBbEI7QUFDSCxHQUpELFFBSVVMLE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxZQUoxQjs7QUFNQUMsUUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQzNCQSxLQUFDO0FBQ0QsUUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFBWTtBQUNaSCxLQUFDLENBQUNMLFNBQUYsR0FBY00sQ0FBQyxHQUFJLENBQUNDLENBQUMsR0FBR0QsQ0FBTCxJQUFVLEVBQVgsR0FBaUJFLENBQW5DO0FBQ0FDLGNBQVUsQ0FBQyxZQUFZO0FBQ25CTCxZQUFNLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsQ0FBTjtBQUNILEtBRlMsRUFFUCxFQUZPLENBQVY7QUFHSCxHQVBLLENBQU4sQ0FoQm9DLENBd0JwQzs7O0FBQ0FKLFFBQU0sQ0FBQ04sZUFBRCxFQUFrQkEsZUFBZSxDQUFDRSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0QsQ0FBdEQsQ0FBTjtBQUNILENBMUJEOztBQTRCQSxJQUFJUyxJQUFJLEdBQUdqQixRQUFRLENBQUNrQixzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFYOztBQUNBLElBQUlELElBQUosRUFBVTtBQUNOQSxNQUFJLENBQUNFLE9BQUwsR0FBZSxZQUFZO0FBQ3ZCcEIsU0FBSyxDQUFDcUIsS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0gsR0FGRDtBQUdIOztBQUVELElBQUlDLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFYO0FBQ0EsSUFBSUMsSUFBSSxhQUFPRCxJQUFQLEdBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFSO0FBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRUEsSUFBTUcsTUFBTSxHQUFHMUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7O0FBQ0EsSUFBSTBCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixNQUFxQyxNQUF6QyxFQUFpRDtBQUM3Q0YsUUFBTSxDQUFDTixLQUFQLENBQWFDLE9BQWIsR0FBdUIsUUFBdkI7QUFDQVEsT0FBSyxDQUFDVCxLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDSCxDQUhELE1BR08sSUFBSU0sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLE9BQXpDLEVBQWtEO0FBQ3JERixRQUFNLENBQUNOLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtBQUNBUSxPQUFLLENBQUNULEtBQU4sQ0FBWUMsT0FBWixHQUFzQixRQUF0QjtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7OztBQ3JFQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGUvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL2F1dGguc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvbWVudS5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9hYm91dC5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9tYW5hZ2Uuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvdXNlci5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9jaGVja291dC5zY3NzJztcclxuLy8gaW1wb3J0ICcuL2Fib3V0LmpzJztcclxuLy8gaW1wb3J0ICcuL2F1dGguanMnO1xyXG5cclxudmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWRpYWxvZycpO1xyXG5cclxud2luZG93LnNtb290aFNjcm9sbCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIHZhciBzY3JvbGxDb250YWluZXIgPSB0YXJnZXQ7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgLy9maW5kIHNjcm9sbCBjb250YWluZXJcclxuICAgICAgICBzY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXIucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikgcmV0dXJuO1xyXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgKz0gMTtcclxuICAgIH0gd2hpbGUgKHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPT0gMCk7XHJcblxyXG4gICAgdmFyIHRhcmdldFkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIC8vZmluZCB0aGUgdG9wIG9mIHRhcmdldCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXJcclxuICAgICAgICBpZiAodGFyZ2V0ID09IHNjcm9sbENvbnRhaW5lcikgYnJlYWs7XHJcbiAgICAgICAgdGFyZ2V0WSArPSB0YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgfSB3aGlsZSAoKHRhcmdldCA9IHRhcmdldC5vZmZzZXRQYXJlbnQpKTtcclxuXHJcbiAgICBzY3JvbGwgPSBmdW5jdGlvbiAoYywgYSwgYiwgaSkge1xyXG4gICAgICAgIGkrKztcclxuICAgICAgICBpZiAoaSA+IDMwKSByZXR1cm47XHJcbiAgICAgICAgYy5zY3JvbGxUb3AgPSBhICsgKChiIC0gYSkgLyAzMCkgKiBpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzY3JvbGwoYywgYSwgYiwgaSk7XHJcbiAgICAgICAgfSwgMjApO1xyXG4gICAgfTtcclxuICAgIC8vIHN0YXJ0IHNjcm9sbGluZ1xyXG4gICAgc2Nyb2xsKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCwgdGFyZ2V0WSwgMCk7XHJcbn07XHJcblxyXG52YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF07XHJcbmlmIChzcGFuKSB7XHJcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbn1cclxuXHJcbnZhciBvYmoxID0gWzEsIDIsIDNdO1xyXG52YXIgb2JqMiA9IFsuLi5vYmoxLCA0LCA1XTtcclxuY29uc29sZS5sb2cob2JqMik7XHJcblxyXG5jb25zdCBsb2dvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0Jyk7XHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ3RydWUnKSB7XHJcbiAgICBsb2dvdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgbG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKS5vbmNsaWNrID0gZnVuY3Rpb24gY2xpY2tlZCgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGFnYWluJyk7XHJcbi8vICAgICAvLyB2YXIgZGF0YSA9ICdhcyc7XHJcbi8vICAgICAvLyBmaXJlYmFzZVxyXG4vLyAgICAgLy8gICAgIC5kYXRhYmFzZSgpXHJcbi8vICAgICAvLyAgICAgLnJlZigndGVzLycgKyBkYXRhKVxyXG4vLyAgICAgLy8gICAgIC5zZXQoe1xyXG4vLyAgICAgLy8gICAgICAgICBkOiBkYXRhLFxyXG4vLyAgICAgLy8gICAgIH0pO1xyXG4vLyB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==