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

    this.dealDamage(7, this.attackedVictim);
		this.invincible = false;

		if (this.attackedVictim.isAlive()) {
			console.log(`Shadow hit failed!`);
			this.hp -= 7;
      this.isDead(this);
		}

		this.attackedVictim = null;
  }

  specialAttacks = (victim) => {
		this.shadowHit(victim);
	}

	shadowHit = (victim) => {
		if (this.mana >= 20 && this.dealDamage(0, victim)) {
			console.log("Special attack: Shadow Hit!");
      this.mana -= 20;
      this.invincible = true;
      this.attackedVictim = victim;
      console.log(this)
		}
	}

}