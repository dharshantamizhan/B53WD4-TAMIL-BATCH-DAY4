let numbers = [23,43,12,11,34,53];
let sum=(function(){
    {let result=0;
    for(let index in numbers)
    result+=numbers[index]
return result;}
}(numbers));
console.log(sum,"sum");