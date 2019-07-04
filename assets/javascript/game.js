
var targetNumber = 53;

$("#total-score").text(targetNumber);
// computer to generate random number 19-120 and store in total crystal number
// generate a random number between 1-12
// store number into variable for each gem 
// on click for gems 
// number + total score
// total score = > total number  
// if = total crystal number; you win 
// if >; you lose 

var counter = 0;
var numberOptions = [10, 5, 3, 7];

$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("Your new score is: " + counter);


    if (counter === targetNumber) {
        alert("You win!")
    }

    else if (counter >= targetNumber) {
        alert("You lose!!")
    }
});