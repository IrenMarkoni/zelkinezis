(function($) {
    $.fn.menuActive = function(self) {
        return this.each(function(index, el) {
            var href = $(this).attr('href');
            var request_url = window.location.pathname;
            if (href != '/') {
                if (request_url.indexOf(href) + 1) {
                    if (self === 'link') {
                        $(this).addClass('active');
                    } else if (self == 'bootstrap') {
                        $(this).parent().parent().parent().addClass('active');
                         $(this).parent().addClass('active');
                    } else {
                        $(this).parent().addClass('active');
                    }
                }
            } else if (request_url == href) {
                if (self == 'bootstrap') {
                     $(this).parent().addClass('active');
                } else {
                    $(this).addClass('active');
                }
                
            }
        });
    };
})(jQuery);