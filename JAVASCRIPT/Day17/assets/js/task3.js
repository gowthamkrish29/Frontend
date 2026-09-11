const name = document.getElementById("userName");
const age = document.getElementById("userAge");
const city = document.getElementById("userCity");
const button = document.getElementById("submit")
const output = document.getElementById("output");

const students = [];


button.addEventListener("click", ()=>{

    const studentName = name.value;
    const studentAge = age.value;
    const studentCity = city.value;


    const student = {
        name : studentName,
        age : studentAge,
        city : studentCity
    };

    students.push(student);

    output.innerHTML = "";

    students.forEach((student)=>{
        const div = document.createElement("div");

        div.innerHTML = `
        <h2>StudenT Details</h2>
        <p>Name : ${student.name}</p> <p>Age : ${student.age}</p><p>City : ${student.city}</p>`;

        output.appendChild(div);
    });

    name.value = "";
    age.value = "";
    city.value = "";

})

