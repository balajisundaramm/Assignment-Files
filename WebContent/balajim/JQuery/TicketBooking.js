$(document).ready(function () {
    $("#ticket").on('submit', function (e) {
        e.preventDefault();
        $('.error').hide();
        var way=$('#way').val();
        var from=$('#from').val();
        var to=$('#to').val();
        var onward=$('#onward').val();
        var returnDate=$('#return').val();
        var seat=$('#seat').val();
        var error="";
        var valid=true;
        if(!way){
            valid=false;
            error+="Name is mandatory";
        }
        if(!from){
            valid=false;
            error+="From destination is mandatory";
        }
        if(!to){
            valid=false;
            error+="To destination is mandatory";
        }
        if(!onward){
            valid=false;
            error+="Onward date is mandatory";
        }
        if(!returnDate){
            valid=false;
            error+="Return date is mandatory";
        }
        if(!seat){
            valid=false;
            error+="Number of seats is mandatory";
        }
        if(valid && (onward>returnDate)){
            valid=false;
            error+="Return date should be after onward date";
        }
        if(valid){
            this.submit();
        }else {
            $('.error').html(error)
            $('.error').show()
        }
    })
})