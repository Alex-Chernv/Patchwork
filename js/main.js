$(document).ready(function () {

	var colors = [];

	$( ".nav__examples-item" ).click(function() {
		colors.push($(this).find("img").attr("src"));
		$(this).addClass('active');
	});

	$( ".nav__btn-off" ).click(function() {
		$(".bed__blanket").addClass ("grey");
		colors = [];
		$( ".nav__examples-item" ).removeClass ("active");
	});

	$( ".nav__btn-on" ).click(function() {
		$(".bed__blanket").removeClass ("grey");

		var i=0;

		$( ".bed__blanket-patch" ).each(function( index ) {
  			$(this).css("background","url("+colors[i]+")");
  			if ((i+1) >= colors.length) i = 0;
  			else i++;
		});
		
		// $( ".nav__examples-item" ).removeClass ("active");
	});

	

});


