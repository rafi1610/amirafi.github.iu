
    ityped.init(document.querySelector("#itype"), {
      showCursor: true,
      strings: ['Web developer ', 'Web designer', 'Theme developer']

    })


$(document).ready(function(){
$('.clientup').counterUp({
    delay: 10,
    time: 1500,

     
});

$('#bar1').barfiller({
        barColor: "#00BCD4",
        tooltip: true,
        duration: 1500
    });
    $('#bar2').barfiller({
        barColor: "#00BCD4",
        tooltip: true,
        duration: 1500
    });
    $('#bar3').barfiller({
        barColor: "#00BCD4",
        tooltip: true,
        duration: 1500
    });
    $('#bar4').barfiller({
        barColor: "#00BCD4",
        tooltip: true,
        duration: 1500
    });
    $('#bar5').barfiller({
        barColor: "#00BCD4",
        tooltip: true,
        duration: 1500
    });

        $(".stecky-header").sticky({

        topSpacing:0,
        'zIndex': "",


    });

    $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
  });

 $('body').materialScrollTop();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

        new WOW().init();
});


