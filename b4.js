let nameInput=document.getElementById("name")
let ageInput=document.getElementById("age")
let classInput=document.getElementById("class")
let btnUpdate=document.getElementById("update")
let btnCancel=document.getElementById("cancel")
let btn=document.getElementById("submit")


let students = [  
{ id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },  
{ id: 2, name: "Trần Thị B", age: 21, class: "KTPM-11" },  
{ id: 3, name: "Lê Văn C", age: 19, class: "CNTT-12" },  
{ id: 4, name: "Phạm Thị D", age: 22, class: "MKT-10" },  
{ id: 5, name: "Hoàng Văn E", age: 20, class: "CNTT-11" }];

let tbodyElement=document.getElementById("tbody")
const getLocal=()=>{
    let data=localStorage.getItem("List student")
    if(data){
        students=JSON.parse(data)
    }
}

const saveLocal=()=>{
    localStorage.setItem("List student",JSON.stringify(students))
}
const renderData=()=>{
    getLocal()
    tbodyElement.innerHTML=""
    students.forEach((stu,index)=>{
        tbodyElement.innerHTML+=`
        <tr>
            <td>${index}</td>
            <td>${stu.name}</td>
            <td>${stu.age}</td>
            <td>${stu.class}</td>
            <td><button onclick="updateStu(${stu.id})">Sửa</button></td>
        </tr>
        
        `
    })
}
renderData()

let indexUpd
const updateStu=(id)=>{
    getLocal()
    let index=students.findIndex((stu)=>{
        return stu.id==id
    })
    indexUpd=index
    nameInput.value=students[index].name
    classInput.value=students[index].class
    ageInput.value=students[index].age
    nameInput.focus()
    btn.style.display="none"
    btnCancel.style.display="inline"
    btnUpdate.style.display="inline"
    
}

btnUpdate.addEventListener("click",()=>{
    getLocal()
    students[indexUpd].name=nameInput.value
    students[indexUpd].class=classInput.value
    students[indexUpd].age=ageInput.value
    saveLocal()
    renderData()
    nameInput.value=""
    ageInput.value=""
    classInput.value=""
    btn.style.display="inline"
    btnCancel.style.display="none"
    btnUpdate.style.display="none"
})
btnCancel.addEventListener("click",()=>{
    renderData()
    nameInput.value=""
    ageInput.value=""
    classInput.value=""
    btn.style.display="inline"
    btnCancel.style.display="none"
    btnUpdate.style.display="none"
})
