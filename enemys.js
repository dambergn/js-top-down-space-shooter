'use strict';

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