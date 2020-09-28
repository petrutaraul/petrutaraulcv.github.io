
    var backgroundImg=["header-img/img1.jpg",
                      "header-img/img5.PNG",
                      "header-img/img2.jpg",
                      "header-img/img3.jpg",
                      "header-img/img4.jpg",
                      ]
    
      setInterval(changeImage, 4000);
      let h1H = $('.h1-h');
    //   setInterval(imgChange, 1000);
     function changeImage() {   
      var i = Math.floor((Math.random() * 5));
      
      $('.image').css('background-image', "url('"+backgroundImg[i]+"')") ;
      
      if(backgroundImg[i] == "header-img/img3.jpg"){
        $(h1H).css('color', 'white');
      } else{
        $(h1H).css('color', 'black');
      }
    //   "url('"+backgroundImg[i]+"')"
    }




  // scroll down 

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

  $("a#services-a").on("click", function(event) {
    var target = $("#services");
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

  $("a#gallery-a").on("click", function(event) {
    var target = $("#gallery");
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

  