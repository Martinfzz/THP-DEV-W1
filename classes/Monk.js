class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.heal(victim);
	}

	heal = (victim) => {
		if (this.mana >= 25 && this.dealDamage(this.dmg, victim)) {
			console.log("Special attack: Heal!");
      this.hp += 8;
      this.mana -= 25;
		}
	}
}