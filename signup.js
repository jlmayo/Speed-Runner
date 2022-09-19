// reference onclick for register for the function 
// use the user input for the value const/var var.value 
// local the storage the input 
// make an object that bundles the user input and JSON.stringify() 
// save it to local 
// document the fname from the imput below register "... + fname + ...".
// make speedrunner button 
// when they click the button it clears the local storage input 
// then redirects 
const inpEmail = document.getElementById('email');
const inpFirstName = document.getElementById('fname');
const inpLastName = document.getElementById('lname');
    
const registerButton = document.getElementById('rgstr_btn');
const output = document.getElementById('emailSuccess');
   
registerButton.onclick = function() {
    const email = inpEmail.value;
    const name = inpFirstName.value;

    console.log(email);
    console.log(name);

    if(name && email) {
        localStorage.setItem(email, name);
        output.innerHTML += `Thank you for signing up to our newsletter ${name} !!`
    }
}

const goHome = document.getElementById('homeButton')

goHome.onclick = function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign('index.html');
}


