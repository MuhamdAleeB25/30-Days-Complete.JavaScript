//For handling multiple conditions
const hasaccount = true;
const hasbalance = 600;

//And &&   -- both conditions must be true
if(hasaccount && hasbalance){
    console.log("Welcome : You can Withdraw easily.")
}else{
    console.log("Check the criteria for eligibilty!")
}

//or ||   -- any of one condition will be true it runns
let isGuest = false;
if(hasaccount || isGuest){
    console.log("Welcome to your Digital Bank.")
}


//not ! -- it will alternate the value.
let isunloked = false;
console.log("is it Unlocked" , !isunloked);