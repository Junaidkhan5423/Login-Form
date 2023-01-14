


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) =>{
   e.preventDefault();
    chechInput();
});

function chechInput(){
 const usernameValue = username.value.trim();
 const emailValue =   email.value.trim();
 const passwordValue =   password.value.trim();
 const password2Value =   password2.value.trim();

 if(usernameValue === '')
 {
    setErrorFor(username,'username can not be blank');
 }
 else
 {
    setSuccessFor(username);
 }

 if(emailValue=== ""){
    setErrorFor(username,'email can not be blank');
 }
 else
 {
    setSuccessFor(email);
 }
 if(passwordValue==="")
 {
    setErrorFor(password,'password can not be blank');
 }
 else
 {
    setSuccessFor(password);
 }
 if(password2Value==="")
 {
    setErrorFor(password2,'confirm password can not be blank');
 }
 else if(passwordValue !== password2Value)
 {
    setErrorFor(password2,'password does not match');
 }
 else
 {
    setSuccessFor(password2);
 }
}

function setErrorFor(input,message){
    var formControl =input.parentElement;
   var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className ='form-control error';
}

function setSuccessFor(input){
    const formControl =input.parentElement;
    formControl.className = 'form-control success';
}