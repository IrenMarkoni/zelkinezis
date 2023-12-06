jQuery(document).ready(function($) {
	// Отправка формы с отзывом
	$('#in_page_review_form').submit(function() {
		$(this).ajaxSubmit({
			data: {
				new_reviews: 1,
			},
			clearForm: true,
			success: function(result) {
				if (result.indexOf('error') + 1) {
					sweetAlert('Упс!', 'Вы не верно заполнили капчу. попробуйте ещё раз', 'error');
				} else {
					swal('Поздравляем!', 'Ваш отзыв отправлен на модерацию!', 'success');
				}
			},
		});
		return false;
	});

	// Отправка формы с комментарием
	$('#in_page_comments_form').submit(function() {
		var url = window.location.pathname;
		$(this).ajaxSubmit({
			data: {
				new_comments: 1,
				url: url,
			},
			target: '#comment_result',
		});
		return false;
	});

	// Загрузка информации о наполнении корзины
	var current_goods = $.cookie('order_goods');
	if (current_goods == null) {
		$('#cms_cart_amount').html('0');
	} else {
		var array_goods = current_goods.split('|');
		var amount = 0;
		var summ = 0;
		for (var i = 0; i < array_goods.length - 1; i++) {
			new_array = array_goods[i].split(':');
			one_amount = new_array[1];
			price = new_array[2];
			one_summ = parseFloat(price) * parseFloat(one_amount);
			amount = amount + parseFloat(one_amount);
			summ = summ + one_summ;
		}
		$('#cms_cart_summ').html(summ);
		$('#cms_cart_amount').html(amount);
	}

	// Добавление товара в корзину
	$('.cms_buy_btn').on('click', function(event) {
		event.preventDefault();
		var id_good = $(this).attr('data-id-good');
		var amount = $('.cms_amount_' + id_good).val();
		var current_amount = $('#cms_cart_amount').html();
		if (!amount) {
			amount = '1';
		}
		var new_amount = parseFloat(current_amount) + parseFloat(amount);
		var price = $('.cms_price_' + id_good).html();
		var current_summ = $('#cms_cart_summ').html();
		var little_summ = parseFloat(amount) * parseFloat(price);
		var new_summ = parseFloat(current_summ) + little_summ;
		$('#cms_cart_amount').html(new_amount);
		$('#cms_cart_summ').html(new_summ);
		var current_goods = $.cookie('order_goods');
		if (current_goods == null) {
			var array_goods = new Array();
		} else {
			var array_goods = current_goods.split('|');
		}
		var k = 0;
		var first_array = new Array();
		var second_array = new Array();
		for (var i = 0; i < array_goods.length; i++) {
			var split_array = array_goods[i].split(':');
			first_array[i] = split_array[0];
			second_array[i] = split_array[1];
			if (split_array[0] == id_good) {
				k++;
				second_array[i] = parseFloat(second_array[i]) + parseFloat(amount);
			}
		}
		if (k == 0) {
			if (current_goods == null) {
				var created_goods = id_good + ':' + amount + ':' + price + '|';
			} else {
				var created_goods = current_goods + id_good + ':' + amount + ':' + price + '|';
			}
			$.cookie('order_goods', created_goods, {
				expires: 30,
				path: '/',
			});
		} else {
			var new_string = '';
			for (var i = 0; i < first_array.length - 1; i++) {
				new_string = new_string + first_array[i] + ':' + second_array[i] + ':' + price + '|';
			}
			$.cookie('order_goods', new_string, {
				expires: 30,
				path: '/',
			});
		}
		// Анимация успешного добавления в корзину
		$('#cms_success_alert').show();
		$('#cms_success_alert').addClass('animated bounceInUp');
		setTimeout(function() {
			$('#cms_success_alert').removeClass('bounceInUp');
			$('#cms_success_alert').addClass('bounceOutUp');
			setTimeout(function() {
				$('#cms_success_alert').removeClass('animated bounceOutUp');
				$('#cms_success_alert').hide();
			}, 1000);
		}, 1500);
	});
	// Выбор цены
	$('.cms_price').on('click', function() {
		var id_price = $(this).attr('data-id-price');
		var price = $(this).val();
		$('.cms_buy_price_btn').attr('data-id-price', id_price);
		$('.cms_buy_price_btn').attr('data-price', price);
	});
	$('.cms_price').each(function(index, el) {
		if ($(this).prop('checked')) {
			var id_price = $(this).attr('data-id-price');
			var price = $(this).val();
			$('.cms_buy_price_btn').attr('data-id-price', id_price);
			$('.cms_buy_price_btn').attr('data-price', price);
		}
	});
	// Добавление товара в корзину с другими ценами
	$('.cms_buy_price_btn').on('click', function(event) {
		event.preventDefault();
		var id_good = $(this).attr('data-id-good');
		var id_price = $(this).attr('data-id-price');
		var amount = $('.cms_amount').val();
		var current_amount = $('#cms_cart_amount').html();
		if (!amount) {
			amount = '1';
		}
		var new_amount = parseFloat(current_amount) + parseFloat(amount);
		var price = $(this).attr('data-price');
		var current_summ = $('#cms_cart_summ').html();
		var little_summ = parseFloat(amount) * parseFloat(price);
		var new_summ = parseFloat(current_summ) + little_summ;
		$('#cms_cart_amount').html(new_amount);
		$('#cms_cart_summ').html(new_summ);
		var current_goods = $.cookie('order_goods');
		if (current_goods == null) {
			var array_goods = new Array();
		} else {
			var array_goods = current_goods.split('|');
		}
		var k = 0;
		var first_array = new Array();
		var second_array = new Array();
		var third_array = new Array();
		for (var i = 0; i < array_goods.length; i++) {
			var split_array = array_goods[i].split(':');
			first_array[i] = split_array[0];
			second_array[i] = split_array[1];
			third_array[i] = split_array[2];
			if (split_array[0] == id_good && split_array[2] == price) {
				k++;
				second_array[i] = parseFloat(second_array[i]) + parseFloat(amount);
			}
		}
		if (k == 0) {
			if (current_goods == null) {
				var created_goods = id_good + ':' + amount + ':' + price + '|';
			} else {
				var created_goods = current_goods + id_good + ':' + amount + ':' + price + '|';
			}
			$.cookie('order_goods', created_goods, {
				expires: 30,
				path: '/',
			});
		} else {
			var new_string = '';
			for (var i = 0; i < first_array.length - 1; i++) {
				new_string = new_string + first_array[i] + ':' + second_array[i] + ':' + third_array[i] + '|';
			}
			$.cookie('order_goods', new_string, {
				expires: 30,
				path: '/',
			});
		}

		// Анимация успешного добавления в корзину
		$('#cms_success_alert').show();
		$('#cms_success_alert').addClass('animated bounceInUp');
		setTimeout(function() {
			$('#cms_success_alert').removeClass('bounceInUp');
			$('#cms_success_alert').addClass('bounceOutUp');
			setTimeout(function() {
				$('#cms_success_alert').removeClass('animated bounceOutUp');
				$('#cms_success_alert').hide();
			}, 1000);
		}, 1500);
	});

	// Очистка корзины
	$('#cms_clear_cart').on('click', function(event) {
		event.preventDefault();
		$.removeCookie('order_goods', {
			path: '/',
		});
		location.reload();
	});

	// Кнопка пересчитать
	$('#cms_resumm').on('click', function(event) {
		event.preventDefault();
		var created_goods = '';
		$('.cms_cart_ammount').each(function() {
			var ammount = $(this).val();
			var good_id = $(this).attr('data-id-good');
			var price = $(this).attr('data-id-price');
			var new_good = good_id + ':' + ammount + ':' + price + '|';
			created_goods = created_goods + new_good;
		});
		$.cookie('order_goods', created_goods, {
			expires: 30,
			path: '/',
		});
		location.reload();
	});

	//Удалить товар из корзины
	$('.cms_delete_from_cart').on('click', function(event) {
		event.preventDefault();
		if (confirm('Вы действительно хотите удалить товар из корзины?')) {
			var good_id = $(this).attr('data-id-good');
			var current_goods = $.cookie('order_goods');
			var array_goods = current_goods.split('|');
			for (var i = 0; i < array_goods.length - 1; i++) {
				new_array = array_goods[i].split(':');
				var array_id = new_array[0];
				if (good_id == array_id) {
					array_goods.splice(i, 1);
				}
			}
			var created_goods = '';
			for (var i = 0; i < array_goods.length - 1; i++) {
				created_goods = created_goods + array_goods[i] + '|';
			}
			console.log(created_goods);
			if (created_goods.length == 0) {
				$.removeCookie('order_goods', {
					path: '/',
				});
			} else {
				$.cookie('order_goods', created_goods, {
					expires: 30,
					path: '/',
				});
			}
			location.reload();
		}
	});
	$('#cms_order_block').css('display', 'none');
	$('#cms_result_block').css('display', 'none');

	// Переход к оформлению заказа
	$('#cms_go_to_order').click(function(event) {
		event.preventDefault();
		$('#cms_cart_block').css('display', 'none');
		$('#cms_order_block').css('display', 'block');
	});

	// Переход к корзине
	$('#cms_go_to_cart').click(function(event) {
		event.preventDefault();
		$('#cms_cart_block').css('display', 'block');
		$('#cms_order_block').css('display', 'none');
	});

	// Функция проверка заполнения полей в заказе
	function validateOrder(formData, jqForm, options) {
		var form = jqForm[0];
		if (!form.cms_fio.value || !form.cms_phone.value) {
			swal('Внимание!', 'Пожалуйста заполните имя и телефон!', 'warning');
			return false;
		}
	}

	// Функция проверка заполнения полей в оне зааза в 1 клик
	function validateClick(formData, jqForm, options) {
		var form = jqForm[0];
		if (!form.cms_name.value || !form.cms_phone.value) {
			swal('Внимание!', 'Пожалуйста заполните все поля!', 'warning');
			return false;
		}
	}

	// Оформление заказа
	$('#cms_cart_form').submit(function() {
		$(this).ajaxSubmit({
			data: {
				new_order: 1,
			},
			beforeSubmit: validateOrder,
			success: function() {
				$('#cms_cart_block').hide('slow');
				$('#cms_order_block').hide('slow');
				$('#cms_result_block').show('slow');
				$.removeCookie('order_goods', {
					path: '/',
				});
				$('#cms_cart_amount').html(0);
				$('#cms_cart_summ').html(0);
			},
		});
		return false;
	});

	// Вызов модального она Купить в 1 клик
	$('.cms_click_buy_btn').on('click', function(event) {
		var good_id = $(this).attr('data-id-good');
		event.preventDefault();
		$('#click_buy_modal').modal({
			backdrop: 'static',
			keyboard: true,
		});
		$('#submit_click_buy').on('click', function(event) {
			event.preventDefault();
			$('#click_buy_form').ajaxSubmit({
				beforeSubmit: validateClick,
				data: {
					click_buy_form: 1,
					good_id: good_id,
				},
				target: '.result_message',
			});
		});
	});

	// Маска для телефона во всплывающем окне
	$('#cms_phone').mask('+7 (999) 999-99-99');

	// Отправка формы с отзывом в товаре
	$('#in_good_review_form').submit(function() {
		$(this).ajaxSubmit({
			data: {
				new_shop_reviews: 1,
			},
			target: '#review_result',
		});
		return false;
	});
	// Подсчет добавленных к сравнению товаров
	var comparison_cookie = $.cookie('comparison_goods');
	if (comparison_cookie == null) {
		$('#cms_comparison_result').empty();
		$('#cms_comparison_result').append('0');
		$('#cms_comparison_link').hide();
		$('#cms_clear_comparison').hide();
		$('#cms_comparison_block').hide();
	} else {
		var comparison_array = comparison_cookie.split(';');
		var comparison_count = comparison_array.length - 1;
		$('#cms_comparison_result').empty();
		$('#cms_comparison_result').append(comparison_count);
		$('#cms_comparison_link').show();
		$('#cms_comparison_block').show();
	}

	// Очистка списка сравнения
	$('#cms_clear_comparison').on('click', function(event) {
		event.preventDefault();
		if (confirm('Вы действительно хотите удалить все товары из сравнения?')) {
			$.removeCookie('comparison_goods', {
				path: '/',
			});
			location.reload();
		}
	});

	// Добавление товаров для сравнения
	$('.cms_comparison_btn').on('click', function(event) {
		event.preventDefault();
		var good_id = $(this).attr('data-id-good');
		var comparison_cookie = $.cookie('comparison_goods');
		if (comparison_cookie == null) {
			new_comparison_cookie = good_id + ';';
			$.cookie('comparison_goods', new_comparison_cookie, {
				expires: 30,
				path: '/',
			});
			var comparison_count = $('#cms_comparison_result').html();
			comparison_count = parseInt(comparison_count) + 1;
			$('#cms_comparison_result').html(comparison_count);
			console.log(new_comparison_cookie);
			$('#cms_comparison_link').show('slow');
			$('#cms_clear_comparison').show('slow');
			$('#cms_comparison_block').show('slow');
		} else {
			var comparison_array = comparison_cookie.split(';');
			var new_comparison_cookie = '';
			var existing_good = 1;
			for (var i = 0; i < comparison_array.length; i++) {
				if (good_id == comparison_array[i]) {
					var existing_good = 0;
				}
			}
			if (existing_good == 0) {
				swal('Внимание!', 'Вы уже добавили этот товар для сравнения!', 'warning');
			} else {
				var comparison_count = $('#cms_comparison_result').html();
				comparison_count = parseInt(comparison_count) + 1;
				$('#cms_comparison_result').html(comparison_count);
				new_comparison_cookie = comparison_cookie + good_id + ';';
				$.cookie('comparison_goods', new_comparison_cookie, {
					expires: 30,
					path: '/',
				});
			}
			var cookie = $.cookie('comparison_goods');
			console.log(cookie);
		}
	});

	$('.cms_contact_form').submit(function() {
		var button = $(this).find('button');
		var text = button.text();
		button.text('Отправка');
		button.attr('disabled', 'disabled');
		$(this).ajaxSubmit({
			data: { submit_contact_form: 1 },
			success: function(result) {
				if (result.indexOf('error') + 1) {
					button.removeAttr('disabled');
					button.text(text);
					sweetAlert('Упс!', 'Вы не верно заполнили капчу. попробуйте ещё раз', 'error');
				} else {
					button.removeAttr('disabled');
					button.text(text);
					swal('Поздравляем!', 'Ваша заявка успешно отправлена!', 'success');
				}
			},
		});
		return false;
	});

	$('.cms_contact_form--fran').submit(function() {
		var button = $(this).find('button');
		var text = button.text();
		button.text('Отправка');
		button.attr('disabled', 'disabled');
		$(this).ajaxSubmit({
			data: { submit_contact_form: 1 },
			success: function(result) {
				if (result.indexOf('error') + 1) {
					button.removeAttr('disabled');
					button.text(text);
					sweetAlert('Упс!', 'Вы не верно заполнили капчу. попробуйте ещё раз', 'error');
				} else {
					button.removeAttr('disabled');
					button.text(text);
					// swal('Поздравляем!', 'Ваша заявка успешно отправлена!', 'success');

					$('#franshiza_modal .modal-dialog .modal-content .modal-header').attr('style', 'display:none!important');
					$('#franshiza_modal .modal-dialog .modal-content .modal-footer').attr('style', 'display:none!important');
					var popupsuccess = $('.popupsuccess').html();
					$('.cms_contact_form--fran .modal-body').html(popupsuccess);
				}
			},
		});
		return false;
	});

	$('#q-form').submit(function() {
		var button = $(this).find('button');
		var text = button.text();
		button.text('Отправка');
		button.attr('disabled', 'disabled');
		var categoryId = $('#often_qst .nav-link.active').data('id');
		$(this).ajaxSubmit({
			data: { submitQForm: true, categoryId: categoryId },
			success: function(result) {
				if (result.indexOf('error') + 1) {
					button.removeAttr('disabled');
					button.text(text);
					sweetAlert('Упс!', 'Произошла ошибка, попробуйте ещё раз', 'error');
				} else {
					button.removeAttr('disabled');
					button.text(text);
					swal(
						'Поздравляем!',
						'Ваш вопрос успешно отправлен, ответ вы получите на указанный e-mail ',
						'success'
					);
				}
			},
		});
		return false;
	});
});
