const obj={
    name:"pruthiraj",
    workspace:function(){
        console.log(`${this.name} wellcome to website`)
        console.log(this)
    },
}
obj.name="Rahul"
//console.log(obj.workspace())
//console.log(typeof this)
// ******************Arrow function

let ans=(num1,num2)=>{
    console.log(this)
     return num1+num2;
}
 console.log(ans(3,4))
//const add=(num1,num2)=> (num1+num2)
// const add=(num1,num2)=> (num1+num2)
// console.log(add(3,4))
// function fun(){
//     let name="pruthi";
//     console.log(this)
// }
//fun()
const add=(num1,num2)=>({username:"pruthiraj"})
//console.log(typeof add(3,4))
