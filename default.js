$(document).ready(function(){ //start jquery when document is loaded
	//TODO: Vertical Navbar
	//-------NAVBAR HOVER FUNCTIONS---------
	$('#intro').hover(
		function(){
			$('#intro').fadeTo(100, 1);
		},
		function(){
			$('#intro').fadeTo(100, 0.5);
		}
	);

	$('#projects').hover(
		function(){
			$('#projects').fadeTo(100, 1);
		},
		function(){
			$('#projects').fadeTo(100, 0.5);
		}
	);

	$('#education').hover(
		function(){
			$('#education').fadeTo(100, 1);
		},
		function(){
			$('#education').fadeTo(100, 0.5);
		}
	);

	$('#work').hover(
		function(){
			$('#work').fadeTo(100, 1);
		},
		function(){
			$('#work').fadeTo(100, 0.5);
		}
	);

	$('#resume').hover(
		function(){
			$('#resume').fadeTo(100, 1);
		},
		function(){
			$('#resume').fadeTo(100, 0.5);
		}
	);

	$('#contact').hover(
		function(){
			$('#contact').fadeTo(100, 1);
		},
		function(){
			$('#contact').fadeTo(100, 0.5);
		}
	);

});