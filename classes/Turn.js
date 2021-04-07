class Turn {
  playersTurn = [];
  currentPlayerIndex = 0;

  startTurn = () => {
    const turnNb = 10 - game.turnLeft + 1;

    if (turnNb === 1) {
      console.log("Welcome into the Arena !");
      console.log("Current players playing : ");
      console.log(game.playerList.map(({name}) => name).join("; "));
    }

    console.log(`Turn number ${turnNb}`);

    game.playerList.map((player) => {player.initNewTurn();});
    
    this.playersTurn = game.playerList.filter((player) => (player.isAlive()));
    if (game.turnLeft <= 0 || this.playersTurn.length === 1) {
			console.log("The game is over!");
			game.playerList.map((player) => {
				if (player.isAlive()) {
					player.status = "winner";
				}
			});
		} else {
      console.log(this.playersTurn);
      this.playerTurn();
    }
  }

  playerTurn = () => {
    this.currentPlayerIndex = Math.floor(Math.random() * this.playersTurn.length);
    const currentPlayerName = this.playersTurn[this.currentPlayerIndex].name;
    console.log(`It's time for ${currentPlayerName} to play`);
  }

  newTurn = () => {
    game.turnLeft -= 1;

		console.log("Who is still in game ?");
		game.watchStats();
		if (game.turnLeft > 0) {
			this.startTurn();
		}
	}

  nextPlayer = () => {
    this.playersTurn.map((player) => {if (!player.isAlive()){
      turn.playersTurn.splice(turn.playersTurn.indexOf(player), 1);
    }});
		this.playersTurn.splice(this.currentPlayerIndex, 1);
    console.log(this.playersTurn);
		if (this.playersTurn.length === 0) {
			this.newTurn();
			return;
		}

		this.playerTurn();
	}

  playerAttacks = (victim, isSpecialAttack = false) => {
		const currentPlayer = this.playersTurn[this.currentPlayerIndex];
		if (currentPlayer.name === victim.name) {
			console.log("I'm not gonna hit myself, stupid!");
			return;
		}

    if (isSpecialAttack) {
			currentPlayer.specialAttacks(victim);
		} else {
			currentPlayer.attacks(victim);
		}
		this.nextPlayer();
	}
}