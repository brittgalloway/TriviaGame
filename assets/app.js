$(document).ready(function() {
  // FOR SIDE NAV----------------------------------------------------------------
  $(".sidenav").sidenav();
  //on button click, timer starts
  $("#button").click(function() {
    //button disappears
    $("#button").hide();
    //game start/first question
    loadQuestion();
  });
  //event listener for click function on the answer buttons
  $(document).on("click", ".answerButton", function(event) {
    clicked(event);
  });
  //event listener for click function on the reset button
  $(document).on("click", "#resetButton", function(event) {
    resetButton();
  });

  // questions and answers
  const questionArray = [
    {
      q: "What was the first 3D animated TV show?",
      a: ["Cubix", "ReBoot", "Jimmy Neutron", "Toy Story"],

      correct: "ReBoot",
      pic: "assets/images/reboot.jpg"
    },
    {
      q: "What was the first animated feature movie?",
      a: [
        "Snow White",
        "Adventures of Prince Achmed",
        "Tale of the White Serpent",
        "Fantasmagorie"
      ],

      correct: "Adventures of Prince Achmed",
      pic: "assets/images/princeAchmed.jpg"
    },
    {
      q: "Which was Walt Disney's favorite movie that he produced?",
      a: ["Snow White", "101 Dalmations", "Cinderella", "Bambi"],
      correct: "Cinderella",
      pic: "assets/images/cinderella.jpg"
    },
    {
      q: "Which is NOT a Don Bluth movie?",
      a: [
        "Anastasia",
        "An American Tale",
        "Secret of Nimb",
        "Quest for Camelot"
      ],
      correct: "Quest for Camelot",
      pic: "assets/images/questcamelot.jpg"
    },
    {
      q: "Rankin-Bass Productions did not work on which of these?",
      a: ["Thundercats", "The Last Unicorn", "SilverHawks", "Captian Planet"],
      correct: "Captian Planet",
      pic: "assets/images/captainplanet.jpg"
    },
    {
      q: "Who was Walt Disney's personal favorite concept artist?",
      a: ["Mary Blair", "Glene Keane", "Floyd Norman", "Don Lusk"],

      correct: "Mary Blair",
      pic: "assets/images/maryblair.jpg"
    },
    {
      q:
        "How many years after the debut of Mickey Mouse was it before Minnie Mouse made her first appearance?",
      a: ["5", "1", "Same Year", "2"],

      correct: "Same Year",
      pic: "assets/images/mickie.webp"
    },
    {
      q: "How many nephews does Donald Duck have?",
      a: ["5", "1", "3", "4"],

      correct: "3",
      pic: "assets/images/huey-dewey-louie.gif"
    },
    {
      q: "Which two characters did the same actor voice?",
      a: [
        "Batman and Tweety Bird",
        "Eyore and Optimus Prime",
        "Snow White and Maleficent",
        "Jafar and Papa Smurf"
      ],

      correct: "Eyore and Optimus Prime",
      pic: "assets/images/eeyore_optimus.jpg"
    },
    {
      q:
        'What cartoon characters were created when Professor Utonium accidentally added "Chemical X" to a concoction that also included sugar, spice, and everything nice?',
      a: [
        "Sailor Scouts",
        "Bratz Angels",
        "PowerPuff Girls",
        "Teenage Mutant Ninja Turtles"
      ],

      correct: "PowerPuff Girls",
      pic: "assets/images/ppg.jpg"
    }
  ];

  //variables
  let timer;
  let questions = questionArray;
  let currentQuestion = 0;
  let timeCount;
  let correct = 0;
  let incorrect = 0;

  //function for main timer
  function timeLimit() {
    timeCount--;
    $("#timer").html(timeCount);
    if (timeCount <= 0) {
      $("#timer").html("<h2>Times Up!</h2>");
      timeUp();
    }
  }
  //function to show questions and anwers
  function loadQuestion() {
    //number of seconds
    timeCount = 30;
    //sets timer to decrement by 1000
    timer = setInterval(timeLimit, 1000);
    //prints timer on screen
    $("#timer").html(30);
    //prints q property in the currentQuestion object
    $("#Question").html(questions[currentQuestion].q);
    //loops through the currentQuestion a property (an array) to display each indaex (answer) as a button
    for (let index = 0; index < questions[currentQuestion].a.length; index++) {
      $("#answers").append(
        '<div class="row"> <div class="col s12 m12 l12"><button class="answerButton" id="button-' +
          index +
          '"data-name ="' +
          questions[currentQuestion].a[index] +
          '">' +
          questions[currentQuestion].a[index] +
          "</button></div></div>"
      );
    }
  }
  //function to call the next question
  function nextQuestion() {
    //clears right id when a new question begins
    $("#right").html("");
    timeCount = 30;
    //goes to next question
    currentQuestion++;
    //calls the question to load
    loadQuestion();
  }
  //function for timer reaching 0
  function timeUp() {
    clear();
    //adds to incorrect
    incorrect++;
    //prints Out of Time!
    $("#timer").html("<h2>Out of Time!</h2>");
    showAnswer();
  }
  //results function, clears timer and displays number of correct answers and number of incorrect answers
  function results() {
    clear();

    $("#timer").html("All Answers In!");
    $("#right").html("Correct: " + correct);

    $("#wrong").html("Incorrect: " + incorrect + "</br>");

    $("#wrong").append("<h3>Play Again?</h3></br>");
    //reset button is displayed on screen
    $("#wrong").append("<button id='resetButton'>Reset</button");
  }
  //function clicked
  function clicked(event) {
    clearInterval(timer);
    //tests the clicked answer button for the corret answer
    if ($(event.target).data("name") == questions[currentQuestion].correct) {
      //runs function for correct answers
      answeredRight();
    } else {
      //runs function for incorrect answers
      answeredWrong();
    }
  }
  //function for correct answers
  function answeredRight() {
    clear();
    //count for correct answer increases by 1
    correct++;
    //prints That's Right! on screen
    $("#right").html("That's Right!</br>");
    showAnswer();
  }
  //function for wrong answers
  function answeredWrong() {
    clear();
    //incorrect answers increase by 1
    incorrect++;
    //display Sorry, that's wrong!
    $("#right").html("Sorry, that's wrong!</br>");
    //displays correct answer
    showAnswer();
  }

  //for answer check conditional
  function showAnswer() {
    //prints the correct answer on the screen
    $("#right").append(
      "The Correct Answer is: " + questions[currentQuestion].correct + "</br>"
    );
    //adds image to screen
    $("#right").append("<img src=" + questions[currentQuestion].pic + ">");
    //goes to result screen after 5sec
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      //goes to question after 5 sec
      setTimeout(nextQuestion, 5000);
    }
  }
  // //for reset button to reset game
  function resetButton() {
    clear();
    $("#right").empty();
    $("#wrong").empty();
    currentQuestion = 0;
    timeCount;
    correct = 0;
    incorrect = 0;
    clearInterval(timer);
    loadQuestion();
  }
  //clears divs and the timer
  function clear() {
    $("#timer").empty();
    $("#Question").empty();
    $("#answers").empty();
    clearInterval(timer);
  }
});
