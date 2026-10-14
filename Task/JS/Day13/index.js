//  TASK-1
 
//  let title=document.getElementById("title")
//  title.style.backgroundColor="black"
//  title.style.color="white"
//  title.style.fontSize="30px"
//  const btnNo=document.getElementById("btn")
//  btnNo.style.padding="10px";
//  btnNo.style.borderRadius="10px";
//  btnNo.addEventListener("click",()=>{
//     title.style.backgroundColor="red"
//     title.style.color="black"
//  })

//  TASK-2


let title = document.getElementById("title");

let btn = document.getElementById("toggleBtn");

let isVisible = true;

btn.addEventListener("click", () => {

if (isVisible) {

title.style.display = "none";

isVisible = false;

} else {

title.style.display = "block";

isVisible = true;

}

});


