$(document).ready(function () {
  class Weapon {
    constructor(name, damage, ammo, fire_rate, range, accuracy, weight, value) {
      console.log("weapon added to inventory");
      this.name = name;
      this.damage = damage;
      this.ammo = ammo;
      this.fire_rate = fire_rate;
      this.range = range;
      this.accuracy = accuracy;
      this.weight = weight;
      this.value = value;
    }
  }
  const pistol_44 = new Weapon("44_pistol", 48, 500, 6, 119, 66, 4.2, 99);
  const pistol_10mm = new Weapon("10mm_pistol", 18, 500, 46, 119, 61, 4.2, 53);
  const assault_rifle = new Weapon("assault_rifle", 30, 40, 119, 72, 13.1, 144);
  const weaponsMap = {
    "44_pistol": pistol_44,
    "10mm_pistol": pistol_10mm,
    assault_rifle,
  };

  $(".item-list a").on("click", function (e) {
    $(".item-list a").removeClass("equipped");
    $(e.currentTarget).addClass("equipped");
  });

  $(".item-list a").on("mouseenter", function (e) {
    const weaponName = e.currentTarget.classList[0];
    const weapon = weaponsMap[weaponName];
    const container = $(".item-stats");
    container.find(".damage").html(weapon.damage);
    container.find(".fire_rate").html(weapon.fire_rate);
    container.find(".range").html(weapon.range);
    container.find(".accuracy").html(weapon.accuracy);
    container.find(".weight").html(weapon.weight);
    container.find(".value").html(weapon.value);
  });

  $(".item-list a").on("mouseleave", function (e) {
    const equipped_weapon = $(".equipped")[0];
    if (equipped_weapon) {
      const classList = equipped_weapon.classList;
      const weaponName = classList[0];
      console.log(weaponName);
      const equipped = weaponsMap[weaponName];
      let container = $(".item-stats");
      container.find(".damage").html(equipped.damage);
      container.find(".fire_rate").html(equipped.fire_rate);
      container.find(".range").html(equipped.range);
      container.find(".accuracy").html(equipped.accuracy);
      container.find(".weight").html(equipped.weight);
      container.find(".value").html(equipped.value);
    }

    // I still don't understand. I get how to connect class to an object when there is a way to connect
    // to the object itself, but I don't understand how to do that if I'm only adding another class
    // I don't get how to tie the equipped class to the actual object, especially since the attribute
    // class targeting doesn't seem to work beucase it now has two classes
  });
});
