// let useremail=" "
// if(useremail){
//     console.log("verified")
// }else{
//     console.log("not varified")
// }

 // falsy vale
 // false,0,-0 bigint 0n,null,undefind,NaN

 // truthi value
 //"0"," ",[],{},function(){}

 const obj={
 }
 if(Object.keys(obj).length===0){ // function convert object to array
    console.log("length is zero")
 }

 // Nullish operater in js

 let val1;
 //val1=null ?? 45 ?? 56
 val1=null??undefined
 console.log(val1)

 //ternary operater
 const price=100;
 (price>80)?console.log("more then 80"):console.log("less then 80")