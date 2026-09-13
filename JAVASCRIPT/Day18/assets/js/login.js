const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(event){

event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const userData = localStorage.getItem("users");

if(userData === null){

    error.textContent = "No user found. Please Register first";
    return;

}

const users = JSON.parse(userData);

const user = users.find(function(user){
    return user.email === email && user.password === password;
});

if(user){

    

    setTimeout(function(){
        window.location.href = "../../CSS/Day10/e-commerce.html";
        error.textContent = "Login Suucessfull"
        error.style.color = "green"
    }, 2000)

} else {

    error.textContent = "Invalid Email or Password";

}


});
