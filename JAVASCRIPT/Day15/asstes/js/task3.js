const btn = document.getElementById("show");
const text = document.getElementById("info");

btn.addEventListener("click", ()=>{

    text.classList.toggle("show");
    
    if(text.classList.contains("show")){
        btn.textContent="Hide Deatils";
    } else {
        btn.textContent="Show Deatils"
    }
});