let students = [  
{ id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },  
{ id: 2, name: "Trần Thị B", age: 21, class: "KTPM-11" },  
{ id: 3, name: "Lê Văn C", age: 19, class: "CNTT-12" },  
{ id: 4, name: "Phạm Thị D", age: 22, class: "MKT-10" },  
{ id: 5, name: "Hoàng Văn E", age: 20, class: "CNTT-11" }
];
const getLocal=()=>{
    let data=localStorage.getItem("List student")
    if(data){
        students=JSON.parse(data)
    }
}

const saveLocal=()=>{
    localStorage.setItem("List student",JSON.stringify(students))
}

let ulElement=document.getElementsByTagName("ul")[0]
const renderData=()=>{
    getLocal()
    ulElement.innerHTML=""
    students.forEach((stu)=>{
        ulElement.innerHTML+=`
        <li>${stu.id}. ${stu.name} (${stu.age} tuổi - Lớp ${stu.class} )</li>`
    })

}
saveLocal()
renderData()