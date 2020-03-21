var canvas = null;
var ctx = null;
const GAMEOVER_IMG = new Image();
GAMEOVER_IMG.src ='img/gameover.png';

var bg = new Bg(this);
var base = new Base(this);
var bird = new Bird(this);
var pipe = new Pipe(this);
var score = new Score(this);

class Game {
    constructor() {
        this.width = 288;
        this.height = 512;
    }

    drawGame = function () {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
        canvas.width = this.width;
        canvas.height = this.height;
    }

    init = function () {
        this.drawGame();
        loopGame();
    }
}

function loopGame() {
    bg.update();
    score.update();
    pipe.update();
    base.update();
    bird.update();
    if(isStop()) {
        ctx.drawImage(GAMEOVER_IMG, canvas.width/2 - 100, canvas.height/2 - 200);
        return;
    }
    window.requestAnimationFrame(this.loopGame);
}

function isStop() {
    if(bird.touchPipe()) {
        return true;
    }
    else {
        return false;
    }
}

game = new Game();
game.init();