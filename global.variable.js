class Game {
    constructor() {
        this.start = 0;
        this.inGame = 0;
        this.Player = [];
    }
    startGame() {
        this.start = 1;
        this.inGame = 1;
    }
    kill(player) {
        this.Player.push(player);
    }
    discussion() {
        this.inGame = 0;
    }
    startAgain() {
        this.inGame = 1;
    }
    finish() {
        this.start = 0;
        this.inGame = 0;
        this.Player = [];
    }
}

var game = new Game();

module.exports = {
    game: game
}