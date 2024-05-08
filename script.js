
var nameError = document.getElementById('name-error')
var passwordError = document.getElementById('password-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your Name';
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true; 
}