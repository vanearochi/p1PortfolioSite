$(document).ready(function(){
	console.log("Welcome to Portfolio Vane")

	$("li").on("click", function(){
		console.log("1")

		$("li").removeClass("active")
		$(this).addClass("active");
		liClass= $(this).attr('id');
		console.log(liClass)
		if(liClass==="aboutMe"){
			$(".centralImage").fadeOut();
	  		$(".aboutMe").show();
	  		$(".featuredWorkSection").hide();
	  		$(".contactMe").hide();
	  	}
	  	else if(liClass==="featuredWork"){
	  		console.log(3)
	  	}
	  	else if(liClass==="contactMe"){
	  		console.log(2)
	  		$(".centralImage").fadeOut();
	  		$(".contactMe").show();
	  		$(".featuredWorkSection").hide();
	  		$(".aboutMe").hide();
	  	}
	  		//selectedTab="all";
	  		//$(".search-input").val('');
		})

});