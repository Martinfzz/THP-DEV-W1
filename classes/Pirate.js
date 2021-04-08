class Pirate extends Character {
  constructor(name, hp = 12, dmg = 3, mana = 100, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.pistol(victim);
	}

	pistol = (victim) => {
    console.log("%cSpecial attack: Pistol!", 'color: purple');
		if (this.mana >= 20 && this.dealDamage(5, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
			this.mana -= 20;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}