$(document).ready(function() {
  let number = 30;

  let timer;
  const questionArray = [
    "What was the first 3D animated TV show?",
    "What was the first animated feature movie?",
    "Which was Walt Disney's favorite movie that he produced?",
    "Which is NOT a Don Bluth movie?",
    "Who was Walt Disney's personal favorite concept artist?"
  ];
  $("#button").on("click", run);

  // $("#button").hide();

  $("#timer").html("<h2>" + number + "</h2>");
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
