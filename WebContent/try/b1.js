$(function () {
    3                 var fname;
    4             var new_dialog = function (type, row) {
        5
        6                 var dlg = $("#dialog-form").clone();
        7
        8                 fname = dlg.find(("#first-name")),
            9
        10
        11
        12             email = dlg.find(("#email")),
            13
        14             phone = dlg.find(("#phone")),
            15
        16             company=dlg.find(("#company"));
        17             ;
        18
        19                 type = type;
        20
        21                 var config = {
            22
                23                     autoOpen: true,
            24
                25                     height: 300,
            26
                27                     width: 350,
            28
                29                     modal: true,
            30
                31                     buttons: {
                32
                    33                         "ADD": save_data,
                34
                    35                         "Cancel": function () {
                    36
                    37                             dlg.dialog("close");
                    38
                    39                         }
                40
                    41                     },
            42
                43                     close: function () {
                44
                45                         dlg.remove();
                46
                47                     }
            48
                49                 };
        50
        51                 if (type === 'Edit') {
            52
            53                     config.title = "Edit User";
            54
            55                     get_data();
            56
            57                     delete (config.buttons['ADD']);
            58
            59                     config.buttons['Update'] = function () {
                60
                61                         row.remove();
                62
                63                         save_data();
                64
                65                     };
            66
            67                 }
        68
        69                 dlg.dialog(config);
        70
        71                 function get_data() {
            72                         var _fname=$(row.children().get(0)).text();
            73                     var _email = $(row.children().get(1)).text(),
                74
            75                 _phone = $(row.children().get(2)).text(),
                76                 _company=$(row.children().get(3)).text();
            77
            78                     email.val(_email);
            79
            80                     phone.val(_phone);
            81                  fname.val(_fname);
            82                  company.val(_company);
            83
            84                 }
        85
        86                 function save_data() {
            87                         if(fname.val()==null||fname.val()==""||email.val()==null||email.val()==""
                88                            ||phone.val()==null||phone.val()==""||company.val()==null||company.val()=="")
            89                                 {
                90                                 alert("All fields are necessary");
                91                                 }
            92                         else
            93                                 {
                94
                95                     $("#users tbody").append("<tr>" + "<td>" +fname.val()+ "</td>" + "<td>" + email.val() + "</td>" + "<td>" + phone.val() + "</td>"+"<td>" +company.val()+"</td>"+ "<td><a href='' class='edit'>Edit</a></td>" + "<td><span class='delete'><a href=''>Delete</a></span></td>" + "</tr>");
                96
                97                     dlg.dialog("close");
                98                                 }
            99                 }
        100
        101             };
    102
    103             $(document).on('click', 'span.delete', function () {
        104
        105                 $(this).closest('tr').find('td').fadeOut(1000,
            106
        107         function () {
            108
            109             // alert($(this).text());
            110
            111             $(this).parents('tr:first').remove();
            112
            113         });
        114
        115                 return false;
        116
        117             });
    118
    119             $(document).on('click', 'td a.edit', function () {
        120
        121                 new_dialog('Edit', $(this).parents('tr'));
        122
        123                 return false;
        124
        125             });
    126
    127             $("#create-user").button().click(new_dialog);
    128
    129         });