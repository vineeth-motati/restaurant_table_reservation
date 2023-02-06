/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/auth.js":
/*!*************************!*\
  !*** ./src/app/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => /* binding */ auth,
/* harmony export */   "db": () => /* binding */ db
/* harmony export */ });
// import { auth } from './index.js';
var signupForm = document.querySelector('#sign-up-form');
var loginForm = document.querySelector('#log-in-form');
var logout = document.getElementById('logout');
var login = document.getElementById('login');
login.style.display = 'inline';
logout.style.display = 'none'; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: 'AIzaSyAzU8SX0q9-UsmGn9kdAJWWr9b5jFQWUIM',
  authDomain: 'restaurant-84fc2.firebaseapp.com',
  projectId: 'restaurant-84fc2',
  storageBucket: 'restaurant-84fc2.appspot.com',
  messagingSenderId: '225866172527',
  appId: '1:225866172527:web:a134a87c7de3ea4173659a',
  measurementId: 'G-79Q7DGCSGJ'
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.database(); // Controls displaying Username on header

auth.onAuthStateChanged(function (user) {
  if (user && localStorage.getItem('loggedIn') === 'true') {
    var link = '';

    if (user.email.indexOf('vineat') !== -1) {
      link = '/manager.html';
    } else {
      link = '/user.html';
    }

    document.getElementById('greet-wrapper').innerHTML = "<a href=\"".concat(link, "\" id=\"greet\">") + "Hello, ".concat(user.displayName) + '</a>';
    logout.style.display = 'inline';
    login.style.display = 'none';
  } else {
    document.getElementById('greet-wrapper').innerHTML = "";
    logout.style.display = 'none';
    login.style.display = 'inline';
  }
}); // Controls redirection from authourization page

function redirect(email) {
  if (email.indexOf('@vineat.com') !== -1) {
    // document.getElementById('greet').href = '/manager.html';
    window.location = '/manager.html';
  } else {
    // document.getElementById('greet').href = '/user.html';
    window.location = '/user.html';
  }
} // Saves data into Database


function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
} // Signup functionality


if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (localStorage.getItem('loggedIn') === 'true') {
      alert('User already logged in\nPlease logout to continue');
      loginForm.reset();
    } else if (localStorage.getItem('loggedIn') === 'false') {
      var username = signupForm['sign-up-username'].value;
      var email = signupForm['sign-up-email'].value;
      var password = signupForm['sign-up-password'].value;
      auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
        auth.currentUser.updateProfile({
          displayName: username
        });
        writeUserData(cred.user.uid, username, email);
        console.log(cred.user);
        signupForm.reset();
        alert('Sucessfully signed up\n You can log in now');
      })["catch"](function (error) {
        alert(error.message);
      });
    } // console.log(email, password);

  });
} // Login Functionality


if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (localStorage.getItem('loggedIn') === 'true') {
      alert('User already logged in\nPlease logout to continue');
      loginForm.reset();
    } else if (localStorage.getItem('loggedIn') === 'false') {
      var email = loginForm['log-in-email'].value;
      var password = loginForm['log-in-password'].value;
      auth.signInWithEmailAndPassword(email, password).then(function (cred) {
        console.log(cred.user);
        loginForm.reset();
        alert('Sucessfully logged in');
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('loggedInUser', JSON.stringify(cred.user));
        var user = JSON.parse(localStorage.getItem('loggedInUser'));
        redirect(user.email.toLowerCase());
      })["catch"](function (error) {
        alert(error.message);
      });
    }
  });
} // Logout Functionality


if (logout) {
  logout.addEventListener('click', function (e) {
    e.preventDefault();

    if (localStorage.getItem('loggedIn') === 'true') {
      auth.signOut().then(function () {
        alert('Sucessfully logged out');
        localStorage.setItem('loggedIn', 'false');
        localStorage.setItem('loggedInUser', '');
        window.location = 'auth.html';
      });
    } else if (localStorage.getItem('loggedIn') === 'false') {
      alert('You are not logged in');
    }
  });
}

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/auth.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL2FwcC9hdXRoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzaWdudXBGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwibG9nb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbiIsInN0eWxlIiwiZGlzcGxheSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJkYiIsImRhdGFiYXNlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaW5rIiwiZW1haWwiLCJpbmRleE9mIiwiaW5uZXJIVE1MIiwiZGlzcGxheU5hbWUiLCJyZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwid3JpdGVVc2VyRGF0YSIsInVzZXJJZCIsIm5hbWUiLCJyZWYiLCJzZXQiLCJ1c2VybmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc2V0IiwidmFsdWUiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJjcmVkIiwiY3VycmVudFVzZXIiLCJ1cGRhdGVQcm9maWxlIiwidWlkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInRvTG93ZXJDYXNlIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsSUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBR0wsUUFBUSxDQUFDSSxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQUMsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosR0FBc0IsUUFBdEI7QUFDQUosTUFBTSxDQUFDRyxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkIsQyxDQUVBOztBQUNBLElBQUlDLGNBQWMsR0FBRztBQUNqQkMsUUFBTSxFQUFFLHlDQURTO0FBRWpCQyxZQUFVLEVBQUUsa0NBRks7QUFHakJDLFdBQVMsRUFBRSxrQkFITTtBQUlqQkMsZUFBYSxFQUFFLDhCQUpFO0FBS2pCQyxtQkFBaUIsRUFBRSxjQUxGO0FBTWpCQyxPQUFLLEVBQUUsMkNBTlU7QUFPakJDLGVBQWEsRUFBRTtBQVBFLENBQXJCLEMsQ0FTQTs7QUFDQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCVCxjQUF2QjtBQUNPLElBQUlVLElBQUksR0FBR0YsUUFBUSxD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O1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImF1dGguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5jb25zdCBzaWdudXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24tdXAtZm9ybScpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nLWluLWZvcm0nKTtcclxuY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dCcpO1xyXG5jb25zdCBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG5sb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbmxvZ291dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6ICdBSXphU3lBelU4U1gwcTktVXNtR245a2RBSldXcjliNWpGUVdVSU0nLFxyXG4gICAgYXV0aERvbWFpbjogJ3Jlc3RhdXJhbnQtODRmYzIuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ3Jlc3RhdXJhbnQtODRmYzInLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3Jlc3RhdXJhbnQtODRmYzIuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICcyMjU4NjYxNzI1MjcnLFxyXG4gICAgYXBwSWQ6ICcxOjIyNTg2NjE3MjUyNzp3ZWI6YTEzNGE4N2M3ZGUzZWE0MTczNjU5YScsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy03OVE3REdDU0dKJyxcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IHZhciBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgdmFyIGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuXHJcbi8vIENvbnRyb2xzIGRpc3BsYXlpbmcgVXNlcm5hbWUgb24gaGVhZGVyXHJcbmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSAnJztcclxuICAgICAgICBpZiAodXNlci5lbWFpbC5pbmRleE9mKCd2aW5lYXQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGluayA9ICcvbWFuYWdlci5odG1sJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaW5rID0gJy91c2VyLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXQtd3JhcHBlcicpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIGA8YSBocmVmPVwiJHtsaW5rfVwiIGlkPVwiZ3JlZXRcIj5gICtcclxuICAgICAgICAgICAgYEhlbGxvLCAke3VzZXIuZGlzcGxheU5hbWV9YCArXHJcbiAgICAgICAgICAgICc8L2E+JztcclxuICAgICAgICBsb2dvdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldC13cmFwcGVyJykuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgbG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIENvbnRyb2xzIHJlZGlyZWN0aW9uIGZyb20gYXV0aG91cml6YXRpb24gcGFnZVxyXG5mdW5jdGlvbiByZWRpcmVjdChlbWFpbCkge1xyXG4gICAgaWYgKGVtYWlsLmluZGV4T2YoJ0B2aW5lYXQuY29tJykgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0JykuaHJlZiA9ICcvbWFuYWdlci5odG1sJztcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL21hbmFnZXIuaHRtbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldCcpLmhyZWYgPSAnL3VzZXIuaHRtbCc7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy91c2VyLmh0bWwnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTYXZlcyBkYXRhIGludG8gRGF0YWJhc2VcclxuZnVuY3Rpb24gd3JpdGVVc2VyRGF0YSh1c2VySWQsIG5hbWUsIGVtYWlsKSB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAgIC5kYXRhYmFzZSgpXHJcbiAgICAgICAgLnJlZigndXNlcnMvJyArIHVzZXJJZClcclxuICAgICAgICAuc2V0KHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLy8gU2lnbnVwIGZ1bmN0aW9uYWxpdHlcclxuaWYgKHNpZ251cEZvcm0pIHtcclxuICAgIHNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1VzZXIgYWxyZWFkeSBsb2dnZWQgaW5cXG5QbGVhc2UgbG9nb3V0IHRvIGNvbnRpbnVlJyk7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBzaWdudXBGb3JtWydzaWduLXVwLXVzZXJuYW1lJ10udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gc2lnbnVwRm9ybVsnc2lnbi11cC1lbWFpbCddLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IHNpZ251cEZvcm1bJ3NpZ24tdXAtcGFzc3dvcmQnXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjcmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aC5jdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVXNlckRhdGEoY3JlZC51c2VyLnVpZCwgdXNlcm5hbWUsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVkLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ251cEZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjZXNzZnVsbHkgc2lnbmVkIHVwXFxuIFlvdSBjYW4gbG9nIGluIG5vdycpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIExvZ2luIEZ1bmN0aW9uYWxpdHlcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdVc2VyIGFscmVhZHkgbG9nZ2VkIGluXFxuUGxlYXNlIGxvZ291dCB0byBjb250aW51ZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gbG9naW5Gb3JtWydsb2ctaW4tZW1haWwnXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2dpbkZvcm1bJ2xvZy1pbi1wYXNzd29yZCddLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY3JlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWQudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N1Y2Vzc2Z1bGx5IGxvZ2dlZCBpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsb2dnZWRJblVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVkLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJblVzZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3QodXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gTG9nb3V0IEZ1bmN0aW9uYWxpdHlcclxuaWYgKGxvZ291dCkge1xyXG4gICAgbG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3VjZXNzZnVsbHkgbG9nZ2VkIG91dCcpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW5Vc2VyJywgJycpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJ2F1dGguaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1lvdSBhcmUgbm90IGxvZ2dlZCBpbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC9hdXRoLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==