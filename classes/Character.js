class Character {
  constructor(hp, dmg, mana, status, shield, invincible) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.shield = shield;
    this.invincible = invincible;
  }

  initNewTurn = () => {};

  takeDamage = (damage) => {
		if (this.status !== 'playing') {
			console.log(`WTF Bro?! I'm not playing!`);
			return 0;
		}

    const amountOfDamages = damage - this.shield;

    this.hp -= amountOfDamages;

    return amountOfDamages;
	}

  dealDamage = (damage, victim) => {
		if (victim.status !== 'playing') {
			console.log(`${victim.name} is not playing.`);
			return false;
		}

    if (victim.invincible) {
			console.log(`${victim.name} is invincible!`);
			return false;
		}

    console.log("--------------")
		console.log(`${this.name} attacks ${victim.name}!`);
		const givenDamage = victim.takeDamage(damage);
		console.log(`${this.name} deals ${givenDamage} damages to ${victim.name}. ${victim.name} got ${victim.hp} lifepoints left.`);

    this.isDead(victim);

		if (!victim.isAlive()) {
			this.mana += 20;
		}

		return true;
	}

  attacks = (victim) => {
		return this.dealDamage(this.dmg, victim);
	}

  specialAttacks = (victim) => {
		return this.dealDamage(this.dmg, victim);
	}

  isAlive = () => {
		return this.hp > 0;
	}

  isDead = (victim) => {
    if (victim.hp <= 0) {
			victim.hp = 0;
			victim.status = 'loser';
			console.log(`${victim.name} is dead!`);
		}
  }


}