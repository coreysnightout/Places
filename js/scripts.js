$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation =$("input#new-location").val();

    $("ul#places").append(inputtedLocation);

  });
});
