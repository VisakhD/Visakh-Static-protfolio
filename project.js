
var msg , realname , email, phoneStatus ;


function namevalidation() {
 
var name = document.getElementById("inputName").value
var namestatus =document.getElementById("namestatus");
var letters = /^[a-zA-Z\s]*$/;
if (name == "") {
    namestatus.innerHTML = "Field is required"
    realname =false;
}
else if (name.match(letters)) {
    namestatus.innerHTML ="";
    realname= true;
}
else{
    namestatus.innerHTML = "use only character";
    realname= false;
}
}
function emailValid() {
    var name = document.getElementById("inputEmail4").value
    var emailSpan = document.getElementById("emailstatus");
    var letters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name == "") {
        emailSpan.innerHTML = "Filed is required"
        email= false;
    }
    else if (name.match(letters)) {
        emailSpan.innerHTML = "";
        email= true;
    }
    else {
        emailSpan.innerHTML = "invalid email";
        email= false;
    }

}
function PhoneValid() {
    var phone = document.getElementById("inputNumber").value
    var phonestatus = document.getElementById("phonestatus");
    const letters = /^\d{10,11}$/;
    if (phone == "") {
        phonestatus.innerHTML = "Filed is required"
        phoneStatus= false;
    }
    else if (phone.match(letters)) {
        phonestatus.innerHTML = "";
        phoneStatus= true;
    }
    else {
        phonestatus.innerHTML = "invalid number";
        phoneStatus=false;
    }

}
function MessageValid() {
    var name = document.getElementById("inputMessage").value
    var messageSpan = document.getElementById("messagestatus");

    if (name == "") {
        messageSpan.innerHTML = "Filed is required"
        msg= false;
    }


    else {
        messageSpan.innerHTML = "";
        msg = true;
    }

}
 

 
 $("#submit-form").submit((e)=>{
   
     e.preventDefault()
   

     if( msg ==true&& realname==true && email==true && phoneStatus==true){
     $.ajax({
         url:"https://script.google.com/macros/s/AKfycby_ZnPvUREK43swDxC6ucBxp9v1QLirqnrrv18AzgK-R6nCyyI65yya3oQ7AxgHlS3iLA/exec",
         data:$("#submit-form").serialize(),
         method:"post",
         success:function (response){
             alert("Form submitted successfully")
             window.location.reload()
             //window.location.href="https://google.com"
         },
         error:function (err){
             alert("Something Error")

         }
     })
    }else{
        alert("Error")
    }
 })
 