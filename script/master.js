$(document).ready(function() {

	//Open all full paths in new tab
  $("a[href^='http']").attr('target', '_blank');

  //Match div height
  $(function() {
      $(".match,.event").matchHeight();
  });

	//Smooth scroll
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

}); //end (document).ready