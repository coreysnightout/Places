//back end
function Place(location, time, things) {
  this.poop = location;
  this.timeOfYear = time;
  this.thingsToDo = things;
}



$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation =$("input#new-location").val();
    var inputtedTime =$("input#new-date").val();
    var inputtedThings =$("input#new-things").val();


    var newPlace = new Place(inputtedLocation, inputtedTime, inputtedThings);

    $("ul#places").append("<li><span class='location'>" + newPlace.poop + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newPlace.poop);
      $(".time-of").text(newPlace.timeOfYear);
      $(".things-to").text(newPlace.thingsToDo);
    });

  });
});
