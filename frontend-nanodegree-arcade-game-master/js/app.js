// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //start the enemy out at 0, and randomly at one of three columns
    this.x = 0;
    this.y = (Math.floor(Math.random() * 3) + 1) * 75;
    this.speed = Math.floor(Math.random() * 300) + 75;
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
    if (this.x > 707) {
        this.x = -100;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
// Tell player that it always starts in the middle
    this.x = 3 * 101;
    this.y = 9 * 83;
// Use this image to represent Player character
    this.sprite = 'images/char-horn-girl.png';
};

// NEXT: check for collisions. If player and Enemy are in the same area, 
// then player goes back to the beginning. 

Player.prototype.collision = function () {
    for (i = 0; i < allEnemies.length; i++) {

        if (this.x < allEnemies[i].x+50 && this.x+50 > allEnemies[i].x && 
            this.y < allEnemies[i].y+30 && this.y+30 > allEnemies[i].y) {
            this.reset();
            alert("You crashed!");
        } 
    }
};

// This function sets the win condition, lets the player know he or she won, 
// and sends Player back to start.
Player.prototype.win = function () { 
    //console.log(this.y)
    if (this.y === 0) {
        this.reset();
        alert("You Won!");

    }
};  

//This function sends the player back to the start position.
Player.prototype.reset = function () { 
    this.x = 3 * 101;
    this.y = 9 * 83;
};  

// When updating, the player first checks for collision and win conditions.
Player.prototype.update = function(dt) {
    this.collision();
    this.win();
};

// When rendering, the player references its x and y coordinates in order to
// render to the proper location.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// This function connects the eventListener function below so that they keys
// have actual meaning.
Player.prototype.handleInput = function(keyPressed) {
    
var validMove = (typeof keyPressed !== 'undefined');
    console.log(validMove);


// This section tells player that it can move 101 pixels left OR right OR 83 pixels up or down
// EXCEPT, it cannot violate the boundaries of the canvas
var onBoardX = (this.x >= 0 && this.x <= 606);
var onBoardY = (this.y >= 0 && this.y <= 747);

    if (validMove && onBoardX && onBoardY) {
        if (keyPressed === 'left' && this.x > 0) {
            this.x = this.x - 101;

        } else if (keyPressed === 'right' && this.x < 606) {
            this.x = this.x + 101;

        } else if (keyPressed === 'up' && this.y > 0) {
            this.y = this.y - 83;

        } else if (keyPressed === 'down' && this.y < 747) {
            this.y = this.y + 83; 
        }
    }

};

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
