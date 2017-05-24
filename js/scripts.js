$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("This is still a header!");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
    alert("Isn't she beautiful!?");
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#cow-showing").toggle();
    $("#cow-hidden").toggle();
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
