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