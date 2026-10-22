
let ray=[]
let table=document.getElementById("tabledata")
const form=document.getElementById("employee")
form.addEventListener("submit",(e)=>{
    const empname=document.getElementById("name")
    const empage=document.getElementById("age")
    const empemail=document.getElementById("email")
    const empnumber=document.getElementById("num")
// input value
    const ename=empname.value.trim()
    const eage=empage.value.trim()
    const email=empemail.value.trim()
    const enumb=empnumber.value.trim()

    // validation

    if (ename===""||eage===""||email===""||enumb===""){
        alert("Please Enter All Details")
        return
    }

    let obj={
        id: Date.now(),ename,eage,email,enumb
    }

ray.push(obj)

let data ="";
    ray.forEach((e, i) => {
        data += `
            <tr>
                <td>${i + 1}</td>
                <td>${e.ename}</td>
                <td>${e.eage}</td>
                <td>${e.email}</td>
                <td>${e.enumb}</td>
            </tr>
        `;
});

table.innerHTML=data

})