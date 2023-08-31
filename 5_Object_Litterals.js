/*
// -------------------1st meythod object litterals pass As aobject value declare------
let name = "Muhammad Irfan";
let course = "javascript";

let obj = {
    // property Name
    name,
    course,
}
console.log(obj)
console.log(typeof obj)
*/
/*

// ---------------2nd Method -----------------
let n = "name";
let  obj = {
    [n] : "Irfan Ramzan",
    course : "javascript",
    
}

console.log(obj)  // object declare
console.log(obj.name) // argument declare
*/

/*
// --------------3rd Method {student = [n + "name"]} -----------------
        //  proprty name assign
let n = "student";
let  obj = {
// as aproperty name assign
    [n + "_name"] : "Irfan Ramzan",
    course : "javascript",
    
}

console.log(obj)  // object declare
// console.log(obj.name) // argument declare

*/

/*

// ----------- 4th Method object <== >with function declare Method -----------
let n = "student";
let  obj = {
// as aproperty name assign
    [n + "_name"] : "Irfan Ramzan",
    course : "javascript",
   details : function(){
       return `This is Name "${this.student_name}" course name "${this.course}"`
   }    
}

console.log(obj.details())  // object declare with function

*/

// ----------- 5th Method object with function declare Method with ES6 version declare function Method -----------
let n = "student";
let  obj = {
// as aproperty name assign
    [n + "_name"] : "Irfan Ramzan",
    course : "javascript",
   details() {
       return `This is Name "${this.student_name}" course name "${this.course}"`
   }    
}

console.log(obj['details']())  // object declare with function with ES6th 
// console.log(obj.name) // argument declare
