//// To stop or skip the loop in the middle.

console.log("--- BREAK & CONTINUE ---");

for(let i =1; i <=10; i++){
    if(i===3){
        console.log("Skipping 3 (Continue)");
        continue;// they skip 3 & jumped into 4.
    }
    if(i===6){
        console.log("breaking at 6");
        break; //loops end heree
    }
    console.log("number:", i)
}