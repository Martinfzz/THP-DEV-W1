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
			console.log(`%cWTF Bro?! I'm not playing!`, 'color: purple');
			return 0;
		}

    const amountOfDamages = damage - this.shield;

    this.hp -= amountOfDamages;

    return amountOfDamages;
	}

  dealDamage = (damage, victim) => {
		if (victim.status !== 'playing') {
			console.log(`%c${victim.name} is not playing.`, 'color: blue');
			return false;
		}

    if (victim.invincible) {
			console.log(`%c${victim.name} is invincible!`, 'color: blue');
			return false;
		}

		console.log(`%c${this.name} attacks ${victim.name}!`, 'color: green');
		const givenDamage = victim.takeDamage(damage);
		console.log(`%c${this.name} deals ${givenDamage} damages to ${victim.name}. ${victim.name} got ${victim.hp} lifepoints left.`, 'color: blue');

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
			console.log(`%c${victim.name} is dead!`, 'color: red');
		}
  }


}