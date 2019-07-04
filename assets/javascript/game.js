$(document).ready(function () {



  // computer to generate random number 19-120 and store in total crystal number
  // generate a random number between 1-12 for each gem 
  // store number into variable for each gem 
  // on click for gems 
  // number + total score
  // total score = > total number  
  // if = total crystal number; you win 
  // if >; you lose 

  var randomNumber = 0;
  var gem1 = 0;
  var gem2 = 0;
  var gem3 = 0;
  var gem4 = 0;
  var totalscore = 0;
  var wins = 0;
  var losses = 0;

  function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function start() {
    randomNumber = getRandomInteger(19, 120);
    gem1 = getRandomInteger(1, 12);
    gem2 = getRandomInteger(1, 12);
    gem3 = getRandomInteger(1, 12);
    gem4 = getRandomInteger(1, 12);
    totalscore = 0;
    $ ("#random-number").html("<p>"+randomNumber+"</p>");
    $ ("#score-box").html("<p>"+totalscore+"</p>")
    
  }
  start();
  console.log (randomNumber);
  console.log (gem1);
  console.log (gem2);
  console.log (gem3);
  console.log (gem4);





})