let a=[1,2,3,4,5]
let result=a.slice(1,4)
console.log(result);


let a =[{
    name : "Nathiya",
    course : "JS",
    age : 50},

    {name : "Bala",
    course : "JS",
    age : 30},


    {name : "Nathiya Bro",
    course : "JS",
    age : 20}
];
let result=a.every((a) => {
return a.age >= 50;
})
console.log(result);


const titleNO = document.getElementById("title")


const btn1 = document.getElementById("btn")


Slice its dont change the original array
start → Included
end → Not included

let name=["Nathi","thiya","Nathiya"]
let result=name.slice(1,3)
console.log(result);

// Splice its change the original array
// because the variable reassign in next step
// Syntax:array.splice(start, deleteCount, newValue);

// remove
let num=[
    10,
    20,
    30,
    40]
num.splice(1,2)
// Explanation:
// Start index = 1
// Delete count = 2
// console.log(num)//output:10,40


// let numbers = [10, 20, 30];


// numbers.forEach((number,index) => {

//     console.log(index,number);

// });
// method-1
let numbers = [1, 2, 3, 4];


let results = numbers.map((number) => {

    return number * 2;

});

// method-2

console.log(results);

let res = numbers.map(
    number => number * 2
);

// gey values for in object

let student = {

    name: "Arun",

    age: 20,

    city: "Chennai"

};


for (let key in student) {

    console.log(key,":",student[key]);

}

