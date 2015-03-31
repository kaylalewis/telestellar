// var A = 42;
// var T = 48;
// var C = 30;
// var G = 50;
// var order = [A, C, G, T];

// function formula() {

// order[2]*3=x;
// console.log(x)

// }

$('canvas')
// Draw a circle
.drawArc({
  layer: true,
  groups: ['circles'],
  fillStyle: '#c33',
  x: 100, y: 100,
  radius: 50
})
// Draw another circle
.drawArc({
  layer: true,
  groups: ['circles'],
  fillStyle: '#36c',
  x: 220, y: 100,
  radius: 50
})
// Animate all layers in the group 'circles'
.animateLayerGroup('circles', {
  y: 200
}, 500);

function initialize() {

document.getElementById("buttonFlash").style.display = "none";

var first = document.getElementById("firstStrand");
first.id = "firstStrandAnimate";

var second = document.getElementById("otherStrands");
second.id = "secondStrandFade";

}
