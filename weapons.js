'use strict';

$.getJSON('./assets/json/weapons.json', function (data) {
  // jsonData.push(data)
  jsonData.weapons = data
  // console.log(jsonData);
});

let altFire = false;
let cycleFire = 0;

let Weapon = function (id, x, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage) {
  let weapon = {
    id:id,
    x:x,
    y:y,
    vfx:vfx,
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

let weaponVFX = function () {
  for (let key in weaponsFire) {
    if (weaponsFire[key].type === 'projectile') {
      let vfx_weaponsFire = new Image();
      vfx_weaponsFire.src = jsonData.weapons.type.Pulse + jsonData.weapons.Pulse[weaponsFire[key].vfx];
      ctx.drawImage(
        vfx_weaponsFire,
        weaponsFire[key].x - (weaponsFire[key].width / 2),
        weaponsFire[key].y - (weaponsFire[key].height / 2),
        weaponsFire[key].width,
        weaponsFire[key].height
      )
    } else if (weaponsFire[key].type === 'beam') {
      let vfx_weaponsFire = new Image();
      vfx_weaponsFire.src = jsonData.weapons.type.Lazer + jsonData.weapons.Lazer[weaponsFire[key].vfx];
      ctx.drawImage(
        vfx_weaponsFire,
        weaponsFire[key].x - (weaponsFire[key].width / 2),
        weaponsFire[key].y - (weaponsFire[key].height / 2),
        weaponsFire[key].width,
        weaponsFire[key].height
      )
    }
  }
}

// Single shot.
let fireWeapon = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 0;
  let height = 10;
  let width = 5;
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
  Weapon(id, x, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Single shot increaded rate of fire.
let fireWeapon2 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 0;
  let height = 10;
  let width = 5;
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
  Weapon(id, x, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Dual Fire
let fireWeapon3 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 1;
  let height = 10;
  let width = 5;
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
  Weapon(id, x - 4, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 1, x +3 , y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Alternating Fire
let fireWeapon4 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 1;
  let height = 10;
  let width = 5;
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
    Weapon(id, x - 4, y, vfx,  spdX, spdY, width, height, color, type, fireRate, damage);
  } else {
    Weapon(id, x + 4, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
  }
  altFire = !altFire;
}

// Spread Fire
let fireWeapon5 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 2;
  let height = 10;
  let width = 5;
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
  Weapon(id, x - 4, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 1, x + 4 , y, vfx,  spdX, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 2, x - 3 , y, vfx,  spdX + 5, spdY, width, height, color, type, fireRate, damage);
  Weapon(id + 3, x + 3 , y, vfx,  spdX - 5, spdY, width, height, color, type, fireRate, damage);
}

// Cycling Spread Fire
let fireWeapon6 = function (mouseX, mouseY) {
  let id = Math.random();
  let x = mouseX;
  let y = mouseY;
  let vfx = 2;
  let height = 10;
  let width = 5;
  let spdX = 0;
  let spdY = -14;
  let color = 'purple';
  let type = 'projectile';
  let damage = 1;

  fireRate = 2;

  if (isMobile === true){
    y = mouseY - 50;
  }

  if (cycleFire == 0) Weapon(id, x - 4, y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 1) Weapon(id + 1, x + 4 , y, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 2) Weapon(id + 2, x - 3 , y, vfx, spdX + 5, spdY, width, height, color, type, fireRate, damage);
  if (cycleFire == 3) Weapon(id + 3, x + 3 , y, vfx, spdX - 5, spdY, width, height, color, type, fireRate, damage);
  
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
  let vfx = 8;
  let height = 150;
  let width = 5;
  let spdX = 0;
  let spdY = -20;
  let color = 'red';
  let type = 'beam';
  let damage = 3;

  fireRate = 25;

  if (isMobile === true){
    y = mouseY - 50;
  }

  // console.log('created: ', id, x, y, spdX, spdY, width, height, color, type);
  Weapon(id, x, y - 100, vfx, spdX, spdY, width, height, color, type, fireRate, damage);
}

// Lazer Beam and Projectiles
let fireWeapon8 = function(mouseX, mouseY) {
  fireWeapon7(mouseX, mouseY);
  fireWeapon6(mouseX, mouseY);
}