// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 20;
        this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

var high;
var speed = 100;


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     this.x += this.speed*dt;
     if (this.x > 500){
        this.x = -50;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var player1 = function(x, y){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 40;
    this.sprite = 'images/char-boy.png';

};

var player = new player1(200,400);
// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-100, 60, (Math.random()*400));
var enemy2 = new Enemy(-100, 140, (Math.random()*500));
var enemy3 = new Enemy(-100, 220, (Math.random()*600));
var enemy4 = new Enemy(-600, 150, (Math.random()*200));
var enemy5 = new Enemy(-900, 60, (Math.random()*400));

var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);
allEnemies.push(enemy5);
// Place the player object in a variable called player


player.update = function(dt) {
  if (this.y <= -12.5){
         this.reset();

      }
      this.checkCollisions();


  };
player1.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
player.handleInput = function(direction){

          if(direction === 'left' && this.x >= 100){
         this.x -= 100;
         }
         if(direction === 'up' && this.y >= -10){
         this.y -= 82.5;
         }
         if(direction === 'right' && this.x <= 305){
         this.x += 100;
         }
         if(direction === 'down' && this.y <= 310){
         this.y += 82.5;
         }
        };




document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


player1.prototype.checkCollisions = function() {
    for (i = 0; i < allEnemies.length; i++)
        if (player.x < allEnemies[i].x + allEnemies[i].w  &&
            player.x + player.w > allEnemies[i].x &&
            player.y < allEnemies[i].y + allEnemies[i].h &&
            player.h + player.y > allEnemies[i].y){

            player.reset();

        }
};



player1.prototype.reset = function (){
      this.x = 200;
      this.y = 400;
}
