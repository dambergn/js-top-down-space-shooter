'use strict';

let Weapon = function (id, x, y, spdX, spdY, width, height, color, type, fireRate, damage) {
  let weapon = {
    id: id,
    x: x,
    spdX: spdX,
    y: y,
    spdY: spdY,
    width: width,
    height: height,
    color: color,
    type: type,
    fireRate: fireRate,
    damage: damage,
  }
  weaponsFire[id] = weapon;
}

let fireWeapon = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -7;
  let color = 'silver';
  let type = 'projectile';
  let damage = 1;

  fireRate = 10;

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y, spdX, spdY, width, height, color, type, fireRate, damage);
}

let fireWeapon2 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -14;
  let color = 'orange';
  let type = 'projectile';
  let damage = 1;

  fireRate = 5;

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y, spdX, spdY, width, height, color, type, fireRate, damage);
}

// module.exports.fireWeapon = fireWeapon;