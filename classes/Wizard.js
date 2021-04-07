class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.fireball(victim);
	}

	fireball = (victim) => {
		if (this.mana >= 25 && this.dealDamage(7, victim)) {
			console.log("Special attack: Fireball!");
			this.mana -= 25;
		}
	}
}