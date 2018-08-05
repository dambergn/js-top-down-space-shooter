'use strict';

let vfx_asteroids = new Image();
vfx_asteroids.src = "./img/VFX/asteroids/large/a10000-1.png";


let Enemy = function (id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed) {
  let enemy = {
    id:id,
    name:name,
    x:x,
    y:y,
    vfx,vfx,
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

let enemyVFX = function () {
  for (let key in enemyList) {
    if (enemyList.name === 'asteroid lvl3')
    console.log(enemyList[key].name)
      ctx.drawImage(
        vfx_asteroids, 
        enemyList[key].x - (enemyList[key].width / 2), 
        enemyList[key].y - (enemyList[key].height / 2), 
        enemyList[key].width, 
        enemyList[key].height
      )
      // ctx.drawImage(enemyList[key].vfx, enemyList[key].x, enemyList[key].y, enemyList[key].width, enemyList[key].height)
  }
  // ctx.drawImage('http://localhost:8080/img/VFX/asteroids/large/a10000.png', 50, 50, 50, 50)
  // ctx.drawImage(vfx_asteroids, 50, 50,)
  
  // context.drawImage(img,x,y,width,height);
  // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
}

function afterEffect(option, x, y){
  if(option == 'asteroid_lvl2'){
    asteroid_lvl2(x + 10, y, 1)
    asteroid_lvl2(x - 10, y, -1)
  }
  if(option == 'asteroid_lvl1'){
    asteroid_lvl1(x + 10, y + 10, 1, 1)
    asteroid_lvl1(x - 10, y - 10, -1, -1)
    asteroid_lvl1(x + 10, y + 10, 1, -1)
    asteroid_lvl1(x - 10, y - 10, -1, 1)
  }
}

let randomlyGenerateEnemy = function () {
  let id = Math.random();
  let name = 'random'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let vfx = 'none';
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';
  let hp = 1;

  Enemy(id, name, x, y,  vfx, spdX, spdY, width, height, color, hp)
}

let level_1_Enemy = function () {
  let id = Math.random();
  let name = 'randomlvl2'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 10 + Math.round(Math.random() * 30);
  let width = 10 + Math.round(Math.random() * 30);
  let vfx = 'none';
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'orange';
  let hp = 2;

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp)
}

let asteroid_lvl1 = function (x, y, spdX, spdY) {
  let id = Math.random();
  let name = 'asteroid lvl1'
  // if(x == null)
  // let x = Math.round(Math.random() * canvasWidth);
  // if(y == null)
  // let y = 0;
  let height = 10;
  let width = 10;
  let vfx = 'none';
  // let spdX = 0;
  // let spdY = 2 + Math.round(Math.random() * 2);
  let color = '#b3b3b3';
  let hp = 1;

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp)
}

let asteroid_lvl2 = function (x, y, spdX) {
  let id = Math.random();
  let name = 'asteroid lvl2'
  // let x = Math.round(Math.random() * canvasWidth);
  // let y = 0;
  let height = 20;
  let width = 20;
  let vfx = 'none';
  // let spdX = 0;
  let spdY = 1 + Math.round(Math.random() * 2);
  let color = '#808080';
  let hp = 2;
  let afterDestroyed = 'asteroid_lvl1'

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed)
}

let asteroid_lvl3 = function () {
  let id = Math.random();
  let name = 'asteroid lvl3'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 50;
  let width = 50;
  let vfx = '<img src="./img/VFX/asteroids/large/a10000.png">'
  let spdX = 0;
  let spdY = 2;
  let color = '#404040';
  let hp = 3;
  let afterDestroyed = 'asteroid_lvl2'

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed)
}

