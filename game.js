'use strict';

const ctx = document.getElementById('ctx').getContext('2d');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 6; // Y
let canvasWidth = 500; // X
setCanvas()
const jsonData = {};
let timeStarted = Date.now();
let background = {};
let enemyList = {};
let weaponsFire = {};
let npcList = {};
let frameCount = 0;
let score = 0;
let missed = 0;
let hpRegen = 0;
let firing = false;
let space = false;
let startedFiring = 0;
let fireRate = 0;
let weaponSelect = 0;
let isMobile = false;
let protecting = 0;
let paused = false;
let bg = new Image();
bg.src = "img/bg-stars-portrait-x500-y500.png";

// Detects if playing on a touch screen mobile device.
if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
  console.log('mobile deveice')
  isMobile = true;
} else {
  isMobile = false;
}

function setCanvas() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  canvasHeight = windowHeight - 6;
  if (window.innerWidth > 500) {
    canvasWidth = 500 - 8;
  } else {
    canvasWidth = window.innerWidth;
  }
  if (window.innerHeight > 1000) {
    canvasHeight = 1000;
  } else {
    canvasHeight = window.innerHeight - 6;
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
  name: 'P1',
  x: 250,
  y: 600,
  spdX: 25,
  spdY: 5,
  hp: 10,
  width: 40,
  height: 30,
  color: 'green',
};

let player1VFX = function () {
  let vfx_ship = new Image();
  vfx_ship.src = "./assets/VFX/ships/1B.png";
  ctx.drawImage(
    vfx_ship,
    player1.x - (player1.width / 2),
    player1.y - (player1.height / 2),
    player1.width,
    player1.height
  )
}

let updateEntity = function (update) {
  updateEntityPosition(update);
  drawEntity(update);
};

let updateEntityPosition = function (update) {
  update.x += update.spdX;
  update.y += update.spdY;
  // if (update.x < 0 || update.x > canvasWidth) {
  //   update.spdX = -update.spdX;
  // }
  // if (update.y < 0 || update.y > canvasHeight) {
  //   update.spdY = -update.spdX;
  // }
};

let testCollisionRectRect = function (rect1, rect2) {
  return rect1.x <= rect2.x + rect2.width
    && rect2.x <= rect1.x + rect1.width
    && rect1.y <= rect2.y + rect2.height
    && rect2.y <= rect1.y + rect1.height;
}

let drawEntity = function (draw) {
  ctx.save();
  // ctx.fillStyle = draw.color;
  // ctx.fillRect(draw.x - draw.width / 2, draw.y - draw.height / 2, draw.width, draw.height);
  npcVFX();
  player1VFX();
  enemyVFX();
  weaponVFX();

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
    if (enemyList[key].x > canvasWidth || enemyList[key].x < 0) {
      delete enemyList[key];
    } else if (enemyList[key].y > canvasHeight) {
      missed++;
      delete enemyList[key];
    }
    if (isColliding) {
      player1.hp = player1.hp - enemyList[key].hp;
      delete enemyList[key];
    }
  }
  for (let key2 in npcList) {
    for (let key in enemyList) {
      let isColliding2 = collisionDetection(npcList[key2], enemyList[key]);
      if (isColliding2) {
        npcList[key2].hp = npcList[key2].hp - enemyList[key].hp;
        delete enemyList[key];
        console.log('space station hit: ', npcList[key2].hp)
      }
    }
  }
}

let playerWeaponHitDetection = function () {
  for (let key1 in enemyList) {
    for (let key2 in weaponsFire) {
      let isColliding2 = collisionDetection(weaponsFire[key2], enemyList[key1]);
      if (isColliding2) {
        enemyList[key1].hp = enemyList[key1].hp - weaponsFire[key2].damage
        delete weaponsFire[key2];
        if (enemyList[key1].hp < 1) {
          score++;
          hpRegen++;
          // console.log(enemyList[key1].afterDestroyed, enemyList[key1].x, enemyList[key1].y)
          afterEffect(enemyList[key1].afterDestroyed, enemyList[key1].x, enemyList[key1].y)
          delete enemyList[key1];
        }
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
  if (weaponSelect == 0) fireWeapon(mouse_X, mouse_Y);
  if (weaponSelect == 1) fireWeapon2(mouse_X, mouse_Y);
  if (weaponSelect == 2) fireWeapon3(mouse_X, mouse_Y);
  if (weaponSelect == 3) fireWeapon4(mouse_X, mouse_Y);
  if (weaponSelect == 4) fireWeapon5(mouse_X, mouse_Y);
  if (weaponSelect == 5) fireWeapon6(mouse_X, mouse_Y);
  if (weaponSelect == 6) fireWeapon7(mouse_X, mouse_Y);
  if (weaponSelect == 7) fireWeapon8(mouse_X, mouse_Y);
}

let background_y = -2000


let Background = function (id, bg, x, y) {
  let back = {
    id: id,
    bg: bg,
    x: x,
    y: y,
  }
  background[id] = back;
}
// for (let i = 0; i < Math.ceil(canvasHeight / 500); i++){
//   Background(Math.random(), bg, 0, ((i + 500) * -1));
//   console.log('initial bg')
// }

Background(Math.random(), bg, 0, -500);
Background(Math.random(), bg, 0, 0);
Background(Math.random(), bg, 0, 500);
Background(Math.random(), bg, 0, 1000);

let drawBackground = function () {
  // debugger;
  if (background_y >= 0) {
    // console.log('background reset')
    // background_y = background_y
  } else {
    background_y++;
  }

  for (let key in background) {
    ctx.drawImage(bg, 0, background[key].y)
    background[key].y++;
    if (background[key].y === 0) {
      console.log('creating new background')
      Background(Math.random(), bg, 0, -500);
    } else if (background[key].y === canvasHeight + 500) {
      delete background[key];
    }
  }
  // ctx.drawImage(bg, 0, canvasHeight - 1500)
  // ctx.drawImage(bg, 0, canvasHeight - 1000)
  // ctx.drawImage(bg, 0, canvasHeight - 500)
}

/* ---------------------------update------------------------------ */
let update = function () {
  if (paused) {
    console.log('Paused: ', frameCount);
    return;
  };
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clears old data
  frameCount++;
  drawBackground();

  if (frameCount % 150 === 0) {
    for (let i = 0; i <= Math.random() * 3; i++) {
      randomlyGenerateEnemy();
    }
    asteroid_lvl3();
  }

  if (frameCount === 2000) {
    asteroid_final()
  }

  // Weapon upgrades
  if (score == 10) weaponSelect = 1;
  if (score == 20) weaponSelect = 2;
  if (score == 30) weaponSelect = 3;
  if (score == 40) weaponSelect = 4;
  if (score == 50) weaponSelect = 5;
  if (score == 60) weaponSelect = 6;
  if (score == 70) weaponSelect = 7;

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
    level_1_Enemy();
    hpRegen = 0;
  }

  if (player1.hp <= 0) {
    console.log('You killed ', score, ' enemys but missed ', missed);
    alert('You killed ' + score + ' enemys but missed ' + missed)
    startNewGame();
  }



  drawEntity(player1);
  ctx.fillText(player1.hp + " HP", 0, 30);
  ctx.fillText('score: ' + score, 200, 30);
};

let startNewGame = function () {
  timeStarted = Date.now();
  player1.hp = 10;
  frameCount = 0;
  score = 0;
  missed = 0
  enemyList = {};
  weaponsFire = {};
  weaponSelect = 0;
  if (frameCount == 50) {
    randomlyGenerateEnemy();
    randomlyGenerateEnemy();
    randomlyGenerateEnemy();
  }
}

window.onload = function () {// Prevents function call till after page has fully loaded.
  startNewGame();
  space_station()
};


setInterval(update, 40); //40ms is equivelint to 24fps