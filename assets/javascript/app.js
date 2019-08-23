$(document).ready(function() {
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
      q: "Who was Walt Disney's personal favorite concept artist?",
      a: ["Mary Blair", "Glene Keane", "Floyd Norman", "Don Lusk"],

      correct: "Mary Blair",
      pic: "assets/images/maryblair.jpg"
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
    //prints timer on screen **currently starts with a 3????
    $("#timer").html(timer);
    //prints q property in the currentQuestion object
    $("#Question").html(questions[currentQuestion].q);
    //loops through the currentQuestion a property (an array) to display each indaex (answer) as a button
    for (let index = 0; index < questions[currentQuestion].a.length; index++) {
      $("#answers").append(
        '<button class="answerButton" id="button-' +
          index +
          '"data-name ="' +
          questions[currentQuestion].a[index] +
          '">' +
          questions[currentQuestion].a[index] +
          "</button>"
      );
    }
  }
  //function to call the next question
  function nextQuestion() {
    timeCount = 30;
    //goes to next question
    currentQuestion++;
    //calls the question to load
    loadQuestion();
  }
  //function for timer reaching 0
  function timeUp() {
    clearInterval(timer);
    //prints Out of Time!
    $("#timer").html("<h2>Out of Time!</h2>");
    //prints correct answer for current question
    $("#answers").html(
      "The correct Answer is: " + questions[currentQuestion].correct
    );
    //if there are no more questions, go to results screen after 5sec
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      //go to next question after 5sec
      setTimeout(nextQuestion, 5000);
    }
  }
  //results function, clears timer and displays number of correct answers and number of incorrect answers
  function results() {
    clearInterval(timer);
    $("#timer").html("All done!");
    $("#right").html("Correct: " + correct);
    $("#wrong").html("Incorrect: " + incorrect);
  }
  //function clicked. tests the clicked answer button for the corret answer
  function clicked(event) {
    clearInterval(timer);
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
    //clear timer
    clearInterval(timer);
    //count for correct answer increases by 1
    correct++;
    //prints That's Right! on screen
    $("answers").html("That's Right!");
    //prints the correct answer on the screen
    $("#right").html(
      "The correct Answer is: " + questions[currentQuestion].correct
    );
    //goes to result screen after 5sec
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      //goes to question after 5 sec
      setTimeout(nextQuestion, 5000);
    }
  }
  //function for wrong answers
  function answeredWrong() {
    //incorrect answers increase by 1
    incorrect++;
    //display Sorry, that's wrong!
    $("#answers").html("Sorry, that's wrong!");
    //displays correct answer
    $("#wrong").html(
      "The correct Answer is: " + questions[currentQuestion].correct
    );
    //if no questions go to results screen after 5 sec
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      //go to next question
      setTimeout(nextQuestion, 5000);
    }
  }
  //for reset button
  //clears varibles and returns to question 1 (index[0])
  function reset() {
    currentQuestion = 0;
    timeCount = 0;
    correct = 0;
    incorrect = 0;
    loadQuestion();
  }
});
