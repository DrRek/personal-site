$('document').ready(function(){
	
	$(".aboutme-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#aboutme").offset().top
	    }, 800);
	});
	
	$(".skills-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#skills").offset().top
	    }, 800);
	});
	
	$(".proj-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#proj").offset().top
	    }, 800);
	});
	
	$(".contact-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 800);
	});

	//Chiudere la navbar menu a schermo piccolo dopo un click
	$('a.nav-link').on('click', function(){
	    $('.navbar-toggler').click(); //bootstrap 4.x
	});
});