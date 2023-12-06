$(document).ready(function() {

if ($('.reviews').length) {
$('.reviews').slick({
	
	prevArrow: '<button id="prev" type="button" class="slider-prev"><svg class="icon ic-prev" width="24" height="65" aria-label="Предыдущий"><use xlink:href="assets/sprites/sprite.svg#ic-prev"></use></svg></button>',
	nextArrow: '<button id="next" type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65" aria-label="Следующий"><use xlink:href="assets/sprites/sprite.svg#ic-next"></use></svg></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	responsive: [{
		breakpoint: 1280,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}
	}]
 });
}

	
});
