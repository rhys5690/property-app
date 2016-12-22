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
        $(".evaluation-container").addClass("none");

        $(".global-stats").addClass("none");
        $(".local-stats").removeClass("none");

        // var $displayResult = $(".display-result-property-value");
        // $displayResult.removeClass("none");
        // $displayResult.append("<p>" + postcode + "</p>");

        //Begin implementing Bar chart

        // Display result value

        // $(".evaluation-container").append("<p> Your " + data.bedrooms + " bedroom property is worth $" + data.my_property_price + "</p>");

        // edited above code to have property value show in local stats section
        $(".my-property-value-container").append("<p> Your " + data.bedrooms + " bedroom property is worth $" + data.my_property_price + "</p>");

        //  ===========================  Start of Rhy's Area ================================


        //Your property stats
        $(".your-property-stats").append("<p> Address: " + data.house_number + " " + data.street_name + " " + data.suburb + "</p>" );
        $(".your-property-stats").append("<p> Bedrooms: " + data.bedrooms + "</p>" );
        $(".your-property-stats").append("<p> Bathrooms: " + data.bathrooms + "</p>" );
        $(".your-property-stats").append("<p> Square Meters: " + data.sqm + "</p>" );
        $(".your-property-stats").append("<p> Parking Spaces: " + data.parking_spaces + "</p>" );
        $(".your-property-stats").append("<p> Distance from tansport: " + data.distance_from_transport + "km</p>" );
        $(".your-property-stats").append("<p> Value: $" + data.my_property_price + "</p>" );

        //Your property value Bar Chart

        var ctx = document.getElementById("rhysChart");
        var rhysChart = new Chart(ctx, {
            type: 'bar',
            data: {

                labels: ["Your Property is worth $" + data.my_property_price],
                datasets: [{
                    label: 'Your Property Value',
                    data: [data.my_property_price],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
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



        //Suburb prices chart
        // data prep for chart2
        // var suburbsAll = data.suburb_all; // [ [suburb1], [suburb2], [suburb3],  ...     ]
        // console.log(suburbsAll);
        //
        // var arrayDecPrices = [];
        // var arrayNovPrices = [];
        // var arrayOctPrices = [];
        // var arraySepPrices = [];
        //
        // for (i=0; i<suburbsAll.length; i++){
        //   arrayDecPrices.push( suburbsAll[i].prices[0].mean_b3   );
        // }
        // console.log(arrayDecPrices);

        var ctx3 = document.getElementById("rhysChart2");

        var suburbRadarChart = new Chart(ctx3, {
            type: 'radar',
            data: {
                labels: ["Oatley", "Cronulla", "Balmain", "Chatswood", "Redfern", "Rozelle", "Bankstown"],
                datasets: [{
                    label: "Suburb Average Price",
                    backgroundColor: "rgba(180, 99, 132, 0.2)",
                    borderColor: "rgba(180, 45, 150, 1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [854750, 1288000, 1770000, 1900000, 1500000, 1650000, 885000]
                }, {
                    label: "Next Month Average Price",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [783805.75, 1181096, 1623090, 1742300, 1375500, 1513050, 811545]
                },
            ]

            }
        });



        //  =========================== End Rhy's Area ================================


        //  =========================== Start of Steve's Area ================================
        var demographicsData = {
            labels: [
                "Elderly",
                "Others",
                "Independent Youth"
            ],
            datasets: [
                {
                    data: [26.2, 58.4, 15.4],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        // var ctx = document.getElementById("demographics");
        // var myDoughnutChart = new Chart(ctx, {
        //   type: 'doughnut',
        //   data: demographicsData,
        //   options: {}
        // });




        //  =========================== end of Steve's Area ================================



        //  =========================== Start of Esther's Area ================================


        var ctx2 = document.getElementById("myBubbleChart");
        var myBubbleChart = new Chart(ctx2, {
            type: 'bubble',
            data: {

                datasets: [{
                    label: '3 bedroom & 4 bedroom homes V 2 & 3 bedroom units',
                    data: [{
                        x: [1770000, 1770000, 1280000, 1540000, 1500000, 1650000, 8850000, 1151000, 1900000, 680000],
                        y: [2350000, 2350000, 1692000, 2000000, 2360000, 2070000, 9925000, 1365000, 2315000, 755000],
                        r: 10
                    }, {
                        x: [1050555, 820000, 705000, 755750, 930000, 1150000, 790000, 950000, 412000],
                        y: [1630000, 1027500, 854750, 1288000, 1200000, 1822500, 900000, 1628000, 542000],
                        r: 10
                    }],
                    backgroundColor: "#b2b2b2",
                    hoverBackgroundColor: "#b2b2b2",
                }]
            },
            points: {
                borderWidth: 1,
                borderColor: 'rgb(0,0,0)'
            }
        });



        //  =========================== End of Esther's Area ================================



    }); // closing tag for ajax success

}); // closing tag for document on ready
    // ------- start of Steve section ---------------------




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

// });
