class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.darkVision(victim);
	}

	darkVision = (victim) => {
    console.log("%cSpecial attack: Dark vision!", 'color: purple');
		if (this.mana >= 20 && this.dealDamage(5, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
			this.mana -= 20;
      this.shield += 2;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}