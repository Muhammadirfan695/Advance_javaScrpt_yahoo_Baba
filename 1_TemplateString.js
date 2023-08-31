// ------------------Yahoo Baba -----------------------


// let user = "Irfan Ramzan";
// let marks = 324;

// console.log(user + " "+ marks)

//--------------- Template litteral use--------------------------

// let user = "Irfan Ramzan";
// let marks = 324;
// let hello = `Your Name is ${user}  Your Marks ${marks} `
// console.log(hello)

//---------------- Template Literal In function decl-----------------

let firstName = "Muhammad Irfan";
let lastName= "Ramzan";

function TemplateFunction(firstName, lastName){
    return `return value ${firstName} ${lastName}`;
}
console.log(TemplateFunction(firstName,lastName))

