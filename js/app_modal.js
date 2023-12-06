$('.modal-price-btn').click(function () {
    $('#modal_price').modal('show');
    var mp_city_id = getCookie("city_id");
    if (mp_city_id == 98) {
        var mpcity = "Дубна";
    }
    else if (mp_city_id == 96) {
        var mpcity = "Зеленоград";
    }
    else if (mp_city_id == 97) {
        var mpcity = "Тверь";
    }
    else if (mp_city_id == 99) {
        var mpcity = "Клин";
    }
    $('#mp_city').val(mpcity);

    var element_title = $(this).parents('.program_element').find("h4").text();
    $('#mp_services').val(element_title);
    return false;
});