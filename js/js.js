$(window).load(function() {
  
  // Wait for window load
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

$(".glitched-h1").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );

$(".glitched-h6").append("<div class='glitch-window-6'></div>");
//fill div with clone of real header
$( "h1.glitched-6" ).clone().appendTo( ".glitch-window-6" );


// ps projects title start

$(".glitched-h2").append("<div class='glitch-window-2'></div>");
//fill div with clone of real header
$( "h1.glitched-2" ).clone().appendTo( ".glitch-window-2" );
// ps projects title stop


// diplomas start


// diplomas stop

// skills start
$(".glitched-h4").append("<div class='glitch-window-4'></div>");
//fill div with clone of real header
$( "h1.glitched-4" ).clone().appendTo( ".glitch-window-4" );
// skills stop


// contact start

$(".glitched-h5").append("<div class='glitch-window-5'></div>");
//fill div with clone of real header
$( "h1.glitched-5" ).clone().appendTo( ".glitch-window-5" );

// contact stop


$(".glitched-h3").append("<div class='glitch-window-3'></div>");
//fill div with clone of real header
$( "h1.glitched-3" ).clone().appendTo( ".glitch-window-3" );

// scroll to section start
$("a#about-a").on("click", function(event) {
    var target = $("#about");
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });

  $("a#projects-a").on("click", function(event) {
    var target = $("#projects");
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });

  $("a#skills-a").on("click", function(event) {
    var target = $("#skills");
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });

  $("a#contact-a").on("click", function(event) {
    var target = $("#contact");
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });
// scroll to section stop

	});