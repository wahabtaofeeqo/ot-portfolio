$(document).ready(function() {

	$('.light').click(function() {
		if($('.light').prop('checked')) {
			$('i.bulb').addClass('on');
		}
		else {
			$('i.bulb').removeClass('on');
		}
	})
	
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			}
		}
	});
})