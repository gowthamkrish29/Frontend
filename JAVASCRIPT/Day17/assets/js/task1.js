const name = document.getElementById("userName");
const age = document.getElementById("userAge");
const city = document.getElementById("userCity");
const button = document.getElementById("btn");
const output = document.getElementById("output");


button.addEventListener("click", ()=>{

    const result = name.value;
    const result1 = age.value;
    const result2 = city.value;

    output.textContent += result;
    output.textContent += result1;
    output.textContent += result2;

});