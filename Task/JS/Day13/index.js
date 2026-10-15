//  TASK-1
 
 let title=document.getElementById("title")
 const btnNo=document.getElementById("btn")
 btnNo.addEventListener("click",()=>{
    title.style.fontSize="30px"
    title.style.color="red"
 })

//  TASK-2

const btnData=document.getElementById("btn1")
const btn=document.getElementById("btn2")
btnData.addEventListener("click",()=>{
    btnData.style.backgroundColor="blue"
    btnData.style.color="white"
})

btn.addEventListener("click",()=>{
    btn.style.backgroundColor="yellow";
})

// TASK-3

const paragraph=document.getElementById("para")
const btnNow=document.getElementById("btn3")
const btnNum=document.getElementById("btn4")

btnNow.addEventListener("click",() =>{
    paragraph.style.display = "none";
})

btnNum.addEventListener("click",() =>{
    paragraph.style.display = "block";
})

// TASK-4

// const headElement=document.getElementById("head")
// const btnDates=document.getElementById("bts")
// let isVisible = true;
// btnDates.addEventListener("click", () => {

// if (isVisible) {
// headElement.style.display = "none";
// isVisible = false;

// }

//  else {
// headElement.style.display = "block";

// isVisible = true;

// }

// });













// let title = document.getElementById("title");

// let btn = document.getElementById("toggleBtn");

// let isVisible = true;

// btn.addEventListener("click", () => {

// if (isVisible) {

// title.style.display = "none";

// isVisible = false;

// } else {

// title.style.display = "block";

// isVisible = true;

// }

// });


