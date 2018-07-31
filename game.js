'use strict';

const ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px "Courier New", Courier, monospace';
ctx.fillStyle = 'white';

let canvasHeight = 700; // Y
let canvasWidth = 500; // X
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

let update = function () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clears old data
  frameCount++;

  if (frameCount % 100 === 0) {
    for(let i = 0; i <= Math.random() * 3; i++){
      randomlyGenerateEnemy();
    }
  }

  for (let key in enemyList) {
    updateEntity(enemyList[key]);

    let isColliding = collisionDetection(player1, enemyList[key]);
    // console.log(player1, enemyList[key])
    if (enemyList[key].y > canvasHeight) {
      // console.log('weapon out of bouds');
      delete enemyList[key];
    }
    if (isColliding) {
      // console.log('Collision!');
      delete enemyList[key];
      player1.hp = player1.hp - 1;
    }
  }

  for (let key1 in weaponsFire) {
    updateEntity(weaponsFire[key1]);
    // console.log(weaponsFire[key1]);
    if (weaponsFire[key1].y < 0) {
      // console.log('weapon out of bouds');
      delete weaponsFire[key1];
    }
    // console.log(weaponsFire[key1])
    for (let key2 in enemyList) {
      let isColliding2 = collisionDetection(enemyList[key2], weaponsFire[key1]);
      // console.log(enemyList[key2], weaponsFire[key1])
      if (isColliding2) {
        // console.log('Enemy hit!');
        score++;
        hpRegen++;
        delete weaponsFire[key1];
        delete enemyList[key2];
      }
    }
  }
  
  if(firing == true){

    if(space == true){
      fireWeapon2(mouse_X, mouse_Y)
    } else if(startedFiring < 2){
      fireWeapon(mouse_X, mouse_Y)
    }

    
    if(startedFiring > fireRate){
      startedFiring = 0;
    }
    startedFiring++;
  }

  if(hpRegen == 10){
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
  // let x = 250;
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  // let y = Math.round(Math.random() * canvasHeight);
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let id = Math.random();
  let spdX = 0;
  // let spdX = 5 + Math.round(Math.random() * 5);
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color);
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