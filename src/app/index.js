import '../style/app.scss';
import '../style/auth.scss';
import '../style/menu.scss';
import '../style/about.scss';
import '../style/manage.scss';
import '../style/user.scss';
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
    } while ((target = target.offsetParent));

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + ((b - a) / 30) * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

var span = document.getElementsByClassName('close')[0];
if (span) {
    span.onclick = function () {
        modal.style.display = 'none';
    };
}

var obj1 = [1, 2, 3];
var obj2 = [...obj1, 4, 5];
console.log(obj2);

const logout = document.getElementById('logout');
if (localStorage.getItem('loggedIn') === 'true') {
    logout.style.display = 'inline';
    login.style.display = 'none';
} else if (localStorage.getItem('loggedIn') === 'false') {
    logout.style.display = 'none';
    login.style.display = 'inline';
}

// document.getElementById('btn').onclick = function clicked() {
//     console.log('clicked again');
//     // var data = 'as';
//     // firebase
//     //     .database()
//     //     .ref('tes/' + data)
//     //     .set({
//     //         d: data,
//     //     });
// };
