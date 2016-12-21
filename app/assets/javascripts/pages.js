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




// ------------------start of charts in global section -----------------------------

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
}).done( function (data) {
  // ------------ start of chart js stuff -------------------------------------



      //  for loop to find array of suburb names and array of prices (Dec)
      var suburbNameArray = [];
      var suburbPriceArray = [];
      for (i=0; i<data.suburb_price_hash.length; i++){

        suburbNameArray.push(data.suburb_price_hash[i][0][0]);
        suburbPriceArray.push(data.suburb_price_hash[i][0][1]);
      }



      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {

              labels: [suburbNameArray[0], suburbNameArray[1], suburbNameArray[2], suburbNameArray[3], suburbNameArray[4], suburbNameArray[5],suburbNameArray[6],suburbNameArray[7],suburbNameArray[8],suburbNameArray[9]],
              datasets: [{
                  label: 'Average Price',
                  data: [suburbPriceArray[0], suburbPriceArray[1], suburbPriceArray[2], suburbPriceArray[3], suburbPriceArray[4], suburbPriceArray[5],suburbPriceArray[6],suburbPriceArray[7],suburbPriceArray[8],suburbPriceArray[9]],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(44, 159, 64, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(10, 40, 64, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(255,59,212,1)'
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

});
// ------------ end of chart js stuff on global section-------------------------------------








// ------------------------- end of bar chart --------------------------------
    // $<%= number_with_delimiter(@current_month_average*0.7, :precision => 0, :delimiter => ",") %>


// ---------------------- Start of Global Emotion Section ---------------------

    function animateEmotion() {
        // $("#happy-face").css("margin-top","0");
        $(".animate-face").animate({
            marginTop: 20
        }, 1000, function() {
            $(".animate-face").animate({
                marginTop: 10
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
