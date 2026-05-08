// This keyword

// The 'this' keyword references the current object. 
// This is a bit tricky, watch carefully!

console.log("------------This function usedd----------");
const person = {
    name: "Alice",
    greet : function(){
        console.log(`ASSALAM O ALAIKUM, I AM ${this.name}`);
    }
}

person.greet(); // Output: ASSALAM O ALAIKUM, I AM Alice