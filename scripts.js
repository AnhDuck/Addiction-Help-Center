document.getElementById("myButton").onclick = function () {

    var invalidResponse = "That is not a valid option! Please try again!";
    
    // INITALIZE "GLOBAL" VARIABLES
    var response;
    var weedResponse;

    // CALL FUNCTIONS
    welcome();

    if (response === "a") {
        askWeed();
    } else if (response === "b") {
        askVideoGame();
    } else {
        alert(invalidResponse);
    }

    //============= FUNCTIONS =============//

    // INTRODUCE USER TO PROGRAM AND ASK FOR ADDICTION TYPE
    function welcome() {
        alert("Welcome to the addiction calculator!");
        response = prompt("Type in A: for Weed. Or B: for Video Games.");
        response = response.toLowerCase();
    } 

    // ASK FOR HOW MUCH THE USER "BLAZES" PER WEEK
    function askWeed() {
        weedResponse = prompt("How many times do you blaze in one week?");
        if (weedResponse > 0) {
            alert("I'm sorry, you're addicted!");
        } else if (weedResponse === "0") {
            alert("You're not addicted!");
        } else if (typeof weedResponse === "string") {
            alert("You typed in " + "'" + weedResponse + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }

    // ASK HOW MANY HOURS THE USER SPENDS ON VIDEO GAMES PER WEEK
    function askVideoGame() {
        var answer = prompt("How many hours do you spend on video games every week?");
        if (answer < 8 && answer >= 0) {
            alert("You are not addicted!");
        } else if (answer >= 8 && answer < 14) {
            alert("You are moderately addicted!");
        } else if (answer >= 14 && answer < 24) {
            alert("You are addicted!");
        } else if (answer >= 24 && answer < 32) {
            alert("You are super addicted!");
        } else if (answer >= 32 && answer < 44) {
            alert("You are chronically addicted!");
        } else if (answer >= 44 && answer < 168) {
            alert("Get help!");
        } else if (typeof answer === "string") {
            alert("You typed in " + "'" + answer + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }

    //============= FUNCTIONS =============//

}