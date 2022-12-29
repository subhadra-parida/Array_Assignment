// function a(num){
//     fact=1
//     while (num>0){
//         fact=fact*num
//         a=a=1
//     console.log(fact)
//     }
// }

// a(8)


// function factorial(n){
//     let fact = 1;
//     if (n == 0 || n == 1){
//       return fact;
//     }else{
//       for(var i = n; i >= 1; i--){
//         fact = fact * i;
//       }
//       return fact;
//     }  
//   }
//   let n = 5;
//   fact = factorial(n)
//   console.log( fact);


// recursion
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));