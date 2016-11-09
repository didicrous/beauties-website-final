$(document).ready(function(){

    $('#box1').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/Beauties-Website/html/aboutUs.html";

    });

    $('#box2').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/Beauties-Website/html/Media.html";
    });

    $('#box3').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/Beauties-Website/html/news.html";
    });

    $('#box4').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/Beauties-Website/html/contactUs.html";
    });

    $('#box1').hover(
      function(){
          $(this).css("-webkit-filter", "brightness(100%)");
          $('.selections#about p').hide();
      },
      	function(){
          $(this).css("-webkit-filter", "brightness(50%)");
          $('.selections#about p').show();
    });

    $('#box2').hover(
      function(){
          $(this).css("-webkit-filter", "brightness(100%)");
          $('.selections#media p').hide();
      },
      	function(){
          $(this).css("-webkit-filter", "brightness(50%)");
          $('.selections#media p').show();
    });
    $('#box3').hover(
      function(){
          $(this).css("-webkit-filter", "brightness(100%)");
          $('.selections#news p').hide();
      },
      	function(){
          $(this).css("-webkit-filter", "brightness(50%)");
          $('.selections#news p').show();
    });

    $('#box4').hover(
      function(){
          $(this).css("-webkit-filter", "brightness(100%)");
          $('.selections#contact p').hide();
      },
      	function(){
          $(this).css("-webkit-filter", "brightness(50%)");
          $('.selections#contact p').show();
    });




});
