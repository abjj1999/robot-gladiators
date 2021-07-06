
var playerName = window.prompt("enter your")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ['Roborto', "Android", "Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var choice = window.prompt("would you like to fight or skip? Enter 'fight' or 'skip' to choose.");
    if (choice === "fight" || choice === "FIGHT"){
        
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log( playerName + " attacked " + enemyName+ ". "+enemyName + " now has "+ enemyHealth + " health remaining.")

        if (enemyHealth <= 0){
            window.alert(enemyName + " has died.!");
        }
        else { 
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (choice === "skip" || choice === "SKIP") {
        // confirm payer wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip??");

        //if yes(true), leave the game
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
            console.log(playerName + " has just been dedcuted "+ playerMoney + " Points.");
        }
        else {
            fight();
        }
    }
    else {
        window.alert("comn man")
    }
}

for (var i = 0; i < enemyNames.length; ++i){
    fight(enemyNames[i])
}