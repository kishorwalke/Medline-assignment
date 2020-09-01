(function () {
    'use strict';

    $(document).ready(function () {

        let form = $('.user-form');
       
        $('.alert-danger').hide();

        $(form).submit(function (e) {
            e.preventDefault();
            if (this.checkValidity() == false) {
                $('.alert-danger').show();
                $(this).addClass('was-validated');
                e.stopPropagation();
            } else {
                $('.alert-danger').hide();
                let data = "<ul class='user-data'><li><strong>User Name</strong>: " + $('#inputFirstName').val() +" " +$('#inputLastName').val()  + "</li>" + "<li><strong>Phone</strong>: " + $('#inputPhone').val() + "</li>" + "<li><strong>Email</strong>: " + $('#inputEmail').val() + "</li></ul>";
                $('#userInfo .modal-body').append(data);
                $('#userInfo').modal("show");
            }


        });

        // On every :input focusout validate if empty
        $(':input').blur(function () {
            let fieldType = this.type;

            switch (fieldType) {
                case 'text':
                case 'password':
                    validateText($(this));
                    break;
                case 'email':
                    validateEmail($(this));
                    break;
                case 'checkbox':
                    validateCheckBox($(this));
                    break;
                case 'select-one':
                    validateSelectOne($(this));
                    break;
                case 'select-multiple':
                    validateSelectMultiple($(this));
                    break;
                default:
                    break;
            }
        });


        // On every :input focusin remove existing validation messages if any
        $(':input').click(function () {

            $(this).removeClass('is-valid is-invalid');

        });

        // On every :input focusin remove existing validation messages if any
        $(':input').keydown(function () {

            $(this).removeClass('is-valid is-invalid');

        });

        // Reset form and remove validation messages
        $(':reset').click(function () {
            $(':input, :checked').removeClass('is-valid is-invalid');
            $(form).removeClass('was-validated');
        });

    });

    // Validate Text and password
    function validateText(thisObj) {
        if (thisObj.hasAttribute('required')) {
            let fieldValue = thisObj.val();
            if (fieldValue.length > 1) {
                $(thisObj).addClass('is-valid');
            } else {
                $(thisObj).addClass('is-invalid');
            }
        }

    }

    // Validate Email
    function validateEmail(thisObj) {
        let fieldValue = thisObj.val();
        let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        if (pattern.test(fieldValue)) {
            $(thisObj).addClass('is-valid');
        } else {
            $(thisObj).addClass('is-invalid');
        }
    }




})();
