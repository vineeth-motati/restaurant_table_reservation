// import { auth } from './auth.js';

console.log('hello, Manager');

import { fabric } from 'fabric';

import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

let canvas;
let number;
const grid = 30;
const backgroundColor = '#626262';
const lineStroke = '#ebebeb';
const tableFill = 'rgba(187, 187, 187, 0.7)';
const tableStroke = '#5c5c5c';
const tableShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
const chairFill = 'rgba(75, 75, 75, 0.7)';
const chairStroke = '#32230b';
const chairShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
// const barFill = 'rgba(0, 93, 127, 0.7)';
const barFill = 'rgba(0, 162, 255, 0.7)';
const barStroke = '#003e54';
const barShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px';
const barText = 'Bar';
const wallFill = 'rgba(136, 136, 136, 0.7)';
const wallStroke = '#686868';
const wallShadow = 'rgba(0, 0, 0, 0.4) 5px 5px 20px';

var photoUrlLandscape = 'https://images8.alphacoders.com/292/292379.jpg',
    photoUrlPortrait =
        'https://presspack.rte.ie/wp-content/blogs.dir/2/files/2015/04/AMC_TWD_Maggie_Portraits_4817_V1.jpg';

var widthEl = document.getElementById('width');
var heightEl = document.getElementById('height');
var canvasEl = document.getElementById('canvas');

if (localStorage.getItem('widthEl') && localStorage.getItem('heightEl')) {
    document.getElementById('width').value = localStorage.getItem('widthEl');
    document.getElementById('height').value = localStorage.getItem('heightEl');
} else {
    localStorage.setItem('heightEl', heightEl.value);
    localStorage.setItem('widthEl', widthEl.value);
}

canvasEl.setAttribute('width', localStorage.getItem('widthEl'));
canvasEl.setAttribute('height', localStorage.getItem('heightEl'));

function initCanvas() {
    if (canvas) {
        canvas.clear();
        canvas.dispose();
    }

    canvas = new fabric.Canvas('canvas');
    number = parseInt(localStorage.getItem('totalTables')) + 1;
    // number = 1;
    canvas.backgroundColor = backgroundColor;
    // canvas.setBackgroundImage(
    //     'https://presspack.rte.ie/wp-content/blogs.dir/2/files/2015/04/AMC_TWD_Maggie_Portraits_4817_V1.jpg',
    //     canvas.renderAll.bind(canvas)
    // );

    for (let i = 0; i < canvas.height / grid; i++) {
        const lineX = new fabric.Line([0, i * grid, canvas.height, i * grid], {
            stroke: lineStroke,
            selectable: false,
            name: 'line',
        });
        const lineY = new fabric.Line([i * grid, 0, i * grid, canvas.height], {
            stroke: lineStroke,
            selectable: false,
            name: 'line',
        });
        // canvas.add(lineX);
        // canvas.add(lineY);
        sendLinesToBack();
    }

    canvas.on('object:moving', function (e) {
        snapToGrid(e.target);
    });

    canvas.on('object:scaling', function (e) {
        if (e.target.scaleX > 5) {
            e.target.scaleX = 5;
        }
        if (e.target.scaleY > 5) {
            e.target.scaleY = 5;
        }
        if (!e.target.strokeWidthUnscaled && e.target.strokeWidth) {
            e.target.strokeWidthUnscaled = e.target.strokeWidth;
        }
        if (e.target.strokeWidthUnscaled) {
            e.target.strokeWidth =
                e.target.strokeWidthUnscaled / e.target.scaleX;
            if (e.target.strokeWidth === e.target.strokeWidthUnscaled) {
                e.target.strokeWidth =
                    e.target.strokeWidthUnscaled / e.target.scaleY;
            }
        }
    });

    canvas.on('object:modified', function (e) {
        e.target.scaleX =
            e.target.scaleX >= 0.25 ? Math.round(e.target.scaleX * 2) / 2 : 0.5;
        e.target.scaleY =
            e.target.scaleY >= 0.25 ? Math.round(e.target.scaleY * 2) / 2 : 0.5;
        snapToGrid(e.target);
        if (e.target.name === 'table') {
            canvas.bringToFront(e.target);
        } else {
            canvas.sendToBack(e.target);
        }
        sendLinesToBack();
    });

    canvas.on('object:moving', function (e) {
        checkBoudningBox(e);
    });
    canvas.on('object:rotating', function (e) {
        checkBoudningBox(e);
    });
    canvas.on('object:scaling', function (e) {
        checkBoudningBox(e);
    });
}
initCanvas();

function resizeCanvas() {
    widthEl = document.getElementById('width');
    heightEl = document.getElementById('height');
    canvasEl.width = widthEl.value ? widthEl.value : 302;
    canvasEl.height = heightEl.value ? heightEl.value : 812;
    const canvasContainerEl = document.querySelectorAll('.canvas-container')[0];
    canvasContainerEl.style.width = canvasEl.width;
    canvasContainerEl.style.height = canvasEl.height;
}
resizeCanvas();

widthEl.addEventListener('change', () => {
    resizeCanvas();
    initCanvas();
    // addDefaultObjects();
    canvasLoader();
    sendLinesToBack();
});
heightEl.addEventListener('change', () => {
    resizeCanvas();
    initCanvas();
    // addDefaultObjects();
    canvasLoader();
    sendLinesToBack();
});

function generateId() {
    return Math.random().toString(36).substr(2, 8);
}

function addRect(left, top, width, height) {
    const id = generateId();
    const o = new fabric.Rect({
        width: width,
        height: height,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
    });
    const t = new fabric.IText(number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#000',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
    });
    const g = new fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'table',
        id: id,
        number: number,
    });
    canvas.add(g);
    number++;
    return g;
}

function addCircle(left, top, radius) {
    const id = generateId();
    const o = new fabric.Circle({
        radius: radius,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
    });
    const t = new fabric.IText(number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#000',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
    });
    const g = new fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'table',
        id: id,
        number: number,
    });
    canvas.add(g);
    number++;
    return g;
}

function addTriangle(left, top, radius) {
    const id = generateId();
    const o = new fabric.Triangle({
        radius: radius,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
    });
    const t = new fabric.IText(number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#000',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
    });
    const g = new fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'table',
        id: id,
        number: number,
    });
    canvas.add(g);
    number++;
    return g;
}

function addChair(left, top, width, height) {
    const o = new fabric.Rect({
        left: left,
        top: top,
        width: 30,
        height: 30,
        fill: chairFill,
        stroke: chairStroke,
        strokeWidth: 2,
        shadow: chairShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'chair',
        id: generateId(),
    });
    canvas.add(o);
    return o;
}

function addBar(left, top, width, height) {
    const o = new fabric.Rect({
        width: width,
        height: height,
        fill: barFill,
        stroke: barStroke,
        strokeWidth: 2,
        shadow: barShadow,
        originX: 'center',
        originY: 'center',
        name: 'bar',
        id: generateId(),
    });
    const t = new fabric.IText(barText, {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#000',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
    });
    const g = new fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'bar',
    });
    canvas.add(g);
    return g;
}

function addWall(left, top, width, height) {
    const o = new fabric.Rect({
        left: left,
        top: top,
        width: width,
        height: height,
        fill: wallFill,
        stroke: wallStroke,
        strokeWidth: 2,
        shadow: wallShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        name: 'wall',
        id: generateId(),
    });
    canvas.add(o);
    return o;
}

function snapToGrid(target) {
    target.set({
        left: (Math.round(target.left / (grid / 2)) * grid) / 2,
        top: (Math.round(target.top / (grid / 2)) * grid) / 2,
    });
}

function checkBoudningBox(e) {
    const obj = e.target;

    if (!obj) {
        return;
    }
    obj.setCoords();

    const objBoundingBox = obj.getBoundingRect();
    if (objBoundingBox.top < 0) {
        obj.set('top', 0);
        obj.setCoords();
    }
    if (objBoundingBox.left > canvas.width - objBoundingBox.width) {
        obj.set('left', canvas.width - objBoundingBox.width);
        obj.setCoords();
    }
    if (objBoundingBox.top > canvas.height - objBoundingBox.height) {
        obj.set('top', canvas.height - objBoundingBox.height);
        obj.setCoords();
    }
    if (objBoundingBox.left < 0) {
        obj.set('left', 0);
        obj.setCoords();
    }
}

function sendLinesToBack() {
    canvas.getObjects().map((o) => {
        if (o.name === 'line') {
            canvas.sendToBack(o);
        }
    });
}

document
    .querySelectorAll('.rectangle')[0]
    .addEventListener('click', function () {
        const o = addRect(0, 0, 60, 60);
        canvas.setActiveObject(o);
    });

document.querySelectorAll('.circle')[0].addEventListener('click', function () {
    const o = addCircle(0, 0, 30);
    canvas.setActiveObject(o);
});

document
    .querySelectorAll('.triangle')[0]
    .addEventListener('click', function () {
        const o = addTriangle(0, 0, 30);
        canvas.setActiveObject(o);
    });

document.querySelectorAll('.chair')[0].addEventListener('click', function () {
    const o = addChair(0, 0);
    canvas.setActiveObject(o);
});

document.querySelectorAll('.bar')[0].addEventListener('click', function () {
    const o = addBar(0, 0, 180, 60);
    canvas.setActiveObject(o);
});

document.querySelectorAll('.wall')[0].addEventListener('click', function () {
    const o = addWall(0, 0, 60, 180);
    canvas.setActiveObject(o);
});

document.querySelectorAll('.remove')[0].addEventListener('click', function () {
    const o = canvas.getActiveObject();
    if (o) {
        // o.remove();
        canvas.remove(o);
        canvas.discardActiveObject();
        canvas.renderAll();
    }
});

document
    .querySelectorAll('.customer-mode')[0]
    .addEventListener('click', function () {
        canvas.getObjects().map((o) => {
            o.hasControls = false;
            o.lockMovementX = true;
            o.lockMovementY = true;
            if (o.name === 'chair' || o.name === 'bar' || o.name === 'wall') {
                o.selectable = false;
            }
            o.borderColor = '#38A62E';
            o.borderScaleFactor = 2.5;
        });
        canvas.selection = false;
        canvas.hoverCursor = 'pointer';
        canvas.discardActiveObject();
        canvas.renderAll();
        document.querySelectorAll('.admin-menu')[0].style.display = 'none';
        document.querySelectorAll('.customer-menu')[0].style.display = 'block';
    });

// document
//     .querySelectorAll('.admin-mode')[0]
//     .addEventListener('click', function () {
//         canvas.getObjects().map((o) => {
//             o.hasControls = true;
//             o.lockMovementX = false;
//             o.lockMovementY = false;
//             if (o.name === 'chair' || o.name === 'bar' || o.name === 'wall') {
//                 o.selectable = true;
//             }
//             o.borderColor = 'rgba(102, 153, 255, 0.75)';
//             o.borderScaleFactor = 1;
//         });
//         canvas.selection = true;
//         canvas.hoverCursor = 'move';
//         canvas.discardActiveObject();
//         canvas.renderAll();
//         document.querySelectorAll('.admin-menu')[0].style.display = 'block';
//         document.querySelectorAll('.customer-menu')[0].style.display = 'none';
//     });

canvas.getObjects().map((o) => {
    o.hasControls = true;
    o.lockMovementX = false;
    o.lockMovementY = false;
    if (o.name === 'chair' || o.name === 'bar' || o.name === 'wall') {
        o.selectable = true;
    }
    o.borderColor = 'rgba(102, 153, 255, 0.75)';
    o.borderScaleFactor = 1;
});
canvas.selection = true;
canvas.hoverCursor = 'move';
canvas.discardActiveObject();
canvas.renderAll();
document.querySelectorAll('.admin-menu')[0].style.display = 'block';
// document.querySelectorAll('.customer-menu')[0].style.display = 'none';

// function formatTime(val) {
//     const hours = Math.floor(val / 60);
//     const minutes = val % 60;
//     const englishHours = hours > 12 ? hours - 12 : hours;

//     const normal = hours + ':' + minutes + (minutes === 0 ? '0' : '');
//     const english =
//         englishHours +
//         ':' +
//         minutes +
//         (minutes === 0 ? '0' : '') +
//         ' ' +
//         (hours > 12 ? 'PM' : 'AM');

//     return normal + ' (' + english + ')';
// }

// document.querySelectorAll('.submit')[0].addEventListener('click', function () {
//     const obj = canvas.getActiveObject();
//     $('#modal').modal('show');
//     let modalText = 'You have not selected anything';
//     if (obj) {
//         modalText =
//             'You have selected table ' +
//             obj.number +
//             ', time: ' +
//             formatTime(slider.noUiSlider.get());
//     }
//     document.querySelectorAll('#modal-table-id')[0].innerHTML = modalText;
// });

// const slider = document.getElementById('slider');
// noUiSlider.create(slider, {
//     start: 1200,
//     step: 15,
//     connect: 'lower',
//     range: {
//         min: 0,
//         max: 1425,
//     },
// });

// const sliderValue = document.getElementById('slider-value');
// slider.noUiSlider.on('update', function (values, handle) {
//     sliderValue.innerHTML = formatTime(values[handle]);
// });

function addDefaultObjects() {
    addChair(15, 105);
    addChair(15, 135);
    addChair(75, 105);
    addChair(75, 135);
    addChair(225, 75);
    addChair(255, 75);
    addChair(225, 135);
    addChair(255, 135);
    addChair(225, 195);
    addChair(255, 195);
    addChair(225, 255);
    addChair(255, 255);
    addChair(15, 195);
    addChair(45, 195);
    addChair(15, 255);
    addChair(45, 255);
    addChair(15, 315);
    addChair(45, 315);
    addChair(15, 375);
    addChair(45, 375);
    addChair(225, 315);
    addChair(255, 315);
    addChair(225, 375);
    addChair(255, 375);
    addChair(15, 435);
    addChair(15, 495);
    addChair(15, 555);
    addChair(15, 615);
    addChair(225, 615);
    addChair(255, 615);
    addChair(195, 495);
    addChair(195, 525);
    addChair(255, 495);
    addChair(255, 525);
    addChair(225, 675);
    addChair(255, 675);

    addRect(30, 90, 60, 90);
    addRect(210, 90, 90, 60);
    addRect(210, 210, 90, 60);
    addRect(0, 210, 90, 60);
    addRect(0, 330, 90, 60);
    addRect(210, 330, 90, 60);
    addRect(0, 450, 60, 60);
    addRect(0, 570, 60, 60);
    addRect(210, 480, 60, 90);
    addRect(210, 630, 90, 60);

    addBar(120, 0, 180, 60);

    addWall(120, 510, 60, 60);
}
// addDefaultObjects();

var totalTables = 0;
function controlNumbering(json_canvas) {
    for (let i = 0; i < json_canvas.objects.length; i++) {
        // console.log(json_canvas.objects[i]);
        if (json_canvas.objects[i].type == 'group') {
            if (parseInt(json_canvas.objects[i].objects[1].text)) {
                console.log(json_canvas.objects[i].objects[1].text);
                totalTables++;
                localStorage.setItem('totalTables', totalTables);
            }
        }
    }
    totalTables = 0;

    return json_canvas;
}

document.getElementById('save').addEventListener('click', () => {
    let json_canvas = canvas.toJSON();
    json_canvas = controlNumbering(json_canvas);
    localStorage.setItem('json_canvas', JSON.stringify(json_canvas));
    localStorage.setItem('heightEl', heightEl.value);
    localStorage.setItem('widthEl', widthEl.value);
});

// canvas.clear();
function canvasLoader() {
    let json = JSON.parse(localStorage.getItem('json_canvas'));
    canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
}
canvasLoader();
sendLinesToBack();
