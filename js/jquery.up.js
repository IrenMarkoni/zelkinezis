(function($) {
    $.fn.scrollUp = function(self) {
    	console.log(this)
        $(document).ready(function($) {
            $('body').append('<a id="scrollItUp" href="#">^</a>');
            if (self=='black') {
            	$('head').append('<style>#scrollItUp{opacity: 0.7;position: fixed;right: 20px;bottom: 20px;display: block;width: 40px;height: 40px;text-align: center;color: #fff;font-size: 39px;background: rgba(0,0,0,0.6);text-decoration: none;border-radius: 6px;}</style>');
            } else {
            	$('head').append('<style>#scrollItUp{opacity: 0.7;position: fixed;right: 20px;bottom: 20px;display: block;width: 40px;height: 40px;text-align: center;color: #424242;font-size: 39px;background: rgba(255,255,255,0.6);text-decoration: none;border-radius: 6px;}</style>');
            }
            $('#scrollItUp').on('click', function(event) {
            	event.preventDefault();
            	$("html, body").animate({ scrollTop: 0 }, "slow");
            });
        });
        $(window).scroll(function() {
            if ($(document).scrollTop() > 0) {
                $('#scrollItUp').fadeIn('fast');
            } else {
                $('#scrollItUp').fadeOut('fast');
            }
        });
    };
})(jQuery);


