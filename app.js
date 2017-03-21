$(document).ready(function(){
	
	$(window).scroll(function(){

		$('.fade').each( function(i){

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			bottom_of_window = bottom_of_window + 500;

			if(bottom_of_window > bottom_of_object){
				$(this).animate({'opacity': '1'}, 500);
			}
		});

		// $('.topLeft').each( function(i){

		// 	var bottom_of_object = $(this).position().top + $(this).outerHeight();
		// 	var bottom_of_window = $(window).scrollTop() + $(window).height();

		// 	if(bottom_of_window > bottom_of_object){
		// 		$(this).animate({'opacity': '1'}, 1000);
		// 	}
		// });

		// $('.bottomLeft').each( function(i){

		// 	var bottom_of_object = $(this).position().top + $(this).outerHeight();
		// 	var bottom_of_window = $(window).scrollTop() + $(window).height();

		// 	if(bottom_of_window > bottom_of_object){
		// 		$(this).animate({'opacity': '1'}, 1500);
		// 	}
		// });

		// $('.topRight').each( function(i){

		// 	var bottom_of_object = $(this).position().top + $(this).outerHeight();
		// 	var bottom_of_window = $(window).scrollTop() + $(window).height();

		// 	if(bottom_of_window > bottom_of_object){
		// 		$(this).animate({'opacity': '1'}, 2000);
		// 	}
		// });
	});
$(".aboutImg").delay(500).animate({"opacity": "1"}, 700);
$(".logo").delay(500).animate({"opacity": "1"}, 700);

});
