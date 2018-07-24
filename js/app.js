// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
        this.x = x;
        this.y = y;
        this.w = 75;
        this.h = 50;
        this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

var high;
var speed = 100;
var lowSpeed = 65;

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
    this.h = 75;
    this.sprite = 'images/char-boy.png';

};

var player = new player1(200,300);
// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-100, 60, 200);
var enemy2 = new Enemy(-100, 140, 500);
var enemy3 = new Enemy(-100, 210, 100);

var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

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



player1.prototype.checkCollisions = function(){
  if (Enemy.x < player.x + player.w &&
         Enemy.x + Enemy.w > player.x &&
         Enemy.y < player.y + player.h &&
         Enemy.h + Enemy.y > player.y) {
         // collision detected!
         this.reset();

     }
}

player1.prototype.reset = function (){
      this.x = 200;
      this.y = 300;
}
