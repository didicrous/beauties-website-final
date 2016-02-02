$(document).ready(function(){
    $('.box').hover(
		function(){
        $(this).css("-webkit-filter", "brightness(100%)");
    },
    	function(){
    		$(this).css("-webkit-filter", "brightness(50%)");
    	});

    $('#box1').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/my%20websites/beauties/html/aboutUs.html"; 
    });

    $('#box2').click( function(){
        window.location.href="file:///Users/didicrous/Desktop/my%20websites/beauties/html/media.html"; 
    });

    $('#box3').click( function(){
        window.location.href="../html/news.html"; 
    });    
    
    $('#box4').click( function(){
        window.location.href="../html/contactUs.html"; 
    });

});