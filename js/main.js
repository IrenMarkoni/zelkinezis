{
    $(document).ready(function () {

        //Open event body //Отключено
        $('#open_event_body').on('click', function () {
            var thisbtn = $(this);
            if ($('.event_body').hasClass('opened-event')){
                // $('.event_body').animate({height: '65px'}, 500);
                thisbtn.html('Подробнее');
                $('.event_body').removeClass('opened-event');
            } else {
                // $('.event_body').animate({height: 'auto'}, 500);
                thisbtn.html('Закрыть');
                $('.event_body').addClass('opened-event');
            }
        });

        //Costil' for search-sieve on simphtomy
        $('.simptoms .sieve_letter').on('click', function () {
            $('.simptoms .search_sieve input').val('');
        });
        setTimeout(function () {
            if ($('.search_sieve input').length && $('.search_sieve input').val() != ''){
                $('.simptoms .search_sieve input').toggleClass('active');
                $('.simptoms .search_sieve button')
                    .find('i')
                    .toggleClass('fa-times');
                $('.search_sieve input').trigger("click");
            }
        }, 1500);


        function maskPhone() {
            $(".form__phone").mask("+7 (999) 999-99-99");
            $(".user_phone").mask("+7 (999) 999-99-99");
            console.log('asd');
        };
        maskPhone();

        setTimeout(activateDiplomas, 2000);
        function activateDiplomas()
        {
            $("#diplomes_carousel").waterwheelCarousel({
                startingItem: 1, // номер изображения в центре при открытии галереи
                separation: 100, // расстояние между изображениями карусели
                separationMultiplier: 0.7, // коэффициент изменения расстояния для дальних от центра картинок
                horizonOffset: 0, // расхождение крайних изображений по вертикали
                horizonOffsetMultiplier: 1, // перекрытие крайних изображений по вертикали
                sizeMultiplier: 0.7, // размер изображений по краям
                opacityMultiplier: 0.7, // прозрачность изображений по краям
                horizon: 0, // выравнивание изображений по вертикали. О для авто
                flankingItems: 1, // количество изображений, выводимых по обе стороны от главного

                // анимация
                speed: 700, // скорость ротации изображений в миллисекундах
                animationEasing: 'linear', // эффекты анимации
                quickerForFurther: true, // true - ускорение движения в центр при клике по боковым картинкам

                // misc
                linkHandling: 2, // 0 - переход кликом по ссылке c любого изображения, 1 - запрет перехода, 2 - переход кликом по ссылке только c центрального изображения
                autoPlay: 5000, // время в миллисекундах между ротацией, 0 - только по клику, oтрицательное значение - смена направления ротации
                orientation: 'horizontal', // расположение карусели 'horizontal' или 'vertical'
                imageNav: true, // клик по любому изображению перемещает его в центр

                // preloader
                preloadImages: false, // предварительная подготовка изображений да/нет
                forcedImageWidth: 0, // выравнивание ширины
                forcedImageHeight: 0, // выравнивание высоты,
                movedToCenter: function($newCenterItem) {
                    //let img_height = $newCenterItem.height();
                    //let img_top = $newCenterItem.css( 'top' );
                    //console.log($newCenterItem.css( 'top' ));
                    //$newCenterItem.css( 'top' , 30)
                    //$('#diplomes_carousel').height(img_height);
                }
            });
        }

        $('.results-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            items:1
        })

        //Отрисовка Карт
        // function yaMaps() {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map_franchise', {
                        center: [56.0119, 38.3400],
                        zoom: 7,
                        controls: ['geolocationControl', 'fullscreenControl', 'zoomControl', 'rulerControl']
                    }, {
                        searchControlProvider: 'yandex#search'
                    }),

                    // Создаём макет содержимого.
                    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<div style="border-color:red; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                    ),
                    myPlacemark1 = new ymaps.Placemark([56.0064, 37.2046], {
                        hintContent: 'г. Зеленоград, корпус 118, правый вход с лица здания'
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/svg/map-point.svg',
                        iconImageSize: [70, 60],
                    });
                myPlacemark2 = new ymaps.Placemark([56.8578,35.9257], {
                    hintContent: 'г. Тверь, ул. Советская 45, к. 2, 2-й этаж.'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/svg/map-point.svg',
                    iconImageSize: [70, 60],
                });
                myPlacemark3 = new ymaps.Placemark([56.7346, 37.1635], {
                    hintContent: 'г. Дубна, ул. Вернова С.Н., д.5'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/svg/map-point.svg',
                    iconImageSize: [70, 60],
                });
                myPlacemark4 = new ymaps.Placemark([56.3344, 36.7313], {
                    hintContent: 'г. Клин, Советская площадь, д.23/1 (вход под часами)'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/svg/map-point.svg',
                    iconImageSize: [70, 60],
                });
                myPlacemark5 = new ymaps.Placemark([55.956632068776834,38.0401845], {
                    hintContent: 'г. Фрязино, Дудкина, д.7'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/svg/map-point.svg',
                    iconImageSize: [70, 60],
                });
                myMap.geoObjects
                    .add(myPlacemark1)
                    .add(myPlacemark2)
                    .add(myPlacemark3)
                    .add(myPlacemark4)
                    .add(myPlacemark5);

            });
        // };
        // yaMaps();

        //Передача метки кнопки отправки формы
        //Класс form-target за назначение
        //Класс inpformtarget на input на формах
            $('button.form-target').click(function () {
                let fTar = $(this).attr('data-formtarget');
                $('.inpformtarget').attr('value', fTar);
            });
            $('input[name="cms_field[Телефон]"]').mask('+7 (999) 999-99-99');

        if (screen.width <= '600') {
            /*$('.single-slider').slick({
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                centerPadding: '20px',
                responsive: [{
                    breakpoint: 420,
                    settings: {
                        centerPadding: '100px'
                    }
                }]
            });
            $('.helpOpen__slider').slick({
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                centerPadding: '20px',
                responsive: [{
                    breakpoint: 420,
                    settings: {
                        centerPadding: '70px'
                    }
                }]
            });*/
            /*$('.earings__slider').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                variableWidth: true,
                autoplay: true,
                arrows: false,
                dots: false,
                initialSlide: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });*/
            //scrollMenu();
        }
        ;
//Вызов попапа
        function popup() {
            $('.popup-modal').magnificPopup({
                items: {
                    src: '#popup'
                },
                type: 'inline',
                callbacks: {
                    open: function () {
                        //сохраняем экземпляр в переменной magnificPopup - экземпляр кнопки по которой был произведен клик
                        magnificPopup = $.magnificPopup.instance;
                        //забираем дата атрибуты с кнопки
                        var title = (magnificPopup.st.el).attr('data-form-title');
                        var desc = (magnificPopup.st.el).attr('data-form-desc');
                        var btnName = (magnificPopup.st.el).attr('data-form-btnName');
                        // console.info(title);
                        // console.info(desc);
                        // console.info(btnName);
                        $('#popup .form__title').html(title);
                        $('#popup .form__title__desc').html(desc);
                        $('#popup .btnName').val(btnName);

                        if ($(window).width() < 600) {
                            $('body').addClass('lock');
                            $('section').css({"display": "none"});
                            $('.popupfullscreenmobile').css({"display": "flex"});
                            $('body').css({"overflow": "hidden", 'position': 'fixed'});

                        }
                        ;
                    },
                    close: function () {
                    }
                }
            });

            /*$('.popup-list').magnificPopup({
                type: 'inline',
                callbacks: {
                    open: function () {
                        if ($(window).width() < 600) {
                            $('body').addClass('lock');
                            $('section').css({"display": "none"});
                            $('.popupfullscreenmobile').css({"display": "flex"});
                            $('body').css({"overflow": "hidden", 'position': 'fixed'});

                        }
                        ;
                    },
                    close: function () {


                    }
                }
            });*/
            $('.hidegallery').magnificPopup({
                items: [
                    {
                        src: 'img/jpg/diplom1.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom2.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom3.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom4.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom5.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom6.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom7.jpg',
                        type: 'image'
                    },
                    {
                        src: 'img/jpg/diplom8.jpg',
                        type: 'image'
                    }
                ],

                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });
            $(document).on('click', '.popup-modal-dismiss', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
                $('#popup .form__title').html('');
                $('#popup .form__title__desc').html('');
                $('#popup .btnName').val('');

                if ($(window).width() < 600) {
                    $('body').css({'overflow': 'auto', 'position': 'static'});
                    $('section').css({"display": "block"});
                    magnificPopup = $.magnificPopup.instance;

                    window.scrollTo(0, magnificPopup.st.el.offset().top - 400);
                }
            });
            $(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            });
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Загрузка изображения #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                callbacks: {
                    close: function() {
                        console.log('asdasd');
                        $('html').animate({
                                scrollTop: $('.popup-gallery').offset().top // прокручиваем страницу к требуемому элементу
                            }, 10 // скорость прокрутки
                        );
                    }
                }
            });

        };
        popup();
        //Раскрытие дополнительного текста по клику
        function slideOnClick(e) {
            $('.readOn').on('click', function (e) {
                $('#block').slideToggle(function () {
                    console.log($(e.target).is(':visible'));
                    // $(e.target).text($(this).is(':visible') ? 'Меньше' : 'Подробнее');
                    if ($(this).is(':visible')) {
                        $('.readOn_text').html('Меньше');
                        $('.readOn .far').removeClass('fa-arrow-alt-circle-down');
                        $('.readOn .far').addClass('fa-arrow-alt-circle-up');
                    } else {
                        $('.readOn_text').html('Подробнее');
                        $('.readOn .far').addClass('fa-arrow-alt-circle-down');
                        $('.readOn .far').removeClass('fa-arrow-alt-circle-up');
                    }
                    ;
                });
            });
        };
        slideOnClick();

        //вызов слайдеров слик
        function useSlider() {
            $('.single-slider').slick({
                prevArrow: '<i class="fas fa-chevron-left"></i>',
                nextArrow: '<i class="fas fa-chevron-right"></i>'
            });
        };
        // useSlider();

        // вызов бегущей строки
        function useMarquee() {
            $('.str1').liMarquee({
                scrollamount: 20,
                hoverstop: false
            });
            $('.str2').liMarquee({
                scrollamount: 40,
                hoverstop: false
            });
            $('.str3').liMarquee({
                scrollamount: 30,
                hoverstop: false
            });
        };
        // useMarquee();

        //Открытие бургер меню
        function mapsMenu() {
            // $(document).on('click', '.map__item', function (e) {
            //     $(this).closest('.map__cityList').find('.map__city').removeClass('map__city_active');
            //     $('.mapBlock').find('.map__mapBox').css({"display": "none"});
            //     $(this).find('.map__city').addClass('map__city_active');
            //     var city, boofer;
            //     city = $(this).attr('data-city');
            //     boofer = '.city_' + city;
            //     $(boofer).css({"display": "block"});
            // })
            /*$(document).on('click', '.closein', function (e) {
                var
                $('.menu__desc').hide();
                $('.navbar-collapse').show('slide', {direction: 'right'}, 1000);
                $(this).addClass('openin');
                $(this).removeClass('closein');
            });
            $(document).on('click', '.openin', function (e) {
                $('.navbar-collapse').hide('slide', {direction: 'right'}, 500, function (e) {
                    $('.menu__desc').show();
                });

                $(this).removeClass('openin');
                $(this).addClass('closein');
            })*/
        };
        // mapsMenu();

        // Работа магнитного меню
        function useMenu() {
            var offsetM;
            if (screen.width <= '600'){
                offsetM = -120;
            }else {
                offsetM = 250;
            }
            //console.info(offsetM);
            // Cache selectors
            var lastId,
                topMenu = $('.navbar-collapse'),
                topMenuHeight = topMenu.outerHeight() + offsetM,

                // All list items
                menuItems = topMenu.find("a"),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function () {
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        $(this).closest('.text-right').find('.burgerm').slideToggle();
                        return item;
                    }
                });
            //вызов функции скрытия бутстрап меню по клику на пункт меню.
            console.info(topMenuHeight);
            if (screen.width <= '600') {

                $('.navbar-collapse').on('click', 'a', function (e) {
                    $(e.delegateTarget).collapse('toggle');
                });
            }

            // Bind click handler to menu items
            // so we can get a fancy scroll animation
            menuItems.click(function (e) {

                var href = $(this).attr("href"),
                    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 120;
                $('html, body').stop().animate({
                    scrollTop: offsetTop
                }, 300);
                e.preventDefault();
            });

            // Bind to scroll
            $(window).scroll(function () {
                // Get container scroll position
                var fromTop = $(this).scrollTop() + topMenuHeight;

                // Get id of current scroll item
                var cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                // Get the id of the current element
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";

                if (lastId !== id) {
                    lastId = id;
                    // Set/remove active class
                    menuItems
                        .parent().removeClass("active_item")
                        .end().filter("[href='#" + id + "']").parent().addClass("active_item");
                }
            });
        };
        useMenu();






        // formHandler
        function getUrlVars() {
            var vars = {};
            var vals = '';
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vals = vals + key + '=' + value + ' | '
            });
            return vals;
        }

        //Отправка данных на сервер для почты
        function submit() {
            $('.form').submit(function (e) {
                e.preventDefault();
                console.log($(this).serialize());
                // var phoneField = $('.msg_form').find('.form__phone').val();
                // var nameField = $('.msg_form').find('.form__name').val();
                // var emailField = $('.msg_form').find('.form__email').val();
                // var cityField = $('.msg_form').find('.form__city').val();
                // var daseField = $('.msg_form').find('.radio:checked').next().html();
                // var $form = $(this);
                // var ajaxdata = '&phone=' + phoneField + '&name=' + nameField + '&email=' + emailField + '&city=' + cityField + '&base=' + daseField;
                // console.info(phoneField);
                // console.info(nameField);
                // console.info(emailField);
                // console.info(cityField);
                // console.info(daseField);
                var ajaxdata = $(this).serialize();
                ajaxdata = ajaxdata + '&=utm' + getUrlVars(),
                    $.ajax({
                        type: "POST",
                        url: "form_handler.php",
                        data: ajaxdata,
                        success: function ($output) {
                            var popupsuccess = $('.popupsuccess').html();
                            $('.form').html(popupsuccess);
                            // $('.form').html($output);
                            yaCounter54396979.reachGoal('order');
                            console.log('отправлено');
                        },
                        error: function (error) {
                            console.log(error);
                        }
                    });
            });
        };
        submit();

        function subFunction() {



            /*   $(document).on('click', '.closein', function (e) {
                   $('.menu__desc').hide();
                   $('.navbar-collapse').show('slide', {direction: 'right'}, 1000);
                   $(this).addClass('openin');
                   $(this).removeClass('closein');
               });
               $(document).on('click', '.openin', function (e) {
                   $('.navbar-collapse').hide('slide', {direction: 'right'}, 500, function (e) {
                       $('.menu__desc').show();
                   });

                   $(this).removeClass('openin');
                   $(this).addClass('closein');
               })*/

            /*$(document).on('click', '.navbar-toggler', function (e) {
                $('.menu__desc').toggle('slide', {direction: 'right'}, 10);
                $('.navbar-collapse').toggle('slide', {direction: 'right'}, 1000);
            });*/
        };

        // subFunction();



        //счетчик цифр
        function countersNumber() {
            function odometrStart(block, number) {
                console.log('odometrStart');
                $(block).html(number);
            };

            function useOdometrToVisible(block, number) {
                $(block).viewportChecker({
                    offset: 0,
                    /*смещение вверх от края блока*/
                    callbackFunction: function () {
                        odometrStart(block, number);
                    }
                });
                console.log('useOdometrToVisible');
            };
            useOdometrToVisible('.count__counter', 19842312);
            /*useOdometrToVisible('.about__aside__number', 147);*/
        };
        // countersNumber();

        //ленивая загрузка картинок
        function LL() {
            $("img").lazyload();
            // $("section").lazyload();
            // $(".blackBlock").lazyload();
            //$(".ll").lazyload();
        };
        LL();

        //Кнопка возврата в начало страницы
        function backToTop() {
            var el = $(".backTop");
            // console.info(el);

            $(window).scroll(function () {
                if ($(window).scrollTop() > 200) {
                    $(el).fadeIn();
                } else {
                    $(el).fadeOut();
                }
            });
            $(el).click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            })

        };
        backToTop();


        function agree() {
            $(document).on("click", ".agree-index", function () {
                var btn = $(this).closest('.form').find('button').prop("disabled");
                if (btn == true) {
                    $(this).closest('.form').find('button').prop("disabled", false);
                } else {
                    $(this).closest('.form').find('button').prop("disabled", true);
                }
            });
        };
        agree();



    });




}