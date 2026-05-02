//Loop within a loop (it happens to create patterns).

console.log("--- NESTED LOOPS ---");

for(let m = 1; m<=5; m++){
    console.log("outer loop:", m);
    for(let k =1; k<=4; k++){
        console.log("Innner Loop", k);
    }
}