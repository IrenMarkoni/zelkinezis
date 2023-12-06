(() => {
    'use strict'

    const validatePhone = (node) => {
        if (!node.inputmask.isComplete()) {
            node.classList.remove('is-valid')
            node.classList.add('is-invalid')
            return false
        }
        else {
            console.log(node.inputmask.isComplete())
            node.classList.remove('is-invalid')
            node.classList.add('is-valid')
            return true
        }
    }

    const validateEmail = (node) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regex.test(node.value)) {
            node.classList.remove('is-valid')
            node.classList.add('is-invalid')
            return false
        }
        else {
            node.classList.remove('is-invalid')
            node.classList.add('is-valid')
            return true
        }
    }

    const validateText = (node) => {
        if (node.value.length === 0) {
            node.classList.remove('is-valid')
            node.classList.add('is-invalid')
            return false
        }
        else {
            node.classList.remove('is-invalid')
            node.classList.add('is-valid')
            return true
        }
    }

    const validateSelect = (node) => {
        const select2 = node.nextElementSibling

        if (node.value.length === 0) {
            select2.classList.remove('is-valid')
            select2.classList.add('is-invalid')
            return false
        }
        else {
            select2.classList.remove('is-invalid')
            select2.classList.add('is-valid')
            return true
        }
    }

    const validateForm = (form) => {
        let validate = true

        form.querySelectorAll('.js-phone:required').forEach(el => {
            if (!validatePhone(el)) validate = false
        })

        form.querySelectorAll('input[type="email"]:required').forEach(el => {
            if (!validateEmail(el)) validate = false
        })

        form.querySelectorAll('input[type="text"]:not(.js-phone):required, textarea:required').forEach(node => {
            if (!validateText(node)) validate = false
        })

        form.querySelectorAll('.js-select:required').forEach(el => {
            if (!validateSelect(el)) validate = false
        })

        return validate
    }

    const forms = document.querySelectorAll('.js-valid-form')
    const inputsForm = document.querySelectorAll('.js-valid-form input[type="text"]:not(.js-phone):required, .js-valid-form textarea:required')
    const inputsPhone = document.querySelectorAll('.js-valid-form .js-phone:required')
    const inputsEmail = document.querySelectorAll('.js-valid-form input[type="email"]:required')
    const inputsSelect = document.querySelectorAll('.js-valid-form .js-select:required')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            const validate = validateForm(form)
            if (!validate) {
                event.preventDefault()
                event.stopPropagation()
            }

            if (validate) {
				
				var data = {};
				form.querySelectorAll('input, textarea, select').forEach(node => {
					data[node.name] = node.value;
        })
		
		$('button').prop("disabled", true);

$.ajax({
		type: "POST",
		url: "/tologin/ajax/aj_cmsForm.php",
		data: data,
		success: function(result) {
			if (result.indexOf('ok')!=-1)
			{
				$('form').trigger('reset');
				$('input, textarea, select').removeClass('is-invalid');
				$('input, textarea, select').removeClass('is-valid');
				
				$.fancybox.close();
                $.fancybox.open({
                    src: '#msg-success',
                    type: 'inline',
                    opts: {}
                });
			}
			else
			{
				$.fancybox.close();
                $.fancybox.open({
                    src: '#msg-error',
                    type: 'inline',
                    opts: {}
                });
			}
			
			$('button').removeAttr("disabled");
		},
	});
	
            }
        }, false)
    })

    Array.from(inputsSelect).forEach(el => {
        el.onchange = function () {
            validateSelect(el)
        }
    })

    Array.from(inputsForm).forEach(el => {
        el.onkeyup = function () {
            validateText(el)
        }
        el.onblur = function () {
            validateText(el)
            // el.parentElement.classList.add('was-validated')
        }
    })

    Array.from(inputsPhone).forEach(input => {
        input.onkeyup = function () {
            validatePhone(input)
        }
        input.onblur = function () {
            validatePhone(input)
        }
    })

    Array.from(inputsEmail).forEach(input => {
        input.onkeyup = function () {
            validateEmail(input)
        }
        input.onblur = function () {
            validateEmail(input)
        }
    })
})()