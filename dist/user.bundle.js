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

/***/ }),

/***/ "./src/app/user.js":
/*!*************************!*\
  !*** ./src/app/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/app/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import canvasLoader from './layout.js';

document.querySelectorAll('.customer-mode')[0].click(); // Activates Cart

function activateCartWrapper() {
  document.getElementById('section').className = '';
  document.getElementById('section').classList.add('activate-cart-wrapper');
  document.getElementById('order-online').classList.add('active');
  document.getElementById('reservation').className = '';
  document.getElementById('view-reservations').className = '';
} // Activates reservations


function activateReservation() {
  document.getElementById('section').className = '';
  document.getElementById('section').classList.add('activate-reservation-wrapper');
  document.getElementById('order-online').className = '';
  document.getElementById('reservation').classList.add('active');
  document.getElementById('view-reservations').className = '';
} // Activates table for reserved


function activateViewReservation() {
  document.getElementById('section').className = '';
  document.getElementById('section').classList.add('activate-view-reservations-wrapper');
  document.getElementById('order-online').className = '';
  document.getElementById('reservation').className = '';
  document.getElementById('view-reservations').classList.add('active');
} // Event listeners for sidebar functionality


document.getElementById('order-online').addEventListener('click', activateCartWrapper);
document.getElementById('reservation').addEventListener('click', activateReservation);
document.getElementById('view-reservations').addEventListener('click', activateViewReservation); // Restaurant menu

var restaurant = {
  menu: {
    items: [{
      name: 'coke',
      price: 20,
      category: 'drinks',
      sizes: ['small', 'large'],
      img: 'https://m.media-amazon.com/images/I/51jKm1MY43L._SL1000_.jpg',
      inCart: 0
    }, {
      name: 'pepsi',
      price: 20,
      category: 'drinks',
      sizes: ['small', 'large'],
      img: 'https://images-na.ssl-images-amazon.com/images/I/41CBNhIJt0L.jpg',
      inCart: 0
    }, {
      name: 'water',
      price: 20,
      category: 'drinks',
      sizes: ['small', 'large'],
      img: 'https://images-na.ssl-images-amazon.com/images/I/810oxJndUFL._SL1500_.jpg',
      inCart: 0
    }, {
      name: 'burger',
      price: 40,
      category: 'junk food',
      sizes: ['small', 'large'],
      img: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
      inCart: 0
    }, {
      name: 'fries',
      price: 20,
      category: 'junk food',
      sizes: ['small', 'large'],
      img: 'https://thumbor.thedailymeal.com/r19Dr1epeqxTZm6O5CuFj0T0kME=//https://www.thedailymeal.com/sites/default/files/recipe/2018/iStock-687999118_1_.jpg',
      inCart: 0
    }, {
      name: 'pizza',
      price: 20,
      category: 'junk food',
      sizes: ['small', 'large'],
      img: 'https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=',
      inCart: 0
    }]
  }
}; // Updates the total cost value

function updateTotalCost() {
  var totalCost = 0;
  var itemPrices = document.querySelectorAll('.cart-item-price');

  for (var i = 0; i < itemPrices.length; i++) {
    console.log(itemPrices[i].innerText);
    totalCost += parseInt(itemPrices[i].innerText);
    console.log(totalCost);
  }

  console.log(totalCost);
  localStorage.setItem('totalCost', totalCost);
} // Updates the cart numbers in the local storage


function updateCartNumbers() {
  var totalCartNum = 0;
  var num = document.querySelectorAll('.item-quantity');

  for (var i = 0; i < num.length; i++) {
    console.log(num[i].value);
    totalCartNum += parseInt(num[i].value);
  }

  localStorage.setItem('cartNumbers', totalCartNum);
  document.querySelector('#cart .number-of-items').textContent = totalCartNum;
} // Displays the cart


function renderCartItems() {
  var cartItems = '';
  popup.innerHTML = '';
  cartItems = JSON.parse(localStorage.getItem('itemsInCart'));
  console.log(cartItems);
  var ul = document.createElement('ul');

  var _loop = function _loop(item) {
    var element = cartItems[item];
    console.log(element);
    var li = document.createElement('li');
    var itemTitle = document.createElement('span');
    itemTitle.classList.add('item-title');
    itemTitle.innerText = element.name.toUpperCase();
    li.appendChild(itemTitle);
    var itemPrice = document.createElement('span');
    itemPrice.classList.add('cart-item-price');
    itemPrice.innerText = parseInt(element.price) * parseInt(element.inCart);
    li.appendChild(itemPrice);
    li.appendChild(document.createElement('br'));
    var itemQuantity = document.createElement('input');
    itemQuantity.value = element.inCart;
    itemQuantity.classList.add('item-quantity');
    itemQuantity.setAttribute('type', 'number');
    itemQuantity.setAttribute('value', 'quantity');
    itemQuantity.setAttribute('min', '1');
    itemQuantity.addEventListener('change', function () {
      element.inCart = parseInt(itemQuantity.value);
      localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
      updateTotalCost();
      renderCartItems();
    });
    li.appendChild(itemQuantity);
    var itemDelete = document.createElement('input');
    itemDelete.classList.add('item-delete');
    itemDelete.setAttribute('value', 'delete');
    itemDelete.setAttribute('type', 'button');
    itemDelete.addEventListener('click', function () {
      delete cartItems[item];
      localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
      updateTotalCost();
      renderCartItems();
      updateCartNumbers(); // let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    });
    li.appendChild(itemDelete);
    ul.appendChild(li);
    ul.appendChild(document.createElement('hr'));
  };

  for (var item in cartItems) {
    _loop(item);
  }

  popup.appendChild(ul);
  updateTotalCost();
  var totalCost = document.createElement('p');
  var totalCostValue = localStorage.getItem('totalCost');
  totalCost.innerHTML = "Total cost: ".concat(totalCostValue, "  &#8377;");
  popup.appendChild(totalCost);
  var checkOutBtn = document.createElement('input');
  checkOutBtn.setAttribute('id', 'checkout__button');
  checkOutBtn.setAttribute('type', 'button');
  checkOutBtn.setAttribute('value', 'Checkout');
  checkOutBtn.addEventListener('click', function () {
    window.location = '/checkout.html';
  });
  popup.appendChild(checkOutBtn);
}

var popup = document.getElementById('checkout'); // Checkout pops up

function checkOut() {
  popup.classList.toggle('show');
  renderCartItems();
}

window.checkOut = checkOut; // Renders each menu item on page dynamically

function renderItems(item) {
  var main = document.getElementById('cart-wrapper');
  var itemWrapper = document.createElement('div');
  itemWrapper.classList.add('item-wrapper');
  main.appendChild(itemWrapper);
  var itemName = document.createElement('label');
  itemName.classList.add('item-name');
  itemName.textContent = item.name.toUpperCase(); //

  itemWrapper.appendChild(itemName);
  var addToCart = document.createElement('button');
  addToCart.classList.add('add-to-cart');
  addToCart.textContent = 'Add to cart';
  itemWrapper.appendChild(addToCart);
  var img = document.createElement('img');
  img.setAttribute('src', item.img);
  itemWrapper.appendChild(img);
  var itemPrice = document.createElement('label'); // itemPrice.classList.add('item-name');
  // itemPrice.innerHTML = ``

  itemPrice.classList.add('item-price');
  itemPrice.innerHTML = "Price: ".concat(item.price, " &#8377;"); //

  itemWrapper.appendChild(itemPrice);
} // Controls rendering all items


for (var i = 0; i < restaurant.menu.items.length; i++) {
  renderItems(restaurant.menu.items[i]);
} // Event listener for Add-To-Cart button


var carts = document.querySelectorAll('.add-to-cart');

var _loop2 = function _loop2(_i) {
  carts[_i].addEventListener('click', function () {
    cartNumbers(restaurant.menu.items[_i]);
    totalCost(restaurant.menu.items[_i]);
  });
};

for (var _i = 0; _i < carts.length; _i++) {
  _loop2(_i);
} // Loads the cart numbers on load from local storage


function onLoadCartNubers() {
  var productNumbers = parseInt(localStorage.getItem('cartNumbers'));

  if (productNumbers) {
    document.querySelector('#cart span').textContent = productNumbers;
  }
}

onLoadCartNubers(); // Controls storage of cart numbers in localstorage

function cartNumbers(item) {
  var productNumbers = parseInt(localStorage.getItem('cartNumbers'));

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cart .number-of-items').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart span').textContent = 1;
  }

  setItems(item);
} // Storage of cart items in localstorage


function setItems(item) {
  var cartItems = localStorage.getItem('itemsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[item.name] == undefined) {
      cartItems = _objectSpread(_objectSpread({}, cartItems), {}, _defineProperty({}, item.name, item));
    }

    cartItems[item.name].inCart += 1;
  } else {
    item.inCart = 1;
    cartItems = _defineProperty({}, item.name, item);
  }

  localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
} // Sets total cost to localstorage


function totalCost(item) {
  var totalCost = localStorage.getItem('totalCost');

  if (totalCost != null) {
    totalCost = parseInt(totalCost);
    localStorage.setItem('totalCost', totalCost + item.price);
  } else {
    localStorage.setItem('totalCost', item.price);
  }
} // Gets date in requires format


function formatDate(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
}

var reservationDate = document.getElementsByClassName('reservation-date')[0];

if (reservationDate) {
  var minDate = new Date();
  var maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 60);
  reservationDate.min = formatDate(minDate);
  reservationDate.max = formatDate(maxDate);
}

var userRef;
var today = new Date(); // Displayes the reservations already reserved

_auth__WEBPACK_IMPORTED_MODULE_0__.auth.onAuthStateChanged(function (user) {
  if (user) {
    userRef = user; // localStorage.setItem('loggedIn', 'true');

    _auth__WEBPACK_IMPORTED_MODULE_0__.db.ref('users/' + user.uid + '/reservations/').on('value', function (snap) {
      console.log(snap.val());
      var main = document.getElementById('view-reservations-wrapper');
      main.innerHTML = '';
      var tbl = document.createElement('table');
      tbl.setAttribute('id', 'reservations_table');
      main.appendChild(tbl);
      var tblrw = document.createElement('tr');
      tbl.appendChild(tblrw);
      var tblh1 = document.createElement('th');
      tblh1.innerText = 'S No.';
      tblrw.appendChild(tblh1);
      var tblh2 = document.createElement('th');
      tblh2.innerText = 'Date';
      tblrw.appendChild(tblh2);
      var tblh3 = document.createElement('th');
      tblh3.innerText = 'Timing';
      tblrw.appendChild(tblh3);
      var tblh4 = document.createElement('th');
      tblh4.innerText = "Reserved Table No's";
      var tblh5 = document.createElement('th');
      tblh5.innerText = "Actions";
      tblrw.appendChild(tblh1);
      tblrw.appendChild(tblh2);
      tblrw.appendChild(tblh3);
      tblrw.appendChild(tblh4);
      tblrw.appendChild(tblh5);
      var tbody = document.createElement('tbody');
      tbody.setAttribute('id', 'table_body');
      tbl.appendChild(tbody);
      var tableBody = '';

      if (snap.val() === null) {
        tableBody += '<td colspan="5">You dont have any reservations</td>';
      }

      var sno = 0;

      for (var date in snap.val()) {
        var rowSpan = Object.keys(snap.val()[date]).length;
        var times = Object.keys(snap.val()[date]);
        tableBody += "<tr><td  rowspan=\"".concat(rowSpan, "\">").concat(sno + 1, "</td>");
        sno++;
        tableBody += "<td rowspan=\"".concat(rowSpan, "\">").concat(date, "</td>");
        var timeValues = Object.values(snap.val()[date]);

        for (var _i2 = 0; _i2 < rowSpan; _i2++) {
          var tableNos = timeValues[_i2]['tableNo'];
          tableBody += "<td>".concat(times[_i2], "</td>");
          tableBody += "<td>".concat(tableNos, "</td>");
          var reservations = [date, times[_i2], tableNos];
          var currentTime = today.getTime();
          var reservedTime = new window.Date(date + ' ' + times[_i2]).getTime();

          if (reservedTime - currentTime <= 600000) {
            tableBody += "<td><p>Thank You! Hope we see you soon again.</p></td>";
          } else {
            tableBody += "<td><button onclick=\"cancelReservation('".concat(reservations, "')\" id=\"cancel_reservation\">Cancel Reservation</button></td>");
          }

          tableBody += "</tr>";
        }
      }

      document.getElementById('table_body').innerHTML += tableBody;
    });
  } else {
    var main = document.getElementById('view-reservations-wrapper');
    main.innerHTML = '<h2>Please Login to view details</h2>';
  }
}); // Cancels reservatons

function cancelReservation(reservations) {
  if (confirm('Are you sure about cancelling this reservation')) {
    console.log(reservations);
    var tableNos = reservations.slice(17);
    var reserDate = reservations.split(',')[0];
    var reserTime = reservations.split(',')[1]; // Database user refereance

    var userReserRef = _auth__WEBPACK_IMPORTED_MODULE_0__.db.ref('users/' + userRef.uid + '/reservations/' + reserDate + '/' + reserTime);
    console.log(userReserRef);
    var res; // Deletes at user end

    userReserRef.remove();
    var reserRef = _auth__WEBPACK_IMPORTED_MODULE_0__.db.ref('reservations/' + reserDate + '/' + reserTime);
    reserRef.once('value', function (snap) {
      console.log(snap.val());
      var tab = snap.val().reservedTableNo;
      console.log('tab = ', tab);
      var tabArray = tab.split(',');
      console.log('tabArray = ', tabArray);
      var tableNosArray = tableNos.split(',');
      console.log('tableNosArray = ', tableNosArray);
      res = tabArray.filter(function (val) {
        return !tableNosArray.includes(val);
      });
      console.log('res ', res);
      return res; // let;
    }).then(function () {
      // Deletes at backend
      var finalRes = res.join(',');

      if (finalRes.length === 0) {
        reserRef.remove();
      } else {
        reserRef.set({
          reservedTableNo: finalRes
        });
      }
    });
  }
}

window.cancelReservation = cancelReservation;

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
/******/ 	__webpack_require__("./src/app/user.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtLy4vc3JjL2FwcC9hdXRoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vLi9zcmMvYXBwL3VzZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21hbmFnZW1lbnRfc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tYW5hZ2VtZW50X3N5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfbWFuYWdlbWVudF9zeXN0ZW0vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInNpZ251cEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJsb2dvdXQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luIiwic3R5bGUiLCJkaXNwbGF5IiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGgiLCJkYiIsImRhdGFiYXNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJzZXRJdGVtIiwibGluayIsImVtYWlsIiwiaW5kZXhPZiIsImlubmVySFRNTCIsImRpc3BsYXlOYW1lIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIndyaXRlVXNlckRhdGEiLCJ1c2VySWQiLCJuYW1lIiwicmVmIiwic2V0IiwidXNlcm5hbWUiLCJ0b2dnbGVTaWdudXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRvZ2dsZUxvZ2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVzZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJjdXJyZW50VXNlciIsInVwZGF0ZVByb2ZpbGUiLCJ1aWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJ0b0xvd2VyQ2FzZSIsInNpZ25PdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xpY2siLCJhY3RpdmF0ZUNhcnRXcmFwcGVyIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWN0aXZhdGVSZXNlcnZhdGlvbiIsImFjdGl2YXRlVmlld1Jlc2VydmF0aW9uIiwicmVzdGF1cmFudCIsIm1lbnUiLCJpdGVtcyIsInByaWNlIiwiY2F0ZWdvcnkiLCJzaXplcyIsImltZyIsImluQ2FydCIsInVwZGF0ZVRvdGFsQ29zdCIsInRvdGFsQ29zdCIsIml0ZW1QcmljZXMiLCJpIiwiaW5uZXJUZXh0IiwicGFyc2VJbnQiLCJ1cGRhdGVDYXJ0TnVtYmVycyIsInRvdGFsQ2FydE51bSIsIm51bSIsInRleHRDb250ZW50IiwicmVuZGVyQ2FydEl0ZW1zIiwiY2FydEl0ZW1zIiwicG9wdXAiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJpdGVtIiwiZWxlbWVudCIsImxpIiwiaXRlbVRpdGxlIiwidG9VcHBlckNhc2UiLCJhcHBlbmRDaGlsZCIsIml0ZW1QcmljZSIsIml0ZW1RdWFudGl0eSIsInNldEF0dHJpYnV0ZSIsIml0ZW1EZWxldGUiLCJ0b3RhbENvc3RWYWx1ZSIsImNoZWNrT3V0QnRuIiwiY2hlY2tPdXQiLCJ0b2dnbGUiLCJyZW5kZXJJdGVtcyIsIm1haW4iLCJpdGVtV3JhcHBlciIsIml0ZW1OYW1lIiwiYWRkVG9DYXJ0IiwiY2FydHMiLCJjYXJ0TnVtYmVycyIsIm9uTG9hZENhcnROdWJlcnMiLCJwcm9kdWN0TnVtYmVycyIsInNldEl0ZW1zIiwidW5kZWZpbmVkIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJyZXNlcnZhdGlvbkRhdGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwic2V0RGF0ZSIsIm1pbiIsIm1heCIsInVzZXJSZWYiLCJ0b2RheSIsIm9uIiwic25hcCIsInZhbCIsInRibCIsInRibHJ3IiwidGJsaDEiLCJ0YmxoMiIsInRibGgzIiwidGJsaDQiLCJ0YmxoNSIsInRib2R5IiwidGFibGVCb2R5Iiwic25vIiwicm93U3BhbiIsIk9iamVjdCIsImtleXMiLCJ0aW1lcyIsInRpbWVWYWx1ZXMiLCJ2YWx1ZXMiLCJ0YWJsZU5vcyIsInJlc2VydmF0aW9ucyIsImN1cnJlbnRUaW1lIiwiZ2V0VGltZSIsInJlc2VydmVkVGltZSIsImNhbmNlbFJlc2VydmF0aW9uIiwiY29uZmlybSIsInNsaWNlIiwicmVzZXJEYXRlIiwic3BsaXQiLCJyZXNlclRpbWUiLCJ1c2VyUmVzZXJSZWYiLCJyZXMiLCJyZW1vdmUiLCJyZXNlclJlZiIsIm9uY2UiLCJ0YWIiLCJyZXNlcnZlZFRhYmxlTm8iLCJ0YWJBcnJheSIsInRhYmxlTm9zQXJyYXkiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImZpbmFsUmVzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0Ms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QSxVQUFJRCxRQUFRLENBQUNoTCxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCd0ssZ0JBQVEsQ0FBQ0QsTUFBVDtBQUNILE9BRkQsTUFFTztBQUNIQyxnQkFBUSxDQUFDMUksR0FBVCxDQUFhO0FBQ1Q2SSx5QkFBZSxFQUFFSztBQURSLFNBQWI7QUFHSDtBQUNKLEtBeEJMO0FBeUJIO0FBQ0o7O0FBQ0R4SixNQUFNLENBQUN1SSxpQkFBUCxHQUEyQkEsaUJBQTNCLEM7Ozs7OztVQy9jQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoidXNlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmNvbnN0IHNpZ251cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbnVwLWZvcm0tY29udGFpbmVyX19mb3JtJyk7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1mb3JtLWNvbnRhaW5lcl9fZm9ybScpO1xyXG5jb25zdCBsb2dvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0Jyk7XHJcbmNvbnN0IGxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcbmxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxubG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgICAgIGFwaUtleTogJ0FJemFTeUF6VThTWDBxOS1Vc21HbjlrZEFKV1dyOWI1akZRV1VJTScsXHJcbiAgICAgICAgYXV0aERvbWFpbjogJ3Jlc3RhdXJhbnQtODRmYzIuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgICAgICBwcm9qZWN0SWQ6ICdyZXN0YXVyYW50LTg0ZmMyJyxcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiAncmVzdGF1cmFudC04NGZjMi5hcHBzcG90LmNvbScsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6ICcyMjU4NjYxNzI1MjcnLFxyXG4gICAgICAgIGFwcElkOiAnMToyMjU4NjYxNzI1Mjc6d2ViOmExMzRhODdjN2RlM2VhNDE3MzY1OWEnLFxyXG4gICAgICAgIG1lYXN1cmVtZW50SWQ6ICdHLTc5UTdER0NTR0onLFxyXG4gICAgfTtcclxuICAgIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcbmV4cG9ydCB2YXIgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuZXhwb3J0IHZhciBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09IG51bGwpIHtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgJ3RydWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ29udHJvbHMgZGlzcGxheWluZyBVc2VybmFtZSBvbiBoZWFkZXJcclxuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgIGlmICh1c2VyICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZScpIHtcclxuICAgICAgICBsZXQgbGluayA9ICcnO1xyXG4gICAgICAgIGlmICh1c2VyLmVtYWlsLmluZGV4T2YoJ3ZpbmVhdCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsaW5rID0gJy9tYW5hZ2VyLmh0bWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmsgPSAnL3VzZXIuaHRtbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldC13cmFwcGVyJykuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgYDxhIGhyZWY9XCIke2xpbmt9XCIgaWQ9XCJncmVldFwiPmAgK1xyXG4gICAgICAgICAgICBgSGVsbG8sICR7dXNlci5kaXNwbGF5TmFtZX1gICtcclxuICAgICAgICAgICAgJzwvYT4nO1xyXG4gICAgICAgIGxvZ291dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0LXdyYXBwZXInKS5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICBsb2dvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gQ29udHJvbHMgcmVkaXJlY3Rpb24gZnJvbSBhdXRob3VyaXphdGlvbiBwYWdlXHJcbmZ1bmN0aW9uIHJlZGlyZWN0KGVtYWlsKSB7XHJcbiAgICBpZiAoZW1haWwuaW5kZXhPZignQHZpbmVhdC5jb20nKSAhPT0gLTEpIHtcclxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXQnKS5ocmVmID0gJy9tYW5hZ2VyLmh0bWwnO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbWFuYWdlci5odG1sJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0JykuaHJlZiA9ICcvdXNlci5odG1sJztcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3VzZXIuaHRtbCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNhdmVzIGRhdGEgaW50byBEYXRhYmFzZVxyXG5mdW5jdGlvbiB3cml0ZVVzZXJEYXRhKHVzZXJJZCwgbmFtZSwgZW1haWwpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgICAgLmRhdGFiYXNlKClcclxuICAgICAgICAucmVmKCd1c2Vycy8nICsgdXNlcklkKVxyXG4gICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZ251cCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi10b2dnbGUnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdG9nZ2xlJykuc3R5bGUuY29sb3IgPSAnIzIyMic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLXRvZ2dsZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDBhMmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtdG9nZ2xlJykuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1mb3JtLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbndpbmRvdy50b2dnbGVTaWdudXAgPSB0b2dnbGVTaWdudXA7XHJcbmZ1bmN0aW9uIHRvZ2dsZUxvZ2luKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXRvZ2dsZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDBhMmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi10b2dnbGUnKS5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtdG9nZ2xlJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC10b2dnbGUnKS5zdHlsZS5jb2xvciA9ICcjMjIyJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxud2luZG93LnRvZ2dsZUxvZ2luID0gdG9nZ2xlTG9naW47XHJcblxyXG4vLyBTaWdudXAgZnVuY3Rpb25hbGl0eVxyXG5pZiAoc2lnbnVwRm9ybSkge1xyXG4gICAgc2lnbnVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBhbGVydCgnVXNlciBhbHJlYWR5IGxvZ2dlZCBpblxcblBsZWFzZSBsb2dvdXQgdG8gY29udGludWUnKTtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHNpZ251cEZvcm1bJ3NpZ24tdXAtdXNlcm5hbWUnXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBzaWdudXBGb3JtWydzaWduLXVwLWVtYWlsJ10udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gc2lnbnVwRm9ybVsnc2lnbi11cC1wYXNzd29yZCddLnZhbHVlO1xyXG4gICAgICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY3JlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGguY3VycmVudFVzZXIudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZVVzZXJEYXRhKGNyZWQudXNlci51aWQsIHVzZXJuYW1lLCBlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZC51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWdudXBGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N1Y2Vzc2Z1bGx5IHNpZ25lZCB1cFxcbiBZb3UgY2FuIGxvZyBpbiBub3cnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBMb2dpbiBGdW5jdGlvbmFsaXR5XHJcbmlmIChsb2dpbkZvcm0pIHtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBhbGVydCgnVXNlciBhbHJlYWR5IGxvZ2dlZCBpblxcblBsZWFzZSBsb2dvdXQgdG8gY29udGludWUnKTtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkSW4nKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGxvZ2luRm9ybVsnbG9nLWluLWVtYWlsJ10udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gbG9naW5Gb3JtWydsb2ctaW4tcGFzc3dvcmQnXS52YWx1ZTtcclxuICAgICAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoY3JlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWQudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N1Y2Vzc2Z1bGx5IGxvZ2dlZCBpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdsb2dnZWRJblVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVkLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJblVzZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3QodXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gTG9nb3V0IEZ1bmN0aW9uYWxpdHlcclxuaWYgKGxvZ291dCkge1xyXG4gICAgbG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3VjZXNzZnVsbHkgbG9nZ2VkIG91dCcpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW5Vc2VyJywgJycpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJ2F1dGguaHRtbCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1lvdSBhcmUgbm90IGxvZ2dlZCBpbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi9hdXRoJztcclxuLy8gaW1wb3J0IGNhbnZhc0xvYWRlciBmcm9tICcuL2xheW91dC5qcyc7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21lci1tb2RlJylbMF0uY2xpY2soKTtcclxuXHJcbi8vIEFjdGl2YXRlcyBDYXJ0XHJcbmZ1bmN0aW9uIGFjdGl2YXRlQ2FydFdyYXBwZXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZS1jYXJ0LXdyYXBwZXInKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1vbmxpbmUnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbicpLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctcmVzZXJ2YXRpb25zJykuY2xhc3NOYW1lID0gJyc7XHJcbn1cclxuLy8gQWN0aXZhdGVzIHJlc2VydmF0aW9uc1xyXG5mdW5jdGlvbiBhY3RpdmF0ZVJlc2VydmF0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKS5jbGFzc05hbWUgPSAnJztcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJylcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUtcmVzZXJ2YXRpb24td3JhcHBlcicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLW9ubGluZScpLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1yZXNlcnZhdGlvbnMnKS5jbGFzc05hbWUgPSAnJztcclxufVxyXG4vLyBBY3RpdmF0ZXMgdGFibGUgZm9yIHJlc2VydmVkXHJcbmZ1bmN0aW9uIGFjdGl2YXRlVmlld1Jlc2VydmF0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKS5jbGFzc05hbWUgPSAnJztcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJylcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGUtdmlldy1yZXNlcnZhdGlvbnMtd3JhcHBlcicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyLW9ubGluZScpLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJykuY2xhc3NOYW1lID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1yZXNlcnZhdGlvbnMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBzaWRlYmFyIGZ1bmN0aW9uYWxpdHlcclxuZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgnb3JkZXItb25saW5lJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlQ2FydFdyYXBwZXIpO1xyXG5kb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbicpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmF0ZVJlc2VydmF0aW9uKTtcclxuZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgndmlldy1yZXNlcnZhdGlvbnMnKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZhdGVWaWV3UmVzZXJ2YXRpb24pO1xyXG5cclxuLy8gUmVzdGF1cmFudCBtZW51XHJcbnZhciByZXN0YXVyYW50ID0ge1xyXG4gICAgbWVudToge1xyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2tlJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnZHJpbmtzJyxcclxuICAgICAgICAgICAgICAgIHNpemVzOiBbJ3NtYWxsJywgJ2xhcmdlJ10sXHJcbiAgICAgICAgICAgICAgICBpbWc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzUxakttMU1ZNDNMLl9TTDEwMDBfLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpbkNhcnQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdwZXBzaScsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjAsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2RyaW5rcycsXHJcbiAgICAgICAgICAgICAgICBzaXplczogWydzbWFsbCcsICdsYXJnZSddLFxyXG4gICAgICAgICAgICAgICAgaW1nOlxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFDQk5oSUp0MEwuanBnJyxcclxuICAgICAgICAgICAgICAgIGluQ2FydDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3dhdGVyJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnZHJpbmtzJyxcclxuICAgICAgICAgICAgICAgIHNpemVzOiBbJ3NtYWxsJywgJ2xhcmdlJ10sXHJcbiAgICAgICAgICAgICAgICBpbWc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvSS84MTBveEpuZFVGTC5fU0wxNTAwXy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYnVyZ2VyJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0MCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnanVuayBmb29kJyxcclxuICAgICAgICAgICAgICAgIHNpemVzOiBbJ3NtYWxsJywgJ2xhcmdlJ10sXHJcbiAgICAgICAgICAgICAgICBpbWc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1nLmJ1enpmZWVkLmNvbS90aHVtYm5haWxlci1wcm9kLXVzLWVhc3QtMS92aWRlby1hcGkvYXNzZXRzLzE2NTM4NC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJpZXMnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdqdW5rIGZvb2QnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZXM6IFsnc21hbGwnLCAnbGFyZ2UnXSxcclxuICAgICAgICAgICAgICAgIGltZzpcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly90aHVtYm9yLnRoZWRhaWx5bWVhbC5jb20vcjE5RHIxZXBlcXhUWm02TzVDdUZqMFQwa01FPS8vaHR0cHM6Ly93d3cudGhlZGFpbHltZWFsLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3JlY2lwZS8yMDE4L2lTdG9jay02ODc5OTkxMThfMV8uanBnJyxcclxuICAgICAgICAgICAgICAgIGluQ2FydDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpenphJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnanVuayBmb29kJyxcclxuICAgICAgICAgICAgICAgIHNpemVzOiBbJ3NtYWxsJywgJ2xhcmdlJ10sXHJcbiAgICAgICAgICAgICAgICBpbWc6XHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy90YXN0eS1wZXBwZXJvbmktcGl6emEtYW5kLWNvb2tpbmctaW5ncmVkaWVudHMtdG9tYXRvZXMtYmFzaWwtb24tYmxhY2stcGljdHVyZS1pZDEwODM0ODc5NDg/az02Jm09MTA4MzQ4Nzk0OCZzPTYxMng2MTImdz0wJmg9bEstbXRESFhBNGFRZWNabFUtS0p1QWxOOVlqZ24zdm1WMnp6NU1NTjdlND0nLFxyXG4gICAgICAgICAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gVXBkYXRlcyB0aGUgdG90YWwgY29zdCB2YWx1ZVxyXG5mdW5jdGlvbiB1cGRhdGVUb3RhbENvc3QoKSB7XHJcbiAgICBsZXQgdG90YWxDb3N0ID0gMDtcclxuICAgIGxldCBpdGVtUHJpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnQtaXRlbS1wcmljZScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtUHJpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVByaWNlc1tpXS5pbm5lclRleHQpO1xyXG4gICAgICAgIHRvdGFsQ29zdCArPSBwYXJzZUludChpdGVtUHJpY2VzW2ldLmlubmVyVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxDb3N0KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRvdGFsQ29zdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWxDb3N0JywgdG90YWxDb3N0KTtcclxufVxyXG4vLyBVcGRhdGVzIHRoZSBjYXJ0IG51bWJlcnMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gdXBkYXRlQ2FydE51bWJlcnMoKSB7XHJcbiAgICBsZXQgdG90YWxDYXJ0TnVtID0gMDtcclxuICAgIGxldCBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1xdWFudGl0eScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW1baV0udmFsdWUpO1xyXG4gICAgICAgIHRvdGFsQ2FydE51bSArPSBwYXJzZUludChudW1baV0udmFsdWUpO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnROdW1iZXJzJywgdG90YWxDYXJ0TnVtKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0IC5udW1iZXItb2YtaXRlbXMnKS50ZXh0Q29udGVudCA9IHRvdGFsQ2FydE51bTtcclxufVxyXG4vLyBEaXNwbGF5cyB0aGUgY2FydFxyXG5mdW5jdGlvbiByZW5kZXJDYXJ0SXRlbXMoKSB7XHJcbiAgICBsZXQgY2FydEl0ZW1zID0gJyc7XHJcbiAgICBwb3B1cC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zSW5DYXJ0JykpO1xyXG4gICAgY29uc29sZS5sb2coY2FydEl0ZW1zKTtcclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gY2FydEl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNhcnRJdGVtc1tpdGVtXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcclxuICAgICAgICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gZWxlbWVudC5uYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcnQtaXRlbS1wcmljZScpO1xyXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPVxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtZW50LnByaWNlKSAqIHBhcnNlSW50KGVsZW1lbnQuaW5DYXJ0KTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG5cclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1RdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaXRlbVF1YW50aXR5LnZhbHVlID0gZWxlbWVudC5pbkNhcnQ7XHJcbiAgICAgICAgaXRlbVF1YW50aXR5LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcXVhbnRpdHknKTtcclxuICAgICAgICBpdGVtUXVhbnRpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgIGl0ZW1RdWFudGl0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3F1YW50aXR5Jyk7XHJcbiAgICAgICAgaXRlbVF1YW50aXR5LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcclxuXHJcbiAgICAgICAgaXRlbVF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbkNhcnQgPSBwYXJzZUludChpdGVtUXVhbnRpdHkudmFsdWUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXNJbkNhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuICAgICAgICAgICAgdXBkYXRlVG90YWxDb3N0KCk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJDYXJ0SXRlbXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaXRlbVF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGl0ZW1EZWxldGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZWxldGUnKTtcclxuICAgICAgICBpdGVtRGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVsZXRlJyk7XHJcbiAgICAgICAgaXRlbURlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGl0ZW1EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjYXJ0SXRlbXNbaXRlbV07XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtc0luQ2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG4gICAgICAgICAgICB1cGRhdGVUb3RhbENvc3QoKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckNhcnRJdGVtcygpO1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJ0TnVtYmVycygpO1xyXG4gICAgICAgICAgICAvLyBsZXQgY2FydE51bWJlcnMgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydE51bWJlcnMnKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGl0ZW1EZWxldGUpO1xyXG5cclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XHJcbiAgICB9XHJcbiAgICBwb3B1cC5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICB1cGRhdGVUb3RhbENvc3QoKTtcclxuICAgIGxldCB0b3RhbENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdG90YWxDb3N0VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG90YWxDb3N0Jyk7XHJcbiAgICB0b3RhbENvc3QuaW5uZXJIVE1MID0gYFRvdGFsIGNvc3Q6ICR7dG90YWxDb3N0VmFsdWV9ICAmIzgzNzc7YDtcclxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHRvdGFsQ29zdCk7XHJcblxyXG4gICAgbGV0IGNoZWNrT3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrT3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tvdXRfX2J1dHRvbicpO1xyXG4gICAgY2hlY2tPdXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY2hlY2tPdXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdDaGVja291dCcpO1xyXG4gICAgY2hlY2tPdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jaGVja291dC5odG1sJztcclxuICAgIH0pO1xyXG5cclxuICAgIHBvcHVwLmFwcGVuZENoaWxkKGNoZWNrT3V0QnRuKTtcclxufVxyXG5cclxudmFyIHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrb3V0Jyk7XHJcbi8vIENoZWNrb3V0IHBvcHMgdXBcclxuZnVuY3Rpb24gY2hlY2tPdXQoKSB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICByZW5kZXJDYXJ0SXRlbXMoKTtcclxufVxyXG53aW5kb3cuY2hlY2tPdXQgPSBjaGVja091dDtcclxuXHJcbi8vIFJlbmRlcnMgZWFjaCBtZW51IGl0ZW0gb24gcGFnZSBkeW5hbWljYWxseVxyXG5mdW5jdGlvbiByZW5kZXJJdGVtcyhpdGVtKSB7XHJcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LXdyYXBwZXInKTtcclxuXHJcbiAgICB2YXIgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0td3JhcHBlcicpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XHJcblxyXG4gICAgdmFyIGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWUudG9VcHBlckNhc2UoKTsgLy9cclxuICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuXHJcbiAgICB2YXIgYWRkVG9DYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUb0NhcnQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvLWNhcnQnKTtcclxuICAgIGFkZFRvQ2FydC50ZXh0Q29udGVudCA9ICdBZGQgdG8gY2FydCc7XHJcbiAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChhZGRUb0NhcnQpO1xyXG5cclxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGl0ZW0uaW1nKTtcclxuICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgdmFyIGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAvLyBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XHJcbiAgICAvLyBpdGVtUHJpY2UuaW5uZXJIVE1MID0gYGBcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XHJcbiAgICBpdGVtUHJpY2UuaW5uZXJIVE1MID0gYFByaWNlOiAke2l0ZW0ucHJpY2V9ICYjODM3NztgOyAvL1xyXG4gICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxufVxyXG5cclxuLy8gQ29udHJvbHMgcmVuZGVyaW5nIGFsbCBpdGVtc1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHJlc3RhdXJhbnQubWVudS5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgcmVuZGVySXRlbXMocmVzdGF1cmFudC5tZW51Lml0ZW1zW2ldKTtcclxufVxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgQWRkLVRvLUNhcnQgYnV0dG9uXHJcbmxldCBjYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdG8tY2FydCcpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYXJ0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjYXJ0TnVtYmVycyhyZXN0YXVyYW50Lm1lbnUuaXRlbXNbaV0pO1xyXG4gICAgICAgIHRvdGFsQ29zdChyZXN0YXVyYW50Lm1lbnUuaXRlbXNbaV0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIExvYWRzIHRoZSBjYXJ0IG51bWJlcnMgb24gbG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gb25Mb2FkQ2FydE51YmVycygpIHtcclxuICAgIGxldCBwcm9kdWN0TnVtYmVycyA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0TnVtYmVycycpKTtcclxuICAgIGlmIChwcm9kdWN0TnVtYmVycykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0IHNwYW4nKS50ZXh0Q29udGVudCA9IHByb2R1Y3ROdW1iZXJzO1xyXG4gICAgfVxyXG59XHJcbm9uTG9hZENhcnROdWJlcnMoKTtcclxuXHJcbi8vIENvbnRyb2xzIHN0b3JhZ2Ugb2YgY2FydCBudW1iZXJzIGluIGxvY2Fsc3RvcmFnZVxyXG5mdW5jdGlvbiBjYXJ0TnVtYmVycyhpdGVtKSB7XHJcbiAgICBsZXQgcHJvZHVjdE51bWJlcnMgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydE51bWJlcnMnKSk7XHJcbiAgICBpZiAocHJvZHVjdE51bWJlcnMpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydE51bWJlcnMnLCBwcm9kdWN0TnVtYmVycyArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0IC5udW1iZXItb2YtaXRlbXMnKS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIHByb2R1Y3ROdW1iZXJzICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnROdW1iZXJzJywgMSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnQgc3BhbicpLnRleHRDb250ZW50ID0gMTtcclxuICAgIH1cclxuICAgIHNldEl0ZW1zKGl0ZW0pO1xyXG59XHJcblxyXG4vLyBTdG9yYWdlIG9mIGNhcnQgaXRlbXMgaW4gbG9jYWxzdG9yYWdlXHJcbmZ1bmN0aW9uIHNldEl0ZW1zKGl0ZW0pIHtcclxuICAgIGxldCBjYXJ0SXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbXNJbkNhcnQnKTtcclxuICAgIGNhcnRJdGVtcyA9IEpTT04ucGFyc2UoY2FydEl0ZW1zKTtcclxuXHJcbiAgICBpZiAoY2FydEl0ZW1zICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2FydEl0ZW1zW2l0ZW0ubmFtZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgIFtpdGVtLm5hbWVdOiBpdGVtLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJ0SXRlbXNbaXRlbS5uYW1lXS5pbkNhcnQgKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5pbkNhcnQgPSAxO1xyXG4gICAgICAgIGNhcnRJdGVtcyA9IHtcclxuICAgICAgICAgICAgW2l0ZW0ubmFtZV06IGl0ZW0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtc0luQ2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG59XHJcblxyXG4vLyBTZXRzIHRvdGFsIGNvc3QgdG8gbG9jYWxzdG9yYWdlXHJcbmZ1bmN0aW9uIHRvdGFsQ29zdChpdGVtKSB7XHJcbiAgICBsZXQgdG90YWxDb3N0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsQ29zdCcpO1xyXG4gICAgaWYgKHRvdGFsQ29zdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdG90YWxDb3N0ID0gcGFyc2VJbnQodG90YWxDb3N0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWxDb3N0JywgdG90YWxDb3N0ICsgaXRlbS5wcmljZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbENvc3QnLCBpdGVtLnByaWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0cyBkYXRlIGluIHJlcXVpcmVzIGZvcm1hdFxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgIGxldCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xyXG59XHJcblxyXG5sZXQgcmVzZXJ2YXRpb25EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzZXJ2YXRpb24tZGF0ZScpWzBdO1xyXG5cclxuaWYgKHJlc2VydmF0aW9uRGF0ZSkge1xyXG4gICAgbGV0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IG1heERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbWF4RGF0ZS5zZXREYXRlKG1pbkRhdGUuZ2V0RGF0ZSgpICsgNjApO1xyXG4gICAgcmVzZXJ2YXRpb25EYXRlLm1pbiA9IGZvcm1hdERhdGUobWluRGF0ZSk7XHJcbiAgICByZXNlcnZhdGlvbkRhdGUubWF4ID0gZm9ybWF0RGF0ZShtYXhEYXRlKTtcclxufVxyXG5cclxudmFyIHVzZXJSZWY7XHJcbnZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4vLyBEaXNwbGF5ZXMgdGhlIHJlc2VydmF0aW9ucyBhbHJlYWR5IHJlc2VydmVkXHJcbmF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHVzZXJSZWYgPSB1c2VyO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWRJbicsICd0cnVlJyk7XHJcbiAgICAgICAgZGIucmVmKCd1c2Vycy8nICsgdXNlci51aWQgKyAnL3Jlc2VydmF0aW9ucy8nKS5vbigndmFsdWUnLCAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKTtcclxuICAgICAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1yZXNlcnZhdGlvbnMtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICAgICAgdGJsLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzZXJ2YXRpb25zX3RhYmxlJyk7XHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGJsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YmxydyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRibC5hcHBlbmRDaGlsZCh0Ymxydyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGJsaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICB0YmxoMS5pbm5lclRleHQgPSAnUyBOby4nO1xyXG4gICAgICAgICAgICB0Ymxydy5hcHBlbmRDaGlsZCh0YmxoMSk7XHJcbiAgICAgICAgICAgIGxldCB0YmxoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgICAgIHRibGgyLmlubmVyVGV4dCA9ICdEYXRlJztcclxuICAgICAgICAgICAgdGJscncuYXBwZW5kQ2hpbGQodGJsaDIpO1xyXG4gICAgICAgICAgICBsZXQgdGJsaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICB0YmxoMy5pbm5lclRleHQgPSAnVGltaW5nJztcclxuICAgICAgICAgICAgdGJscncuYXBwZW5kQ2hpbGQodGJsaDMpO1xyXG4gICAgICAgICAgICBsZXQgdGJsaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICB0YmxoNC5pbm5lclRleHQgPSBgUmVzZXJ2ZWQgVGFibGUgTm8nc2A7XHJcbiAgICAgICAgICAgIGxldCB0YmxoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgICAgIHRibGg1LmlubmVyVGV4dCA9IGBBY3Rpb25zYDtcclxuXHJcbiAgICAgICAgICAgIHRibHJ3LmFwcGVuZENoaWxkKHRibGgxKTtcclxuICAgICAgICAgICAgdGJscncuYXBwZW5kQ2hpbGQodGJsaDIpO1xyXG4gICAgICAgICAgICB0Ymxydy5hcHBlbmRDaGlsZCh0YmxoMyk7XHJcbiAgICAgICAgICAgIHRibHJ3LmFwcGVuZENoaWxkKHRibGg0KTtcclxuICAgICAgICAgICAgdGJscncuYXBwZW5kQ2hpbGQodGJsaDUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgICAgICAgICAgdGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJsZV9ib2R5Jyk7XHJcbiAgICAgICAgICAgIHRibC5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZUJvZHkgPSAnJztcclxuICAgICAgICAgICAgaWYgKHNuYXAudmFsKCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlQm9keSArPVxyXG4gICAgICAgICAgICAgICAgICAgICc8dGQgY29sc3Bhbj1cIjVcIj5Zb3UgZG9udCBoYXZlIGFueSByZXNlcnZhdGlvbnM8L3RkPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNubyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGF0ZSBpbiBzbmFwLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93U3BhbiA9IE9iamVjdC5rZXlzKHNuYXAudmFsKClbZGF0ZV0pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IE9iamVjdC5rZXlzKHNuYXAudmFsKClbZGF0ZV0pO1xyXG4gICAgICAgICAgICAgICAgdGFibGVCb2R5ICs9IGA8dHI+PHRkICByb3dzcGFuPVwiJHtyb3dTcGFufVwiPiR7c25vICsgMX08L3RkPmA7XHJcbiAgICAgICAgICAgICAgICBzbm8rKztcclxuICAgICAgICAgICAgICAgIHRhYmxlQm9keSArPSBgPHRkIHJvd3NwYW49XCIke3Jvd1NwYW59XCI+JHtkYXRlfTwvdGQ+YDtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzbmFwLnZhbCgpW2RhdGVdKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93U3BhbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlTm9zID0gdGltZVZhbHVlc1tpXVsndGFibGVObyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQm9keSArPSBgPHRkPiR7dGltZXNbaV19PC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQm9keSArPSBgPHRkPiR7dGFibGVOb3N9PC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNlcnZhdGlvbnMgPSBbZGF0ZSwgdGltZXNbaV0sIHRhYmxlTm9zXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSB0b2RheS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc2VydmVkVGltZSA9IG5ldyB3aW5kb3cuRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSArICcgJyArIHRpbWVzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc2VydmVkVGltZSAtIGN1cnJlbnRUaW1lIDw9IDYwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUJvZHkgKz0gYDx0ZD48cD5UaGFuayBZb3UhIEhvcGUgd2Ugc2VlIHlvdSBzb29uIGFnYWluLjwvcD48L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVCb2R5ICs9IGA8dGQ+PGJ1dHRvbiBvbmNsaWNrPVwiY2FuY2VsUmVzZXJ2YXRpb24oJyR7cmVzZXJ2YXRpb25zfScpXCIgaWQ9XCJjYW5jZWxfcmVzZXJ2YXRpb25cIj5DYW5jZWwgUmVzZXJ2YXRpb248L2J1dHRvbj48L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQm9keSArPSBgPC90cj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZV9ib2R5JykuaW5uZXJIVE1MICs9IHRhYmxlQm9keTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1yZXNlcnZhdGlvbnMtd3JhcHBlcicpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJzxoMj5QbGVhc2UgTG9naW4gdG8gdmlldyBkZXRhaWxzPC9oMj4nO1xyXG4gICAgfVxyXG59KTtcclxuLy8gQ2FuY2VscyByZXNlcnZhdG9uc1xyXG5mdW5jdGlvbiBjYW5jZWxSZXNlcnZhdGlvbihyZXNlcnZhdGlvbnMpIHtcclxuICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgYWJvdXQgY2FuY2VsbGluZyB0aGlzIHJlc2VydmF0aW9uJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNlcnZhdGlvbnMpO1xyXG4gICAgICAgIHZhciB0YWJsZU5vcyA9IHJlc2VydmF0aW9ucy5zbGljZSgxNyk7XHJcbiAgICAgICAgdmFyIHJlc2VyRGF0ZSA9IHJlc2VydmF0aW9ucy5zcGxpdCgnLCcpWzBdO1xyXG4gICAgICAgIHZhciByZXNlclRpbWUgPSByZXNlcnZhdGlvbnMuc3BsaXQoJywnKVsxXTtcclxuXHJcbiAgICAgICAgLy8gRGF0YWJhc2UgdXNlciByZWZlcmVhbmNlXHJcbiAgICAgICAgbGV0IHVzZXJSZXNlclJlZiA9IGRiLnJlZihcclxuICAgICAgICAgICAgJ3VzZXJzLycgK1xyXG4gICAgICAgICAgICAgICAgdXNlclJlZi51aWQgK1xyXG4gICAgICAgICAgICAgICAgJy9yZXNlcnZhdGlvbnMvJyArXHJcbiAgICAgICAgICAgICAgICByZXNlckRhdGUgK1xyXG4gICAgICAgICAgICAgICAgJy8nICtcclxuICAgICAgICAgICAgICAgIHJlc2VyVGltZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlclJlc2VyUmVmKTtcclxuICAgICAgICB2YXIgcmVzO1xyXG5cclxuICAgICAgICAvLyBEZWxldGVzIGF0IHVzZXIgZW5kXHJcbiAgICAgICAgdXNlclJlc2VyUmVmLnJlbW92ZSgpO1xyXG4gICAgICAgIGxldCByZXNlclJlZiA9IGRiLnJlZigncmVzZXJ2YXRpb25zLycgKyByZXNlckRhdGUgKyAnLycgKyByZXNlclRpbWUpO1xyXG4gICAgICAgIHJlc2VyUmVmXHJcbiAgICAgICAgICAgIC5vbmNlKCd2YWx1ZScsIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCB0YWIgPSBzbmFwLnZhbCgpLnJlc2VydmVkVGFibGVObztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YWIgPSAnLCB0YWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYkFycmF5ID0gdGFiLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFiQXJyYXkgPSAnLCB0YWJBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVOb3NBcnJheSA9IHRhYmxlTm9zLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFibGVOb3NBcnJheSA9ICcsIHRhYmxlTm9zQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdGFiQXJyYXkuZmlsdGVyKCh2YWwpID0+ICF0YWJsZU5vc0FycmF5LmluY2x1ZGVzKHZhbCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcyAnLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICAgIC8vIGxldDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlcyBhdCBiYWNrZW5kXHJcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxSZXMgPSByZXMuam9pbignLCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsUmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2VyUmVmLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNlclJlZi5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZlZFRhYmxlTm86IGZpbmFsUmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cuY2FuY2VsUmVzZXJ2YXRpb24gPSBjYW5jZWxSZXNlcnZhdGlvbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwL3VzZXIuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9