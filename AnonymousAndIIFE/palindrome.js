let words=["madam","pogo","racecar"];
let ispalin = true;
let checkPalindrome=[];
let Palindrome = function (str) { 
    let j = str.length-1 
    for(let i=0; i<str.length/2; i++){ 
        if(str[i]!=str[j]){ 
            return false; 
        } 
        j--; 
    } 
    return true; 
} 
for(let val of words)
{
    if(Palindrome(val))
    {
        checkPalindrome.push(val);
    }
}
console.log(checkPalindrome,"checkpalindrome");