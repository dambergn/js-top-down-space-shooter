'use strict';

let mouse_X = {};
let mouse_Y = {};

document.oncontextmenu = function() {
  return false;
}

document.onmousemove = function (mouse) {
  let mouseX = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
  let mouseY = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;
  mouse_X = mouseX;
  mouse_Y = mouseY;

  /*Prevents player from leaving field of play*/
  //Left
  if (mouse_X < player1.width / 2)
    mouse_X = player1.width / 2;
  //Right
  if (mouse_X > canvasWidth - player1.width / 2)
    mouse_X = canvasWidth - player1.width / 2;
  //Top
  if (mouse_Y < player1.height / 2)
    mouse_Y = player1.height / 2;
  //Bottom
  if (mouse_Y > canvasHeight - player1.height / 2)
    mouse_Y = canvasHeight - player1.height / 2;

  player1.x = mouse_X
  player1.y = mouse_Y
  // console.log('x: ', mouseX, 'y: ', mouseY);
}

document.oncontextmenu = function() { // Disables right click menue
  console.log('right click')
  return false;
  
}

document.onmousedown = function (mouse) {
  firing = true;
}

document.onmouseup = function (mouse) {
  firing = false;
  startedFiring = 0;
}

document.onkeydown = function(event) {
  if (event.keyCode === 68 || event.keyCode === 39) { //d or Right arrow
    playerBottom.pressingRight = true;
    playerTop.pressingRight = true;
  } else if (event.keyCode === 83 || event.keyCode === 40) { //s or Down arrow
    playerLeft.pressingDown = true;
    playerRight.pressingDown = true;
  } else if (event.keyCode === 65 || event.keyCode === 37) { //a or Left arrow
    playerBottom.pressingLeft = true;
    playerTop.pressingLeft = true;
  } else if (event.keyCode === 87 || event.keyCode === 38) { // w or Up Arrow
    playerLeft.pressingUp = true;
    playerRight.pressingUp = true;
  } else if (event.keyCode === 80) { //p
    paused = !paused;
  } else if (event.keyCode === 32) { //space
    space = true;
  }
};

document.onkeyup = function(event) {
  if (event.keyCode === 68 || event.keyCode === 39) { //d or Right arrow
    playerBottom.pressingRight = false;
    playerTop.pressingRight = false;
  } else if (event.keyCode === 83 || event.keyCode === 40) { //s or Down arrow
    playerLeft.pressingDown = false;
    playerRight.pressingDown = false;
  } else if (event.keyCode === 65 || event.keyCode === 37) { //a or Left arrow
    playerBottom.pressingLeft = false;
    playerTop.pressingLeft = false;
  } else if (event.keyCode === 87 || event.keyCode === 38) { // w or Up Arrow
    playerLeft.pressingUp = false;
    playerRight.pressingUp = false;
  } else if (event.keyCode === 32) { //space
    space = false;
  }
};