function Compare(){
     var da = new Date(document.myform.ondate.value);
     var db= new Date(document.myform.todate.value);
     if(da>db){
                 alert("return date cant be less then the onward date");
                 return false;
         }


     }