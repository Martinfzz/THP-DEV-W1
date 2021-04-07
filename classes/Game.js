class Game {
  turnLeft = 10;
  playerList = [];

  constructor() {
    this.turn = new Turn();
  }

  startGame = () => {
		turn.startTurn();
	}

  addPlayer = (player) => {
    this.playerList.push(player);
  }

	watchStats = () => {
		this.playerList.map((player) => {!player.isAlive() ? 
                                      console.log(`${player.name} is dead`) : 
                                      console.log(`${player.name}: ${player.hp} hp, ${player.dmg} dmg, ${player.mana} mana.`);
      }
    );
	}
}