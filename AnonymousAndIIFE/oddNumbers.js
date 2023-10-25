let FindOddNumbers=function(arr){
let findodd = arr;
let result=[];
for(let i in findodd)
{
    if(findodd[i]%2!=0)
    {
         result .push(findodd[i]);
    }
}
console.log(result,"result");
}
let arrays = [1,2,13,22,54,33,7,17];
FindOddNumbers(arrays);