const btn = document.getElementById("btn")
const heading = document.getElementById("heading")

btn.style.backgroundColor="green"
let ison = false;


btn.addEventListener("click",()=>{

    

    ison = !ison;
    if(ison){
        heading.style.backgroundColor="black";
        heading.textContent="Button clicked again";
        btn.style.backgroundColor="yellow"
        btn.textContent="Click Again"

    }else{
        btn.textContent="Click Again to Exit"
        heading.textContent = "This is Heading";
        heading.style.backgroundColor = "red";
        heading.style.color = "white";
    }

    btn
});