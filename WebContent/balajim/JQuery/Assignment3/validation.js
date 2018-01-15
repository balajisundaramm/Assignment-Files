$(function () {
    $("#reg").validate({

        rules: {

            name: {
                required: true,
                minlength: 3,
                maxlength: 16,
            },

            email: {
                required: true,
                maxlength: 60,
            },

            password: {
                required: true,
                minlength: 5,
                maxlength: 16,
            },

        },

        message: {

            name: {
                required: "Name is mandatory",
                minlength: "Name should be minimum 3 characters.",
                maxlength: "Name should be maximum 16 characters"
            },

            email: {
                required: "Email is mandatory",
                maxlength: "your email can have atmost 60 characters"
            },

            password: {
                required: "Please enter your password",
                minlength: "your password should have at least 5 characters",
                maxlength: "your password can have atmost 16 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
