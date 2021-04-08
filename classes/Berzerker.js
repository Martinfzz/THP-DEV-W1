class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.rage(victim);
	}

	rage = (victim) => {
    console.log("%cSpecial attack: Rage!", 'color: purple');
		if (this.hp >= 2 && this.dealDamage(this.dmg + 1, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
			this.dmg += 1;
      this.hp -= 1;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}