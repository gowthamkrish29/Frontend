const form = document.getElementById("registerForm");
const message = document.getElementById("message")


form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.some(function(user){
        return user.email === email;
    });

    if(existingUser){
        message.style.color = "red";
        message.textContent = "Email is already in use! Enter other Email."
        return;
    }

    const user = {name:name , email:email , password:password};

    users.push(user);

    localStorage.setItem("users" , JSON.stringify(users));


    message.textContent ="User Registered Successfully!"
    message.textContent ="Redirecting to Login Page..."
    message.style.color = "green";
    

    setTimeout(function () {
        window.location.href="login.html"
    }, 2000);
        
});