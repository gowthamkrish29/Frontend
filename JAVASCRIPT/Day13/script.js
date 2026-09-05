const head = document.getElementById("head");

head.textContent = "Welcome To Javascript"

const paragraph = document.querySelectorAll(".para");

paragraph[0].textContent = "New Para 1";
paragraph[1].textContent = "New Para 2";
paragraph[2].textContent = "New Para 3";


const heading = document.getElementById("header");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    heading.textContent="New Heading Text";

    heading.style.color="blue";  

    heading.classList.add("highlight");

    
})