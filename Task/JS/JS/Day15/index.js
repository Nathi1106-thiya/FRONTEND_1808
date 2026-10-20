
let employee = [];

let form = document.getElementById("empform");
let table = document.getElementById("dataValue");

let empName = document.getElementById("empName");
let empAge = document.getElementById("empAge");
let department = document.getElementById("department");
let salary = document.getElementById("salary");

form.addEventListener("submit", (event) => {



    event.preventDefault();
    let name = empName.value.trim();
    let age = empAge.value;
    let dept = department.value.trim();
    let empSalary = salary.value;

    if (
        name === "" ||
        age === "" ||
        dept === "" ||
        empSalary === ""
    ) {
        alert("Please fill all fields!");
        return;
    }
    if (Number(age) <= 0 || Number(empSalary) <= 0) {
        alert("Age and salary must be positive numbers!");
        return;
    }

    let obj = {
        name: name,
        age: Number(age),
        department: dept,
        salary: Number(empSalary)
    };

    employee.push(obj);
    let data ="";
    employee.forEach((e, i) => {
        data += `
            <tr>
                <td>${i + 1}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.department}</td>
                <td>${e.salary}</td>
            </tr>
        `;
    });

    table.innerHTML = data;
    form.reset();
});




