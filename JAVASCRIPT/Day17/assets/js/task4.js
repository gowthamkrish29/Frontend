const empName = document.getElementById("empName");
const empDepartment = document.getElementById("empDepartment");
const empSalary = document.getElementById("empSalary");

const button = document.getElementById("empbutton");
const output = document.getElementById("output");

const employees = [];


button.addEventListener("click", () => {

    const name = empName.value;
    const dept = empDepartment.value;
    const salary = empSalary.value;


    const employee = {
        name: name,
        department: dept,
        salary: salary
    };


    employees.push(employee);


    output.innerHTML = "";


    const table = document.createElement("table");

    table.border = "1";


    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
    `;


    employees.forEach((employee) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        table.appendChild(row);

    });


    output.appendChild(table);


    empName.value = "";
    empDepartment.value = "";
    empSalary.value = "";

});

