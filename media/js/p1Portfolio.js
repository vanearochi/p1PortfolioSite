$(document).ready(function(){
	console.log("Welcome to Portfolio Vane");


	var hide_all_but_one = function(elements, attribute_name, attribute_value ){
		$(elements).each(function(index){
			var current_element = $(elements[index]);
			var current_value = current_element.attr(attribute_name);
			
			if(current_value == attribute_value){
				current_element.show();
			} 
			else{
				current_element.hide();
			}
		});
	}

	console.log("Testing... 1,2,3...");

	var sections = $(".central-section > section");

	hide_all_but_one(sections, 'data-tab', 'home');
		

		

	$(".navigation li").on("click", function(){
		console.log("1");

		var selected_tab_name = $(this).attr('id')
		var sections = $(".central-section > section");

		hide_all_but_one(sections, 'data-tab', selected_tab_name);

		// $("li").removeClass("active")
		// $(this).addClass("active");
		// liClass= $(this).attr('id');
		// console.log(liClass)
		// if(liClass==="about-me"){
		// 	$(".central-image").fadeOut();
	 //  		$(".about-me").show();
	 //  		$(".featured-work-section").fadeOut();
	 //  		$(".contact-me").hide();
	 //  	}
	 //  	else if(liClass==="home"){
	 //  		$(".central-image").show();
	 //  		$(".contact-me").hide();
	 //  		$(".featured-work-section").show();
	 //  		$(".about-me").hide();
	 //  	}
	 //  	else if(liClass==="contact-me"){
	 //  		console.log(2)
	 //  		$(".central-image").fadeOut();
	 //  		$(".contact-me").show();
	 //  		$(".featured-work-section").fadeOut();
	 //  		$(".about-me").hide();
	 //  	}
	  	
	})		

});