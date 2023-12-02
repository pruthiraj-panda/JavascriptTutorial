let arr=[1,2,3,4]
// const collectios=arr.map((a)=>a+10)
// console.log(collectios)

//CHANNING OF MAP

// const collection=arr.map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>25)
//     console.log(collection)

// REDUCE FUNCTION
// const summation=arr.reduce(function (total,num){
//     return total+num;
// },10)
// console.log(summation)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const totalprice=shoppingCart.reduce(function (accu,item){
    return accu+item.price;
},0) // intialization mendatioty or it will take garbage value
console.log(totalprice)