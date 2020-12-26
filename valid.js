var Name=document.forms['form']['Name'];
var Email=document.forms['form']['Email'];
var Telephone=document.forms['form']['Telephone'];

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var telephone_error = document.getElementById('telephone_error');



function validated()
{
    if(Name.value.length<2){
        Name.style.border="1px solid red";
        name_error.style.display="block";
        Name.focus();
        return false;
    }

    if(Email.value.length<6){
        Email.style.border="1px solid red";
        email_error.style.display="block";
        Email.focus();
        return false;
    }
    if(Telephone.value.length<7){
        Telephone.style.border="1px solid red";
        telephone_error.style.display="block";
        Telephone.focus();
        return false;
    }
}




