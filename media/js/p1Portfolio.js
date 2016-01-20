$(document).ready(function(){
	console.log("Welcome to Portfolio Vane");

	console.log("Testing... 1,2,3...");

	$("li").on("click", function(){
		console.log("1");

		$("li").removeClass("active")
		$(this).addClass("active");
		liClass= $(this).attr('id');
		console.log(liClass)
		if(liClass==="about-me"){
			$(".central-image").fadeOut();
	  		$(".about-me").show();
	  		$(".featured-work-section").fadeOut();
	  		$(".contact-me").hide();
	  	}
	  	else if(liClass==="home"){
	  		$(".central-image").show();
	  		$(".contact-me").hide();
	  		$(".featured-work-section").show();
	  		$(".about-me").hide();
	  	}
	  	else if(liClass==="contact-me"){
	  		console.log(2)
	  		$(".central-image").fadeOut();
	  		$(".contact-me").show();
	  		$(".featured-work-section").fadeOut();
	  		$(".about-me").hide();
	  	}
	  	
		})

});