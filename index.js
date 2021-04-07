const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
const Harry = new Wizard('Harry');
const Jack = new Pirate('Jack');

const game = new Game();
game.addPlayer(Grace);
game.addPlayer(Ulder);
game.addPlayer(Moana);
game.addPlayer(Draven);
game.addPlayer(Carl);
game.addPlayer(Harry);
game.addPlayer(Jack);

const turn = new Turn();
game.startGame();
