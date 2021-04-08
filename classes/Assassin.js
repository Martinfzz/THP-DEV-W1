class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status = "playing", shield = 0, invincible = false) {
    super(hp, dmg, mana, status, shield, invincible);
    this.name = name;
  }

  attackedVictim = null;

  initNewTurn = () => {
    if (!this.attackedVictim) {
			return;
		}
    console.log(`%cShadow Hit: Success!`, 'color: green');
    this.dealDamage(7, this.attackedVictim);
		this.invincible = false;

		if (this.attackedVictim.isAlive()) {
			console.log(`%cShadow Hit: Failed!`, 'color: red');
			this.hp -= 7;
      this.isDead(this);
		}

		this.attackedVictim = null;
  }

  specialAttacks = (victim) => {
		this.shadowHit(victim);
	}

	shadowHit = (victim) => {
    console.log("%cSpecial attack: Shadow Hit!", 'color: purple');
		if (this.mana >= 20 && this.dealDamage(0, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
      this.mana -= 20;
      this.invincible = true;
      this.attackedVictim = victim;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}

}