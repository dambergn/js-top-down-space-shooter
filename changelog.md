# Things to add or improve.
- [X]Create different types of enemy with unique aspects.
- [X]Make asteroid enemys that break into smaller asteroids.
- [X]Give enemy different ammounts of HP.
- [X]Change weapon damage.
- []Add dynamic and changeable player ships.
- [X]Detect window size and adjust play window accordingly.
- []More spread progression
- []Create options menue in top right hand corner.
- []Add a space station at the bottom for asteroids to hit.
- []Give space station HP and when destroyed game over.
- []Make red asteroids explode and destory other asteroids in AOE.
- []Add special boss asteroid to win the game.
- []Refactor and optimize code for effecency.
- []Add animated effects.
- []look for a way to check performace.
- []look into web workers for multi threading
- [X]instead of looping BG, tile it to work with differnt height screens.
- [X]add space bar for fireing becuse touch pads that are the click button suck.
- []refactor update and frame rate to be dynamic.
- []center canvas in window.

# 2018-08-06
- Fixed background into a streaming bg instead of a rotating one.
- Added space bar to firing.
- Added final asteroid boss but does not spawn yet.
- Added space station with HP and a spawn for the final asteroid.

# 2018-08-05
- updated change log and things to add/improve section.

# 2018-08-04
- Added a scrolling stary background
- Added static asteroid images
- Set Asteroid VFX data to json file.
- Expanded FVX to lvl2 and lvl1 asteroids as well as randoms.
- Changed random asteroids to new grapic and gave red one to random lvl2.
- Weapons now have grapics and are refrenced in json file.

# 2018-08-03
- Added two more fireing modes, alternating fire, and cycle fire.
- Added new asteroid type enemy that breaks into smaller pieces after destruction.
- Player now takes damage equal to how much hp an enemy has left.
- Added test ultimate weapon combining 2 other weapons.
- Added another break to the lvl2 asteroids to lvl1 asteroids.
- Fixed asteroids bouncing off walls and now get removed when out of bounds.

# 2018-08-02
- Fixed mobile touch screen and weapons on mobile device.
- Moved enemy generation to its own enemys.js file.
- Weapons upgrade based on number of kills.
- New different colored enemy appears after 10 kills.
- Enemy now have their own HP.
- New organge enemy requires 2 hits to kill.
- weapons now have hp damage.

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
