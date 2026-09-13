const students = [
    {name:"Gowtham" , age:20 , city:"Chennai"},
    {name:"Victor" , age:22 , city:"Madurai"},
    {name:"Author" , age:36 , city:"Valentine"}
];

const table = document.getElementById("studentTable");

for (let i=0; i<=students.length; i++){
    table.innerHTML += `
    <tr>
        <td>${students[i].name}</td>
        <td>${students[i].age}</td>
        <td>${students[i].city}</td>
    </tr>`;
}