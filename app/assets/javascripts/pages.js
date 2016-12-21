var displayEnterEmail = function() {

    var $enterEmail = $(".enter-email");
    $enterEmail.removeClass("none");

    // var $submitForm = $(".submit-form");
    // $submitForm.on("submit", function(e) {
    //     e.preventDefault();
    //     $enterEmail.addClass("none");
    //     var $displayResult = $(".display-result-property-value");
    //     $displayResult.removeClass("none");
    // });


};

var displayEnterParking = function() {

    var $enterParking = $(".enter-parking-spaces");
    $enterParking.removeClass("none");

    var $eighthPhase = $(".eighth_phase");

    $eighthPhase.on("click", function(e) {
        e.preventDefault();
        $enterParking.addClass("none");

        displayEnterEmail();
    });
};

var displayEnterSMeters = function() {

    var $enterSMeters = $(".enter-square-meters");
    $enterSMeters.removeClass("none");

    var $seventhPhase = $(".seventh_phase");

    $seventhPhase.on("click", function(e) {
        e.preventDefault();
        $enterSMeters.addClass("none");

        displayEnterParking();
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

    $("#suburb-form").on("ajax:success", function(e, data, status, xhr) {
        console.log(data);
        // there's a variable in this function called data that we can access.
        // var suburb = data.suburb.name;
        // var postcode = data.suburb.postcode;

        var $enterEmail = $(".enter-email");
        $enterEmail.addClass("none");

        $(".global-stats").addClass("none");

        // var $displayResult = $(".display-result-property-value");
        // $displayResult.removeClass("none");
        // $displayResult.append("<p>" + postcode + "</p>");

        //Begin implementing Bar chart

        // Display result value

        $(".evaluation-container").append("<p> Your " + data.bedrooms + " bedroom property is worth $" + data.my_property_price);


        //  ===========================  Start of Rhy's Area ================================



        //  =========================== End Rhy's Area ================================


        //  =========================== Start of Steve's Area ================================



        //  =========================== end of Steve's Area ================================



        //  =========================== Start of Esther's Area ================================




        //  =========================== End of Esther's Area ================================



    });


    // ------- start of Steve section ---------------------


    var globalCurrentPrice = setInterval(function() {
        $("#global-current-price");

    }, 1000);

// --------------------------- start of global section ------------------------
// Using the core $.ajax() method
$.ajax({
    // The URL for the request
    url: "/",
    // The type of request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // The data to send (will be converted to a query string and added to the URL)

    // Code to run if the request succeeds.
    // The responseText is passed to the 'success' function as the 'data' argument
    success: function( data ) {
      console.log(data);
    },

    // Code to run if the request fails.
    // Parameters: The request (xhr), the status code of the request (status) and the error thrown (errorThrown) are passed to the 'error' function as arguments
    error: function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },
    // Code to run when the request is completed, regardless of success or failure
    complete: function( xhr, status ) {
        console.log( "The request is complete." );
    }

});




// --------------------------- start of bar chart -----------------------------
    var a = 200;
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [a, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


// ------------------------- end of bar chart --------------------------------
    // $<%= number_with_delimiter(@current_month_average*0.7, :precision => 0, :delimiter => ",") %>


// ---------------------- Start of Global Emotion Section ---------------------

    function animateEmotion() {
        // $("#happy-face").css("margin-top","0");
        $(".home-owner-face").animate({
            marginTop: -10
        }, 1000, function() {
            $(".home-owner-face").animate({
                marginTop: 0
            }, 1000, animateEmotion);
        });

    }
    animateEmotion();

    // function animateEmotionInvestor(){
    //   // $("#happy-face").css("margin-top","0");
    //   $(".investor-face").animate({marginTop:+10}, 1000, function(){
    //       $(".investor-face").animate({marginTop:0},1000,animateEmotionInvestor);
    //   });
    //
    // }
    // animateEmotionInvestor();



// ------------------ End of Global Emotion Section ------------------------


// ----------------------------- end of Steve section ------------------------

});
