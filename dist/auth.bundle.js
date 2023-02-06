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
var signupForm = document.querySelector('#signup-form-container__form');
var loginForm = document.querySelector('#login-form-container__form');
var logout = document.getElementById('logout');
var login = document.getElementById('login');
login.style.display = 'inline';
logout.style.display = 'none'; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

if (firebase.apps.length === 0) {
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
}

var auth = firebase.auth();
var db = firebase.database();

if (localStorage.getItem('loggedIn') === null) {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      localStorage.setItem('loggedIn', 'true');
    } else {
      localStorage.setItem('loggedIn', 'false');
    }
  });
} // Controls displaying Username on header


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
}

function toggleSignup() {
  document.getElementById('login-toggle').style.backgroundColor = '#fff';
  document.getElementById('login-toggle').style.color = '#222';
  document.getElementById('signup-toggle').style.backgroundColor = '#00a2ff';
  document.getElementById('signup-toggle').style.color = '#fff';
  document.getElementById('login-form-container').style.display = 'none';
  document.getElementById('signup-form-container').style.display = 'block';
}

window.toggleSignup = toggleSignup;

function toggleLogin() {
  document.getElementById('login-toggle').style.backgroundColor = '#00a2ff';
  document.getElementById('login-toggle').style.color = '#fff';
  document.getElementById('signup-toggle').style.backgroundColor = '#fff';
  document.getElementById('signup-toggle').style.color = '#222';
  document.getElementById('signup-form-container').style.display = 'none';
  document.getElementById('login-form-container').style.display = 'block';
}

window.toggleLogin = toggleLogin; // Signup functionality

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL2FwcC9hdXRoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJzaWdudXBGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwibG9nb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbiIsInN0eWxlIiwiZGlzcGxheSIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGIiLCJkYXRhYmFzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwic2V0SXRlbSIsImxpbmsiLCJlbWFpbCIsImluZGV4T2YiLCJpbm5lckhUTUwiLCJkaXNwbGF5TmFtZSIsInJlZGlyZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJ3cml0ZVVzZXJEYXRhIiwidXNlcklkIiwibmFtZSIsInJlZiIsInNldCIsInVzZXJuYW1lIiwidG9nZ2xlU2lnbnVwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0b2dnbGVMb2dpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc2V0IiwidmFsdWUiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJjcmVkIiwiY3VycmVudFVzZXIiLCJ1cGRhdGVQcm9maWxlIiwidWlkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwidG9Mb3dlckNhc2UiLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixDQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDZCQUF2QixDQUFsQjtBQUNBLElBQU1FLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0FDLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLEdBQXNCLFFBQXRCO0FBQ0FKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE1BQXZCLEMsQ0FFQTs7QUFDQSxJQUFJQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM1QixNQUFJQyxjQUFjLEdBQUc7QUFDakJDLFVBQU0sRUFBRSx5Q0FEUztBQUVqQkMsY0FBVSxFQUFFLGtDQUZLO0FBR2pCQyxhQUFTLEVBQUUsa0JBSE07QUFJakJDLGlCQUFhLEVBQUUsOEJBSkU7QUFLakJDLHFCQUFpQixF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QU87QUFDcENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJekIsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLE1BQXpDLEVBQWlEO0FBQzdDSixVQUFJLENBQUNnRCxPQUFMLEdBQWVkLElBQWYsQ0FBb0IsWUFBTTtBQUN0QkwsYUFBSyxDQUFDLHdCQUFELENBQUw7QUFDQTFCLG9CQUFZLENBQUNJLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsT0FBakM7QUFDQUosb0JBQVksQ0FBQ0ksT0FBYixDQUFxQixjQUFyQixFQUFxQyxFQUFyQztBQUNBTyxjQUFNLENBQUNDLFFBQVAsR0FBa0IsV0FBbEI7QUFDSCxPQUxEO0FBTUgsS0FQRCxNQU9PLElBQUlaLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixNQUFxQyxPQUF6QyxFQUFrRDtBQUNyRHlCLFdBQUssQ0FBQyx1QkFBRCxDQUFMO0FBQ0g7QUFDSixHQVpEO0FBYUgsQzs7Ozs7O1VDNUtEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhdXRoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGF1dGggfSBmcm9tICcuL2luZGV4LmpzJztcclxuY29uc3Qgc2lnbnVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWdudXAtZm9ybS1jb250YWluZXJfX2Zvcm0nKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0tY29udGFpbmVyX19mb3JtJyk7XHJcbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKTtcclxuY29uc3QgbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcclxubG9naW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG5sb2dvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgYXBpS2V5OiAnQUl6YVN5QXpVOFNYMHE5LVVzbUduOWtkQUpXV3I5YjVqRlFXVUlNJyxcclxuICAgICAgICBhdXRoRG9tYWluOiAncmVzdGF1cmFudC04NGZjMi5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgICAgIHByb2plY3RJZDogJ3Jlc3RhdXJhbnQtODRmYzInLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6ICdyZXN0YXVyYW50LTg0ZmMyLmFwcHNwb3QuY29tJyxcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzIyNTg2NjE3MjUyNycsXHJcbiAgICAgICAgYXBwSWQ6ICcxOjIyNTg2NjE3MjUyNzp3ZWI6YTEzNGE4N2M3ZGUzZWE0MTczNjU5YScsXHJcbiAgICAgICAgbWVhc3VyZW1lbnRJZDogJ0ctNzlRN0RHQ1NHSicsXHJcbiAgICB9O1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuZXhwb3J0IHZhciBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5leHBvcnQgdmFyIGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gbnVsbCkge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJbicsICdmYWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDb250cm9scyBkaXNwbGF5aW5nIFVzZXJuYW1lIG9uIGhlYWRlclxyXG5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIGxldCBsaW5rID0gJyc7XHJcbiAgICAgICAgaWYgKHVzZXIuZW1haWwuaW5kZXhPZigndmluZWF0JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxpbmsgPSAnL21hbmFnZXIuaHRtbCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGluayA9ICcvdXNlci5odG1sJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0LXdyYXBwZXInKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBgPGEgaHJlZj1cIiR7bGlua31cIiBpZD1cImdyZWV0XCI+YCArXHJcbiAgICAgICAgICAgIGBIZWxsbywgJHt1c2VyLmRpc3BsYXlOYW1lfWAgK1xyXG4gICAgICAgICAgICAnPC9hPic7XHJcbiAgICAgICAgbG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXQtd3JhcHBlcicpLmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIGxvZ291dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBDb250cm9scyByZWRpcmVjdGlvbiBmcm9tIGF1dGhvdXJpemF0aW9uIHBhZ2VcclxuZnVuY3Rpb24gcmVkaXJlY3QoZW1haWwpIHtcclxuICAgIGlmIChlbWFpbC5pbmRleE9mKCdAdmluZWF0LmNvbScpICE9PSAtMSkge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldCcpLmhyZWYgPSAnL21hbmFnZXIuaHRtbCc7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9tYW5hZ2VyLmh0bWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXQnKS5ocmVmID0gJy91c2VyLmh0bWwnO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvdXNlci5odG1sJztcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2F2ZXMgZGF0YSBpbnRvIERhdGFiYXNlXHJcbmZ1bmN0aW9uIHdyaXRlVXNlckRhdGEodXNlcklkLCBuYW1lLCBlbWFpbCkge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgICAuZGF0YWJhc2UoKVxyXG4gICAgICAgIC5yZWYoJ3VzZXJzLycgKyB1c2VySWQpXHJcbiAgICAgICAgLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlU2lnbnVwKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXRvZ2dsZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi10b2dnbGUnKS5zdHlsZS5jb2xvciA9ICcjMjIyJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtdG9nZ2xlJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMGEyZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC10b2dnbGUnKS5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxud2luZG93LnRvZ2dsZVNpZ251cCA9IHRvZ2dsZVNpZ251cDtcclxuZnVuY3Rpb24gdG9nZ2xlTG9naW4oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdG9nZ2xlJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMGEyZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXRvZ2dsZScpLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC10b2dnbGUnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLXRvZ2dsZScpLnN0eWxlLmNvbG9yID0gJyMyMjInO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1mb3JtLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG53aW5kb3cudG9nZ2xlTG9naW4gPSB0b2dnbGVMb2dpbjtcclxuXHJcbi8vIFNpZ251cCBmdW5jdGlvbmFsaXR5XHJcbmlmIChzaWdudXBGb3JtKSB7XHJcbiAgICBzaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdVc2VyIGFscmVhZHkgbG9nZ2VkIGluXFxuUGxlYXNlIGxvZ291dCB0byBjb250aW51ZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gc2lnbnVwRm9ybVsnc2lnbi11cC11c2VybmFtZSddLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IHNpZ251cEZvcm1bJ3NpZ24tdXAtZW1haWwnXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBzaWdudXBGb3JtWydzaWduLXVwLXBhc3N3b3JkJ10udmFsdWU7XHJcbiAgICAgICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjcmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aC5jdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVXNlckRhdGEoY3JlZC51c2VyLnVpZCwgdXNlcm5hbWUsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjcmVkLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ251cEZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjZXNzZnVsbHkgc2lnbmVkIHVwXFxuIFlvdSBjYW4gbG9nIGluIG5vdycpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIExvZ2luIEZ1bmN0aW9uYWxpdHlcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdVc2VyIGFscmVhZHkgbG9nZ2VkIGluXFxuUGxlYXNlIGxvZ291dCB0byBjb250aW51ZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gbG9naW5Gb3JtWydsb2ctaW4tZW1haWwnXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2dpbkZvcm1bJ2xvZy1pbi1wYXNzd29yZCddLnZhbHVlO1xyXG4gICAgICAgICAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChjcmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZC51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjZXNzZnVsbHkgbG9nZ2VkIGluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ2dlZEluVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWQudXNlcilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluVXNlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdCh1c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBMb2dvdXQgRnVuY3Rpb25hbGl0eVxyXG5pZiAobG9nb3V0KSB7XHJcbiAgICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNlc3NmdWxseSBsb2dnZWQgb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJblVzZXInLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnYXV0aC5odG1sJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91IGFyZSBub3QgbG9nZ2VkIGluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL2F1dGguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9