// for loop

// for(let i=0;i<20;i++){
//     console.log("hello world")
// }
// break

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5) break;
//     console.log(element)
// }
// while loop
  
// let a=0;
// while(a<5){
//     console.log(a);
//     a++;
// }

// for of

let arr=[1,2,3,4]
//let str="pruthi"
// for (const num of str) {
//     console.log(num)
// }

let mp=new Map();
mp.get(3,4);
mp.set(5,6);
mp.set(3,8)
// console.log(mp)
for (const [key,value] of mp) {
    console.log(key+" "+value)
}
// for of on object
let obj={
    'game1':'NFS',
    'game2':'Spriderman'
}
for (const key in obj) {
   console.log(key) // give key value
}

// for each loop
// arr.forEach(function (val){
//     console.log(val)
// })

// PARAMETER COME IN FIREACH LOOP
arr.forEach((val,index,arr)=>{
    console.log(val,index,arr)
})

function temp(data){
    console.log(data);
}
arr.forEach(temp)

let array=[
    {
        languagename:"java",
        languageFile:"java"
    },
    {
        languagename:"javascript",
        languageFile:"js"
    },
    {
        languagename:"python",
        languageFile:"py"
    }
]
array.forEach((element) => {
    for (const key in element) {
        console.log(key)
    }
});