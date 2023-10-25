let arr1=[2,6,0,8,4,12];
let arr2=[1,3,9,5,7,11];

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
 sortedArray(arr1);
 sortedArray(arr2);
console.log(arr1,"arr1");
console.log(arr2,"arr2");
let median=function(arr1,arr2){
if(arr1.length==arr2.length)
{
   let m1= arr1[+arr1.length/2];
   let m2= arr2[+arr2.length/2];
   console.log((m1+m2));
}
}
median(arr1,arr2);
