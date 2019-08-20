$(document).ready(function() {
  //variables
  let number = 30;
  let numberTwo = 5;
  let timer;

  // questions and answers
  const questionArray = [
    {
      q: "What was the first 3D animated TV show?",
      a: "Cubix",
      b: "ReBoot",
      c: "Jimmy Neutron",
      d: "Toy Story"
    },
    {
      q: "What was the first animated feature movie?",
      a: "Snow White",
      b: "Adventures of Prince Achmed",
      c: "Tale of the White Serpent",
      d: "Fantasmagorie"
    },
    {
      q: "Which was Walt Disney's favorite movie that he produced?",
      a: "Snow White",
      b: "101 Dalmations",
      c: "Cinderella",
      d: "Bambi"
    },
    {
      q: "Which is NOT a Don Bluth movie?",
      a: "Anastasia",
      b: "An American Tale",
      c: "Secret of Nimb",
      d: "Quest for Camelot"
    },
    {
      q: "Who was Walt Disney's personal favorite concept artist?",
      a: "Glene Keane",
      b: "Mary Blair",
      c: "Floyd Norman",
      d: "Don Lusk"
    }
  ];

  //on button click, timer starts
  $("#button").click(function() {
    run();
    $("#button").hide();
  });
  //shows starting number
  $("#timer").html("<h2>" + number + "</h2>");
  //starts
  function run() {
    timer = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;

    $("#timer").html("<h2>" + number + "</h2>");

    if (number === 0) {
      stop();
    }
  }

  function stop() {
    clearInterval(timer);
  }
});
