const BIRD_IMG_1 = new Image();
const BIRD_IMG_2 = new Image();
const BIRD_IMG_3 = new Image();

BIRD_IMG_1.src = 'img/bird_normal.png';
BIRD_IMG_2.src = 'img/bird_up.png';
BIRD_IMG_3.src = 'img/bird_down.png';

var birds = [BIRD_IMG_1, BIRD_IMG_2, BIRD_IMG_3];
var BIRD_FRAME = 0;
var SPEED = 0;
var bird_X = 34;
var bird_Y = 100;
var acceleration = 0.2; 

class Bird {
    constructor (game){
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(birds[BIRD_FRAME], bird_X, bird_Y);
    }

    update = function () {
        this.checkFrameOfBird();
        this.autoFallen();
        this.birdFly();
        this.draw();
    }

    autoFallen = function () {
        acceleration += 0.3;
        bird_Y += acceleration;
    }

    checkFrameOfBird = function () {
        if( SPEED >= 30) {
            SPEED = 0;
        }
        if(SPEED % 10 === 0) {
            BIRD_FRAME++;
        }
        if(BIRD_FRAME >= 3){
            BIRD_FRAME = 0;
        }
        SPEED += 2;
    }

    birdFly = function name() {
        canvas.addEventListener('click', function() {
            bird_Y -= 2;
            acceleration = 0.2;
            console.log(bird_Y, acceleration);
            
        }, false);
    }
}
