var clock;

$(document).ready( function() {

// FlipClock.js effect
  clock = $('.clock').FlipClock(150, {
          clockFace: 'MinuteCounter',
          countdown: true,
          callbacks: {
            stop: function() {
              $('.message').html('Game Over!');
              $('#game-board').hide();
              $('.col').hide();
              $('#t-heading').hide();
              $('#g-heading').hide();
            }
          }
      });

      $("#reset").on('click', function() {

        document.location.href = 'index.html';
      });

// Input for Answers
var formOne = $("#form-one");
var formTwo = $("#form-two");
var formThree = $("#form-three");
var formFour = $("#form-four");
var formFive = $("#form-five");
var formSix = $("#form-six");
var formSeven = $("#form-seven");
var formEight = $("#form-eight");

//Array of forms and  array of there answers-- Excuse the naming
var realForm = [formOne, formTwo, formThree, formFour, formFive, formSix, formSeven, formEight];
var questions = [ "Goofy", "Aurora", "Repunzel", "Turkey", "All", "16", "Swahili", "Mortimier Mouse"];

// Goes through each Array and matches it to a possible answer
function formValid() {
for ( var i = 0; i < realForm.length; i++) {
 if (questions[i] === realForm[i].val()) {
$(realForm[i]).css('background-color', 'green');
}
else {
  $(realForm[i]).addClass('animated bounce infinite');
  }
}
}

// Validate if answer is correct on submit
 $("form").on('submit', function(e) {
e.preventDefault();
formValid();
});

// Player One object
var playerOne = {
  name:"playerOne",
  div:document.getElementById('mario')
};

//Plater Two object
var playerTwo = {
  name: "playerTwo",
  div:document.getElementById('luigi')
};

// Default control Player Two
$("body").on('keypress', function(e) {
if (e.charCode === 113) {

$(playerTwo.div).animate({left:'+=10px'});
console.log(e);
}

});

//Keypress for Mario object
$("body").on('keypress', function(e) {
if (e.charCode === 112) {

$(playerOne.div).animate({left:'+=10px'});
console.log(e);
}

});

});
