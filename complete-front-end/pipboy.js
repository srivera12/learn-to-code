$(document).ready(function () {
    const weapons = [
      // wait, if I'm making a bunch of things with these same properties, shouldn't I just
      // make a weapons class?
      // maybe i'll try doing that after I see what this chucklehead has planned
      {
        name: "44_pistol",
        damage: 48,
        fire_rate: 6,
        range: 119,
        accuracy: 66,
        weight: 4.2,
        value: 99,
      },
      {
        name: "10mm_pistol",
        damage: 18,
        fire_rate: 46,
        range: 119,
        accuracy: 61,
        weight: 4.2,
        value: 53,
      },
      {
        name: "assault_rifle",
        damage: 30,
        fire_rate: 40,
        range: 119,
        accuracy: 72,
        weight: 13.1,
        value: 144,
      },
    ];

//   class weapon {
//     constructor(name, damage, ammo, fire_rate, range, accuracy, weight, value) {
//       console.log("weapon added to inventory");
//       this.name = name;
//       this.damage = damage;
//       this.ammo = ammo;
//       this.fire_rate = fire_rate;
//       this.range = range;
//       this.accuracy = accuracy;
//       this.weight = weight;
//       this.value = value;
//     }
//   }
//   const pistol_44 = new weapon("44_pistol", 48, 500, 6, 119, 66, 4.2, 99);
//   const pistol_10mm = new weapon("10mm_pistol", 18, 500, 46, 119, 61, 4.2, 53);
//   const assault_rifle = new weapon("assault_rifle", 30, 40, 119, 72, 13.1, 144);

    $(".item-list a").on("click", function (e) {
      $(".item-list a").removeClass("equipped");
      $(e.currentTarget).addClass("equipped");
    });

    // $(".item-list a").on("mouseenter", function(e){
    //     let current_item = $(e.currentTarget).attr("class");
    //     for() {

    //     }
    // })

    $(".item-list a").on("mouseenter", function (e) {
      let current_item = $(e.currentTarget).attr("class");
      for (item in weapons) {
        // is there a better way than just cycling through each time? or is that fine?
        if (weapons[item].name === current_item) {
          let container = $(".item-stats");
          container.find(".damage").html(weapons[item].damage);
          container.find(".fire_rate").html(weapons[item].fire_rate);
          container.find(".range").html(weapons[item].range);
          container.find(".accuracy").html(weapons[item].accuracy);
          container.find(".weight").html(weapons[item].weight);
          container.find(".value").html(weapons[item].value);
        }
      }
    });

    // $(".item-list a").on("mouseleave", function(e){
        
    //     let equipped_weapon = $('.equipped')
    //     // not sure what to do here - I can target equipped but not sure how to then get to the object, since that
    //     // tied to another class, which is the same as the name of the object
    //     let container = $(".item-stats");
    //     // eventually thinking this could be .html(equipped_weapon.damage)
    //     container.find(".damage").html(weapons[item].damage);
    //     container.find(".fire_rate").html(weapons[item].fire_rate);
    //     container.find(".range").html(weapons[item].range);
    //     container.find(".accuracy").html(weapons[item].accuracy);
    //     container.find(".weight").html(weapons[item].weight);
    //     container.find(".value").html(weapons[item].value);
    // })    

  // make a way for it to disappear? IDK what it does in game. Also invisible beforehand?
  // actually, let's make mouseleave be the equipped one
  // make a way to create .item-list li a based on making a new weapon in js?
});
