Arcade Game clone

This code refers to the Classic Arcade Game Clone project, next some of the steps taken to complete the tasks only in Javascript:

First of all to load the game, you should download the full zip including js, images and css folders, once downloaded and extracted you can open the index.html and start playing around.
The game uses the arrown up, down, left and right to move the player, the goal is to get to the water without the bugs biting you.

1. Created the player1 variable, in order to define the both actors in the game and afterwards using constructor functions instatiate the objects.
2. Both objects have some elements helpful for the location in the game and the collision function and also the image.
3. The new objects built with contructors Enemy use a math.random() function to choose randomly the speed of the enemies in the game
4. Each enemy has the value of x, y and a radom speed in order to be pushed into the array.
5. handleInput function helps the player get out of the game
6.CheckCollisions function help reset the player position in case of collision with any enemy.
7.Reset() set the location to default if called.

Best regards,