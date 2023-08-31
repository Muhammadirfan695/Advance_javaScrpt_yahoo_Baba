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
sum("Irfan Ramzan" ,"BSC",10,20,30)
// sum(20,34)