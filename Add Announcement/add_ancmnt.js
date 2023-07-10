// let d1 = document.getElementById('eventstartdate').value;
// let d2 = document.getElementById('eventenddate').value;

let date1 = new Date(d1);
let date2 = new Date(d2);

console.log(d1);

const days = (d1, d2) =>{
    let diff = date2.getDay() - date1.getDay();
    return diff;
}