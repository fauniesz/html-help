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
