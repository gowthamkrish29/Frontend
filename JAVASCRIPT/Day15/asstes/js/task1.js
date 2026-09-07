const button = document.getElementById("btn");
const para = document.getElementById("para");


button.addEventListener("click", () => {
    para.classList.add("show");

    if(para.style.display === "none"){

        para.style.display="block";
        button.textContent="Hide";
    } else {
        para.style.display="none";
        button.textContent="Show";
    }
 
});