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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL2Fib3V0LnNjc3M/ZmRmNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL2FwcC5zY3NzPzJjNTAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS8uL3NyYy9zdHlsZS9hdXRoLnNjc3M/Yzc1YSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL21hbmFnZS5zY3NzPzc0MzMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS8uL3NyYy9zdHlsZS9tZW51LnNjc3M/NjdjMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL3N0eWxlL3VzZXIuc2Nzcz8wNjFlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsInNtb290aFNjcm9sbCIsInRhcmdldCIsInNjcm9sbENvbnRhaW5lciIsInBhcmVudE5vZGUiLCJzY3JvbGxUb3AiLCJ0YXJnZXRZIiwib2Zmc2V0VG9wIiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsIiwiYyIsImEiLCJiIiwiaSIsInNldFRpbWVvdXQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJvYmoxIiwib2JqMiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWjs7QUFFQUMsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLFVBQVVDLE1BQVYsRUFBa0I7QUFDcEMsTUFBSUMsZUFBZSxHQUFHRCxNQUF0Qjs7QUFDQSxLQUFHO0FBQ0M7QUFDQUMsbUJBQWUsR0FBR0EsZUFBZSxDQUFDQyxVQUFsQztBQUNBLFFBQUksQ0FBQ0QsZUFBTCxFQUFzQjtBQUN0QkEsbUJBQWUsQ0FBQ0UsU0FBaEIsSUFBNkIsQ0FBN0I7QUFDSCxHQUxELFFBS1NGLGVBQWUsQ0FBQ0UsU0FBaEIsSUFBNkIsQ0FMdEM7O0FBT0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBQ0EsS0FBRztBQUNDO0FBQ0EsUUFBSUosTUFBTSxJQUFJQyxlQUFkLEVBQStCO0FBQy9CRyxXQUFPLElBQUlKLE1BQU0sQ0FBQ0ssU0FBbEI7QUFDSCxHQUpELFFBSVVMLE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxZQUoxQjs7QUFNQUMsUUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQzNCQSxLQUFDO0FBQ0QsUUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFBWTtBQUNaSCxLQUFDLENBQUNMLFNBQUYsR0FBY00sQ0FBQyxHQUFJLENBQUNDLENBQUMsR0FBR0QsQ0FBTCxJQUFVLEVBQVgsR0FBaUJFLENBQW5DO0FBQ0FDLGNBQVUsQ0FBQyxZQUFZO0FBQ25CTCxZQUFNLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsQ0FBTjtBQUNILEtBRlMsRUFFUCxFQUZPLENBQVY7QUFHSCxHQVBLLENBQU4sQ0FoQm9DLENBd0JwQzs7O0FBQ0FKLFFBQU0sQ0FBQ04sZUFBRCxFQUFrQkEsZUFBZSxDQUFDRSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0QsQ0FBdEQsQ0FBTjtBQUNILENBMUJEOztBQTRCQSxJQUFJUyxJQUFJLEdBQUdqQixRQUFRLENBQUNrQixzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFYOztBQUNBLElBQUlELElBQUosRUFBVTtBQUNOQSxNQUFJLENBQUNFLE9BQUwsR0FBZSxZQUFZO0FBQ3ZCcEIsU0FBSyxDQUFDcUIsS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0gsR0FGRDtBQUdIOztBQUVELElBQUlDLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFYO0FBQ0EsSUFBSUMsSUFBSSxhQUFPRCxJQUFQLEdBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFSO0FBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRUEsSUFBTUcsTUFBTSxHQUFHMUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7O0FBQ0EsSUFBSTBCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixNQUFxQyxNQUF6QyxFQUFpRDtBQUM3Q0YsUUFBTSxDQUFDTixLQUFQLENBQWFDLE9BQWIsR0FBdUIsUUFBdkI7QUFDQVEsT0FBSyxDQUFDVCxLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDSCxDQUhELE1BR08sSUFBSU0sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLE9BQXpDLEVBQWtEO0FBQ3JERixRQUFNLENBQUNOLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtBQUNBUSxPQUFLLENBQUNULEtBQU4sQ0FBWUMsT0FBWixHQUFzQixRQUF0QjtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7OztBQ3BFQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZS9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvYXV0aC5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9tZW51LnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL2Fib3V0LnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL21hbmFnZS5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS91c2VyLnNjc3MnO1xyXG4vLyBpbXBvcnQgJy4vYWJvdXQuanMnO1xyXG4vLyBpbXBvcnQgJy4vYXV0aC5qcyc7XHJcblxyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZGlhbG9nJyk7XHJcblxyXG53aW5kb3cuc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdmFyIHNjcm9sbENvbnRhaW5lciA9IHRhcmdldDtcclxuICAgIGRvIHtcclxuICAgICAgICAvL2ZpbmQgc2Nyb2xsIGNvbnRhaW5lclxyXG4gICAgICAgIHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lci5wYXJlbnROb2RlO1xyXG4gICAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSByZXR1cm47XHJcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCArPSAxO1xyXG4gICAgfSB3aGlsZSAoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9PSAwKTtcclxuXHJcbiAgICB2YXIgdGFyZ2V0WSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgLy9maW5kIHRoZSB0b3Agb2YgdGFyZ2V0IHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIGlmICh0YXJnZXQgPT0gc2Nyb2xsQ29udGFpbmVyKSBicmVhaztcclxuICAgICAgICB0YXJnZXRZICs9IHRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICB9IHdoaWxlICgodGFyZ2V0ID0gdGFyZ2V0Lm9mZnNldFBhcmVudCkpO1xyXG5cclxuICAgIHNjcm9sbCA9IGZ1bmN0aW9uIChjLCBhLCBiLCBpKSB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGlmIChpID4gMzApIHJldHVybjtcclxuICAgICAgICBjLnNjcm9sbFRvcCA9IGEgKyAoKGIgLSBhKSAvIDMwKSAqIGk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbChjLCBhLCBiLCBpKTtcclxuICAgICAgICB9LCAyMCk7XHJcbiAgICB9O1xyXG4gICAgLy8gc3RhcnQgc2Nyb2xsaW5nXHJcbiAgICBzY3JvbGwoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLCB0YXJnZXRZLCAwKTtcclxufTtcclxuXHJcbnZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXTtcclxuaWYgKHNwYW4pIHtcclxuICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxufVxyXG5cclxudmFyIG9iajEgPSBbMSwgMiwgM107XHJcbnZhciBvYmoyID0gWy4uLm9iajEsIDQsIDVdO1xyXG5jb25zb2xlLmxvZyhvYmoyKTtcclxuXHJcbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKTtcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZScpIHtcclxuICAgIGxvZ291dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAnZmFsc2UnKSB7XHJcbiAgICBsb2dvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxufVxyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpLm9uY2xpY2sgPSBmdW5jdGlvbiBjbGlja2VkKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgYWdhaW4nKTtcclxuLy8gICAgIC8vIHZhciBkYXRhID0gJ2FzJztcclxuLy8gICAgIC8vIGZpcmViYXNlXHJcbi8vICAgICAvLyAgICAgLmRhdGFiYXNlKClcclxuLy8gICAgIC8vICAgICAucmVmKCd0ZXMvJyArIGRhdGEpXHJcbi8vICAgICAvLyAgICAgLnNldCh7XHJcbi8vICAgICAvLyAgICAgICAgIGQ6IGRhdGEsXHJcbi8vICAgICAvLyAgICAgfSk7XHJcbi8vIH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9