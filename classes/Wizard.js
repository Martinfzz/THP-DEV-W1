class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.fireball(victim);
	}

	fireball = (victim) => {
    console.log("%cSpecial attack: Fireball!", 'color: purple');
		if (this.mana >= 25 && this.dealDamage(7, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
			this.mana -= 25;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}