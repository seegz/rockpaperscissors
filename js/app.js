$(document).ready(function(){
// set variables
  var computerChoiceVal;

  var userChoice;
// bind click event for tie game
  if (computerChoiceVal = userChoice) {
    alert ("it's a tie!");
  };

  var computerChoiceVal = Math.random();

  // $(selector).attr("id") bind click events

  $(document).on("click", "#rock", function(){
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
  });

  $(document).on("click", "#paper", function(){
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
  });

  $(document).on("click", "#scissors", function(){
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
  });

// now, decide tie games.
  $(document).on("click","#scissors", function(){
    if (computerChoiceVal = userChoice) {
      alert ("it's a tie!");
    }
  });
  $(document).on("click","#paper", function(){
    if (computerChoiceVal = userChoice) {
      alert ("it's a tie!");
    }
  });
  $(document).on("click","#rock", function(){
    if (computerChoiceVal = userChoice) {
      alert ("it's a tie!");
    }
  });

  // now decide user winner

  // now decide user loser

});
