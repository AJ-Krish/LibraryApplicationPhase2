let pss="";
let eml="";
let phn="";

function emailValidate() {

    let e=document.getElementById("email");
    let err=document.getElementById("errormail");
    // alert(e.value);

    

    

    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if ( regexp.test(e.value) !=true  ) {

        // alert("valid mail id");
        // alert("invalid mail id");
        err.innerHTML="Invalid Email Id";
        err.style.color="red";
        e.style.color="red";
        return false;
       

        
    }
    else{
        err.innerHTML="";
        e.style.color="black";
        return true;
    }
}



function numberVaidate() {

    let number=document.getElementById("mno");
    let errmno=document.getElementById("errornumber");


    var mnexp1 =/^([0-9]{10,10})$/;
    var mnexp2 =/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
    var mnexp3 =/^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
    var mnexp4 =/^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
    if ( mnexp1.test(number.value) ||mnexp2.test(number.value) ||mnexp3.test(number.value)  ||mnexp4.test(number.value)) {


        errmno.innerHTML="";
        number.style.color="black"
        return true;
        
       

        
    }
    else{
        
        errmno.innerHTML="Invalid mobile number format";
        errmno.style.color="red";
        number.style.color="red";
        return false;
        
    }
    
}

function passValidate() {

    let passw=document.getElementById("password");
    // alert(passw.value);
    var pass1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (passw.value.match(pass1) ) {

        // alert(" good password"+passw.value);
        return true;

        
    }
    else{
        // alert("try new password");
        return false;
    }

     
}

function validate () {

    if (passValidate() == true ){
        pss=true;
    }
    else{
        pss=false;
        alert("password must contain 1 Uppercase,1 lowercase,1 number and 1special charecter.")

    }
    if (emailValidate() == true) {
        eml=true;
        
    }
    else{
        eml=false;
    }
    if (numberVaidate() == true  ) {

        phn=true;
        
    } else {
        phn=false; 
        
    }
    
    if (pss==true && eml==true&& phn==true) {
        // alert("Signup Successfull .....Redirecting to home page")
        return true;
        
    } else {
        return false;
        
    }

    
}


