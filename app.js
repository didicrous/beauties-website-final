$(document).ready(function(){
    $('.box').hover(
		function(){
        $(this).css("-webkit-filter", "brightness(100%)");
    },
    	function(){
    		$(this).css("-webkit-filter", "brightness(50%)");
    	});

    $('#box1').click( function(){
        window.location.href="aboutUs.html"; 
    });

    $('#box2').click( function(){
        window.location.href="Media.html"; 
    });

    $('#box3').click( function(){
        window.location.href="news.html"; 
    });    
    
    $('#box4').click( function(){
        window.location.href="contactUs.html"; 
    });

});