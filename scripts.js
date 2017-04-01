document.getElementById("myButton").onclick = function () {
        alert("Welcome to the addiction calculator!")
        var response = prompt("Type in A: for Weed. Or B: for Video Games.");

        response = response.toLowerCase();

        if (response === "a") {
            var weedResponse = prompt("How many times do you blaze in one week?");
            if (weedResponse > 0) {
                alert("I'm sorry, you're addicted!")
            }

        } else if (response === "b") {
            var answer = prompt("How many hours do you spend on video games every week?")
            if (answer < 8) {
                alert("You are not addicted!")
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
                alert("You typed in " + "'" + answer + "'" + " which is a string value, please enter an integer value next time.")
            } else {
                alert("You've broken the program so much that it has displayed this message!")
            }
    } else {
        alert("That is not a valid option! Please try again!");
    }
}