class Turn {
  playersTurn = [];
  currentPlayerIndex = 0;

  startTurn = () => {
    const turnNb = 10 - game.turnLeft + 1;

    if (turnNb === 1) {
      console.log('%c------------------------', 'color: red');
      console.log('%cWelcome into the Arena !', 'color: red');
      console.log('%c------------------------', 'color: red');
      console.log("%cCurrent players playing : ", 'color: orange');
      console.log(`%c${game.playerList.map(({name}) => name, ).join("; ")}`, 'color: green');
      console.log(game.playerList);
    }

    console.log('%c------------------------', 'color: red');
    console.log(`%cTurn number ${turnNb} / 10`, 'color: red');
    console.log('%c------------------------', 'color: red');
    
    game.playerList.map((player) => {player.initNewTurn();});
    
    this.playersTurn = game.playerList.filter((player) => (player.isAlive()));
    if (game.turnLeft <= 0 || this.playersTurn.length === 1) {
      console.log('%c------------------------', 'color: orange');
			console.log("%cThe game is over!", 'color: orange');
      console.log('%c------------------------', 'color: orange');
			game.playerList.map((player) => {
				if (player.isAlive()) {
					player.status = "winner";
				}
			});
      console.log(`%cThe winner(s): ${game.playerList.filter(({status}) => status == "winner").map(({name}) => name).join("; ")}`, 'color: green');
		} else {
      this.playerTurn();
    }
  }

  playerTurn = () => {
    this.currentPlayerIndex = Math.floor(Math.random() * this.playersTurn.length);
    const currentPlayerName = this.playersTurn[this.currentPlayerIndex].name;
    console.log(`%cIt's time for ${currentPlayerName} to play`, 'color: orange');
  }

  newTurn = () => {
    game.turnLeft -= 1;
    console.log('%c------------------------', 'color: blue');
		console.log("%cWho is still in game ?", 'color: blue');
    console.log('%c------------------------', 'color: blue');
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
		if (this.playersTurn.length === 0) {
			this.newTurn();
			return;
		}

		this.playerTurn();
	}

  playerAttacks = (victim, isSpecialAttack = false) => {
		const currentPlayer = this.playersTurn[this.currentPlayerIndex];
		if (currentPlayer.name === victim.name) {
			console.log("%cI'm not gonna hit myself!", 'color: purple');
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