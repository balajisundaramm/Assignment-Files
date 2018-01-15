function manageTable() {
    var employees = JSON.parse(localStorage.getItem("employees"));
    console.log(employees)
    if (employees) {
        for (var emp in employees) {
            $("#empTable").find('tbody')
                .append($('<tr id="tr_'+emp+'">')
                    .append($('<td>')
                        .text(employees[emp].givenName))
                    .append($('<td>')
                        .text(employees[emp].givenEmail))
                    .append($('<td>')
                        .text(employees[emp].givenPhNumber))
                    .append($('<td>')
                        .text(employees[emp].givenCompany))
                    .append('<td>' +
                        '<button type="button" class="edit" id="' + emp + '" ' +
                        'data-toggle="modal"data-target="#EditModal">' +
                        '<span class="glyphicon glyphicon-edit"></span></button> </td> ' +
                        '<td><a id="' + emp + '" href="#" class="delete"><span class="glyphicon glyphicon-trash"></span></a></td>'
                    )
                );
        }
    }
}
$(document).ready(function () {
    manageTable();
    $("#addButton").on('click', function () {
        var employee = {};
        $.each($('#myForm').serializeArray(), function (_, kv) {
            employee[kv.name] = kv.value;
        });
        var employees = JSON.parse(localStorage.getItem("employees"));
        if (!employees) {
            employees = [];
        }
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
        var index = employees.length - 1
        $("#empTable tr:last").parent()
            .append($('<tr id="tr_'+index+'">')
                .append($('<td>')
                    .text(employee.givenName))
                .append($('<td>')
                    .text(employee.givenEmail))
                .append($('<td>')
                    .text(employee.givenPhNumber))
                .append($('<td>')
                    .text(employee.givenCompany))
                .append('<td>' +
                    '<button type="button" class="edit" id="' + index + '"   ' +
                    'data-toggle="modal"data-target="#EditModal">' +
                    '<span class="glyphicon glyphicon-edit"></span></button> </td> ' +
                    '<td><a id="' + index + '" class="delete" href="#"><span class="glyphicon glyphicon-trash"></span></a></td>'
                )
            );
        $('.close').click();
    });
    $('body').on('click', '.delete', function () {
        var employees = JSON.parse(localStorage.getItem("employees"));
        var index = Number(this.id);
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        $('.close').click();
        $(this).parent().parent().remove();
    })
    $('body').on('click', '.edit' , function () {
        var employees = JSON.parse(localStorage.getItem("employees"));
        var index = this.id;
        var employee=employees[index];
        $('#editName').val(employee.givenName);
        $('#editEmail').val(employee.givenEmail);
        $('#editPhNumber').val(employee.givenPhNumber);
        $('#editCompany').val(employee.givenCompany);
        $('#index').val(index)
    });
    $('#updateButton').on('click', function () {
        var employee = {};
        var index=$('#index').val();
        $.each($('#editForm').serializeArray(), function (_, kv) {
            employee[kv.name] = kv.value;
        });
        var employees = JSON.parse(localStorage.getItem("employees"));
        employees[index]=employee;
        localStorage.setItem("employees", JSON.stringify(employees));
        $("#tr_"+index).html('')
            .append($('<td>')
                .text(employee.editName))
            .append($('<td>')
                .text(employee.editEmail))
            .append($('<td>')
                .text(employee.editPhNumber))
            .append($('<td>')
                .text(employee.editCompany))
            .append('<td>' +
                '<button type="button" class="edit" id="' + index + '"   ' +
                'data-toggle="modal"data-target="#EditModal">' +
                '<span class="glyphicon glyphicon-edit"></span></button> </td> ' +
                '<td><a id="' + index + '" class="delete" href="#"><span class="glyphicon glyphicon-trash"></span></a></td>'
            )
        $('.close').click();
    })
});
