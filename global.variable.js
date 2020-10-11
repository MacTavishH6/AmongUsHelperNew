class Game {
    constructor() {
        this.start = 0;
        this.inGame = 0;
        this.Player = [];
        this.DonePlayer = [];
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
        this.DonePlayer = [];
    }
    undoKill(player) {
        this.Player.pop(player);
    }
    sortPlayer() {
        this.Player.sort();
    }
    getDonePlayer() {
        let lastPlayer = this.Player.shift();
        this.Player.unshift(lastPlayer);
        return lastPlayer;
    }
    nextPlayer() {
        this.Player.shift();
    }
}

var game = new Game();

module.exports = {
    game: game
}