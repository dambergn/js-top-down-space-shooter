'use strict';

const ctx = document.getElementById('ctx').getContext('2d');

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 10; // Y
let canvasWidth = 500; // X

setCanvas()

let timeStarted = Date.now();
let enemyList = {};
let weaponsFire = {};
let frameCount = 0;
let score = 0;
let hpRegen = 0;
let firing = false;
let space = false;
let startedFiring = 0;
let fireRate = 0;
let weaponSelect = 0;


function setCanvas() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  canvasHeight = windowHeight - 10;
  if (window.innerWidth > 500){
    canvasWidth = 500;
  } else {
    canvasWidth = window.innerWidth - 10;
  }
  document.getElementById('ctx').height = canvasHeight;
  document.getElementById('ctx').width = canvasWidth;
  ctx.font = '30px "Courier New", Courier, monospace';
  ctx.fillStyle = 'white';
}

window.onresize = function (event) {
  setCanvas();
};

let player1 = {
  x: 250,
  spdX: 25,
  y: 600,
  spdY: 5,
  name: 'P1',
  hp: 10,
  width: 20,
  height: 20,
  color: 'green',
};

let Enemy = function (id, x, y, spdX, spdY, width, height, color) {
  let enemy = {
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    name: 'E',
    id: id,
    width: width,
    height: height,
    color: color,
  };
  enemyList[id] = enemy;
};

let updateEntity = function (update) {
  updateEntityPosition(update);
  drawEntity(update);
};

let updateEntityPosition = function (update) {
  update.x += update.spdX;
  update.y += update.spdY;
  if (update.x < 0 || update.x > canvasWidth) {
    update.spdX = -update.spdX;
  }
  if (update.y < 0 || update.y > canvasHeight) {
    update.spdY = -update.spdX;
  }
};

let testCollisionRectRect = function (rect1, rect2) {
  return rect1.x <= rect2.x + rect2.width
    && rect2.x <= rect1.x + rect1.width
    && rect1.y <= rect2.y + rect2.height
    && rect2.y <= rect1.y + rect1.height;
}

let drawEntity = function (draw) {
  ctx.save();
  ctx.fillStyle = draw.color;
  ctx.fillRect(draw.x - draw.width / 2, draw.y - draw.height / 2, draw.width, draw.height);
  ctx.restore();
};

let getDistanceBetweenEntity = function (entity1, entity2) {
  let vx = entity1.x - entity2.x;
  let vy = entity1.y - entity2.y;
  return Math.sqrt(vx * vx + vy * vy);
};

let collisionDetection = function (entity1, entity2) {
  let rect1 = {
    x: entity1.x - entity1.width / 2,
    y: entity1.y - entity1.height / 2,
    width: entity1.width,
    height: entity1.height,
  }
  let rect2 = {
    x: entity2.x - entity2.width / 2,
    y: entity2.y - entity2.height / 2,
    width: entity2.width,
    height: entity2.height,
  }
  return testCollisionRectRect(rect1, rect2);
};

let playerEnemyHitDetection = function () {
  for (let key in enemyList) {
    updateEntity(enemyList[key]);
    let isColliding = collisionDetection(player1, enemyList[key]);
    if (enemyList[key].y > canvasHeight) {
      delete enemyList[key];
    }
    if (isColliding) {
      delete enemyList[key];
      player1.hp = player1.hp - 1;
    }
  }
}

let playerWeaponHitDetection = function () {
  for (let key1 in enemyList) {
    for (let key2 in weaponsFire) {
      let isColliding2 = collisionDetection(weaponsFire[key2], enemyList[key1]);
      if (isColliding2) {
        score++;
        hpRegen++;
        delete weaponsFire[key2];
        delete enemyList[key1];
        break;
      }
    }
  }
}

let strayBulletCleanup = function () {
  for (let key1 in weaponsFire) {
    updateEntity(weaponsFire[key1]);
    if (weaponsFire[key1].y <= 1 || weaponsFire[key1].x > canvasWidth || weaponsFire[key1].x < 0) {
      delete weaponsFire[key1];
    }
  }
}

let fireSelectedWeapon = function (mouse_X, mouse_Y) {
  if (weaponSelect == 0) {
    fireWeapon(mouse_X, mouse_Y);
  }
  if (weaponSelect == 1) {
    fireWeapon2(mouse_X, mouse_Y);
  }
  if (weaponSelect == 2) {
    fireWeapon4(mouse_X, mouse_Y);
  }
  if (weaponSelect == 3) {
    fireWeapon5(mouse_X, mouse_Y);
  }
}

let update = function () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clears old data
  frameCount++;

  if (frameCount % 100 === 0) {
    for (let i = 0; i <= Math.random() * 3; i++) {
      randomlyGenerateEnemy();
    }
  }

  playerEnemyHitDetection();
  playerWeaponHitDetection();
  strayBulletCleanup();

  // Controls fireing rate
  if (firing == true) {
    if (startedFiring == 1) {
      fireSelectedWeapon(mouse_X, mouse_Y);
    }
    if (startedFiring > fireRate) {
      startedFiring = 0;
    }
    startedFiring++;
  }

  if (hpRegen == 10) {
    player1.hp++;
    hpRegen = 0;
  }

  if (player1.hp <= 0) {
    let timeSurvived = Date.now() - timeStarted;
    console.log('you lost!  You survived for', timeSurvived, 'ms.');
    startNewGame();
  }
  drawEntity(player1);
  ctx.fillText(player1.hp + " HP", 0, 30);
  ctx.fillText('score: ' + score, 200, 30);
};

let randomlyGenerateEnemy = function () {
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let id = Math.random();
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';

  Enemy(id, x, y, spdX, spdY, width, height, color)
}

let startNewGame = function () {
  timeStarted = Date.now();
  player1.hp = 10;
  frameCount = 0;
  score = 0;
  enemyList = {};
  weaponsFire = {};
  randomlyGenerateEnemy();
  randomlyGenerateEnemy();
  randomlyGenerateEnemy();
}
startNewGame();

setInterval(update, 40); //40ms is equivelint to 24fps