jQuery(document).ready(function ($) {

	$('#mobile-nav').mmenu({
		extensions: ['pagedim-black'],
		navbar: {
			title: 'Меню',
		},
	});

	var window_width = $(window).width();
	// console.log(window_width);

	switch (true) {
		case window_width > 992:
			$('#owl_personal').owlCarousel({ items: 4, nav: true, margin: 10 });
			// $('#owl_personal').owlCarousel({ items: 4, nav: true, margin: 10 });
			$('#owl_review').owlCarousel({ items: 3, nav: true, margin: 20 });
			$('#owl_review_slim').owlCarousel({ items: 3, nav: true, margin: 20 });
			$('#owl_rewards').owlCarousel({ items: 4, nav: true, margin: 30 });
			$('#owl_rewards_2').owlCarousel({ items: 4, nav: true, margin: 30 });
			break;
		case window_width <= 992 && window_width > 400:
			$('#owl_personal').owlCarousel({ items: 2, nav: true, margin: 10 });
			$('#owl_review').owlCarousel({ items: 3, nav: true, margin: 20 });
			$('#owl_review_slim').owlCarousel({ items: 3, nav: true, margin: 20 });
			$('#owl_rewards').owlCarousel({ items: 2, nav: true, margin: 30 });
			$('#owl_rewards_2').owlCarousel({ items: 2, nav: true, margin: 30 });
			break;
		case window_width < 400:
			$('#owl_personal').owlCarousel({ items: 1, nav: true, margin: 10 });
			$('#owl_review').owlCarousel({ items: 1, nav: true, margin: 20 });
			$('#owl_review_slim').owlCarousel({ items: 1, nav: true, margin: 20 });
			$('#owl_rewards').owlCarousel({ items: 1, nav: true, margin: 30 });
			$('#owl_rewards_2').owlCarousel({ items: 1, nav: true, margin: 30 });
			break;
	}

	function reloadHighlight() {
		$('img[usemap]').maphilight({
			fill: true,
			fillColor: 'ee0000',
			fillOpacity: 0.6,
			stroke: true,
			strokeColor: 'ee0000',
			strokeOpacity: 1,
			strokeWidth: 2,
			fade: true,
			alwaysOn: true,
			neverOn: false,
			groupBy: false,
			wrapClass: true,
			shadow: false,
			shadowX: 0,
			shadowY: 0,
			shadowRadius: 6,
			shadowColor: '000000',
			shadowOpacity: 0.8,
			shadowPosition: 'outside',
			shadowFrom: false,
		});
	}

	reloadHighlight();

	$('.city_changer_top .dropdown-item').click(function () {
		var city_in_article = $(this).data('in_article');
		var city_id = $(this).data('city_id');
		var city_url = $(this).data('city_url');
		if (city_in_article == true){
			city_url = city_url + "/kontakty";
		} else if (city_in_article == false){
			city_url = city_url + location.pathname;
		};
        document.cookie = 'city_id=' + city_id + '; path=/;' + 'domain=.zelkinezis.ru';
		location.href = city_url;
	});

	$('.city_changer_bottom .dropdown-item').click(function () {
        // var city_id = $(this).data('city_id');
        // var city_url = $(this).data('city_url') + location.pathname;
		//
        // document.cookie = 'city_id=' + city_id + '; path=/;' + 'domain=.zelkinezis.ru';
        // location.href = city_url;
		var city_in_article = $(this).data('in_article');
		var city_id = $(this).data('city_id');
		var city_url = $(this).data('city_url');
		if (city_in_article == true){
			city_url = city_url + "/kontakty";
		} else if (city_in_article == false){
			city_url = city_url + location.pathname;
		};
		document.cookie = 'city_id=' + city_id + '; path=/;' + 'domain=.zelkinezis.ru';
		location.href = city_url;
	});

	$('#city_change_Modal .express_btn').click(function () {
		var city_id = $(this).data('city_id');
		document.cookie = 'city_id=' + city_id + '; path=/;';
		location.reload();
	});

	$('#city_change_Modal').on('hide.bs.modal', function (event) {
		var city_id = '96';
		document.cookie = 'city_id=' + city_id + '; path=/;';
	});

	$('#search_qst').keyup(function () {
		var active_cat = $('#often_qst .nav-link.active').attr('href'),
			search_str = $(this)
				.val()
				.toLowerCase();
		active_cat = active_cat.slice(1);
		if (search_str.length > 2) {
			$('.card').addClass('alldisable');
			$('#myTabContent .card').each(function () {
				var title = $(this)
					.find('button')
					.text()
					.toLowerCase(),
					text = $(this)
						.find('p')
						.text()
						.toLowerCase();
				if (title.indexOf(search_str) >= 0 || text.indexOf(search_str) >= 0) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		} else {
			$('.card').removeClass('alldisable');
		}
		console.log(search_str);
	});

	$('.good_qst_btn').click(function () {
		var qst_id = $(this).data('qst_id');
		$.post('/voprosy-i-otvety/', { qst_id: qst_id });
		$(this)
			.parent()
			.fadeOut('slow');
		$(this)
			.parent()
			.parent()
			.find('.thanks_block')
			.fadeIn('slow');
	});

	$('.bad_qst_btn').click(function () {
		$(this)
			.parent()
			.fadeOut('slow');
		$(this)
			.parent()
			.parent()
			.find('.thanks_block_v2')
			.fadeIn('slow');
	});

	$('.menu_opros').on('click', function (e) {
		//   e.preventDefault();
		e.stopPropagation();
	});

	$('#simptoms_btn').click(function () {
		$('.diagnoz_block').fadeOut();
		$('.simptoms_block').fadeIn();
	});
	$('#diagnoz_btn').click(function () {
		$('.diagnoz_block').fadeIn();
		$('.simptoms_block').fadeOut();
	});

	$('#download_curse button, .chelik').click(function () {
		jQuery('#showmodalcall[data-toggle="modal"]').click();
	});

	$('.spoiler_text').readmore({
		speed: 75,
		collapsedHeight: 138,
		moreLink: '<a href="#" class="express_btn btn btn-blue m-auto">Читать еще   <i class="fas fa-caret-down"></i></a>',
		lessLink: '<a href="#" class="express_btn btn btn-blue m-auto">Скрыть   <i class="fas fa-caret-up"></i></a>',
	});

	var docs = $('.doc-carousel');
	docs.owlCarousel({
		loop: false,
		margin: 30,
		nav: false,
		dots: true,
		items: 6,
		responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 4,
			},
			1920: {
				items: 4,
			}
		},
	});

	var rmc = $('.owl-rmc');
	rmc.owlCarousel({
		loop: false,
		margin: 30,
		nav: false,
		dots: true,
		items: 1,
	});
});

function getCookie(name) {
	var matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

/*------ унесено со старого сайта------------------*/
jQuery(document).ready(function () {
	var currentStep = 1;

	jQuery('.programs .btn').click(function () {
		jQuery(this).toggleClass('btn-green');
		jQuery(this).text(function (i, text) {
			return text === 'Выбрано' ? 'Выбрать' : 'Выбрано';
		});
		jQuery(this)
			.parents('.itm')
			.toggleClass('active');
        jQuery(this)
			.parents('.itm')
            .find('.check-programm')
			.toggleClass('active');
		jQuery('.btm-form .step-0').hide();
		jQuery('.btm-form .step-1').show();
		var counter = jQuery('.programs .itm.active').length;
		var text = counter + ' программ';
		if (counter == 1) text = counter + ' программу';
		if (counter > 1 && counter < 5) text = counter + ' программы';

		jQuery('.btm-form .step-1 #counterprograms').text(text);

		if (!$('.programs .itm').hasClass('active')) {
			jQuery('.btm-form .step').hide();
			jQuery('.btm-form .step-0').show();
		}
	});

	jQuery('#formcancel').on('click', function (e) {
		e.preventDefault();

		// jQuery(this).closest('#modal-call').removeClass('in').hide();
		//jQuery('.modal-backdrop').remove();

		document.cookie = 'hide_modal=true; path=/;';
	});

	jQuery('.steprequest').on('submit', function (e) {
		e.preventDefault();

		var form = jQuery(this);
		var form_id = form.find('input[name="id"]').val();
		var url = window.location.href;
		var formdata = new FormData(form.get(0));
		var valid = true;
		var step = jQuery(this)
			.find('input[name="step"]')
			.val();

		form.find('input').each(function () {
			if (jQuery(this).attr('required')) {
				if (jQuery(this).val == '') {
					valid = false;
				}

				var type = jQuery(this).attr('type');
				var val = jQuery(this).val();
				if (type == 'email' && !(val.indexOf('@') + 1)) {
					valid = false;
				}

				/*if (type == 'tel') {
                    if (!jQuery(this).inputmask("isComplete")){
                        valid = false;
                    }
                }*/
			}
		});

		if (!valid) return false;

		formdata.append('option', 'com_ksenrequest');
		formdata.append('task', 'request.addvote');
		formdata.append('tmpl', 'onlycomponent');
		//formdata.append('form_id', form_id);
		formdata.append('url', url);

		var programms = [];
		form.closest('.modal-content')
			.find('.programs .itm.active')
			.each(function () {
				var number = jQuery(this)
					.find('.check-programm')
					.val();
				formdata.append('programms_' + number, 1);
			});

		jQuery.ajax({
			url: 'https://zelkinezis.ru/form/index.php',
			method: 'POST',
			contentType: false,
			processData: false,
			dataType: 'json',
			data: formdata,
			success: function (response) {
				if (step == 3) {
					form.parents('.modal-dialog').addClass('end');
					jQuery('.theend').show();
					jQuery('.modal-backdrop').remove();

					jQuery.ajax({
						url: 'https://zelkinezis.ru/formsession.php?formsession=1',
						method: 'GET',
						contentType: false,
						processData: false,
						dataType: 'json',
						success: function (response) { },
					});
				}
				if (step == 2) {
					jQuery('.btm-form .step-2').hide();
					jQuery('.btm-form .step-3').show();
					jQuery('.steprequest input[name="request_id"]').val(response.data.id);
					var email = form.find('input[name="form[field_4]"]').val();
					jQuery('.steprequest input[name="form[field_4]"]').val(email);
					var phone = form.find('input[name="form[field_3]"]').val();
					jQuery('.steprequest input[name="form[field_3]"]').val(phone);
				}
				if (step == 1) {
					jQuery('.btm-form .step').hide();
					jQuery('.btm-form .step-2').show();
					jQuery('.steprequest input[name="request_id"]').val(response.data.id);
					var email = form.find('input[name="form[field_4]"]').val();
					jQuery('.steprequest input[name="form[field_4]"]').val(email);
				}
				if (step == 3) {
					step = 1;
				} else {
					step++;
				}
				if (response.success) {
					form.closest('.mod-ksr-form').find('.mod-ksr-form-thanks').fadeIn(500).delay(5000).fadeOut(500);
					form.parent().children('.close').click();
				}
			},
		});
	});

	jQuery('.next-2').click(function () {
		jQuery('.btm-form .step').hide();
		jQuery('.btm-form .step-2').show();
	});
	jQuery('.next-3').click(function () {
		jQuery('.btm-form .step').hide();
		jQuery('.btm-form .step-3').show();
	});
	jQuery('.next-end').click(function () {
		jQuery(this).parents('.modal-dialog').addClass('end');
		jQuery('.theend').show();
        
        
        $.post("/tologin/ajax/aj_cmsForm.php", 
        { 
            email_programs: $('.email_programs').val(), 
            user_email: $('.user_email').val(), 
            user_phone: $('.user_phone').val(), 
            user_name: $('.user_name').val(), 
            user_city: $('.user_city').val(),
            program1: $('.check-programm.programm_one.active').val(),
            program2 :$('.check-programm.programm_two.active').val() 
        } );            
	});
});

jQuery(window).load(function () {
	var check = getCookie('hide_modal'),
		city_id = getCookie('city_id');

	if (check != 'true' && city_id != null)
		if (jQuery('div#formvote').hasClass('active')) {
			// setTimeout(function() {
			// 	jQuery('#showmodalcall[data-toggle="modal"]').click();
			// }, 1000);
		}

	if (city_id == null) $('#city_change_Modal').modal();
});

/*8================================================D*/

$(document).ready(function () {

    $('.panel-sieve.simptoms .search_sieve input').removeClass('active');

	//сортировка списка
	var mylist = $('.row-sieve');
	var listitems = mylist.children('.col-search-simptom').get();

    listitems.sort(function (a, b) {
		return $(a)
			.text()
			.toUpperCase()
			.localeCompare(
				$(b)
					.text()
					.toUpperCase()
			);
	});

	$.each(listitems, function (idx, itm) {
		mylist.append(itm);
	});

    /*$(".row-sieve").sieve();
    $(".row-sieve").sieve({ itemSelector: "a" });*/

    //переопределение селектора
    $('.row-sieve').sieve({ itemSelector: '.col-search-simptom a' });

    //теперь строка для запроса никуда не скроется
    $('.simptoms .search_sieve button').click(function () {
        $('.simptoms .search_sieve input').toggleClass('active');
        $(this)
			.find('i')
            .toggleClass('fa-times');
    });
    $(document).mouseup(function (e) {
        // событие клика по веб-документу
        var div = $('.simptoms .search_sieve input,.simptoms .search_sieve button'); // тут указываем ID элемента
        if (
            !div.is(e.target) && // если клик был не по нашему блоку
            div.has(e.target).length === 0
        ) {
            // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
            $('.simptoms .search_sieve button i').removeClass('fa-times');
        }
    });


    //поиск по кускам тела в "что мы лечим"
    $('.sieve_word').click(function (event) {
        event.preventDefault();
        var one_letter = $(this).data('bodypart');
        $('.col-search-simptom').each(function () {
            var str = $(this)
                .find('a')
                .data('bodypart');
            if (str == one_letter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        $('.nav-pills .nav-link').removeClass('active');
        $(this).addClass('active');

    });

    //побуквенный поиск на симптомах и что-лечим
    $('.sieve_letter').click(function (event) {
        event.preventDefault();
        var one_letter = $(this).html();
        $('.col-search-simptom').each(function () {
            var str = $(this)
                .find('a')
                .html();
            if (str[0] == one_letter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        $('.simptoms .nav-link').removeClass('active');
        $('.ctho-lechim-letter-search .nav-link').removeClass('active');
        $(this).addClass('active');

    });

    //кнопка "все"
	$('.sieve_letter_all').click(function (event) {
		event.preventDefault();
		$('.col-search-simptom').show();
		$('.panel-sieve .nav-link, .nav-pills .nav-link').removeClass('active');
		$(this).addClass('active');
	});


});

var url = window.location.pathname;
var url_city_id = $.cookie('city_id');
if (url_city_id == 98) {
	url_city = '/vakansii-v-g-dubna/';
} else if (url_city_id == 96) {
	url_city = '/vakansii-v-g-zelenograd/';
} else if (url_city_id == 97) {
	url_city = '/vakansii-v-g-tver/';
} else if (url_city_id == 99) {
	url_city = '/vakansii-v-g-klin/';
}

if (
	url == '/vakansii-v-g-dubna/' ||
	url == '/vakansii-v-g-zelenograd/' ||
	url == '/vakansii-v-g-tver/' ||
	url == '/vakansii-v-g-klin/'
) {
	if (url != url_city) {
		document.location.href = url_city;
	}
}

if (url_city_id == 98) {
	url_personal_city = '/personal-dubny/';
} else if (url_city_id == 96) {
	url_personal_city = '/personal-zelenograda/';
} else if (url_city_id == 97) {
	url_personal_city = '/personal-tveri/';
} else if (url_city_id == 99) {
	url_personal_city = '/personal-klin/';
}
if (
	url == '/personal-dubny/' ||
	url == '/personal-zelenograda/' ||
	url == '/personal-tveri/' ||
	url == '/personal-klin/'
) {
	if (url != url_personal_city) {
		document.location.href = url_personal_city;
	}
}

if (url_city_id == 98) {
	url_price_city = '/ceny-i-programmy-dubny/';
} else if (url_city_id == 96) {
	url_price_city = '/ceny-i-programmy-zelenograda/';
} else if (url_city_id == 97) {
	url_price_city = '/ceny-i-programmy-tveri/';
} else if (url_city_id == 99) {
	url_price_city = '/ceny-i-programmy-v-kline/';
}
if (
	url == '/ceny-i-programmy-dubny/' ||
	url == '/ceny-i-programmy-zelenograda/' ||
	url == '/ceny-i-programmy-tveri/' ||
	url == '/ceny-i-programmy-v-kline/'
) {
	if (url != url_price_city) {
		document.location.href = url_price_city;
	}
}

$('.card .btn-link').click(function () {
	$(this)
		.parents('.card')
		.find('.collapse')
		.slideToggle('fast', function () {
			// Animation complete.
		});
});

///Опрос

$('.next-opros-btn').click(function () {
	var checkDiv = $(this).parents('.opros-step');
	if (checkDiv.attr('id') == 'id_opros_1') {
		if ($('#id_opros_1 input[type="radio"]').is(':checked')) {
			checkDiv.removeClass('active');
			checkDiv.next().addClass('active');
		} else {
			swal('Ошибка!', 'Заполните поле!', 'error');
		}
	}
	if (checkDiv.attr('id') == 'id_opros_2') {
		if (($('#opros_vozrast').val().length > 0) && ($('#opros_ves').val().length > 0) && ($('#opros_rost').val().length > 0)) {

			checkDiv.removeClass('active');
			checkDiv.next().addClass('active');
		} else {
			swal('Ошибка!', 'Заполните все поля!', 'error');
		}
	}
});

var checkedArray = [];
checkedArray.push("id_opros_14", "id_opros_15");

$('.opros-step.type2 input[type="checkbox"]').change(function () {
	var nextId = $(this).data("next");

	if ($(this).prop('checked') == true) {
		checkedArray.unshift(nextId);

	} else {
		var indexAr = checkedArray.indexOf(nextId);
		checkedArray.splice(indexAr, 1);
	}

});
$('.next-opros-btn2').click(function () {
	var id = $(this).parents('.opros-step').attr('id');
	var stepId = checkedArray.indexOf(id);

	var stepIdNext = stepId + 1;



	if (id == checkedArray[stepId]) {
		checkedArray.splice(stepId, 1);
	}

	stepId = checkedArray.indexOf(id);
	stepIdNext = stepId + 1;

	if (stepIdNext == 0) {
		if (checkedArray.length == 0) {
			$('.opros-step').removeClass('active');
			$('#finish-step').addClass('active');
		}
		else {
			$('.opros-step').removeClass('active');
			$('#' + checkedArray[stepIdNext]).addClass('active');
		}

	}
	else {
		$('.opros-step').removeClass('active');
		$('#finish-step').addClass('active');
	}


});

$("#opros_rost").mask("9.99");
function validate(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

var zab1_array_list = []

$('.zab1').change(function () {
	if ($(this).prop('checked') == true) {
		zab1_array_list.push($(this).val());
	}
	else {
		var id_ar = zab1_array_list.indexOf($(this).val());
		zab1_array_list.splice(id_ar, 1);
	}
	console.log(zab1_array_list);
});


$('.result-btn-opros').click(function () {
	var vozrast = Number($('#opros_vozrast').val());
	var ves = Number($('#opros_ves').val());
	var rost = Number($('#opros_rost').val());
	var imt = ves / (rost * rost);

	var ves1 = imt >= 20 && imt < 25;
	var ves2 = imt >= 25 && imt < 35;
	var ves3 = imt >= 35;

	console.log('Мы работаем?');

	console.log(imt);


	var zab1_array = [];

	$('.zab1').each(function () {
		zab1_array.push($(this).prop('checked'));
	});
	var z1a_result = zab1_array.indexOf(true) != -1; //true or false

	var zab2_array = [];
	$('.zab2').each(function () {
		zab2_array.push($(this).prop('checked'));
	});
	var z2a_result = zab2_array.indexOf(true) != -1; //true or false

	var zab3_array = [];
	$('.zab3').each(function () {
		zab3_array.push($(this).prop('checked'));
	});
	var z3a_result = zab3_array.indexOf(true) != -1; //true or false

	if (ves1 && z3a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни, но у Вас нормальный вес. <br/>У Вас уже очень серьезные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 3');
	}
	else if (ves1 && z2a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни, но у Вас нормальный вес.<br/>У Вас уже появились значительные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 2');
	}
	else if (ves1 && z1a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете активный образ жизни и у Вас нормальный вес. <br/>У Вас есть проблемы со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 1');
	}
	else if (ves2 && z3a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому,  у Вас излишний вес, который усиливает нагрузку на позвоночник и суставы. <br/>У Вас уже очень серьезные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 6');
	}
	else if (ves2 && z2a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому,  у Вас излишний вес, который усиливает нагрузку на позвоночник и суставы. <br/>У Вас уже значительные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 5');
	}
	else if (ves2 && z1a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому, у Вас излишний вес, который усиливает нагрузку на позвоночник и суставы. <br/> У Вас есть проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 4');
	}
	else if (ves3 && z3a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому,  у Вас избыточный вес, который усиливает нагрузку на позвоночник и суставы.<br/>У Вас уже очень серьезные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 9');
	}
	else if (ves3 && z2a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому,  у Вас избыточный вес, который усиливает нагрузку на позвоночник и суставы. <br/>У Вас уже значительные проблем со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 8');
	}
	else if (ves3 && z1a_result == true && $('#customRadio127').prop('checked') == true) {
		$('.paragraph_1').html("Вы ведете малоподвижный образ жизни и поэтому,  у Вас избыточный вес, который усиливает нагрузку на позвоночник и суставы. <br/>Вы молоды и у Вас есть проблемы со здоровьем. Вероятнее всего (вставляется диагноз)");
		console.log('Результат 7');
	}
	else {
		$('.paragraph_1').html('Ошибка!');
	}



});


// $('#customRadio133, #customRadio132').change(function () {
// 	$('#customRadio134').prop('checked', false);
// });
// $('#customRadio134').change(function () {
// 	$('#customRadio133, #customRadio132').prop('checked', false);
// });
// $('#opros_block input[type="checkbox"]').change(function () {
// 	if ($('#customRadio132').prop('checked') == true) {
// 		$('#id_opros_5').addClass('select');
// 	} else {
// 		$('#id_opros_5').removeClass('select');
// 	}
// 	if ($('#customRadio133').prop('checked') == true) {
// 		$('#id_opros_6').addClass('select');
// 	} else {
// 		$('#id_opros_6').removeClass('select');
// 	}
// });

// $('.next-opros-btn2').click(function () {
// 	var checkDiv = $(this).parents('.opros-step');

// 	if ($('#customRadio132').prop('checked') == true) {
// 		checkDiv.removeClass('active');
// 		$("#id_opros_5").addClass('active');
// 	}
// 	else if ($('#customRadio133').prop('checked') == true) {
// 		checkDiv.removeClass('active');
// 		$("#id_opros_6").addClass('active');
// 	}
// 	else if (($('#customRadio132').prop('checked') == true) && ($('#customRadio133').prop('checked') == true)) {
// 		checkDiv.removeClass('active');
// 		$("#id_opros_5").addClass('active');
// 	}
// 	else {
// 		swal('Ошибка!', 'Заполните поле!', 'error');
// 	}

// });


$('.showmodalcall-btn').click(function () {
	$.cookie('chel', '1');
	$('.chelik').hide();
});
var chelcoockie = $.cookie('chel');
if (chelcoockie == '1') {
	$('.chelik').hide();
}
else {
	$('.chelik').show();
}