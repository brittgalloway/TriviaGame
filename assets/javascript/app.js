$(document).ready(function() {
  //variables

  //on button click, timer starts
  $("#button").click(function() {
    // run();
    $("#button").hide();
    loadQuestion();
  });
  $(document).on("click", ".answerButton", function(event) {
    clicked(event);
  });
  let timer;
  let timer2;

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

  let questions = questionArray;
  let currentQuestion = 0;
  let timeCount = 30;
  let correct = 0;
  let incorrect = 0;

  function timeLimit() {
    timeCount--;
    $("#timer").html(timeCount);
    if (timeCount <= 0) {
      $("#timer").html("<h2>Times Up!</h2>");
      timeUp();
    }
  }
  function loadQuestion() {
    timer = setInterval(timeCount, 1000);
    $("#Question").html(questions[currentQuestion].q);
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
  function nextQuestion() {
    timeCount = 30;
    $("#timer").html(timeCount);
    currentQuestion++;
    loadQuestion();
  }
  function timeUp() {
    clearInterval(timer);
    $("#timer").html("<h2>Out of Time!</h2>");
    $("#answers").html(
      "The correct Answer is: " + questions[currentQuestion].correct
    );
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      setTimeout(nextQuestion, 5000);
    }
  }
  function results() {}
  function clicked(event) {
    clearInterval(timer);
    if ($(event.target).data("name") == questions[currentQuestion].correct) {
      answeredRight();
    } else {
      answeredWrong();
    }
  }
  function answeredRight() {
    alert("you got it!");
    clearInterval(timer);
    correct++;
    $("#right").html("That's Right!");
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      setTimeout(nextQuestion, 5000);
      $("#answers").html(
        "The correct Answer is: " + questions[currentQuestion].correct
      );
    }
  }
  function answeredWrong() {
    alert("you got it wrong!");
    incorrect++;
    $("#right").html("Sorry, that's wrong!");
    if (currentQuestion == questionArray.length - 1) {
      setTimeout(results, 5000);
    } else {
      setTimeout(nextQuestion, 5000);
      $("#answers").html(
        "The correct Answer is: " + questions[currentQuestion].correct
      );
    }
  }
  function reset() {}

  //starts
  //   function questionsAnswers() {
  //     for (let index = 0; index < questionArray.length; index++) {
  //       // const questions = questionArray[index];
  //       $("#Question").html("<h2>" + questionArray[index].q + "</h2>");
  //       $("#AnswerA").html("<h2>" + questionArray[index].a + "</h2>");
  //       $("#AnswerB").html("<h2>" + questionArray[index].b + "</h2>");
  //       $("#AnswerC").html("<h2>" + questionArray[index].c + "</h2>");
  //       $("#AnswerD").html("<h2>" + questionArray[index].d + "</h2>");
  //     }
  //   }

  //   $(".answers").click(function() {
  //     alert("A");
  //   });

  //   // class for answers

  //   // run function for timer
  //   function run() {
  //     $("#timer").html("<h2>" + number + "</h2>");
  //     timer = setInterval(decrement, 1000);
  //   }
  //   //prints timer results, stops at 0
  //   function decrement() {
  //     number--;

  //     $("#timer").html("<h2>" + number + "</h2>");
  //     if (number === 0) {
  //       stop();
  //       $("#timer").html("<h2>Times Up!</h2>");
  //       $(".questions").html("");

  //       // sec5();
  //       // alert("5 up");
  //       //$("#Correct").html(correctAns);
  //     }
  //   }
  //   //function to stop/cancel/reset timer
  //   function stop() {
  //     clearInterval(timer);
  //   }
  //   // function sec5() {
  //   //   timer2 = setInterval(decre, 1000);
  //   // }
  //   // //prints timer results, stops at 0
  //   // function decre() {
  //   //   numberTwo--;

  //   //   if (numberTwo === 0) {
  //   //     stop();
  //   //     numberTwo = 5;
  //   //     //goes to next question
  //   //   }
  //   // }
  // });
});
