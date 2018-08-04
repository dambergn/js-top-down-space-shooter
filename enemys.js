'use strict';

let Enemy = function (id, name, x, y, spdX, spdY, width, height, color, hp, afterDestroyed) {
  let enemy = {
    id:id,
    name:name,
    x:x,
    y:y,
    spdX:spdX,
    spdY:spdY,
    width:width,
    height:height,
    color:color,
    hp:hp,
    afterDestroyed:afterDestroyed,
  };
  enemyList[id] = enemy;
};

function afterEffect(option, x, y){
  if(option == 'asteroid_lvl2'){
    asteroid_lvl2(x, y)
  }
}

let randomlyGenerateEnemy = function () {
  let id = Math.random();
  let name = 'random'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';
  let hp = 1;

  Enemy(id, name, x, y, spdX, spdY, width, height, color, hp)
}

let level_1_Enemy = function () {
  let id = Math.random();
  let name = 'randomlvl2'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'orange';
  let hp = 2;

  Enemy(id, name, x, y, spdX, spdY, width, height, color, hp)
}

let asteroid_lvl1 = function (x, y) {
  let id = Math.random();
  let name = 'asteroid lvl1'
  // if(x == null)
  // let x = Math.round(Math.random() * canvasWidth);
  // if(y == null)
  // let y = 0;
  let height = 10;
  let width = 10;
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'grey';
  let hp = 1;

  Enemy(id, name, x, y, spdX, spdY, width, height, color, hp)
}

let asteroid_lvl2 = function (x, y) {
  let id = Math.random();
  let name = 'asteroid lvl2'
  // let x = Math.round(Math.random() * canvasWidth);
  // let y = 0;
  let height = 20;
  let width = 20;
  let spdX = 0;
  let spdY = 1 + Math.round(Math.random() * 2);
  let color = 'blue';
  let hp = 2;

  Enemy(id, name, x, y, spdX, spdY, width, height, color, hp)
}

let asteroid_lvl3 = function () {
  let id = Math.random();
  let name = 'asteroid lvl3'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 30;
  let width = 30;
  let spdX = 0;
  let spdY = 2;
  let color = 'grey';
  let hp = 3;
  let afterDestroyed = 'asteroid_lvl2'

  Enemy(id, name, x, y, spdX, spdY, width, height, color, hp, afterDestroyed)
}

