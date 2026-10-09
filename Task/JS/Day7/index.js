// const arr=[1,"nathiya","fs"]
// console.log(arr);
// arr[0]=10
// console.log(arr);


// const obj={name:"Nathiya",Course:"FS",Age:20,skills:["HTML","CSS","Java Script"]}
// console.log(obj);
// obj.name="Thiya"
// console.log(obj);
// console.log(obj.skills[2]);

// let arrobj=[{name:"Nathiya",Course:"FS",Age:20},{name:"Priya",Course:"FS",Age:20},{name:"Thiya",Course:"FS",Age:20}];
// console.log(arrobj);
// arrobj[0].name="hjjs"
// console.log(arrobj[0]);

// const array=["Nathiya","FS",20,2006]
// for(let a=0;a<array.length-1;a++){
//     console.log(array[a]);
// }
// console.log(array);

// TASK-1

const arr=["apple","mango","graphs","blueberry","litchee"]
console.log(arr)
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

// TASK-2

let colors=["Red", "Blue", "Green", "Yellow"]
colors[1]="Black"
console.log(colors);


// TASK-3

let name=["abi","bala","charlie","dhaya","evanjalin"]
for(let a=0;a<name.length;a++){
    console.log(name[a]);
}
// TASK-4

let marks=[80, 70, 90, 60, 85];
let total =0;
for(i=0;i<marks.length;i++){
    total = total + marks[i];
}
console.log("Total="+total);

// TASK-5

let number=[2,4,6,8,10];
for(let even=0;even<number.length;even++){
    console.log(number[even]*2);
}

// TASK-6

let obj={name:"Nathiya",age:20,course:"Full stack",city:"TRichy"}
console.log(obj.name);
console.log(obj.course);

// TASK-7

let emp={name:"arun",salary:25000,role:"developer"}
console.log(emp)
emp.salary=30000
console.log(emp);

// TASK-8

let product = {
    name:"Laptop",
    price:50000
}
console.log(product);

product.brand="Dell"
console.log(product);

// TASK-9

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};
for(let key in car){
    console.log(key+":",car[key]);
}

// TASK-10

let students = [
    {
        name: "Arun",mark: 80
    },
    {
        name: "Priya",mark: 90
    },
    {
        name: "Kumar",mark: 75
    }
];
for(let i = 0; i < students.length; i++){
    console.log(students[i].name,"-",students[i].mark);
}



























