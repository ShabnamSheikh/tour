function ValidateForm(){
    var username= document.getElementById("username");
    var mobilenumber= document.getElementById("mobilenumber");
   
    var confirm_password= document.getElementById("confirm_password");
 removeMessage();
    var valid=true;
 if(username.value.length==0){
          username.className="wrong-input";
          username.nextElementSibling.innerHTML="Enter username";
             valid=false;
  }
  if(mobilenumber.value.length<10){
     mobilenumber.className="wrong-input";
     mobilenumber.nextElementSibling.innerHTML="Mobilenumber cannot be less than 10 digits";
        valid=false;
 }
 
 if(password.value!=confirm_password.value){
     confirm_password.className="wrong-input";
     confirm_password.nextElementSibling.innerHTML="Password donot match";
        valid=false;
 }
  
  return valid;
 
 }
 function removeMessage(){
     var errorinput=document.querySelectorAll(".wrong-input");
     [].forEach.call(errorinput,function(el){
         el.classList.remove("wrong-input");

     });
      var errorpara=document.querySelectorAll(".error");
      [].forEach.call(errorinput,function(el){
             el.innerHTML="";
      });
 }