jQuery(document).ready(function($) {
	$('МЕНЮ').menuActive('bootstrap');
	$('.reviews_cats .heal_element a').menuActive('link');

	// Либо white либо black
	$('body').scrollUp('white');

	// Галерея как вконтакте
	var $container = $('#am-container'),
		$imgs = $container.find('img').hide(),
		totalImgs = $imgs.length,
		cnt = 0;

	$imgs.each(function(i) {
		var $img = $(this);
		$('<img/>')
			.load(function() {
				++cnt;
				if (cnt === totalImgs) {
					$imgs.show();
					$container.montage({
						fillLastRow: true,
						alternateHeight: true,
						alternateHeightRange: {
							min: 250,
							max: 250,
						},
					});

					/*
					 * just for this demo:
					 */
					$('#overlay').fadeIn(500);
				}
			})
			.attr('src', $img.attr('src'));
	});

});

$('.map_change').click(function() {
	$('.map_change').removeClass('active');
	$(this).addClass('active');
});

var heights = $('#heal_programs .program_element h4')
	.map(function() {
		return $(this).height();
	})
	.get();

maxHeight = Math.max.apply(null, heights);
$('#heal_programs .program_element h4').height(maxHeight);
