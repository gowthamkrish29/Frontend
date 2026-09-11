const name = document.getElementById("userName");
const mobile = document.getElementById("userMobile");
const course = document.getElementById("userCourse");
const click = document.getElementById("click");
const ouput = document.getElementById("output");

click.addEventListener("click", ()=>{

    const student = {
        name : name.value,
        mobile : mobile.value,
        course : course.value
    };

    console.log(student);


    ouput.innerHTML = `
    <h2>Student Details </h2>
    <p>Name: ${student.name}</p> 
    <p>Mobile: ${student.mobile}</p>
    <p>Course: ${student.course}</p>
    `

});