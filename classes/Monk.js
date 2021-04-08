class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 100, status = "playing", shield = 0, invicible = false) {
    super(hp, dmg, mana, status, shield, invicible);
    this.name = name;
  }

  specialAttacks = (victim) => {
		this.heal(victim);
	}

	heal = (victim) => {
    console.log("%cSpecial attack: Heal!", 'color: purple');
		if (this.mana >= 25 && this.dealDamage(this.dmg, victim)) {
      console.log("%cSpecial attack: Success!", 'color: green');
      this.hp += 8;
      this.mana -= 25;
		} else {
      console.log("%cSpecial attack: Failed!", 'color: red');
    }
	}
}