// immediate invocking function iife
(function ans(num1,num2){ // named iffe
    console.log(num1,num2);
})(7,8); // semicolmn for end of exicution

(function ans(num1,num2){
    console.log(num1,num2);
})(7,8);

(()=>{
   console.log("hello all") // unnamed iffe
})()