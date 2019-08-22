$(document).ready(function() {
  //variables
  let number = 30;
  let numberTwo = 5;
  let timer;
  let timer2;

  // questions and answers
  const questionArray = [
    {
      q: "What was the first 3D animated TV show?",
      a: "Cubix",
      b: "ReBoot",
      c: "Jimmy Neutron",
      d: "Toy Story",
      correct: "ReBoot",
      pic: "assets/images/reboot.jpg"
    },
    {
      q: "What was the first animated feature movie?",
      a: "Snow White",
      b: "Adventures of Prince Achmed",
      c: "Tale of the White Serpent",
      d: "Fantasmagorie",
      correct: "Adventures of Prince Achmed",
      pic: "assets/images/princeAchmed.jpg"
    },
    {
      q: "Which was Walt Disney's favorite movie that he produced?",
      a: "Snow White",
      b: "101 Dalmations",
      c: "Cinderella",
      d: "Bambi",
      correct: "Cinderella",
      pic: "assets/images/cinderella.jpg"
    },
    {
      q: "Which is NOT a Don Bluth movie?",
      a: "Anastasia",
      b: "An American Tale",
      c: "Secret of Nimb",
      d: "Quest for Camelot",
      correct: "Quest for Camelot",
      pic: "assets/images/questcamelot.jpg"
    },
    {
      q: "Who was Walt Disney's personal favorite concept artist?",
      a: "Mary Blair",
      b: "Glene Keane",
      c: "Floyd Norman",
      d: "Don Lusk",
      correct: "Mary Blair",
      pic: "assets/images/maryblair.jpg"
    }
  ];

  // const answerArray = [b, b, c, d, a];
  //on button click, timer starts
  $("#button").click(function() {
    run();
    $("#button").hide();
    questionsAnswers();
    // $("#Question").html("<h2>" + questionArray[0].q + "</h2>");
    // $("#Question").append("<h2>" + questionArray[0].a + "</h2>");
    // $("#Question").append("<h2>" + questionArray[0].b + "</h2>");
    // $("#Question").append("<h2>" + questionArray[0].c + "</h2>");
    // $("#Question").append("<h2>" + questionArray[0].d + "</h2>");
  });
  //shows starting number

  //starts
  function questionsAnswers() {
    for (let index = 0; index < questionArray.length; index++) {
      // const questions = questionArray[index];
      $("#Question").html("<h2>" + questionArray[index].q + "</h2>");
      $("#AnswerA").html("<h2>" + questionArray[index].a + "</h2>");
      $("#AnswerB").html("<h2>" + questionArray[index].b + "</h2>");
      $("#AnswerC").html("<h2>" + questionArray[index].c + "</h2>");
      $("#AnswerD").html("<h2>" + questionArray[index].d + "</h2>");
    }
  }

  $(".answers").click(function() {
    alert("A");
  });

  // class for answers

  // run function for timer
  function run() {
    $("#timer").html("<h2>" + number + "</h2>");
    timer = setInterval(decrement, 1000);
  }
  //prints timer results, stops at 0
  function decrement() {
    number--;

    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      $("#timer").html("<h2>Times Up!</h2>");
      $(".questions").html("");

      // sec5();
      // alert("5 up");
      //$("#Correct").html(correctAns);
    }
  }
  //function to stop/cancel/reset timer
  function stop() {
    clearInterval(timer);
  }
  // function sec5() {
  //   timer2 = setInterval(decre, 1000);
  // }
  // //prints timer results, stops at 0
  // function decre() {
  //   numberTwo--;

  //   if (numberTwo === 0) {
  //     stop();
  //     numberTwo = 5;
  //     //goes to next question
  //   }
  // }
});
