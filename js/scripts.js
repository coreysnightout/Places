$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation =$("input#new-location").val();

    $("ul#places").append("<li><span class='location'>" + inputtedLocation + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(inputtedLocation);
    });

  });
});
