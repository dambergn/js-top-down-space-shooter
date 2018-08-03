# Things to add or improve.
[]Create different types of enemy with unique aspects.
[]Give enemy different ammounts of HP.
[]Change weapon damage.
[]Add dynamic and changeable player ships.
[/]Detect window size and adjust play window accordingly.

# 2018-08-02
- Fixed mobile touch screen and weapons on mobile device.
- Moved enemy generation to its own enemys.js file.
- 

# 2018-08-01
- Prevent text select messing with canvas game.
- Added ability to change window size and canvas adjusts accordingly.
- Added touch screen control capability.

# 2018-07-31
- Added ability for multiple weapon modes selectable by the 1, 2 keys.  More to come.
- Added a dual fire mode set to key 3.
- Added spread fire mode to key 4.
- Added a not to great lazer beam weapon, needs work.
- Preventing weapons fire from bouncing off the walls.

# 2018-07-30
- When enemy hits player it is destroyed and only does 1 damage.
- For every 10 enemy shot and destroyed player regains 1 hp.
- Changed background to black.
- Changed projectile weapons color to silver.
- Hide mouse cursor when inside canvas element.
- Seperated controls to its own file.
- Seperated weapons to its own file.
- Disabled right click menue.
- Added a secondary fire mode as a new weapon constructor test.
- Fixed weapon destroying enemy error from console log resulting in screen flashing.

# 2018-07-29
- Created a top down space shooter based on the raining chain tutorial on youtube.  Current features include:
- 500 x 700 canvas play area.
- green square represents player1.
- player movement determined by mouse position.
- enemy are randomly generated and drop from top and fall to bottom.
- when enemy reaches bottom it is removed from play area.
- when player clicks a bullet is fired at current x position till it hits an enemy or reaches top of map.
- if bullet reaches top of map it is removed from the play area.
- if bullet hits an enemy block the enemy is destroyed and player score goes up by one.
- player has 10 HP and takes 1 hp of damage every frame an enemy is touching the player.