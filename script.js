// JavaScript Document
function signin(){
    var Full_name = document.getElementById('Full_name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
     var mytest= new RegExp();
       mytest= /^[a-z]+ +[a-z]/i;
        if(mytest.test(Full_name) == false){
           alert('ادخل اسمك بطريقة صحيحه');
            }else{
            mytest= /[^0-9]/;
         if(mytest.test(phone) == true || phone == ''){
            alert('ادخل رقم تلفونك بطريقة صحيحه');
            }else{
            mytest=/[a-z0-9_\-\.]+@+[a-z0-9_\-\.]+\.+([a-z0-9_\-\.])/i;
        if(mytest.test(email) == false){ 
            alert('ادخل ايميلك بصورة صحيحه');
         }else{
            document.getElementById('result').innerHTML= 'welcome' +  Full_name;
         }   
      }
   }    
}   