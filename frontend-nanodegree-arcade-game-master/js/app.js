// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //start the enemy out at 0, and randomly at one of three columns
    this.x = 0;
    this.y = (Math.floor(Math.random() * 3) + 1) * 75; 
    this.speed = Math.floor(Math.random() * 150) + 75;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = -100;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {

//tell player that it always starts in the middle
    this.x = 2 * 101;
    this.y = 5 * 75;


    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed) {
    
var validMove = (typeof keyPressed !== 'undefined');
    //console.log(validMove);

var onBoardX = (this.x >= 0 && this.x <= 505);

var onBoardY = (this.y >= 0 && this.y <= 415);

    if (validMove && onBoardX && onBoardY) {
        if (keyPressed === 'left') {
            this.x = this.x - 101;

        } else if (keyPressed === 'right') {
            this.x = this.x + 101;

        } else if (keyPressed === 'up') {
            this.y = this.y - 83;

        } else {
            this.y = this.y + 83;
        }
    }
};

// tell player that it can move 101 pixels left OR right OR 83 pixels up or down
// EXCEPT, it cannot violate the boundaries of the canvas

// NEXT: check for collisions. If player and Enemy are in the same area, 
// then player goes back to the beginning. 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [];

for (var i = 0; i <= 3; i++) {
    pushEnemy = new Enemy();
    allEnemies.push(pushEnemy);
}

var player = new Player;    


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
