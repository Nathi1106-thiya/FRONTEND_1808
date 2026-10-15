// TASK-1

let nameValue=document.getElementById("title")
nameValue.textContent= "Welcome to JavaScript"
nameValue.style.color="blue"
nameValue.style.fontSize="30px"

// TASK-2

let paraName=document.getElementsByClassName("para")
paraName[0].style.color="red"
paraName[1].style.backgroundColor="yellow"
paraName[2].style.fontSize="25px"

// TASK-2

let imgName=document.querySelector("#img")
imgName.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTLuEpzjeVAd4dxj2WZu6qgNOskBokAfX0kRAfnPZcA&s=10"
imgName.style.width="200px"

// TASK-3

let link=document.getElementById("link")
link.href= "https://www.google.com/aclk?sa=L&ai=DChsSEwjB4Y-yq7mXAxXPrWYCHTWuKOkYACICCAEQABoCc20&co=1&ase=2&gclid=CjwKCAjw0LzWBhBOEiwAKQd0cBxLPYztsZk73EOn90fStxzBSqi0giMKFrYqjrqQBdgAXicF6E0N1hoCKdsQAvD_BwE&cid=CAAS0wHkaJxQJ75TlhplThBmbkDHG_41SrJMRk_EBou-F9eV2RZ0Fi5tyZyocKAODAoaFUu33rkIYj2eFVYaLvEinXT-trg9wCkd66C0cYHso2UFxtn21k5W6A3YzkLENuFIBGaFR0q29g28mpD18a9KmdG3I2I6ZpHEGD-nsX1vld9GPcliKF_K7zyGmRKMlE4blVFwHvZyeTMECTlISN6M73-TrGq_hQwygilB6IShoKPVrtkY95jbcXFJKJHRWpvwTpYciI6rJshCdK0upIv03IIfIRO9&cce=2&category=acrcp_v1_33&sig=AOD64_1KiNpbSiPtwdOvcwyogdswMQ2rGQ&q&nis=4&adurl&ved=2ahUKEwihlYmyq7mXAxVqleEIHdbgLNgQ0Qx6BAgOEAE"
link.textContent = "Visit Google";

// TASK-4

let username = document.getElementById("username");
username.value = "Arun";
username.style.backgroundColor = "lightyellow";
let email = document.querySelector(".email");
email.value = "arun@gmail.com";
let button = document.getElementById("submitBtn");
button.disabled = true;

// TASK-5

let headValue=document.querySelectorAll(".headData")
headValue[0].textContent="HTML"
headValue[0].style.color="red"
headValue[1].textContent="CSS"
headValue[1].style.color="brown"
headValue[2].textContent="JavaScript"
headValue[2].style.color="blue"
headValue[3].textContent="React"
headValue[4].textContent="Node.js"

headValue[3].style.color="purple"

headValue[4].style.color="violet"

