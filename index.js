const game = new Game();

let playerName = ["Grace", "Ulder", "Moana", "Draven", "Carl", "Harry", "Jack"];
let classes = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Pirate];

for(let i=0; i<5; i++){
  let randClasses = Math.floor(Math.random() * classes.length);
  let randPlayerName = Math.floor(Math.random() * playerName.length);
  switch(playerName[randPlayerName]) {
    case "Grace":
      var Grace = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Grace);
      break;
    case "Ulder":
      var Ulder = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Ulder);
      break;
    case "Moana":
      var Moana = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Moana);
      break;
    case "Draven":
      var Draven = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Draven);
      break;
    case "Carl":
      var Carl = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Carl);
      break;
    case "Harry":
      var Harry = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Harry);
      break;
    case "Jack":
      var Jack = new classes[randClasses](playerName[randPlayerName]);
      game.addPlayer(Jack);
      break;
  }
  playerName.splice(randPlayerName, 1);
}

const turn = new Turn();
game.startGame();