// object creation
const obj={
    name:"pruthiraj",
    email:"pruthiraj051@gmail.com",
    password:"pruthiraj@097",
    age:20,
    "full name":'pruthiraj',
    "Degree":"B tech",
     mark : function(){
        return 3+4;
    }
}
console.log([obj['email'],obj['age'],obj['password']])
console.log(obj["full name"])
console.log(obj.mark())

// single ton object

const tinderuser={}
tinderuser.name="Tony"
tinderuser.id="B122085"
console.log(tinderuser)
console.log("\n")
// nexted object
const username={
    email:"pruthiraj@097",
    firstname:{
        lastname:{
            name:"panda"
        }
    }
}
console.log(username)

// merging of object
const obj1={
    1:'a',
    2:'b',
    3:'c'
}
const obj2={
    4:'a',
    5:'b',
    6:'c'
}
// const obj3={obj1,obj2} // object 3 contains object 1 and object 2
// console.log(obj3)
const obj3=Object.assign({},obj1,obj2) // {} object =obj1+obj2
console.log(obj3)

const obj4={...obj1,...obj2} // sprrad object
console.log(obj4)

const user=[   // object array
    {
        id:1,
        email:"pruthi@97"
    }
    ,
    {

    }
    ,
    {

    }
]
console.log(user.length)
// key find
let temp=Object.keys(tinderuser) // key will goes to temp in array
// console.log(temp)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

