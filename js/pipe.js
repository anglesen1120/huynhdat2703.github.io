const PIPE_IMG = new Image();
PIPE_IMG.src = 'img/pipe.png';
var pipe_X = 290;
var pipe_Y = randomPipeY();

class Pipe {
    constructor (game){
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(PIPE_IMG, pipe_X, pipe_Y);
        // this.game.ctx.drawImage(PIPE_IMG, pipe_X + 336, 400);
    }

    update = function () {
        pipe_X -= 2;
        if(pipe_X <= -10){
            pipe_X = 290;
        }
        this.draw();
    }
}

function randomPipeY() {
    return Math.floor(Math.random() * (320 - 120) + 120);
}
