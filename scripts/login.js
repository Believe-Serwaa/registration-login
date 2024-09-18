const loginForm = document.querySelector('#login');
console.log(loginForm);

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(loginForm); 
    const messageH1= document.querySelector('#message');
    messageH1.textContent = 'Login successfully';
    
})

// Write fullName function
function fullName(firstName, lastName){
   // return firstName + lastName;
   return `${firstName} ${lastName}`;
}

const myName = fullName('Believe', 'Kwamitse');
console.log(myName);

