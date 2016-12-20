
var displayEnterEmail = function() {

    var $enterEmail = $(".enter-email");
    $enterEmail.removeClass("none");



};

var displayEnterSMeters = function() {

    var $enterSMeters = $(".enter-square-meters");
    $enterSMeters.removeClass("none");

    var $seventhPhase = $(".seventh_phase");

    $seventhPhase.on("click", function(e) {
        e.preventDefault();
        $enterSMeters.addClass("none");

        displayEnterEmail();
    });
};

var displayEnterBathrooms = function() {

    var $enterBathrooms = $(".enter-bathrooms");
    $enterBathrooms.removeClass("none");

    var $sixthPhase = $(".sixth_phase");

    $sixthPhase.on("click", function(e) {
        e.preventDefault();
        $enterBathrooms.addClass("none");

        displayEnterSMeters();
    });
};

var displayEnterDistance = function() {

    var $enterDistance = $(".enter-distance");
    $enterDistance.removeClass("none");

    var $fifthPhase = $(".fifth_phase");

    $fifthPhase.on("click", function(e) {
        e.preventDefault();
        $enterDistance.addClass("none");

        displayEnterBathrooms();
    });
};

var displayEnterBedrooms = function() {

    var $enterBedrooms = $(".enter-bedrooms");
    $enterBedrooms.removeClass("none");


    var $fourthPhase = $(".fourth_phase");

    $fourthPhase.on("click", function(e) {
        e.preventDefault();
        $enterBedrooms.addClass("none");

        displayEnterDistance();
    });
};

var displayEnterHouseNumber = function() {

    var $enterHouseNumber = $(".enter-house-number");
    $enterHouseNumber.removeClass("none");

    var $thirdPhase = $(".third_phase");

    $thirdPhase.on("click", function(e) {
        e.preventDefault();
        $enterHouseNumber.addClass("none");

        displayEnterBedrooms();
    });
};

var displayEnterStreetName = function() {

    var $enterStreetName = $(".enter-street-name");
    $enterStreetName.removeClass("none");

    var $secondPhase = $(".second_phase");

    $secondPhase.on("click", function(e) {
        e.preventDefault();
        $enterStreetName.addClass("none");

        displayEnterHouseNumber();
    });
};

var displayEnterSuburb = function() {
    var $enterSuburb = $(".enter-suburb");
    $enterSuburb.removeClass("none");

    // Grab the next button
    var $firstPhase = $(".first_phase");
    $firstPhase.on("click", function(e) {


        //Prevent default page submit
        e.preventDefault();


        //remove class display none from the suburb div
        $enterSuburb.addClass("none");

        //call function for display .enter-bedrooms
        displayEnterStreetName();

    });
};

$(document).ready(function() {

    var $valueMyProperty = $(".Value-My-Property");

    $valueMyProperty.on("click", function() {
        $valueMyProperty.addClass("none");
        displayEnterSuburb();

    });


// ------- start of Steve section ---------------------


  var globalCurrentPrice = setInterval( function(){
      $("#global-current-price");
      console.log("Hello Worl");

  }, 1000);



        // $<%= number_with_delimiter(@current_month_average*0.7, :precision => 0, :delimiter => ",") %>





// ------- end of Steve section ------------------------

});
