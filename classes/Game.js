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
                                      console.log(`%c${player.name} is dead`, 'color: red') : 
                                      console.log(`%c${player.name}: hp: ${player.hp}, dmg: ${player.dmg}, mana: ${player.mana}, invincible: ${player.invincible}, shield: ${player.shield}.`, 'color: green');
      }
    );
	}
}