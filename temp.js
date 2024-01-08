const arr = [5,6,4,6,8,8,4,4,7,2];
let large = -1e9
let large2 = -1e9;

for(let i of arr){
    if(i > large)
        large = i;
    else if(i > large2 && i < large){
        large2 = i;
        console.log("hi");
    }
}

console.log(`Largest : ${large} | 2nd Largest : ${large2}`);