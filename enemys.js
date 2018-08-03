'use strict';

let Enemy = function (id, x, y, spdX, spdY, width, height, color, hp) {
  let enemy = {
    id:id,
    name:'E',
    x:x,
    y:y,
    spdX:spdX,
    spdY:spdY,
    width:width,
    height:height,
    color:color,
    hp:hp,
  };
  enemyList[id] = enemy;
};

let randomlyGenerateEnemy = function () {
  let id = Math.random();
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';
  let hp = 1;

  Enemy(id, x, y, spdX, spdY, width, height, color, hp)
}

let level_1_Enemy = function () {
  let id = Math.random();
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'orange';
  let hp = 2;

  Enemy(id, x, y, spdX, spdY, width, height, color, hp)
}