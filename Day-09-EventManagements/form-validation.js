// Problem: Users cannot submit empty or incorrect email addresses.
// Solution: Intercept the form submit event and apply validation.

const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

form.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission
    const emailValue = emailInput.value.trim();

    if(emailValue ===  ''){
        emailError.textContent = 'Email is must frequired';
    }else if(!emailValue.includes('@')){
        emailError.textContent = 'Please enter a valid email address';
    }else{
        emailError.textContent = '';
        alert(`Form submitted with email: ${emailValue}`);
    }
})