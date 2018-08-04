'use strict';

let altFire = false;
let cycleFire = 0;

let Weapon = function (id, x, y, spdX, spdY, width, height, color, type, fireRate, damage) {
  let weapon = {
    id:id,
    x:x,
    y:y,
    spdX:spdX,
    spdY:spdY,
    width:width,
    height:height,
    color:color,
    type:type,
    fireRate:fireRate,
    damage:damage,
  }
  weaponsFire[id] = weapon;
}

// Single shot.
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

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Single shot increaded rate of fire.
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

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Dual Fire
let fireWeapon3 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -14;
  let color = 'green';
  let type = 'projectile';
  let damage = 1;

  fireRate = 10;

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x - 4, y, spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 1, x +3 , y, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Alternating Fire
let fireWeapon4 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -14;
  let color = 'green';
  let type = 'projectile';
  let damage = 1;

  fireRate = 5;

  if (isMobile === true){
    y = mouseY - 50;
  }
  
  if (altFire === false){
    Weapon(id, x - 4, y, spdX, spdY, width, height, color, type, fireRate, damage);
  } else {
    Weapon(id, x + 4, y, spdX, spdY, width, height, color, type, fireRate, damage);
  }
  altFire = !altFire;
}

// Spread Fire
let fireWeapon5 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -14;
  let color = 'purple';
  let type = 'projectile';
  let damage = 1;

  fireRate = 10;

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x - 4, y, spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 1, x + 4 , y, spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 2, x - 3 , y, spdX + 5, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 3, x + 3 , y, spdX - 5, spdY, width, height, color, type, fireRate, damage);
}

// Cycling Spread Fire
let fireWeapon6 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 5;
  let width = 1;
  let spdX = 0;
  let spdY = -14;
  let color = 'purple';
  let type = 'projectile';
  let damage = 1;

  fireRate = 2;

  if (isMobile === true){
    y = mouseY - 50;
  }

  if (cycleFire == 0) Weapon(id, x - 4, y, spdX, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 1) Weapon(id + 1, x + 4 , y, spdX, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 2) Weapon(id + 2, x - 3 , y, spdX + 5, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 3) Weapon(id + 3, x + 3 , y, spdX - 5, spdY, width, height, color, type, fireRate, damage);
  
  if (cycleFire == 4){
    cycleFire = 0
  } else {
    cycleFire++;
  }
}

// Lazer Beam.
let fireWeapon7 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let height = 150;
  let width = 1;
  let spdX = 0;
  let spdY = -20;
  let color = 'red';
  let type = 'beam';
  let damage = 10;

  fireRate = 25;

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y - 100, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Lazer Beam and Projectiles
let fireWeapon8 = function(mouseX, mouseY) {
  fireWeapon7(mouseX, mouseY);
  fireWeapon6(mouseX, mouseY);
}