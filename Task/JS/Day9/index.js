// TASK-1

// global scope-var,let,const-run in inside function and outside function also
let company = "ABC Technologies";
// function scope-var that run on inside function and anywhare but outside fuctin they cannot access
// block scope-let,const that works on inside function{}this place only access the output otherwise not work,but var only call to be fuction
function showEmployee(){
    var employee = "Arun";
    console.log(company);
    console.log(employee); 
}
showEmployee()

// TASK-2

if (true) {
    let age =25;
    var city ="Chennai";
    console.log(age);
    console.log(city);
}

// TASK-3
// its shows the undefined because 
console.log(num);

var num="12345"

// console.log(number);

// let number=92329

// console.log(numbers);

// const numbers=23242

greeting()
function greeting(){
    console.log("Welcome to JavaScript");
}













