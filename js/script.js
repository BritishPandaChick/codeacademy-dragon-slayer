var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

var slaying = true;
while (slaying) {
    if (youHit) {
        console.log("Congrats! You hit the dragon.");
        totalDamage = totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slayed the dragon!");
            slaying = false;
        }else {
            youHit = Math.floor(Math.random() *2);
        }
    } else {
        console.log("Sorry. The dragon ate you.");
    }
    slaying = false;
};