jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$("#register").validate({
    rules: {
        uname: {
            required: true,
            minlength: 3,
            maxlength: 16,
            pattern: /^[a-zA-Z]+$/
        },
        uemail: {
            required: true,
            email: true,
            pattern: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/
        },
        upassword: {
            required: true,
            minlength: 5,
            maxlength: 16
        }
    },

    messages: {

        uname: {
            required: "Please enter valid name",
            minlength: "Please enter at least 3 characters",
            maxlength: "Please enter less than 16 characters",
        },
        uemail: "Please enter valid email",
        upassword: {
            required: "Please enter valid password",
            minlength: "Please enter at least 5 characters",
            maxlength: "Please enter less than 16 characters",
        },
    }
});

