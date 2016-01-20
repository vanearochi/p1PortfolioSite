$(document).ready(function(){

	console.log("Welcome to Portfolio Vane");

	/**Function that pass trough all the elements array indexes so it can hide or show an element depending
	on the comparition between the attribute value and the curent value*/
	var hideAllButOne = function(elements, attributeName, attributeValue ){
		$(elements).each(function(index){
			var currentElement = $(elements[index]);
			var currentValue = currentElement.attr(attributeName);
			if(currentValue == attributeValue){
				currentElement.show();
			}
			else{
				currentElement.hide();
			}
		});
	}

	console.log("Testing... 1,2,3...");

	var sections = $(".central-section > section");
	/** hideAllButOne function is called so it can show the home section when is opened or refreshed*/
	hideAllButOne(sections, 'data-tab', 'home');


	/** Function for navigation functionality, takes the id of the clicked li and takes an array of
	the sections of the html so it can pass them as a parameter when at the end calls the changeAllbutOne function */
	$(".navigation li").on("click", function(){

		var selectedTabName = $(this).attr('id')
		var sections = $(".central-section > section");
		hideAllButOne(sections, 'data-tab', selectedTabName);


	})

});