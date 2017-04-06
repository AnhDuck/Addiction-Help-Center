document.getElementById("myButton").onclick = function () {

    // ========== "Global" Shit ========== //

    // Objects
    var drugQuestion = {
        a: "How many times do you blaze in one week?",
        b: "How many hours do you spend on video games in one week?",
        c: "How many shots of alcohol do you take in one week?",
        d: "How many grams of Fentanyl have you consumed in your life?",
    };

    // Variables
    var addictionResponse;
    var response;
    var invalidResponse = "That is not a valid option! Please try again!";

    // ========== "Global" Shit ========== //

    // Function calls

    welcome();

    if (response === "a") { // Weed
        addictionResponse = prompt(drugQuestion.a);
        weedCalc(addictionResponse);

    } else if (response === "b") { // Video Games
        addictionResponse = prompt(drugQuestion.b);
        gameCalc(addictionResponse);

    } else if (response === "c") { // Alcohol
        addictionResponse = prompt(drugQuestion.c);
        alcoholCalc(addictionResponse);

    } else if (response === "d") { // Fentanyl
        addictionResponse = prompt(drugQuestion.d);
        fentanylCalc(addictionResponse);
    } else {
        alert(invalidResponse);
    }

    // ========== The actual functions that do shit ========== //

    function welcome() {
        alert("Welcome to the addiction calculator!");
        response = prompt("Type in: \nA: for Weed \nB: for Video Games \nC: for Alcohol \nD: For Fentanyl");
        response = response.toLowerCase();
    }

    function weedCalc(response) {
        if (response > 0) {
            alert("I'm sorry, you're addicted!");
        } else if (response === "0") {
            alert("You're not addicted!");
        } else if (typeof response === "string") {
            alert("You typed in " + "'" + response + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }

    function gameCalc(response) {
        if (response < 8 && response >= 0) {
            alert("You are not addicted!");
        } else if (response >= 8 && response < 14) {
            alert("You are moderately addicted!");
        } else if (response >= 14 && response < 24) {
            alert("You are addicted!");
        } else if (response >= 24 && response < 32) {
            alert("You are super addicted!");
        } else if (response >= 32 && response < 44) {
            alert("You are chronically addicted!");
        } else if (response >= 44 && response < 168) {
            alert("Get help!");
        } else if (typeof response === "string") {
            alert("You typed in " + "'" + response + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }

    function alcoholCalc(response) {
        if (response === "0") {
            alert("You are not addicted!");
        } else if (response >= 1 && response < 3) {
            alert("You are moderately addicted!");
        } else if (response >= 3 && response < 5) {
            alert("You are addicted!");
        } else if (response >= 5 && response < 8) {
            alert("You are super addicted!");
        } else if (response >= 8 && response < 12) {
            alert("You are chronically addicted!");
        } else if (response >= 12 && response < 168) {
            alert("Get help!");
        } else if (typeof response === "string") {
            alert("You typed in " + "'" + response + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }

    function fentanylCalc(response) {
        if (response === 0) {
            alert("You are not addicted!");
        } else if (response > 0.01) {
            alert("You're dead!");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }
};



/* OLD CODE
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
        response = prompt("Type in: \nA: for Weed \nB: for Video Games \nC: for Alcohol \nD: For Fentanyl");
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
        var response = prompt("How many hours do you spend on video games every week?");
        if (response < 8 && response >= 0) {
            alert("You are not addicted!");
        } else if (response >= 8 && response < 14) {
            alert("You are moderately addicted!");
        } else if (response >= 14 && response < 24) {
            alert("You are addicted!");
        } else if (response >= 24 && response < 32) {
            alert("You are super addicted!");
        } else if (response >= 32 && response < 44) {
            alert("You are chronically addicted!");
        } else if (response >= 44 && response < 168) {
            alert("Get help!");
        } else if (typeof response === "string") {
            alert("You typed in " + "'" + response + "'" + " which is a string value, please enter an integer value next time.");
        } else {
            alert("You've broken the program so much that it has displayed this message!");
        }
    }


    //============= FUNCTIONS =============//

}
*/