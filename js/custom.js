$(function(){
	$(document).ready(function(){
    // setting slider starting point
    let slider = 1;

		// iterate all the slider images
		let _images = document.getElementsByClassName('slides');
		let images = $('#slider .slides').length - 0;
		const dots = document.getElementsByClassName('dot');
	
    // switch slides every 5 secs
    setInterval(() => {
        //get active slider position
        slider = slider < images ? slider + 1 : 1;
				console.log (slider);
				
				for (i = 0; i < dots.length; i++) {
					dots[i].className = dots[i].className.replace(" active", "");
				}
				dots[slider-1].className += " active";

				if (images == 1){dots[0].className = " active";}
        // instantly hide all slides
        $('#slider .slides').css('opacity', .0);

        // showing the current index
        $('#slider .slides').eq(slider - 1).css('opacity', 1);
		}, 5000)

	})

	function showMenu() {
		let x = document.getElementById("menuTopNav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	// Check if element is scrolled into view
	function isScrolledIntoView(elem) {
		let docViewTop = $(window).scrollTop();
		let docViewBottom = docViewTop + $(window).height();

		let elemTop = $(elem).offset().top;
		let elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	// If element is scrolled into view, fade it in
	$(window).scroll(function() {
		$('.site-wrapper .animated').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animate__animated animate__fadeInLeft');
			}
		});
	});
})