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

/*
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
console.log(obj);
console.log(obj['details']())  // object declare with function with ES6th version 
// console.log(obj.name) // argument declare
*/

/*
// ----------- 6th Method object with function declare Method with ES6 version <==(obj['details shows']())==> function Method -----------
let n = "student";
let  obj = {
// as aproperty name assign
    [n + "_name"] : "Irfan Ramzan",
    course : "javascript",
  'details shows'() {
       return `This is Name "${this.student_name}" course name "${this.course}"`
   }    
}
console.log(obj);
                // function name
console.log(obj['details shows']())  // object declare with function
*/

/*
// ------------------8th Method Function delare Method --------
//   let fullname = fname + " " +lname;

let fname = "Muhammad";
let lname = "irfan";
let course = "Js";

function students(fname,lname,course){
    // ----------2nd Method declare
    let fullname = fname + " " +lname;
    return {fullname, course};
}
// object declaare in function
console.log(students(fname, lname, course));
console.log(typeof students(fname, lname, course));
*/

/*

// ------------------9th Method Function delare Method --------
// let s = students(fname, lname, course);
// console.log(s.fullname, s.course);

let fname = "Muhammad";
let lname = "irfan";
let course = "Js";

function students(fname,lname,course){
    // ----------2nd Method declare
    let fullname = fname + " " +lname;
    return {fullname, course};
}
// -------------property name delare
let s = students(fname, lname, course);
console.log(s.fullname, s.course);
// console.log(typeof students(name, course));
*/