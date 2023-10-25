let convertCaps = (words)=>
{
    let convertTitle=[];
for(let index in words)
{
    convertTitle.push(words[index].toUpperCase());
}
console.log(convertTitle,"convert title");
}

let str = ["welcome","to","guvi","course","mernstack","batch"];
convertCaps(str);