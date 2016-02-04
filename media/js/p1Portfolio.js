$(document).ready(function() {

	console.log('Welcome to Portfolio Vane');

	/** Function that uses jQuery methods to show or hide content in the page
	@param {jQuery object} section tags - jQuery Object that contains the elements that we want to show or hide
	@param {string} attribute name - Name of the attr what we are looking for in the section element
	@param {string} attribute value - The value of the attribute that we searched for in the section element
	*/
	var hideAllButOne = function(elements, attributeName, attributeValue ) {

		$(elements).each(function(index) {

			var currentElement = $(elements[index]);
			var currentValue = currentElement.attr(attributeName);
			if(currentValue == attributeValue) {

				currentElement.show();

			}
			else{

				currentElement.hide();

			}

		});

	}

	var sections = $('.central-section > section');

	/** hideAllButOne function is called so it can show the home section when the page is opened or refreshed*/

	hideAllButOne(sections, 'data-tab', 'home');

	/** Navigation functionality of the page is attached to this click event.
	When any of the <li> elements is clicked a function is executed, this function
	calls the hideAllButOne function and creates 2 variables that serve as parameters for the
	function that is called
	*/
	$('.navigation li').on('click', function() {

		var selectedTabName = $(this).attr('class');
		var sections = $('.central-section > section');
		hideAllButOne(sections, 'data-tab', selectedTabName);

	})

});