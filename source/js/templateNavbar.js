
/* Template navbar */

$(document).ready(function () {

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("#navBar").addClass("fixed-top");
    } else {
        $("#navBar").removeClass("fixed-top");
    }
  });

	/* Navbar actions */

	$(".navbar-toggle").click(function (event) {
		var navbarContent = $(".navbar-content").css("width");

    console.log("Hello");

		if (navbarContent === "300px") {

		 	$(".navbar-content > div").fadeOut(300, function () {
		    	$(".navbar-content").velocity({
		      		"width" : "0px"
		    	}, 200);
		  	});

		} else if (navbarContent === "0px") {

		  	$(".navbar-content").velocity({
		    	"width" : "300px"
		  	}, 200, function () {
		    	$(".navbar-content > div").delay(500).fadeIn(300);
		  	});

		};

	});

	$(".navbar-content-close-btn").click(function (event) {

  	$(".navbar-content > div").fadeOut(300, function () {
    		$(".navbar-content").velocity({
      		"width" : "0px"
    		}, 200);
  	});

	});

});