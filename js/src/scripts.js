$(document).ready(function() {

	//isotope
	var $isotop = $('.grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			columnWidth: 40,
			gutter: 6,
			horizontalOrder: true
		}
	});

	$("body").on("click", ".filters li a", function(e) {
		e.preventDefault();
		$(".filters li a").removeClass("active");
		$(this).addClass("active");
		var filter = $(this).attr("data-filter");
		filter = filter == '*' ? filter : '.' + filter;
		$isotop.isotope({ filter: filter });
	});

	//slider
	$('.team__slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slide: ".team__slider-item"
	});

	$('.testimonials__slider').slick({
	  	dots: true,
	  	arrows: false,
	  	infinite: true,
	  	speed: 300,
	  	autoplay: true,
	  	autoplaySpeed: 4000,
	  	slidesToShow: 1,
	  	slide: ".testimonials__slider-item"
	});
		
		
	//scroll	
	$("#menu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
		});
	});
	$(document).ready(function(){
	    $("#scroll_portfolio").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 500);
	    });
	});
	$(document).ready(function(){
	   $("#scroll_contact").on("click","a", function (event) {
	       event.preventDefault();
	       var id  = $(this).attr('href'),
	           top = $(id).offset().top;
	       $('body,html').animate({scrollTop: top}, 800);
	   });
	});

	//map
 	function initMap() {
			var uluru = {lat: 49.568727, lng: 34.585129};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: uluru
			});
			var image = 'img/map1.png';
			var marker = new google.maps.Marker({
			    position: uluru,
			    map: map,
			    icon: image,
			    animation: google.maps.Animation.DROP
			});
	}
