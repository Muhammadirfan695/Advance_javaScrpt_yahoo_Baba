/*
// ----------------- ...args Rest operater---------------
// Rest operator ko first pr ya between declare krain gy  arror ay ga
// .......args Rest operator ko hum last pr declare krain gy.....
function sum(name,src, ...args) {
    
    console.log(`hello "${name}" "${src}":`);
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    console.log(sum + " ")
}
//-----------------1st Method  Add new spread Operator--------------------- 
var arr = [10,20,30]
sum("Irfan Ramzan" ,"BSC" , ...arr)
// sum(20,34)

*/
// ----------------- 2nd Method Spread Operator use ----------------

/*
// -------------------3rd Method value push without spread operator ----------

var arr1 = [10, 20, 30, 40]
// ------without spread operator value push krskty hai-----
arr2 = arr1;
arr1.push(50);

console.log(arr2)
*/

/*
// -------------------4rth Method with spread operator  value push ni krsty----------

var arr1 = [10, 20, 30, 40]
// ------without spread operator value push krskty hai-----
arr2 = [...arr1];
arr1.push(50);

console.log(arr2)
*/

/*
// ------------------- 5th Method with spread operator concate array ----------

var arr1 = [10, 20, 30, 40]
var arr2 = [20,30]
// ------with spread operator concate array-----
arr3 = [...arr1 , ...arr2];

console.log(arr3)
*/

/*
// ------------------- 6th push with spread operator concate array ----------
var arr1 = [10, 20, 30, 40]
var arr2 = [20,30]
// ------with spread operator concate array-----
arr3 = [45,...arr1 , ...arr2, 85];

console.log(arr3)
*/