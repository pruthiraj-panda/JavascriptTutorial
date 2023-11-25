// function declaration
function myname(){
    console.log("pruthiraj") // function->return type myname is name of function 
}
myname();

// function addition( num1,num2,num3 ){
//     console.log(num1+num2+num3);
// }

// addition("2",3,"6")

// function addition(num1,num2){
//     return num1+num2;
// }
// console.log(addition(5,8))
function usercheak(username){
    if(!username){
        console.log("please enter a valid user name")
        return ;
    }
    return `${username} is just signed up`; 
}
console.log(usercheak("pruthiraj"))

// rest operater
function calculataTotalBill(...num){
    return num;
}
let arr=(calculataTotalBill(100,200,300));
console.log(typeof arr)

// object passing to function
function userDetails(anyobject){
    console.log(`username ${anyobject.name} have total price ${anyobject.price}`)
}
const user={
    name:"pruthiraj",
    price:1000
}
userDetails(user)

// array passing in function

function indexcheak(array){
    return array[1];
}
const ar=[100,200,500]
console.log(indexcheak(ar))
