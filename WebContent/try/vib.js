$(function () {
    var fname;
    var new_dialog = function (type, row) {

        var dlg = $("#dialog-form").clone();

        fname = dlg.find(("#first-name")),


            email = dlg.find(("#email")),

            phone = dlg.find(("#phone"));
        company = dlg.find(("#company"));


        type = type;


        var config = {

            autoOpen: true,

            height: 400,

            width: 350,

            modal: true,

            buttons: {

                "Create an account": save_data,

                "Cancel": function () {
                    document.getElementById("eerr").innerHTML = "";

                    dlg.dialog("close");

                }

            },

            close: function () {

                dlg.remove();

            }

        };
        // Editing row fields
        if (type === 'Edit') {

            config.title = "Edit User";

            get_data();

            delete (config.buttons['Create an account']);

            config.buttons['Edit account'] = function () {

                //row.remove();

                if (validate()) {
                    row.replaceWith("<tr>" + "<td>" + fname.val() + "</td>" + "<td>" + email.val() + "</td>" + "<td>" + phone.val() + "</td>" + "<td>" + company.val() + "</td>" + "<td><a href='' class='edit'><img src='images/edit.png' style='height:20px;'/></a></td>" + "<td><span class='delete'><a href=''><img src='images/delete.png' style='height:30px;'/></a></span></td>" + "</tr>");

                    dlg.dialog("close");
                }

            };

        }

        dlg.dialog(config);

        //pre populating data while edit is clicked
        function get_data() {
            var n = $(row.children().get(0)).text();
            var _email = $(row.children().get(1)).text(),

                _phone = $(row.children().get(2)).text();
            comp = $(row.children().get(3)).text();

            email.val(_email);
            fname.val(n);
            phone.val(_phone);
            company.val(comp);


        }


        // Saving data while adding or editing
        function save_data() {
            if (validate()) {
                $("#users tbody").append("<tr>" + "<td>" + fname.val() + "</td>" + "<td>" + email.val() + "</td>" + "<td>" + phone.val() + "</td>" + "<td>" + company.val() + "</td>" + "<td><a href='' class='edit'><img src='images/edit.png' style='height:20px;'/></a></td>" + "<td><span class='delete'><a href=''><img src='images/delete.png' style='height:30px;'/></a></span></td>" + "</tr>");

                dlg.dialog("close");
            }

        }


        //Validation for Adding and Editing Row
        function validate() {

            var mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var letters = /^[A-Za-z]+$/;
            var phoneno = /^\d{10}$/;
            if ((fname.val() == null || fname.val() == "")) {
                document.getElementById("eerr").innerHTML = "Input Name";
                return false;
            }
            else if (!((fname.val()).match(letters))) {
                document.getElementById("eerr").innerHTML = "Enter Valid Name";
                return false;
            }
            else if ((email.val() == null || email.val() == "")) {
                document.getElementById("eerr").innerHTML = "Input E-Mail";
                return false;
            }
            else if (!((email.val()).match(mailvalid))) {
                document.getElementById("eerr").innerHTML = "Input Valid E-Mail";
                return false;
            }
            else if ((phone.val() == null || phone.val() == "")) {
                document.getElementById("eerr").innerHTML = "Input Phone Number";
                return false;
            }
            else if (!((phone.val()).match(phoneno))) {
                document.getElementById("eerr").innerHTML = "Input Valid Phone Number";
                return false;
            }

            else if ((company.val() == null || company.val() == "")) {
                document.getElementById("eerr").innerHTML = "Input Company";
                return false;
            }
            else {
                document.getElementById("eerr").innerHTML = "";
                return true;
            }
        }

    };

    // Delete button and Edit Fadind in 1 second
    $(document).on('click', 'span.delete', function () {

        $(this).closest('tr').find('td').fadeOut(1000,

            function () {


                $(this).parents('tr:first').remove();

            });

        return false;

    });

    $(document).on('click', 'td a.edit', function () {

        new_dialog('Edit', $(this).parents('tr'));

        return false;

    });
    $("#addemp").button().click(new_dialog);

});
