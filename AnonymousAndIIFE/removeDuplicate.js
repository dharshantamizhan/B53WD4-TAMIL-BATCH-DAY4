let arr=[1,3,5,7,1,2,7];
let result = [];
let sortedArray=function(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
               let temp = arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
            }
        }
    }
    }
    sortedArray(arr);
let removeDuplicateArray=function(arr){
   arr.forEach(element => {
    if(!result.includes(element))
    {
       result.push(element);
    }
   });
}
removeDuplicateArray(arr);
console.log(result,"arr remove");
