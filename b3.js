let nameInput=document.getElementById("name")
let ageInput=document.getElementById("age")
let classInput=document.getElementById("class")
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
    let count=1
    tbodyElement.innerHTML=""
    students.forEach((stu, index)=>{
        tbodyElement.innerHTML+=`
        <tr>
            <td>${index+1}</td>
            <td>${stu.name}</td>
            <td>${stu.age}</td>
            <td>${stu.class}</td>
            <td></td>
        </tr>
        
        `
    })
}
renderData()
    btn.addEventListener("click",()=>{
        let newStu={
            id: Date.now(),
            name:nameInput.value.trim(),
            age: ageInput.value.trim(),
            class: classInput.value.trim()
        }
        students.push(newStu)
        saveLocal()
        renderData()
        nameInput.value=""
        ageInput.value=""
        classInput.value=""
    })