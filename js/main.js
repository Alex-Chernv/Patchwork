$(document).ready(function () {

	var color1 = "";
	var color2 = "";
	$( ".nav__examples-item" ).click(function() {
		if (color1 == "") {
			color1 = $(this).find("img").attr("src");
		}
		else { 
			color2 = $(this).find("img").attr("src");

		}
		console.log (color1+" "+color2);
	});

	$( ".nav__btn-off" ).click(function() {
		$(".bed__blanket").addClass ("grey");
		color1 = "";
		color2 = "";


	});


	$( ".nav__btn-on" ).click(function() {
		$(".bed__blanket").removeClass ("grey");
		$( ".bed__blanket-patch" ).each(function( index ) {
  			if (index%2==0) { 
  				$(this).css("background","url("+color1+")");
			}
			else {
				$(this).css("background","url("+color2+")");

			}
  			
		});

	});

	

});


