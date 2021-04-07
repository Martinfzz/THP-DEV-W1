const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
const Harry = new Wizard('Harry');
const Jack = new Pirate('Jack');

chooseRandPlayers = () => {
  let players = [Grace, Ulder, Moana, Draven, Carl, Harry, Jack];
  for(let i=0; i<5; i++){
    randPlayers = Math.floor(Math.random() * players.length);
    game.addPlayer(players[randPlayers]);
    players.splice(randPlayers, 1);
  }
  console.log(players)
}

const game = new Game();
chooseRandPlayers();

const turn = new Turn();
game.startGame();
