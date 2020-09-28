// alert("Youtube vers.2");
// console.log(document);

// var myElement= document.getElementsByClassName('videotitleaside');
// console.log(myElement);

// When the user scrolls the page, execute myFunction 

function blue() {
  alert("Thanks for feedback!");
  document.getElementById("border").style.borderBottom = "thick solid blue";
};

function red() {
  alert('Thanks for feedback!');
  document.getElementById("border").style.borderBottom = "thick solid red";
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  let body = document.getElementsByTagName("body")[0];
  document.getElementById("overlay").style.display = "block";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("overlay").style.display = "none";
};


 

 $( document ).ready(function() {


 $(function(){
  $('.sidenav a').hover(function() {
      $('.sidenav a i:first-child').toggleClass('hoveri');
   });

});

 $('.like-comm').click(function() {
    $(this).toggleClass('clickbutonblue');
 });

 $('.dislike-comm').click(function() {
    $(this).toggleClass('clickbutonred');
 });

 $('.butonulAuriu').click(function() {
    $(this).toggleClass('butonSmecher');
 });

});

  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".loading-wrapper").css('display', 'none');
  });




