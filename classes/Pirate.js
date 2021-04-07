class Pirate extends Character {
  constructor(name, hp = 12, dmg = 3, mana = 100, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.pistol(victim);
	}

	pistol = (victim) => {
		if (this.mana >= 20 && this.dealDamage(5, victim)) {
			console.log("Special attack: Pistol!");
			this.mana -= 20;
		}
	}
}