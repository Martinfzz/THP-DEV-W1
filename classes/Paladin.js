class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.healingLighting(victim);
	}

	healingLighting = (victim) => {
    console.log("%cSpecial attack: Healing Lighting!", 'color: purple');
		if (this.mana >= 40 && this.dealDamage(4, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
			this.mana -= 40;
      this.hp += 5;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}