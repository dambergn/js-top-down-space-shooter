'use strict';

$.getJSON('./assets/json/asteroids-large.json', function (data) {
  // jsonData.push(data)
  jsonData.enemy = data
  // console.log(jsonData);
});

let Enemy = function (id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed) {
  let enemy = {
    id: id,
    name: name,
    x: x,
    y: y,
    vfx, vfx,
    spdX: spdX,
    spdY: spdY,
    width: width,
    height: height,
    color: color,
    hp: hp,
    afterDestroyed: afterDestroyed,
  };
  enemyList[id] = enemy;
};

// context.drawImage(img,x,y,width,height);
// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
let enemyVFX = function () {
  for (let key in enemyList) {
    if (enemyList[key].name === 'random') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = jsonData.enemy.type.LA03 + jsonData.enemy.LA03[enemyList[key].vfx] + ".png";
      // console.log("random hit")
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    } else if (enemyList[key].name === 'asteroid lvl3') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = jsonData.enemy.type.LA01 + jsonData.enemy.LA01[enemyList[key].vfx] + ".png";
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    } else if (enemyList[key].name === 'asteroid lvl2') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = jsonData.enemy.type.LA01 + jsonData.enemy.LA01[enemyList[key].vfx] + ".png";
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    } else if (enemyList[key].name === 'asteroid lvl1') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = jsonData.enemy.type.LA01 + jsonData.enemy.LA01[enemyList[key].vfx] + ".png";
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    } else if (enemyList[key].name === 'randomlvl2') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = jsonData.enemy.type.LA02 + jsonData.enemy.LA02[enemyList[key].vfx] + ".png";
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    } else if (enemyList[key].name === 'asteroid final') {
      let vfx_asteroids = new Image();
      vfx_asteroids.src = "./assets/VFX/asteroids/asteroid_boss.png";
      ctx.drawImage(
        vfx_asteroids,
        enemyList[key].x - (enemyList[key].width / 2),
        enemyList[key].y - (enemyList[key].height / 2),
        enemyList[key].width,
        enemyList[key].height
      )
    }
    // if (enemyList[key].vfx > 0) {
    //   enemyList[key].vfx++;
    //   if (enemyList[key].vfx > 15) enemyList[key].vfx = 1
    // } else if (enemyList[key].vfx < 0) {
    //   enemyList[key].vfx--;
    //   if (enemyList[key].vfx < -15) enemyList[key].vfx = -1
    // }
  }

}

function afterEffect(option, x, y) {
  if (option == 'asteroid_lvl2') {
    asteroid_lvl2(x + 10, y, 1)
    asteroid_lvl2(x - 10, y, -1)
  }
  if (option == 'asteroid_lvl1') {
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
  let height = 20 + Math.round(Math.random() * 30);
  let width = 20 + Math.round(Math.random() * 30);
  let vfx = 1 + Math.round(Math.random() * jsonData.enemy.LA03[0].length);
  let spdX = 0;
  let spdY = 2 + Math.round(Math.random() * 2);
  let color = 'red';
  let hp = 1;

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp)
}

let level_1_Enemy = function () {
  let id = Math.random();
  let name = 'randomlvl2'
  let x = Math.round(Math.random() * canvasWidth);
  let y = 0;
  let height = 20 + Math.round(Math.random() * 20);
  let width = 20 + Math.round(Math.random() * 20);
  let vfx = 1 + Math.round(Math.random() * jsonData.enemy.LA01[0].length);
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
  let height = 20;
  let width = 20;
  let vfx = 1 + Math.round(Math.random() * 2);
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
  let height = 45;
  let width = 45;
  let vfx = 1 + Math.round(Math.random() * jsonData.enemy.LA01[0].length);
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
  let height = 75;
  let width = 75;
  let vfx = 1 + Math.round(Math.random() * jsonData.enemy.LA01[0].length);
  let spdX = 0;
  let spdY = 2;
  let color = '#404040';
  let hp = 3;
  let afterDestroyed = 'asteroid_lvl2'

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed)
}

let asteroid_final = function () {
  let id = Math.random();
  let name = 'asteroid final'
  let x = canvasWidth / 2;
  let y = -150;
  let height = 300;
  let width = 200;
  let vfx = null;
  let spdX = 0;
  let spdY = .5;
  let color = '#404040';
  let hp = 200;
  let afterDestroyed = 'lvl complete'

  Enemy(id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed)
}