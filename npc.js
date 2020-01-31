'use strict';

let Npc = function (id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed) {
  let object = {
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
  npcList[id] = object;
};

let npcVFX = function () {
  for (let key in npcList) {
    if (npcList[key].name === 'space station') {
      let vfx_npc = new Image();
      vfx_npc.src = "./assets/VFX/WB_base_d1.png";
      // console.log("space station hit")
      ctx.drawImage(
        vfx_npc,
        npcList[key].x - (npcList[key].width / 2),
        npcList[key].y - (npcList[key].height / 2),
        npcList[key].width,
        npcList[key].height
      )
    }
  }

}

let space_station = function () {
  console.log('space station generated')
  let id = Math.random();
  let name = 'space station'
  let x = canvasWidth / 2;
  let y = canvasHeight - 75;
  let vfx = null;
  let spdX = 0;
  let spdY = 0;
  let width = (canvasWidth / 3) * 2;
  let height = 150;
  let color = '#404040';
  let hp = 250;
  let afterDestroyed = 'lvl complete'

  Npc(id, name, x, y, vfx, spdX, spdY, width, height, color, hp, afterDestroyed)
}