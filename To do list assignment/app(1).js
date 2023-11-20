let name=document.getElementById("name")
let age=document.getElementById("age")
let male=document.getElementById("male")
let female=document.getElementById("female")
let course=document.getElementById("course")
let email=document.getElementById("email")
let table=document.getElementById("table")
let btn=document.getElementById("add")
let gender

male.addEventListener('click', () => {
    gender=male.value
})
female.addEventListener('click', () => {
    gender=female.value
})

var main =0

 btn.addEventListener('click', () => {
    let result= `
    <tr onclick="delt(this)" id=${main}>
    <td class="js">${name.value}</td>
    <td class="js">${age.value}</td>
    <td class="js">${gender}</td>
    <td class="js">${course.value}</td>
    <td class="js">${email.value}</td>
    <td class="js"> <button class="delete" >DELETE </button> </td>
    </tr>
    `

    table.innerHTML += result
 
    main++
 });
 function delt(event){
   let removedata = document.getElementById(event.id)
   
   removedata.remove()
}

//  var objdata = [{
//     namevalue:name.value,
//     age:age.value,
//     gender:gender.value,
//     course:course.value,
//     email:email.value,
// }]

// delt(objdata)