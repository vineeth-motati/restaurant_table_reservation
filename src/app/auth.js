// import { auth } from './index.js';
const signupForm = document.querySelector('#sign-up-form');
const loginForm = document.querySelector('#log-in-form');
const logout = document.getElementById('logout');
const login = document.getElementById('login');
login.style.display = 'inline';
logout.style.display = 'none';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: 'AIzaSyAzU8SX0q9-UsmGn9kdAJWWr9b5jFQWUIM',
    authDomain: 'restaurant-84fc2.firebaseapp.com',
    projectId: 'restaurant-84fc2',
    storageBucket: 'restaurant-84fc2.appspot.com',
    messagingSenderId: '225866172527',
    appId: '1:225866172527:web:a134a87c7de3ea4173659a',
    measurementId: 'G-79Q7DGCSGJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export var auth = firebase.auth();
export var db = firebase.database();

// Controls displaying Username on header
auth.onAuthStateChanged((user) => {
    if (user && localStorage.getItem('loggedIn') === 'true') {
        let link = '';
        if (user.email.indexOf('vineat') !== -1) {
            link = '/manager.html';
        } else {
            link = '/user.html';
        }
        document.getElementById('greet-wrapper').innerHTML =
            `<a href="${link}" id="greet">` +
            `Hello, ${user.displayName}` +
            '</a>';
        logout.style.display = 'inline';
        login.style.display = 'none';
    } else {
        document.getElementById('greet-wrapper').innerHTML = ``;
        logout.style.display = 'none';
        login.style.display = 'inline';
    }
});

// Controls redirection from authourization page
function redirect(email) {
    if (email.indexOf('@vineat.com') !== -1) {
        // document.getElementById('greet').href = '/manager.html';
        window.location = '/manager.html';
    } else {
        // document.getElementById('greet').href = '/user.html';
        window.location = '/user.html';
    }
}

// Saves data into Database
function writeUserData(userId, name, email) {
    firebase
        .database()
        .ref('users/' + userId)
        .set({
            username: name,
            email: email,
        });
}

// Signup functionality
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (localStorage.getItem('loggedIn') === 'true') {
            alert('User already logged in\nPlease logout to continue');
            loginForm.reset();
        } else if (localStorage.getItem('loggedIn') === 'false') {
            const username = signupForm['sign-up-username'].value;
            const email = signupForm['sign-up-email'].value;
            const password = signupForm['sign-up-password'].value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((cred) => {
                    auth.currentUser.updateProfile({
                        displayName: username,
                    });
                    writeUserData(cred.user.uid, username, email);
                    console.log(cred.user);
                    signupForm.reset();
                    alert('Sucessfully signed up\n You can log in now');
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
        // console.log(email, password);
    });
}

// Login Functionality
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (localStorage.getItem('loggedIn') === 'true') {
            alert('User already logged in\nPlease logout to continue');
            loginForm.reset();
        } else if (localStorage.getItem('loggedIn') === 'false') {
            const email = loginForm['log-in-email'].value;
            const password = loginForm['log-in-password'].value;

            auth.signInWithEmailAndPassword(email, password)
                .then((cred) => {
                    console.log(cred.user);
                    loginForm.reset();
                    alert('Sucessfully logged in');
                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem(
                        'loggedInUser',
                        JSON.stringify(cred.user)
                    );

                    let user = JSON.parse(localStorage.getItem('loggedInUser'));
                    redirect(user.email.toLowerCase());
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    });
}

// Logout Functionality
if (logout) {
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        if (localStorage.getItem('loggedIn') === 'true') {
            auth.signOut().then(() => {
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
